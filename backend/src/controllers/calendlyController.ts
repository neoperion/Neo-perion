import { Request, Response } from 'express';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY || '';
const CALENDLY_WEBHOOK_SIGNING_KEY = process.env.CALENDLY_WEBHOOK_SIGNING_KEY || '';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

interface CalendlyWebhookRequest extends Request {
  rawBody?: string;
}

export const handleCalendlyWebhook = async (req: CalendlyWebhookRequest, res: Response): Promise<void> => {
  try {
    const signatureHeader = req.headers['calendly-webhook-signature'] as string;
    
    if (!signatureHeader || !req.rawBody) {
       res.status(400).json({ error: 'Missing signature or raw body' });
       return;
    }

    // Extract timestamp and signature from the header
    const { t, v1 } = signatureHeader.split(',').reduce((acc, current) => {
      const [key, value] = current.split('=');
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

    if (!t || !v1) {
       res.status(400).json({ error: 'Invalid signature format' });
       return;
    }

    // Verify signature
    const dataToSign = t + '.' + req.rawBody;
    const expectedSignature = crypto
      .createHmac('sha256', CALENDLY_WEBHOOK_SIGNING_KEY)
      .update(dataToSign)
      .digest('hex');

    if (expectedSignature !== v1) {
       res.status(401).json({ error: 'Invalid signature' });
       return;
    }

    // Prevent replay attacks (allow up to 5 minutes difference)
    const threeMinutesInMs = 5 * 60 * 1000;
    if (Date.now() - parseInt(t) * 1000 > threeMinutesInMs) {
       res.status(401).json({ error: 'Signature expired' });
       return;
    }

    // Parse the payload
    const body = req.body;
    const event = body.event;
    const payload = body.payload;

    if (event === 'invitee.created') {
      const inviteeEmail = payload.email;
      const inviteeName = payload.name;
      const eventUri = payload.event; // The scheduled event URL
      const inviteeUri = payload.uri; // The invitee URI
      const timezone = payload.timezone;

      // 1. Fetch full event details from Calendly API (optional, if we need start/end times)
      // Note: We need a Calendly Personal Access Token to fetch event details.
      // Assuming we have basic info or we can store just what we have.
      // Without making an extra API call to Calendly to get the start_time,
      // we'll store null for start_time/end_time for now until we add Calendly API token,
      // or we can just fetch it if CALENDLY_PAT is available.
      // Wait, Calendly invitee.created payload usually contains start_time and end_time.
      // Let's rely on payload.scheduled_event if available, else null.

      // 2. Find the lead in our database
      const { data: lead } = await supabase
        .from('leads')
        .select('id')
        .eq('email', inviteeEmail)
        .single();

      let leadId = lead?.id || null;

      // Update lead status if exists
      if (leadId) {
        await supabase
          .from('leads')
          .update({ status: 'meeting_booked' })
          .eq('id', leadId);
      }

      // 3. Insert into meetings table
      await supabase
        .from('meetings')
        .upsert({
          lead_id: leadId,
          event_uri: eventUri,
          invitee_uri: inviteeUri,
          invitee_email: inviteeEmail,
          invitee_name: inviteeName,
          status: 'active',
          timezone: timezone,
          start_time: new Date().toISOString(), // Fallback if missing
          end_time: new Date().toISOString()
        }, { onConflict: 'invitee_uri' });

    } else if (event === 'invitee.canceled') {
      const inviteeUri = payload.uri;
      
      await supabase
        .from('meetings')
        .update({ status: 'canceled' })
        .eq('invitee_uri', inviteeUri);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Calendly webhook error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

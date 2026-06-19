// Supabase Edge Function: send-lead-email
// Deploy: supabase functions deploy send-lead-email

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!;
const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL') ?? 'admin@neoperion.com';
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

interface Lead { id: string; name: string; email: string; source: string; message?: string; }
interface Payload { lead: Lead; }

Deno.serve(async (req: Request) => {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });
  const { lead }: Payload = await req.json();
  if (!lead?.email) return new Response(JSON.stringify({ error: 'lead.email required' }), { status: 400 });

  const adminHtml = `<h2>New lead: ${esc(lead.name)}</h2><p><strong>Email:</strong> ${esc(lead.email)}</p><p><strong>Source:</strong> ${esc(lead.source)}</p>${lead.message ? `<p><strong>Message:</strong><br>${esc(lead.message)}</p>` : ''}`;
  const userHtml = `<h2>Hi ${esc(lead.name)},</h2><p>Thanks for reaching out. We will respond within 24 hours.</p>`;

  const adminRes = await sendEmail({ to: ADMIN_EMAIL, subject: `New lead — ${lead.name}`, html: adminHtml, replyTo: lead.email });
  const userRes = await sendEmail({ to: lead.email, subject: 'Thanks for contacting Neo Perion Solutions', html: userHtml });

  const admin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
  await admin.from('leads').update({ status: 'contacted' }).eq('id', lead.id);

  return new Response(JSON.stringify({ admin: adminRes, user: userRes }), {
    headers: { 'Content-Type': 'application/json' },
    status: adminRes.error && userRes.error ? 500 : 200,
  });
});

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}

async function sendEmail(opts: { to: string; subject: string; html: string; replyTo?: string }): Promise<{ id?: string; error?: string }> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: 'Neo Perion Solutions <noreply@neoperion.com>', to: [opts.to], subject: opts.subject, html: opts.html, reply_to: opts.replyTo }),
  });
  if (!res.ok) return { error: `Resend ${res.status}: ${await res.text()}` };
  return (await res.json()) as { id?: string };
}

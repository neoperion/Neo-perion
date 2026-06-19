// @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing Supabase configuration");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 1. Parse incoming lead
    const payload = await req.json();
    const { name, email, phone, company, industry, budget, project_type, message, source = 'website' } = payload;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Name, email, and message are required" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    // 2. Insert into Supabase 'leads' table
    const { data: leadData, error: insertError } = await supabase
      .from('leads')
      .insert([
        {
          name,
          email,
          phone,
          company,
          industry,
          budget,
          project_type,
          message,
          source,
          status: 'new'
        }
      ])
      .select()
      .single();

    if (insertError) {
      throw new Error(`Error inserting lead: ${insertError.message}`);
    }

    // 3. Optionally call qualify-lead Edge Function (fire and forget or wait depending on requirements)
    // For now we assume we just return success, and qualification can be done via database trigger or async invocation
    // Alternatively, we invoke it directly here.
    const { error: qualifyError } = await supabase.functions.invoke('qualify-lead', {
      body: { leadId: leadData.id, message, industry, budget }
    });
    
    if(qualifyError) {
      console.warn("Qualify lead failed: ", qualifyError);
    }

    // 4. Send email notification via Resend API
    const resendApiKey = Deno.env.get('RESEND_API_KEY') || 're_6CGXVmAz_8TsnZLPHe6FU5J9tjKkVxU1B';
    
    const emailHtml = `
      <h2>New Lead Received: ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Project Type:</strong> ${project_type || 'N/A'}</p>
      <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
      <br/>
      <h3>Message:</h3>
      <p>${message}</p>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'vasantharaj8133@gmail.com',
        subject: `New Lead from ${name} - Neo Perion`,
        html: emailHtml
      })
    });

    if (!resendResponse.ok) {
      console.warn("Failed to send Resend email:", await resendResponse.text());
    }

    return new Response(JSON.stringify({ success: true, lead: leadData }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error: any) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});

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
    const anthropicKey = Deno.env.get('ANTHROPIC_API_KEY');

    if (!supabaseUrl || !supabaseServiceKey || !anthropicKey) {
      throw new Error("Missing configuration for AI qualification");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { leadId, message, industry, budget } = await req.json();

    if (!leadId || !message) {
      return new Response(JSON.stringify({ error: "leadId and message are required" }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    // Call Anthropic API
    const prompt = `You are a sales qualification AI for Neo Perion Solutions, an enterprise AI & product engineering company.
    Evaluate this lead message and details:
    Industry: ${industry || 'Unknown'}
    Budget: ${budget || 'Unknown'}
    Message: "${message}"
    
    Return ONLY a JSON object (no markdown, no extra text) with:
    {
      "category": "startup" | "education" | "smb" | "healthcare" | "enterprise" | "other",
      "score": number between 0 and 100,
      "priority": "high" | "medium" | "low",
      "reason": "short 1 sentence reason"
    }`;

    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': anthropicKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 300,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!anthropicResponse.ok) {
      throw new Error(`Anthropic API error: ${await anthropicResponse.text()}`);
    }

    const aiData = await anthropicResponse.json();
    let result;
    try {
      const text = aiData.content[0].text;
      result = JSON.parse(text);
    } catch (e) {
      console.error("Failed to parse Anthropic JSON:", aiData.content[0].text);
      result = { category: 'other', score: 50, priority: 'medium', reason: 'Failed to parse AI output' };
    }

    // Update the lead in Supabase
    const { error: updateError } = await supabase
      .from('leads')
      .update({
        category: result.category,
        lead_score: result.score,
        // We could store priority/reason in a notes or metadata field
      })
      .eq('id', leadId);

    if (updateError) {
      throw new Error(`Failed to update lead: ${updateError.message}`);
    }

    return new Response(JSON.stringify({ success: true, qualification: result }), {
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

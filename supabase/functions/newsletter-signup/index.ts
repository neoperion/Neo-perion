// Supabase Edge Function: newsletter-signup
// Deploy: supabase functions deploy newsletter-signup

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!;
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

interface Payload { email: string; name?: string; source?: string; }

Deno.serve(async (req: Request) => {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });
  const { email, name, source }: Payload = await req.json();
  if (!email) return new Response(JSON.stringify({ error: 'email required' }), { status: 400 });

  const admin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
  const { error: dbError } = await admin.from('newsletter_subscribers').upsert(
    { email, name, source: source ?? 'website', active: true },
    { onConflict: 'email' },
  );
  if (dbError) return new Response(JSON.stringify({ error: dbError.message }), { status: 500 });

  const emailRes = await sendEmail({
    to: email,
    subject: 'Welcome to the Neo Perion newsletter',
    html: `<h2>Welcome${name ? `, ${name}` : ''}!</h2><p>You will receive occasional updates on AI engineering, SaaS insights, and product launches.</p>`,
  });

  return new Response(JSON.stringify({ ok: true, welcome: emailRes }), {
    headers: { 'Content-Type': 'application/json' },
  });
});

async function sendEmail(opts: { to: string; subject: string; html: string }): Promise<{ id?: string; error?: string }> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: 'Neo Perion Solutions <newsletter@neoperion.com>', to: [opts.to], subject: opts.subject, html: opts.html }),
  });
  if (!res.ok) return { error: `Resend ${res.status}: ${await res.text()}` };
  return (await res.json()) as { id?: string };
}

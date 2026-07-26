// Server-side only — call from Supabase Edge Functions, never the browser.

export interface SendEmailInput {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
  from?: string;
}

export interface ResendResponse {
  id?: string;
  error?: string;
}

export async function sendEmail(input: SendEmailInput): Promise<ResendResponse> {
  const apiKey = typeof process !== 'undefined' ? process.env?.RESEND_API_KEY : undefined;
  if (!apiKey) return { error: 'RESEND_API_KEY not configured' };

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: input.from ?? 'AINCURU Solutions <noreply@neoperion.com>',
      to: Array.isArray(input.to) ? input.to : [input.to],
      subject: input.subject,
      html: input.html,
      reply_to: input.replyTo,
    }),
  });

  if (!res.ok) return { error: `Resend ${res.status}: ${await res.text()}` };
  const data = (await res.json()) as { id?: string };
  return { id: data.id };
}

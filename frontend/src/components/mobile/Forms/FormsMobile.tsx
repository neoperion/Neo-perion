import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ConversationStepId = 'name' | 'email' | 'company' | 'project' | 'message';
export interface ConversationField { id: ConversationStepId; question: string; placeholder: string; type?: 'text' | 'email' | 'textarea'; required?: boolean; options?: string[] }
export interface ConversationFormProps { intro?: string; fields: ConversationField[]; ctaLabel?: string; onSubmit: (data: Record<string, string>) => Promise<void> | void }

export function ConversationForm({ intro = "Hi! Let's get to know you.", fields, ctaLabel = 'Send', onSubmit }: ConversationFormProps) {
  const [step, setStep] = useState(0); const [data, setData] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false); const [submitting, setSubmitting] = useState(false);
  const current = fields[step]; const value = data[current.id] ?? '';
  const setValue = (v: string) => setData((d) => ({ ...d, [current.id]: v }));
  const canAdvance = current.required === false ? true : value.trim().length > 1;
  const next = () => { if (step < fields.length - 1) setStep((s) => s + 1); else submit(); };
  const submit = async () => { setSubmitting(true); try { await onSubmit(data); setDone(true); } finally { setSubmitting(false); } };

  return (
    <div className="relative w-full px-mobile-base py-mobile-3xl">
      <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">Contact</p>
      <h2 className="text-display-md text-white tracking-tight mb-2">Tell us about you.</h2>
      <p className="text-sm text-white/60 mb-7">{intro}</p>
      <div className="rounded-3xl border border-white/[0.10] bg-white/[0.03] backdrop-blur-glass-1 p-5 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {done ? (
            <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 320, damping: 32 }} className="text-center py-6">
              <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-neo-blue to-neo-highlight text-white flex items-center justify-center mb-4 shadow-[0_0_24px_rgba(247,126,13,0.5)]"><Check size={28} /></div>
              <h3 className="text-xl font-bold text-white mb-2">Message received.</h3><p className="text-sm text-white/70">We'll respond within 24 hours.</p>
            </motion.div>
          ) : (
            <motion.div key={current.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neo-highlight mb-2">Step {step + 1} of {fields.length}</p>
              <p className="text-[18px] font-bold text-white mb-4">{current.question}</p>
              {current.options ? (
                <div className="flex flex-wrap gap-2">{current.options.map((o) => (
                  <button key={o} type="button" onClick={() => { setValue(o); setTimeout(next, 250); }}
                    className={cn('h-11 px-4 rounded-full text-[13px] font-semibold transition-all', value === o ? 'bg-gradient-to-br from-neo-blue to-neo-highlight text-white' : 'bg-white/[0.05] border border-white/[0.10] text-white/85')}>{o}</button>
                ))}</div>
              ) : current.type === 'textarea' ? (
                <textarea value={value} onChange={(e) => setValue(e.target.value)} placeholder={current.placeholder} rows={4} autoFocus
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/[0.10] backdrop-blur-glass-1 text-white text-[15px] placeholder:text-white/40 focus:outline-none focus:border-neo-highlight/50 resize-none transition-colors" />
              ) : (
                <input type={current.type ?? 'text'} value={value} onChange={(e) => setValue(e.target.value)} placeholder={current.placeholder} autoFocus
                  onKeyDown={(e) => { if (e.key === 'Enter' && canAdvance) next(); }}
                  className="w-full h-14 px-4 rounded-2xl bg-white/[0.05] border border-white/[0.10] backdrop-blur-glass-1 text-white text-[15px] placeholder:text-white/40 focus:outline-none focus:border-neo-highlight/50 transition-colors" />
              )}
              <div className="mt-5 flex items-center gap-2">
                {step > 0 && <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} className="h-12 px-4 rounded-2xl bg-white/[0.05] border border-white/[0.10] text-white font-semibold text-sm">Back</button>}
                <button type="button" onClick={next} disabled={!canAdvance || submitting}
                  className="flex-1 h-12 rounded-2xl bg-gradient-to-br from-neo-deep via-neo-blue to-neo-highlight text-white font-bold text-sm disabled:opacity-40 active:scale-[0.98] flex items-center justify-center gap-2">
                  {step === fields.length - 1 ? (submitting ? 'Sending...' : ctaLabel) : 'Continue'} {step < fields.length - 1 && <ArrowRight size={14} />}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-5 flex gap-1.5">{fields.map((f, i) => (<div key={f.id} className={cn('h-1 flex-1 rounded-full', i <= step ? 'bg-gradient-to-r from-neo-blue to-neo-highlight' : 'bg-white/[0.10]')} />))}</div>
    </div>
  );
}

export function NewsletterGlass({ onSubscribe }: { onSubscribe: (email: string) => Promise<void> | void }) {
  const [email, setEmail] = useState(''); const [done, setDone] = useState(false); const [submitting, setSubmitting] = useState(false);
  const submit = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitting(true); try { await onSubscribe(email); setDone(true); } finally { setSubmitting(false); }
  };
  return (
    <div className="relative w-full px-mobile-base py-mobile-3xl">
      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.14] bg-gradient-to-br from-[rgba(15,23,42,0.78)] to-[rgba(2,4,10,0.78)] backdrop-blur-glass-2 p-6">
        <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.20] to-transparent" />
        <span aria-hidden="true" className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full ai-orb-glow opacity-60" />
        <div className="relative">
          <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-full bg-neo-highlight/15 border border-neo-highlight/30"><Sparkles size={11} className="text-neo-highlight" /><span className="text-[10px] font-bold uppercase tracking-[0.15em] text-neo-highlight">Newsletter</span></div>
          <h3 className="text-[22px] font-bold text-white tracking-tight mb-2">AI insights, monthly.</h3>
          <p className="text-sm text-white/70 mb-5">No spam. Just signal.</p>
          {done ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 text-neo-highlight font-semibold"><Check size={18} /> Subscribed!</motion.div>
          ) : (
            <><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com"
              className="w-full h-12 px-4 rounded-2xl bg-white/[0.05] border border-white/[0.10] backdrop-blur-glass-1 text-white text-[14px] placeholder:text-white/40 focus:outline-none focus:border-neo-highlight/50 mb-2" />
              <button type="button" onClick={submit} disabled={submitting}
                className="w-full h-12 rounded-2xl bg-gradient-to-br from-neo-deep via-neo-blue to-neo-highlight text-white font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-40 active:scale-[0.98]">{submitting ? 'Subscribing...' : 'Subscribe'} <ArrowRight size={14} /></button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

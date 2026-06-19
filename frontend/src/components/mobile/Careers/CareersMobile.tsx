import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, ArrowRight, ChevronDown, X, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface JobListingData { id: string; title: string; department: string; type: string; location: string; description: string; requirements: string[]; perks?: string[] }

export function JobExpandCard({ job, onApply }: { job: JobListingData; onApply: (job: JobListingData) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn('rounded-3xl border border-white/[0.10] bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-glass-1 overflow-hidden transition-all', open && 'border-neo-highlight/40')}>
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls={`job-${job.id}`} className="w-full p-5 text-left active:bg-white/[0.04] transition-colors">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neo-highlight mb-1">{job.department}</p>
            <h3 className="text-[17px] font-bold text-white leading-tight">{job.title}</h3>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-white/60">
              <span className="inline-flex items-center gap-1"><Briefcase size={11} />{job.type}</span>
              <span className="inline-flex items-center gap-1"><MapPin size={11} />{job.location}</span>
            </div>
          </div>
          <span className={cn('shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all', open ? 'bg-neo-highlight text-[#030B1D]' : 'bg-white/[0.06] text-white/70')}>
            <ChevronDown size={14} className={cn('transition-transform', open && 'rotate-180')} />
          </span>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div id={`job-${job.id}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
            <div className="px-5 pb-5 border-t border-white/[0.06] pt-4">
              <p className="text-[13px] text-white/75 leading-relaxed mb-4">{job.description}</p>
              {job.requirements.length > 0 && (
                <div className="mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55 mb-2">Requirements</p>
                  <ul className="space-y-1.5">{job.requirements.map((r) => (<li key={r} className="flex items-start gap-2 text-[13px] text-white/80"><span className="shrink-0 mt-1.5 h-1 w-1 rounded-full bg-neo-highlight" />{r}</li>))}</ul>
                </div>
              )}
              {job.perks && job.perks.length > 0 && (
                <div className="mb-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55 mb-2">Perks</p>
                  <div className="flex flex-wrap gap-1.5">{job.perks.map((p) => (<span key={p} className="h-7 px-2.5 rounded-full bg-white/[0.05] border border-white/[0.10] text-[11px] text-white/85 flex items-center">{p}</span>))}</div>
                </div>
              )}
              <button type="button" onClick={() => onApply(job)}
                className="group w-full h-12 rounded-2xl bg-gradient-to-br from-neo-deep via-neo-blue to-neo-highlight text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_8px_24px_-4px_rgba(37,99,255,0.4)] border border-white/20 active:scale-[0.98]">
                Apply Now <ArrowRight size={14} className="group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ApplicationSheet({ open, job, onClose, onSubmit }: { open: boolean; job: JobListingData | null; onClose: () => void; onSubmit: (data: { name: string; email: string; phone?: string; cover?: string }) => void }) {
  const [step, setStep] = useState(0); const [name, setName] = useState(''); const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); const [cover, setCover] = useState(''); const [submitting, setSubmitting] = useState(false); const [done, setDone] = useState(false);
  const reset = () => { setStep(0); setName(''); setEmail(''); setPhone(''); setCover(''); setDone(false); setSubmitting(false); };
  const handleClose = () => { onClose(); setTimeout(reset, 250); };
  const submit = async () => { setSubmitting(true); try { onSubmit({ name, email, phone, cover }); setDone(true); } finally { setSubmitting(false); } };

  return (
    <AnimatePresence>
      {open && job && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose} className="fixed inset-0 z-mobile-overlay bg-black/60 backdrop-blur-glass-2" />
          <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', stiffness: 320, damping: 32, mass: 0.9 }}
            role="dialog" aria-modal="true" aria-label={`Apply for ${job.title}`}
            className="fixed bottom-0 left-0 right-0 z-mobile-sheet rounded-t-[28px] bg-[rgba(2,4,10,0.92)] backdrop-blur-glass-3 border-t border-white/[0.14] max-h-[92vh] overflow-hidden pb-safe"
          >
            <div className="flex justify-center pt-3"><span className="h-1 w-10 rounded-full bg-white/30" /></div>
            <div className="px-5 pt-3 pb-2 flex items-center justify-between">
              <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neo-highlight">Apply</p><h2 className="text-lg font-bold text-white">{job.title}</h2></div>
              <button onClick={handleClose} className="h-9 w-9 rounded-full bg-white/[0.06] text-white/70 flex items-center justify-center"><X size={16} /></button>
            </div>
            <div className="px-5">
              <div className="flex gap-1.5">{[0, 1, 2, 3].map((i) => (<div key={i} className={cn('h-1 flex-1 rounded-full transition-colors', i <= step ? 'bg-gradient-to-r from-neo-blue to-neo-highlight' : 'bg-white/[0.10]')} />))}</div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/50 mt-2">Step {step + 1} of 4</p>
            </div>
            <div className="overflow-y-auto max-h-[60vh] px-5 py-5">
              {done ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-neo-blue to-neo-highlight text-white flex items-center justify-center mb-4 shadow-[0_0_24px_rgba(0,229,255,0.5)]"><Check size={28} /></div>
                  <h3 className="text-xl font-bold text-white mb-2">Application sent</h3><p className="text-sm text-white/70">We typically respond within 48 hours.</p>
                </motion.div>
              ) : (
                <>
                  {step === 0 && <Field label="What's your name?" value={name} onChange={setName} placeholder="Jane Doe" autoFocus />}
                  {step === 1 && <Field label="Your email" value={email} onChange={setEmail} placeholder="you@example.com" type="email" autoFocus />}
                  {step === 2 && <Field label="Phone (optional)" value={phone} onChange={setPhone} placeholder="+91 ..." type="tel" autoFocus />}
                  {step === 3 && <TextareaField label="Anything to share?" value={cover} onChange={setCover} placeholder="Why this role, what excites you..." autoFocus />}
                </>
              )}
            </div>
            {!done && (
              <div className="px-5 pb-2 flex items-center gap-2">
                {step > 0 && <button onClick={() => setStep((s) => Math.max(0, s - 1))} className="h-12 px-4 rounded-2xl bg-white/[0.05] border border-white/[0.10] text-white font-semibold text-sm">Back</button>}
                {step < 3 ? (
                  <button onClick={() => { if (step < 3 && (step === 0 ? name.length > 1 : step === 1 ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) : true)) setStep((s) => s + 1); }}
                    className="flex-1 h-12 rounded-2xl bg-gradient-to-br from-neo-deep via-neo-blue to-neo-highlight text-white font-bold text-sm disabled:opacity-40 active:scale-[0.98]">Continue</button>
                ) : (
                  <button onClick={submit} disabled={submitting}
                    className="flex-1 h-12 rounded-2xl bg-gradient-to-br from-neo-deep via-neo-blue to-neo-highlight text-white font-bold text-sm disabled:opacity-40 active:scale-[0.98]">{submitting ? 'Sending...' : 'Submit Application'}</button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text', autoFocus }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; autoFocus?: boolean }) {
  return (<div><label className="block text-[15px] font-semibold text-white mb-2">{label}</label>
    <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} autoFocus={autoFocus}
      className="w-full h-14 px-4 rounded-2xl bg-white/[0.05] border border-white/[0.10] backdrop-blur-glass-1 text-white text-[15px] placeholder:text-white/40 focus:outline-none focus:border-neo-highlight/50 transition-colors" />
  </div>);
}
function TextareaField({ label, value, onChange, placeholder, autoFocus }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; autoFocus?: boolean }) {
  return (<div><label className="block text-[15px] font-semibold text-white mb-2">{label}</label>
    <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} autoFocus={autoFocus} rows={5}
      className="w-full px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/[0.10] backdrop-blur-glass-1 text-white text-[15px] placeholder:text-white/40 focus:outline-none focus:border-neo-highlight/50 resize-none transition-colors" />
  </div>);
}

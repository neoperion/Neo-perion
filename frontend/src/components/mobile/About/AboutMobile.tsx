import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Founder { name: string; role: string; bio: string; initials: string; accent?: 'cyan' | 'purple' | 'gradient' }

export function FoundersCards({ founders }: { founders: Founder[] }) {
  const [index, setIndex] = useState(0);
  if (!founders.length) return null;
  const c = founders[index];
  const a = { cyan: 'from-neo-blue/20 to-neo-highlight/5 border-neo-highlight/30', purple: 'from-purple-500/20 to-neo-blue/5 border-purple-400/30', gradient: 'from-neo-blue/20 via-purple-500/10 to-amber-500/20 border-neo-highlight/30' }[c.accent ?? 'cyan'];
  return (
    <section className="relative w-full py-mobile-3xl px-mobile-base" aria-labelledby="fc-heading">
      <div className="mb-6"><p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">The People</p><h2 id="fc-heading" className="text-display-md text-white tracking-tight">Founders & Engineers.</h2></div>
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={c.name} initial={{ opacity: 0, x: 40, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -40, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 500, damping: 38 }} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.4}
            onDragEnd={(_, info) => { if (info.offset.x < -60) setIndex((i) => (i + 1) % founders.length); else if (info.offset.x > 60) setIndex((i) => (i - 1 + founders.length) % founders.length); }}
            className={cn('relative rounded-3xl border bg-gradient-to-br backdrop-blur-glass-1 p-6 overflow-hidden touch-pan-y', a)}
          >
            <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 shrink-0 rounded-2xl bg-gradient-to-br from-neo-blue to-neo-highlight text-white flex items-center justify-center text-xl font-bold shadow-[0_4px_16px_rgba(247,126,13,0.4)]">{c.initials}</div>
              <div className="flex-1 min-w-0"><h3 className="text-[18px] font-bold text-white">{c.name}</h3><p className="text-[12px] text-neo-highlight font-semibold uppercase tracking-[0.1em] mt-0.5">{c.role}</p></div>
            </div>
            <p className="mt-4 text-[14px] text-white/75 leading-relaxed">{c.bio}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <button type="button" aria-label="Previous" onClick={() => setIndex((i) => (i - 1 + founders.length) % founders.length)}
          className="h-10 w-10 rounded-full bg-white/[0.06] border border-white/[0.10] flex items-center justify-center text-white active:scale-95"><ChevronLeft size={18} /></button>
        <div className="flex gap-1.5">{founders.map((f, i) => (<span key={f.name} className={cn('h-1.5 rounded-full transition-all', i === index ? 'w-6 bg-neo-highlight' : 'w-1.5 bg-white/20')} />))}</div>
        <button type="button" aria-label="Next" onClick={() => setIndex((i) => (i + 1) % founders.length)}
          className="h-10 w-10 rounded-full bg-white/[0.06] border border-white/[0.10] flex items-center justify-center text-white active:scale-95"><ChevronRight size={18} /></button>
      </div>
    </section>
  );
}

export function MissionVisionMobile({ mission, vision, manifesto }: { mission: string; vision: string; manifesto?: string }) {
  return (
    <section className="relative w-full py-mobile-3xl px-mobile-base" aria-labelledby="mv-heading">
      <div className="mb-6"><p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">Why We Exist</p><h2 id="mv-heading" className="text-display-md text-white tracking-tight">Mission & Vision.</h2></div>
      <div className="space-y-3">
        <CardBlock label="MISSION" text={mission} accent="cyan" />
        <CardBlock label="VISION" text={vision} accent="purple" />
        {manifesto && <CardBlock label="MANIFESTO" text={manifesto} accent="gradient" />}
      </div>
    </section>
  );
}
function CardBlock({ label, text, accent }: { label: string; text: string; accent: 'cyan' | 'purple' | 'gradient' }) {
  const a = { cyan: 'from-neo-blue/15 to-neo-highlight/5 border-neo-highlight/30', purple: 'from-purple-500/15 to-neo-blue/5 border-purple-400/30', gradient: 'from-neo-blue/15 via-purple-500/10 to-amber-500/15 border-neo-highlight/30' }[accent];
  return (<motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ type: 'spring', stiffness: 320, damping: 32, mass: 0.9 }}
    className={cn('relative rounded-3xl border bg-gradient-to-br backdrop-blur-glass-1 p-5 overflow-hidden', a)}><Quote size={24} className="text-neo-highlight/50 mb-2" /><p className="text-[10px] font-bold tracking-[0.2em] uppercase text-neo-highlight mb-2">{label}</p><p className="text-[15px] text-white leading-relaxed">{text}</p></motion.div>);
}

export interface TimelineEntry { year: string; title: string; description: string }
export function CompanyTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <section className="relative w-full py-mobile-3xl px-mobile-base" aria-labelledby="tl-heading">
      <div className="mb-6"><p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">Our Story</p><h2 id="tl-heading" className="text-display-md text-white tracking-tight">Milestones.</h2></div>
      <ol className="relative pl-7 space-y-5">
        <motion.span aria-hidden="true" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: '-100px' }} style={{ transformOrigin: 'top' }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-[10px] top-1 bottom-1 w-px bg-gradient-to-b from-neo-blue via-neo-highlight to-purple-500/40" />
        {entries.map((e, i) => (
          <motion.li key={e.year} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.08, type: 'spring', stiffness: 320, damping: 32, mass: 0.9 }} className="relative">
            <span className="absolute -left-7 top-0 h-5 w-5 rounded-full bg-gradient-to-br from-neo-blue to-neo-highlight shadow-[0_0_12px_rgba(247,126,13,0.4)] border-2 border-[#030B1D]" />
            <div className="ml-3"><p className="text-[10px] font-bold tracking-[0.2em] uppercase text-neo-highlight mb-1">{e.year}</p><h3 className="text-[16px] font-bold text-white">{e.title}</h3><p className="text-[13px] text-white/65 mt-1 leading-relaxed">{e.description}</p></div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

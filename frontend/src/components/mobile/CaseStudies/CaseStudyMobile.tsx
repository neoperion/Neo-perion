import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CaseStudyCardData { slug: string; title: string; clientName: string; industry: string; outcome: string; coverImage?: string; techStack: string[] }

export function CaseStudyCard({ study }: { study: CaseStudyCardData }) {
  return (
    <Link to={`/case-studies/${study.slug}`} className="group relative block rounded-3xl border border-white/[0.10] bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-glass-1 overflow-hidden active:scale-[0.99] transition-transform">
      {study.coverImage && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <img src={study.coverImage} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#030B1D] via-transparent to-transparent" />
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[rgba(15,23,42,0.78)] backdrop-blur-glass-2 border border-white/[0.18] text-[10px] font-bold uppercase tracking-[0.12em] text-white">{study.industry}</span>
        </div>
      )}
      <div className="p-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neo-highlight mb-1">{study.clientName}</p>
        <h3 className="text-[16px] font-bold text-white leading-tight group-hover:text-neo-highlight transition-colors">{study.title}</h3>
        <p className="text-[12px] text-white/70 mt-2 line-clamp-2 leading-relaxed">{study.outcome}</p>
        {study.techStack.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {study.techStack.slice(0, 3).map((t) => (<span key={t} className="h-6 px-2 rounded-full bg-white/[0.05] border border-white/[0.10] text-[10px] font-medium text-white/75">{t}</span>))}
            {study.techStack.length > 3 && <span className="text-[10px] text-white/50 self-center">+{study.techStack.length - 3}</span>}
          </div>
        )}
      </div>
    </Link>
  );
}

export interface CaseStudyStoryProps { eyebrow: string; client: string; title: string; outcome: string; problem: string; challenge: string; solution: string; results: string[]; metrics?: { label: string; value: string; delta?: string }[]; heroImage?: string; techStack?: string[] }

export function CaseStudyStory({ eyebrow, client, title, outcome, problem, challenge, solution, results, metrics, heroImage, techStack }: CaseStudyStoryProps) {
  const sections = [{ id: 'problem', label: 'Problem', body: problem }, { id: 'challenge', label: 'Challenge', body: challenge }, { id: 'solution', label: 'Solution', body: solution }];
  const [section, setSection] = useState(0);
  return (
    <article className="relative w-full pb-mobile-4xl">
      <header className="px-mobile-base pt-safe-or-4 pb-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neo-highlight mb-2">{eyebrow}</p>
        <h1 className="text-display-lg text-white tracking-tight leading-tight">{title}</h1>
        <p className="mt-3 text-base text-white/70 leading-relaxed">{outcome}</p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/50 font-semibold">{client}</p>
      </header>
      {heroImage && <div className="relative aspect-[16/9] mx-mobile-base rounded-3xl overflow-hidden border border-white/[0.10] mb-7"><img src={heroImage} alt="" className="w-full h-full object-cover" /></div>}
      {metrics && metrics.length > 0 && (
        <div className="px-mobile-base mb-7">
          <div className="grid grid-cols-3 gap-2">
            {metrics.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, type: 'spring', stiffness: 320, damping: 32 }}
                className="relative rounded-2xl border border-white/[0.10] bg-white/[0.04] backdrop-blur-glass-1 p-3 text-center overflow-hidden">
                <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />
                <p className="text-[20px] font-bold bg-gradient-to-br from-white to-neo-light bg-clip-text text-transparent">{m.value}</p>
                <p className="text-[10px] uppercase tracking-[0.12em] text-white/55 mt-1">{m.label}</p>
                {m.delta && <p className="text-[10px] text-neo-highlight mt-0.5 inline-flex items-center gap-1"><TrendingUp size={9} />{m.delta}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      )}
      <div className="px-mobile-base mb-5">
        <div className="flex gap-2 p-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-glass-1">
          {sections.map((s, i) => (
            <button key={s.id} type="button" onClick={() => setSection(i)}
              className={cn('flex-1 h-9 rounded-full text-[12px] font-semibold transition-all', i === section ? 'bg-gradient-to-br from-neo-blue to-neo-highlight text-white' : 'text-white/65')}>{s.label}</button>
          ))}
        </div>
      </div>
      <div className="px-mobile-base">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={sections[section].id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}
            className="rounded-3xl border border-white/[0.10] bg-white/[0.04] backdrop-blur-glass-1 p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neo-highlight mb-2">{sections[section].label}</p>
            <p className="text-[15px] text-white leading-[1.75]">{sections[section].body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      {results.length > 0 && (
        <section className="px-mobile-base mt-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neo-highlight mb-3">Results</p>
          <ul className="space-y-2">{results.map((r, i) => (<li key={i} className="flex items-start gap-3 text-[14px] text-white/85 leading-relaxed"><span className="shrink-0 mt-1 h-5 w-5 rounded-full bg-neo-highlight/15 text-neo-highlight flex items-center justify-center text-[10px] font-bold">✓</span><span>{r}</span></li>))}</ul>
        </section>
      )}
      {techStack && techStack.length > 0 && (
        <section className="px-mobile-base mt-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neo-highlight mb-3">Tech</p>
          <div className="flex flex-wrap gap-2">{techStack.map((t) => (<span key={t} className="h-8 px-3 rounded-full bg-white/[0.05] border border-white/[0.10] text-[11px] font-medium text-white/85 flex items-center">{t}</span>))}</div>
        </section>
      )}
      <div className="px-mobile-base mt-9"><Link to="/company/case-studies" className="w-full h-12 rounded-2xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-glass-1 text-white font-semibold text-sm flex items-center justify-center gap-2 active:scale-[0.98]">View All Case Studies <ChevronRight size={14} /></Link></div>
    </article>
  );
}

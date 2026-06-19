import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, BarChart3, Check, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const DEFAULT_STEPS: ProcessStep[] = [
  { step: '01', title: 'Discover', description: 'Understand goals, users, and constraints.', icon: Search },
  { step: '02', title: 'Design', description: 'Architect systems and craft experiences.', icon: PenTool },
  { step: '03', title: 'Develop', description: 'Ship code with rigorous quality.', icon: Code2 },
  { step: '04', title: 'Deploy', description: 'Launch with confidence on production.', icon: Rocket },
  { step: '05', title: 'Scale', description: 'Iterate based on real-world signals.', icon: BarChart3 },
];

export interface ProcessJourneyProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

export function ProcessJourney({ eyebrow = 'Our Process', title = 'How we build.', subtitle = 'Five steps. One outcome.', steps = DEFAULT_STEPS }: ProcessJourneyProps) {
  return (
    <section className="relative w-full py-mobile-3xl px-mobile-base" aria-labelledby="process-heading">
      <div className="mb-7">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">{eyebrow}</p>
        <h2 id="process-heading" className="text-display-md text-white tracking-tight">{title}</h2>
        <p className="text-sm text-white/60 mt-2">{subtitle}</p>
      </div>
      <ol className="relative space-y-5 pl-7">
        <motion.span aria-hidden="true" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: '-100px' }} style={{ transformOrigin: 'top' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-[14px] top-2 bottom-2 w-px bg-gradient-to-b from-neo-blue via-neo-highlight to-purple-500/40"
        />
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.li key={s.step} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 320, damping: 32, mass: 0.9 }} className="relative"
            >
              <div className="absolute -left-7 top-0 h-7 w-7 rounded-full flex items-center justify-center bg-gradient-to-br from-neo-blue to-neo-highlight shadow-[0_0_16px_rgba(0,229,255,0.4)] border-2 border-[#030B1D]"><Icon size={12} className="text-white" /></div>
              <div className="ml-3">
                <div className="flex items-baseline gap-2"><span className="text-[10px] font-bold tracking-[0.18em] text-neo-highlight">{s.step}</span><h3 className="text-[17px] font-bold text-white tracking-tight">{s.title}</h3></div>
                <p className="text-[13px] text-white/65 mt-1 leading-relaxed">{s.description}</p>
                {i === steps.length - 1 && <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-neo-highlight font-semibold"><Check size={12} /><span>Outcome shipped</span></div>}
              </div>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}

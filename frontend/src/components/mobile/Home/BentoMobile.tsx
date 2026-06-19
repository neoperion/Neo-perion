import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export interface BentoCard {
  title: string;
  description: string;
  icon?: LucideIcon;
  accent?: 'cyan' | 'purple' | 'gradient';
}

export interface BentoMobileProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  cards: BentoCard[];
}

const accentMap = {
  cyan: 'from-neo-blue/15 to-neo-highlight/5 border-neo-highlight/30',
  purple: 'from-purple-500/15 to-neo-blue/5 border-purple-400/30',
  gradient: 'from-neo-blue/15 via-purple-500/10 to-cyan-500/15 border-neo-highlight/30',
};

export function BentoMobile({ eyebrow = 'Why Neo Perion', title = 'Built different.', subtitle = 'A scroll through our principles.', cards }: BentoMobileProps) {
  const heights = ['h-[200px]', 'h-[180px]', 'h-[220px]', 'h-[190px]', 'h-[210px]', 'h-[200px]'];

  return (
    <section className="relative w-full py-mobile-3xl px-mobile-base" aria-labelledby="bento-heading">
      <div className="mb-6">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">{eyebrow}</p>
        <h2 id="bento-heading" className="text-display-md text-white tracking-tight">{title}</h2>
        <p className="text-sm text-white/60 mt-2">{subtitle}</p>
      </div>
      <div className="flex flex-col gap-3">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 320, damping: 32, mass: 0.9 }}
              className={cn('relative rounded-3xl border bg-gradient-to-br backdrop-blur-glass-1 backdrop-saturate-glass p-5 overflow-hidden', heights[i % heights.length], accentMap[c.accent ?? 'cyan'])}
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay rounded-[inherit]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")" }} />
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />
              <div className="relative flex h-full flex-col">
                {Icon && <div className={cn('h-11 w-11 rounded-2xl flex items-center justify-center mb-auto', i % 3 === 0 ? 'bg-neo-highlight/15 text-neo-highlight' : i % 3 === 1 ? 'bg-purple-400/15 text-purple-300' : 'bg-white/[0.08] text-white/80')}><Icon size={22} /></div>}
                <div className="mt-4"><h3 className="text-[18px] font-bold tracking-tight text-white">{c.title}</h3><p className="text-[13px] text-white/65 mt-1.5 leading-relaxed">{c.description}</p></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

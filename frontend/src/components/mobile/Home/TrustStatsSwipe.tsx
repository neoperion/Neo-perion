import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface TrustStat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  accent?: 'cyan' | 'purple' | 'gradient';
}

export interface TrustStatsSwipeProps {
  stats?: TrustStat[];
  className?: string;
}

const DEFAULT_STATS: TrustStat[] = [
  { value: 25, suffix: '+', label: 'Projects Shipped', accent: 'cyan' },
  { value: 4, label: 'Industries Served', accent: 'gradient' },
  { value: 15, suffix: '+', label: 'Technologies', accent: 'purple' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', accent: 'cyan' },
];

export function TrustStatsSwipe({ stats = DEFAULT_STATS, className }: TrustStatsSwipeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <section ref={ref} className={cn('relative w-full py-mobile-2xl px-mobile-base', className)} aria-label="Trust metrics">
      <div className="flex gap-3 overflow-x-auto snap-x-mobile scrollbar-hide pb-2">
        {stats.map((s, i) => <StatCard key={s.label} stat={s} animate={inView} index={i} />)}
      </div>
    </section>
  );
}

function StatCard({ stat, animate, index }: { stat: TrustStat; animate: boolean; index: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!animate) return;
    const start = performance.now();
    const duration = 1600 + index * 200;
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - t, 3)) * stat.value));
      if (t < 1) requestAnimationFrame(step);
      else setCount(stat.value);
    };
    requestAnimationFrame(step);
  }, [animate, stat.value, index]);

  const a = { cyan: 'from-neo-blue/15 to-neo-highlight/5 border-neo-highlight/30 shadow-[0_8px_32px_rgba(0,229,255,0.10)]', purple: 'from-purple-500/15 to-neo-blue/5 border-purple-400/30 shadow-[0_8px_32px_rgba(139,92,246,0.10)]', gradient: 'from-neo-blue/15 via-purple-500/10 to-cyan-500/15 border-neo-highlight/30' }[stat.accent ?? 'cyan'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 320, damping: 32, mass: 0.9 }}
      className={cn('relative shrink-0 w-[160px] h-[160px] rounded-3xl overflow-hidden border bg-gradient-to-br backdrop-blur-glass-1 backdrop-saturate-glass flex flex-col items-center justify-center px-4 snap-center', a)}
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")" }} />
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />
      <div className="relative text-center">
        <div className="text-[40px] leading-none font-bold tracking-tight bg-gradient-to-br from-white to-neo-light bg-clip-text text-transparent">{stat.prefix}{count}{stat.suffix}</div>
        <div className="text-[11px] uppercase tracking-[0.15em] text-white/60 mt-2 font-semibold">{stat.label}</div>
      </div>
    </motion.div>
  );
}

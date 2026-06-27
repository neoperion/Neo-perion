import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface TrustStat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface TrustStatsSwipeProps {
  stats?: TrustStat[];
  className?: string;
}

const DEFAULT_STATS: TrustStat[] = [
  { value: 25, suffix: '+', label: 'Projects Shipped' },
  { value: 4, label: 'Industries Served' },
  { value: 15, suffix: '+', label: 'Technologies' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

export function TrustStatsSwipe({ stats = DEFAULT_STATS, className }: TrustStatsSwipeProps) {
  // We duplicate the stats to create an infinite scroll illusion
  const marqueeStats = [...stats, ...stats, ...stats];

  return (
    <section className={cn('relative w-full py-16 bg-neutral-900 border-y border-slate-900/5 overflow-hidden', className)} aria-label="Trust metrics">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-neutral-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-neutral-900 to-transparent z-10 pointer-events-none" />

      <motion.div 
        className="flex items-center gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
      >
        {marqueeStats.map((s, i) => (
          <div key={`${s.label}-${i}`} className="flex flex-col items-start gap-1">
            <div className="text-[64px] leading-none font-black tracking-tighter bg-gradient-to-br from-slate-900 via-neo-navy to-neo-blue bg-clip-text text-transparent font-display">
              {s.prefix}{s.value}{s.suffix}
            </div>
            <div className="text-[14px] uppercase tracking-[0.2em] text-neutral-400 font-bold">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

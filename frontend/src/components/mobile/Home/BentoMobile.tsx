import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

export function BentoMobile({ eyebrow = 'Why AINCURU', title = 'Built different.', subtitle = 'A scroll through our principles.', cards }: BentoMobileProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-neutral-900 overflow-hidden" aria-labelledby="bento-heading">
      
      {/* Huge sticky watermark in background */}
      <div className="absolute inset-0 flex justify-center pt-32 pointer-events-none select-none z-0">
        <div className="sticky top-1/3 h-fit">
          <span className="text-[120px] font-black tracking-tighter text-slate-50 leading-none font-display" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            DIFFERENT
          </span>
        </div>
      </div>

      <div className="relative z-10 px-mobile-base mb-16 text-center">
        <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-2">{eyebrow}</p>
        <h2 id="bento-heading" className="text-[clamp(32px,8vw,40px)] font-bold text-white tracking-tight font-display">{title}</h2>
        <p className="text-sm text-neutral-400 mt-3 font-medium max-w-[280px] mx-auto">{subtitle}</p>
      </div>
      
      <div className="relative z-10 px-mobile-base flex flex-col gap-16">
        {cards.map((c, i) => {
          const Icon = c.icon;
          const isEven = i % 2 === 0;
          
          return (
            <motion.div 
              key={c.title} 
              initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className={cn("flex flex-col relative w-full", isEven ? "items-start text-left" : "items-end text-right")}
            >
              {Icon && (
                <div className={cn("h-12 w-12 rounded-xl bg-neutral-900 shadow-lg border border-neutral-800 flex items-center justify-center mb-4 text-neo-blue", isEven ? "" : "ml-auto")}>
                  <Icon size={24} />
                </div>
              )}
              <h3 className="text-[24px] font-bold tracking-tight text-white font-display leading-tight max-w-[80%] parchment-surface/80 backdrop-blur-sm rounded-lg">{c.title}</h3>
              <p className="text-[15px] text-neutral-400 mt-2 leading-relaxed font-medium max-w-[90%] parchment-surface/80 backdrop-blur-sm rounded-lg">{c.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

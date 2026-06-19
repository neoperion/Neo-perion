import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  href: string;
}

export interface ServiceCarouselMobileProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  services: ServiceItem[];
}

export function ServiceCarouselMobile({ eyebrow = 'Services', title = 'Engineering Capabilities', subtitle = 'Swipe to explore.', services }: ServiceCarouselMobileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full py-mobile-3xl" aria-labelledby="svc-heading">
      <div className="px-mobile-base mb-5">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">{eyebrow}</p>
        <h2 id="svc-heading" className="text-display-md text-white tracking-tight">{title}</h2>
        <p className="text-sm text-white/60 mt-2">{subtitle}</p>
      </div>

      <div ref={containerRef} className="flex gap-3 overflow-x-auto snap-x-mobile scrollbar-hide px-mobile-base pb-4 touch-pan-x"
        onScroll={(e) => {
          const el = e.currentTarget;
          setActiveIndex(Math.max(0, Math.min(Math.round(el.scrollLeft / (el.clientWidth * 0.78)), services.length - 1)));
        }}
      >
        {services.map((s, i) => {
          const Icon = s.icon;
          const isActive = i === activeIndex;
          return (
            <motion.div key={s.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.06, type: 'spring', stiffness: 320, damping: 32, mass: 0.9 }}
              className="snap-center shrink-0 w-[78vw] max-w-[320px]"
            >
              <Link to={s.href} className={cn('group relative block h-[280px] rounded-3xl overflow-hidden border bg-gradient-to-br backdrop-blur-glass-1 backdrop-saturate-glass p-5 transition-all duration-500', s.gradient, isActive ? 'border-neo-highlight/40 scale-[1.02]' : 'border-white/[0.10] scale-100')}>
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay rounded-[inherit]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")" }} />
                <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />
                <div className="relative flex h-full flex-col">
                  <div className={cn('h-12 w-12 rounded-2xl flex items-center justify-center', isActive ? 'bg-neo-highlight/20 text-neo-highlight' : 'bg-white/[0.08] text-white/80')}><Icon size={24} /></div>
                  <div className="flex-1 mt-4">
                    <h3 className="text-[20px] font-bold tracking-tight text-white">{s.title}</h3>
                    <p className="text-sm text-white/65 mt-2 leading-relaxed line-clamp-3">{s.description}</p>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[12px] font-bold tracking-[0.05em] text-neo-highlight">
                    Explore <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 mx-mobile-base">
        <div className="relative h-1 rounded-full bg-white/[0.08] overflow-hidden">
          <motion.div style={{ width: useTransform(scrollXProgress, [0, 1], ['20%', '100%']) }} className="absolute inset-y-0 left-0 bg-gradient-to-r from-neo-blue to-neo-highlight rounded-full" />
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-2 text-center">{activeIndex + 1} / {services.length}</p>
      </div>
    </section>
  );
}

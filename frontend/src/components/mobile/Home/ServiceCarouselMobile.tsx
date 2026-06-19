import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ServiceItem {
  slug: string; title: string; description: string; icon: LucideIcon; gradient: string; href: string;
}

export interface ServiceCarouselMobileProps {
  eyebrow?: string; title?: string; subtitle?: string; services: ServiceItem[];
}

export function ServiceCarouselMobile({ eyebrow = 'Services', title = 'Engineering Capabilities', subtitle = 'Explore our expertise.', services }: ServiceCarouselMobileProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // We will use native sticky positioning to stack the cards
  return (
    <section ref={containerRef} className="relative w-full py-16 bg-slate-50" aria-labelledby="svc-heading">
      <div className="px-mobile-base mb-8">
        <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-2">{eyebrow}</p>
        <h2 id="svc-heading" className="text-[clamp(28px,7vw,36px)] font-bold text-slate-900 tracking-tight font-display">{title}</h2>
        <p className="text-sm text-slate-500 mt-2 font-medium">{subtitle}</p>
      </div>
      
      <div className="relative px-mobile-base pb-10 flex flex-col gap-6">
        {services.map((s, i) => {
          const Icon = s.icon;
          
          return (
            <motion.div 
              key={s.slug} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="sticky top-24"
              style={{
                // Calculate sticky offset based on index so they stack with a slight gap
                top: `calc(120px + ${i * 16}px)`,
                zIndex: i + 1,
              }}
            >
              <Link to={s.href} className="block w-full rounded-[28px] overflow-hidden bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-slate-100 p-8 transform transition-transform hover:-translate-y-1">
                <div className="relative flex flex-col gap-6">
                  <div className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-neo-blue shadow-sm">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight font-display mb-2">{s.title}</h3>
                    <p className="text-[15px] text-slate-600 leading-relaxed font-medium">{s.description}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[12px] font-bold tracking-[0.05em] text-neo-blue">
                    Explore Capability <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Check, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SolutionItem { title: string; description: string; features: string[]; icon: LucideIcon }
export interface MobileSolutionsProps { eyebrow?: string; title?: string; items: SolutionItem[] }
export interface TechItem { name: string; category?: string }
export interface MobileTechStackProps { eyebrow?: string; title?: string; items: TechItem[] }
export interface ChallengeItem { title: string; description: string; icon: LucideIcon }
export interface MobileChallengesProps { eyebrow?: string; title?: string; items: ChallengeItem[] }
export interface MobileServiceCTAProps { headline: string; sub?: string; primary?: { label: string; href: string }; secondary?: { label: string; href: string } }

export function MobileServiceSolutions({ eyebrow = 'Our Approach', title = 'How we deliver.', items }: MobileSolutionsProps) {
  return (
    <section className="relative w-full py-mobile-3xl px-mobile-base" aria-labelledby="sol-heading">
      <div className="mb-6">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">{eyebrow}</p>
        <h2 id="sol-heading" className="text-display-md text-white tracking-tight">{title}</h2>
      </div>
      <div className="space-y-3">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.07, type: 'spring', stiffness: 320, damping: 32, mass: 0.9 }}
              className="relative rounded-3xl border border-white/[0.10] bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-glass-1 p-5 overflow-hidden"
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-neo-blue/20 to-neo-highlight/10 border border-neo-highlight/30 text-neo-highlight flex items-center justify-center"><Icon size={22} /></div>
                  <h3 className="text-[17px] font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-[13px] text-white/70 leading-relaxed mb-3">{item.description}</p>
                {item.features.length > 0 && (
                  <ul className="space-y-2">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] text-white/80">
                        <span className="shrink-0 mt-0.5 h-4 w-4 rounded-full bg-neo-highlight/15 text-neo-highlight flex items-center justify-center"><Check size={10} /></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function MobileServiceTechStack({ eyebrow = 'Stack', title = 'Built with.', items }: MobileTechStackProps) {
  const grouped = items.reduce<Record<string, TechItem[]>>((acc, item) => {
    const key = item.category ?? 'Tools'; acc[key] = [...(acc[key] ?? []), item]; return acc;
  }, {});
  return (
    <section className="relative w-full py-mobile-3xl px-mobile-base" aria-labelledby="stack-heading">
      <div className="mb-6">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">{eyebrow}</p>
        <h2 id="stack-heading" className="text-display-md text-white tracking-tight">{title}</h2>
      </div>
      <div className="space-y-4">
        {Object.entries(grouped).map(([cat, list]) => (
          <div key={cat}>
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/45 font-bold mb-2 px-1">{cat}</p>
            <div className="flex flex-wrap gap-2">
              {list.map((t) => (
                <span key={t.name} className="h-9 px-3.5 rounded-full bg-white/[0.05] border border-white/[0.10] backdrop-blur-glass-1 text-[12px] font-medium text-white/85 flex items-center">{t.name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function MobileServiceChallenges({ eyebrow = 'Problems We Solve', title = 'Pain points.', items }: MobileChallengesProps) {
  return (
    <section className="relative w-full py-mobile-3xl px-mobile-base" aria-labelledby="ch-heading">
      <div className="mb-6">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">{eyebrow}</p>
        <h2 id="ch-heading" className="text-display-md text-white tracking-tight">{title}</h2>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {items.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.05, type: 'spring', stiffness: 320, damping: 32, mass: 0.9 }}
              className={cn('relative rounded-2xl border border-white/[0.10] bg-white/[0.04] backdrop-blur-glass-1 p-3 overflow-hidden', i % 2 === 0 ? 'h-[140px]' : 'h-[160px]')}
            >
              <Icon size={18} className="text-neo-highlight mb-2" />
              <h3 className="text-[13px] font-bold text-white leading-tight">{c.title}</h3>
              <p className="text-[11px] text-white/55 mt-1 leading-relaxed line-clamp-3">{c.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function MobileServiceCTA({ headline, sub, primary, secondary }: MobileServiceCTAProps) {
  return (
    <section className="relative w-full px-mobile-base py-mobile-3xl">
      <div className="relative overflow-hidden rounded-[32px] border border-white/[0.14] bg-gradient-to-br from-neo-deep via-neo-blue to-neo-highlight p-7 text-center">
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay rounded-[inherit]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")" }} />
        <h2 className="relative text-display-md text-white tracking-tight mb-2">{headline}</h2>
        {sub && <p className="relative text-sm text-white/85 mb-6 max-w-sm mx-auto">{sub}</p>}
        <div className="relative flex flex-col gap-3">
          {primary && <a href={primary.href} className="h-12 px-5 rounded-2xl bg-white text-[#030B1D] font-bold text-sm flex items-center justify-center active:scale-[0.98] transition-transform">{primary.label}</a>}
          {secondary && <a href={secondary.href} className="h-12 px-5 rounded-2xl bg-white/[0.18] border border-white/30 backdrop-blur-glass-1 text-white font-semibold text-sm flex items-center justify-center">{secondary.label}</a>}
        </div>
      </div>
    </section>
  );
}

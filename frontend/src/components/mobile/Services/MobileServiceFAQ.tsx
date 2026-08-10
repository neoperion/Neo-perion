import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FAQItem { q: string; a: string }

export interface MobileServiceFAQProps {
  eyebrow?: string; title?: string; items: FAQItem[];
}

export function MobileServiceFAQ({ eyebrow = 'FAQ', title = 'Questions, answered.', items }: MobileServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="relative w-full py-mobile-3xl px-mobile-base" aria-labelledby="faq-heading">
      <div className="mb-6">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">{eyebrow}</p>
        <h2 id="faq-heading" className="text-display-md text-white tracking-tight">{title}</h2>
      </div>
      <div className="space-y-2">
        {items.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.q} className="rounded-2xl border border-white/[0.10] parchment-surface/[0.03] backdrop-blur-glass-1 overflow-hidden">
              <button type="button" onClick={() => setOpenIndex(open ? null : i)} aria-expanded={open} aria-controls={`faq-p-${i}`}
                className="w-full flex items-center justify-between gap-3 p-4 text-left active:parchment-surface/[0.04] transition-colors">
                <span className="text-[15px] font-semibold text-white">{item.q}</span>
                <span className={cn('shrink-0 h-7 w-7 rounded-full flex items-center justify-center transition-all', open ? 'bg-neo-highlight text-white' : 'parchment-surface/[0.06] text-white/70')}>
                  {open ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div id={`faq-p-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                    <p className="px-4 pb-4 text-[14px] text-white/70 leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

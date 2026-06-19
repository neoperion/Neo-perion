import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Testimonial {
  id: string;
  name: string;
  designation?: string;
  company?: string;
  feedback: string;
  rating?: number;
}

export interface TestimonialsPhysicsProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export function TestimonialsPhysics({ eyebrow = 'Voices', title = 'What clients say.', subtitle = 'Real outcomes from real systems.', testimonials }: TestimonialsPhysicsProps) {
  const [index, setIndex] = useState(0);
  if (!testimonials.length) return null;
  const current = testimonials[index];
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative w-full py-mobile-3xl px-mobile-base" aria-labelledby="t-heading">
      <div className="mb-6">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">{eyebrow}</p>
        <h2 id="t-heading" className="text-display-md text-white tracking-tight">{title}</h2>
        <p className="text-sm text-white/60 mt-2">{subtitle}</p>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure key={current.id}
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 500, damping: 38 }}
            drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.4}
            onDragEnd={(_, info) => { if (info.offset.x < -60 || info.velocity.x < -300) next(); else if (info.offset.x > 60 || info.velocity.x > 300) prev(); }}
            className="relative rounded-3xl border border-white/[0.10] bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-glass-1 p-6 overflow-hidden touch-pan-y"
          >
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay rounded-[inherit]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")" }} />
            <Quote size={32} className="text-neo-highlight/40 mb-3" />
            <blockquote className="relative text-[15px] text-white/90 leading-relaxed">{current.feedback}</blockquote>
            <div className="relative mt-5 flex items-center gap-3">
              <div className="h-11 w-11 shrink-0 rounded-full bg-gradient-to-br from-neo-blue to-neo-highlight text-white flex items-center justify-center text-sm font-bold">
                {current.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <figcaption className="text-sm font-bold text-white truncate">{current.name}</figcaption>
                <p className="text-[11px] text-white/60 truncate">{current.designation}{current.designation && current.company ? ', ' : ''}{current.company}</p>
              </div>
              {current.rating !== undefined && (
                <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} size={12} className={cn(i < current.rating! ? 'fill-neo-highlight text-neo-highlight' : 'text-white/20')} />))}</div>
              )}
            </div>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {testimonials.map((t, i) => (
          <button key={t.id} type="button" aria-label={`Go to testimonial ${i + 1}`} aria-current={i === index ? 'true' : undefined} onClick={() => setIndex(i)}
            className={cn('h-2 rounded-full transition-all', i === index ? 'w-6 bg-gradient-to-r from-neo-blue to-neo-highlight' : 'w-2 bg-white/20')} />
        ))}
      </div>
      <p className="mt-2 text-center text-[10px] uppercase tracking-[0.2em] text-white/40">{index + 1} of {testimonials.length} · swipe to navigate</p>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Star, Quote, ArrowRight, ArrowLeft } from 'lucide-react';
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

export function TestimonialsPhysics({ eyebrow = 'Voices', title = 'What clients say.', subtitle = 'Swipe to navigate.', testimonials }: TestimonialsPhysicsProps) {
  const [cards, setCards] = useState<Testimonial[]>(testimonials);

  if (!cards.length) return null;

  // When a card is swiped off, we move it to the back of the array
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, id: string) => {
    const swipeThreshold = 50;
    if (Math.abs(info.offset.x) > swipeThreshold || Math.abs(info.velocity.x) > 500) {
      setCards((prev) => {
        const newCards = [...prev];
        const swipedCard = newCards.find((c) => c.id === id);
        if (swipedCard) {
          return [...newCards.filter((c) => c.id !== id), swipedCard];
        }
        return prev;
      });
    }
  };

  return (
    <section className="relative w-full py-24 px-mobile-base bg-neutral-900 overflow-hidden" aria-labelledby="t-heading">
      <div className="mb-12 text-center relative z-20">
        <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-2">{eyebrow}</p>
        <h2 id="t-heading" className="text-[clamp(32px,8vw,40px)] font-bold text-white tracking-tight font-display leading-tight">{title}</h2>
        <p className="text-sm text-neutral-400 mt-3 font-medium flex items-center justify-center gap-2">
          <ArrowLeft size={14} className="text-slate-300" /> {subtitle} <ArrowRight size={14} className="text-slate-300" />
        </p>
      </div>

      <div className="relative h-[380px] w-full flex justify-center perspective-[1000px]">
        <AnimatePresence>
          {cards.map((current, index) => {
            // Only render the top 3 cards for performance and clean visuals
            if (index > 2) return null;
            
            const isTop = index === 0;
            
            return (
              <motion.figure 
                key={current.id}
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ 
                  scale: 1 - index * 0.05, 
                  y: index * 20, 
                  zIndex: cards.length - index,
                  opacity: 1 - index * 0.2
                }}
                exit={{ x: 300, opacity: 0, rotate: 15 }} // Fallback exit, though handled by layout shift
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(e, info) => isTop && handleDragEnd(e, info, current.id)}
                whileDrag={{ cursor: 'grabbing', scale: 1.05, rotate: 2 }}
                className={cn(
                  "absolute top-0 w-full max-w-[340px] rounded-[32px] bg-neutral-900 border border-neutral-800 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] touch-none cursor-grab flex flex-col",
                  !isTop && "pointer-events-none"
                )}
                style={{ transformOrigin: 'top center' }}
              >
                <div className="absolute top-[-20px] left-8 text-slate-100 pointer-events-none -z-10">
                  <Quote size={80} className="fill-slate-100 stroke-none" />
                </div>
                
                <blockquote className="relative text-[18px] text-neutral-200 leading-relaxed font-serif italic mb-auto pt-4 min-h-[120px]">
                  "{current.feedback}"
                </blockquote>
                
                <div className="flex flex-col items-start gap-4 mt-8 pt-6 border-t border-neutral-800">
                  <div className="flex items-center gap-4 w-full">
                    <div className="h-12 w-12 shrink-0 rounded-full bg-neutral-900 text-neo-blue flex items-center justify-center text-sm font-bold border border-neutral-800">
                      {current.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <figcaption className="text-base font-bold text-white tracking-tight truncate">{current.name}</figcaption>
                      <p className="text-[12px] text-neutral-400 font-medium truncate">{current.designation}{current.designation && current.company ? ', ' : ''}{current.company}</p>
                    </div>
                  </div>
                  
                  {current.rating !== undefined && (
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={14} className={cn(i < current.rating! ? 'fill-[#FFB800] text-[#FFB800]' : 'text-slate-200')} />
                      ))}
                    </div>
                  )}
                </div>
              </motion.figure>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}

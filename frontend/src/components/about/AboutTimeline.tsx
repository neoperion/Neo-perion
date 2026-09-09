import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const milestones = [
  {
    phase: '01',
    year: 'ORIGIN',
    shortLabel: 'Origin',
    title: 'The first builds',
    tagline: 'Turning classroom knowledge into real code',
    description:
      'AI, data and software projects turned classroom knowledge into real engineering experience. We began by building projects that tested ideas in working software rather than theory.',
    highlight: 'Foundation built on experimentation & working code',
  },
  {
    phase: '02',
    year: 'EXPERIMENTATION',
    shortLabel: 'Experiment',
    title: 'Learning by shipping',
    tagline: 'Moving beyond demos into real utility',
    description:
      'Hackathons, prototypes and early client work taught us to move beyond demonstrations and build systems people could actually use in daily workflows.',
    highlight: 'Built for actual users, not presentations',
  },
  {
    phase: '03',
    year: 'FIRST PRODUCTS',
    shortLabel: 'Products',
    title: 'From projects to products',
    tagline: 'Deploying complete platforms at scale',
    description:
      'We began working on complete digital products — from education platforms and commerce systems to intelligent applications. Projects like FunNova and Izhaiyam proved our capability to deliver at scale.',
    highlight: 'Platforms like FunNova and Izhaiyam deployed',
  },
  {
    phase: '04',
    year: 'ENGINEERING',
    shortLabel: 'Engineering',
    title: 'A broader problem set',
    tagline: 'Unifying AI, web, SaaS, and automation',
    description:
      'Web platforms, SaaS products, automation, AI systems and business software became part of the same engineering practice, solving interconnected challenges.',
    highlight: 'Unified practice across SaaS, automation & AI',
  },
  {
    phase: '05',
    year: 'AINCURU',
    shortLabel: 'AINCURU',
    title: 'A company with a clearer direction',
    tagline: 'Technology with context and discipline',
    description:
      'AINCURU brings those experiences together around one idea: build technology with context, engineering discipline and a reason to exist in the real world.',
    highlight: 'Purpose-driven engineering with real context',
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 450,
      damping: 36,
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -40 : 40,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.18,
    },
  }),
};

export function AboutTimeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % milestones.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + milestones.length) % milestones.length);
  };

  const handleSelect = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const current = milestones[currentIndex];

  return (
    <section className="py-14 md:py-20 parchment-surface--light border-b border-manuscript-parchmentDeep overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-5xl">
        
        {/* ── Section Header ───────────────── */}
        <div className="mb-8 md:mb-14">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-manuscript-copper mb-3 md:mb-4">
            02 · THE JOURNEY
          </p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl mb-3 text-manuscript-ink tracking-tight">
            From building projects<br/>
            <span className="text-manuscript-rustDeep">to building a company.</span>
          </h2>
          <p className="font-sans text-manuscript-inkSoft text-sm md:text-base max-w-xl">
            Five milestones that shaped our engineering philosophy and defined how we build.
          </p>
        </div>

        {/* ── Desktop Horizontal Timeline Ribbon ───────────────── */}
        <div className="hidden md:block mb-8">
          <div className="grid grid-cols-5 relative py-2">
            {/* Background connecting track: spans between center of col 1 (10%) and center of col 5 (90%) */}
            <div className="absolute left-[10%] right-[10%] top-[22px] h-[2px] bg-manuscript-parchmentDeep/70 z-0" />

            {/* Active progress track */}
            <div 
              className="absolute left-[10%] top-[22px] h-[2px] bg-manuscript-copper z-0 transition-all duration-500 ease-out"
              style={{ width: `${(currentIndex / (milestones.length - 1)) * 80}%` }}
            />

            {milestones.map((m, idx) => {
              const isActive = idx === currentIndex;
              const isPast = idx < currentIndex;
              return (
                <button
                  key={m.phase}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  className="group relative z-10 flex flex-col items-center focus:outline-none cursor-pointer"
                >
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-sans text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-manuscript-copper text-manuscript-parchmentLight ring-4 ring-manuscript-copper/25 shadow-sm scale-110'
                        : isPast
                        ? 'bg-manuscript-parchmentLight text-manuscript-copper border-2 border-manuscript-copper hover:scale-105'
                        : 'bg-manuscript-parchmentLight text-manuscript-inkMuted border-2 border-manuscript-parchmentDeep/80 group-hover:border-manuscript-copper/60 group-hover:text-manuscript-ink'
                    }`}
                  >
                    {m.phase}
                  </div>
                  <span 
                    className={`mt-2.5 font-sans text-[11px] tracking-[0.15em] uppercase font-semibold transition-colors ${
                      isActive ? 'text-manuscript-copper' : 'text-manuscript-inkMuted group-hover:text-manuscript-ink'
                    }`}
                  >
                    {m.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Desktop Showcase Card ───────────────── */}
        <div className="hidden md:block relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.phase}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="manuscript-card rounded-2xl p-8 lg:p-10 border border-manuscript-parchmentDeep/70 bg-manuscript-parchmentLight/90 relative shadow-xs"
            >
              {/* Brass Corner Marks */}
              <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-manuscript-copper/50" />
              <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-manuscript-copper/50" />
              <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-manuscript-copper/50" />
              <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-manuscript-copper/50" />

              <div className="grid md:grid-cols-12 gap-8 items-center">
                {/* Left Column: Stage details */}
                <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-manuscript-parchmentDeep/50 pb-6 md:pb-0 md:pr-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-manuscript-copper">
                      PHASE {current.phase} · {current.year}
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-2xl lg:text-3xl text-manuscript-ink mb-3 leading-tight">
                    {current.title}
                  </h3>
                  <p className="font-sans text-manuscript-rustDeep font-medium text-base leading-snug">
                    "{current.tagline}"
                  </p>
                </div>

                {/* Right Column: Description & Takeaway */}
                <div className="md:col-span-7 flex flex-col justify-between h-full">
                  <p className="font-sans text-manuscript-inkSoft text-[15px] lg:text-[16px] leading-relaxed mb-6">
                    {current.description}
                  </p>

                  <div className="p-4 rounded-xl bg-manuscript-copper/5 border border-manuscript-copper/20 flex items-start gap-3 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-manuscript-copper mt-2 shrink-0" />
                    <p className="font-sans text-[13px] text-manuscript-ink leading-relaxed">
                      <strong className="font-semibold text-manuscript-copper">Key Milestone: </strong>
                      {current.highlight}
                    </p>
                  </div>

                  {/* Navigation controls */}
                  <div className="flex items-center justify-between pt-2 border-t border-manuscript-parchmentDeep/40">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous milestone"
                        className="h-8 w-8 rounded-full border border-manuscript-parchmentDeep/80 bg-manuscript-parchment hover:border-manuscript-copper text-manuscript-ink flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next milestone"
                        className="h-8 w-8 rounded-full border border-manuscript-parchmentDeep/80 bg-manuscript-parchment hover:border-manuscript-copper text-manuscript-ink flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                    <span className="font-sans text-xs font-semibold text-manuscript-copper">
                      Phase {currentIndex + 1} of {milestones.length}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Mobile Layout (Under md: Compact & Non-Overscrollable) ───────────────── */}
        <div className="md:hidden block">
          {/* Segmented Step Selector */}
          <div className="grid grid-cols-5 gap-1 p-1 bg-manuscript-parchmentDeep/20 rounded-xl border border-manuscript-parchmentDeep/40 mb-4">
            {milestones.map((m, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={m.phase}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  className={`py-2 px-0.5 text-center rounded-lg transition-all text-xs font-sans font-bold active:scale-95 ${
                    isActive
                      ? 'bg-manuscript-copper text-manuscript-parchmentLight shadow-sm'
                      : 'text-manuscript-inkSoft hover:text-manuscript-ink'
                  }`}
                >
                  <span className="block text-[9px] opacity-75">{m.phase}</span>
                  <span className="block text-[10px] truncate">{m.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Swipeable Active Milestone Card */}
          <div className="relative overflow-hidden min-h-[300px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.phase}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -40) handleNext();
                  else if (info.offset.x > 40) handlePrev();
                }}
                className="manuscript-card p-6 bg-manuscript-parchmentLight border border-manuscript-parchmentDeep/60 rounded-2xl relative shadow-xs touch-pan-y"
              >
                {/* Brass Corner marks */}
                <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 border-t border-l border-manuscript-copper/50" />
                <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 border-t border-r border-manuscript-copper/50" />
                <div className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 border-b border-l border-manuscript-copper/50" />
                <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 border-b border-r border-manuscript-copper/50" />

                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-manuscript-copper">
                    PHASE {current.phase} · {current.year}
                  </span>
                  <span className="font-sans text-[10px] font-bold px-2 py-0.5 rounded-full bg-manuscript-copper/10 text-manuscript-copper border border-manuscript-copper/20">
                    {currentIndex + 1} of {milestones.length}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-xl text-manuscript-ink mb-1 leading-snug">
                  {current.title}
                </h3>

                <p className="font-sans text-manuscript-rustDeep font-medium text-xs mb-3">
                  "{current.tagline}"
                </p>

                <p className="font-sans text-[14px] leading-relaxed text-manuscript-inkSoft mb-4">
                  {current.description}
                </p>

                <div className="p-3 rounded-xl bg-manuscript-copper/5 border border-manuscript-copper/20 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-manuscript-copper mt-1.5 shrink-0" />
                  <p className="font-sans text-[12px] text-manuscript-ink leading-tight">
                    <strong className="font-semibold text-manuscript-copper">Takeaway: </strong>
                    {current.highlight}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Touch navigation controls */}
          <div className="flex items-center justify-between mt-3 px-1">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous milestone"
              className="h-9 w-9 rounded-full bg-manuscript-parchmentLight border border-manuscript-parchmentDeep/60 flex items-center justify-center text-manuscript-ink active:scale-90 transition-all shadow-xs"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-1.5">
              {milestones.map((m, i) => (
                <button
                  key={m.phase}
                  type="button"
                  onClick={() => handleSelect(i)}
                  aria-label={`Go to milestone ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-6 bg-manuscript-copper' : 'w-1.5 bg-manuscript-copper/25'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next milestone"
              className="h-9 w-9 rounded-full bg-manuscript-parchmentLight border border-manuscript-parchmentDeep/60 flex items-center justify-center text-manuscript-ink active:scale-90 transition-all shadow-xs"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}


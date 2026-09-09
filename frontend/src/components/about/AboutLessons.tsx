import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const panels = [
  {
    id: '01',
    eyebrow: '01 · INSPIRATION',
    shortTitle: 'Inspiration',
    title: 'Ainkurunuru',
    body: 'AINCURU was inspired by Ainkurunuru, a classical Tamil literary work whose poetry is closely tied to context, people, emotion, landscape and circumstance.',
    annotation: 'Context changes meaning.'
  },
  {
    id: '02',
    eyebrow: '02 · CONTEXT',
    shortTitle: 'Context',
    title: 'Meaning does not exist alone.',
    body: 'The world around a problem changes the answer.\n\nPeople, workflows, constraints, goals and circumstances shape what the right solution should be.',
    footer: 'CONTEXT FIRST'
  },
  {
    id: '03',
    eyebrow: '03 · THE NAME',
    shortTitle: 'The Name',
    title: 'We kept the inspiration.\nWe built something new.',
    body: 'AINCURU carries that inspiration into modern engineering.\n\nNot by preserving the past unchanged, but by carrying its underlying idea forward: understand the context before deciding what to create.',
    footer: 'FROM INSPIRATION → ENGINEERING'
  },
  {
    id: '04',
    eyebrow: '04 · THE PRINCIPLE',
    shortTitle: 'Principle',
    title: 'Context Creates Intelligence.',
    body: 'For us, intelligence is not simply about using more AI.\n\nIt is about understanding where intelligence belongs, what problem it should solve, and how it should work within the world around it.',
    footer: 'CONTEXT → INTELLIGENCE'
  }
];

const mobileSlideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 50 : -50,
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
      damping: 35,
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -50 : 50,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.18,
    },
  }),
};

export function AboutLessons() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % panels.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + panels.length) % panels.length);
  };

  const handleSelect = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const currentPanel = panels[currentIndex];

  return (
    <section 
      className="relative py-14 md:py-32 overflow-hidden parchment-surface border-b border-manuscript-parchmentDeep font-sans"
      itemScope 
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="AINCURU LLP" />
      <meta itemProp="alternateName" content="AINCURU" />
      <meta itemProp="description" content="AI Automation and Web Development Company based in Chennai, Tamil Nadu." />
      
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <meta itemProp="addressLocality" content="Chennai" />
        <meta itemProp="addressRegion" content="Tamil Nadu" />
        <meta itemProp="addressCountry" content="IN" />
      </div>

      {/* ── Background Geometry ───────────────── */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-manuscript-parchmentDeep/50" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-manuscript-parchmentDeep/50 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-manuscript-parchmentDeep/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-manuscript-parchmentDeep/10" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-12 max-w-7xl">
        
        {/* ── Header ───────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 md:mb-20 text-center lg:text-left"
        >
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-manuscript-copper mb-3 md:mb-6">
            03 · THE ORIGIN
          </p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-manuscript-ink mb-4 md:mb-6 tracking-tight">
            Why AINCURU<br/>
            is called <span className="text-manuscript-copper">AINCURU.</span>
          </h2>
          <p className="font-sans text-base md:text-lg lg:text-xl text-manuscript-inkSoft max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            AINCURU was inspired by Ainkurunuru — an old idea that meaning is deeply connected to context.
          </p>
        </motion.div>

        {/* ── Mobile Layout (Under md: Compact, Simple, Non-Overscrollable) ───────────────── */}
        <div className="md:hidden block mb-12">
          {/* Origin Hub Emblem */}
          <div className="flex items-center justify-center gap-3 mb-6 p-3 rounded-2xl bg-manuscript-parchmentLight/80 border border-manuscript-parchmentDeep/50">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-full border border-manuscript-copper/30 bg-manuscript-parchment shadow-xs">
              <img 
                itemProp="logo"
                src="/images/np-logo.png" 
                alt="AINCURU LLP Logo - AI Automation & Web Development Company in Chennai" 
                title="AINCURU LLP Logo - AI Automation & Web Development Company in Chennai"
                className="w-7 h-7 object-contain opacity-90"
              />
            </div>
            <div className="text-left">
              <span className="font-sans text-[10px] font-semibold tracking-[0.2em] text-manuscript-copper uppercase block">
                THE FOUR PILLARS
              </span>
              <span className="font-sans text-[14px] font-bold text-manuscript-ink tracking-wide block">
                Explore The Origin Story
              </span>
            </div>
          </div>

          {/* Interactive Step Selector (Segmented Tabs) */}
          <div className="grid grid-cols-4 gap-1 p-1 bg-manuscript-parchmentDeep/20 rounded-xl border border-manuscript-parchmentDeep/40 mb-4">
            {panels.map((p, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  className={`py-2 px-1 text-center rounded-lg transition-all text-xs font-sans font-bold active:scale-95 ${
                    isActive
                      ? 'bg-manuscript-copper text-manuscript-parchmentLight shadow-sm'
                      : 'text-manuscript-inkSoft hover:text-manuscript-ink'
                  }`}
                >
                  <span className="block text-[9px] opacity-75">{p.id}</span>
                  <span className="block text-[11px] truncate">{p.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Swipeable Active Card */}
          <div className="relative overflow-hidden min-h-[310px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPanel.id}
                custom={direction}
                variants={mobileSlideVariants}
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
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-manuscript-copper">
                    {currentPanel.eyebrow}
                  </p>
                  <span className="font-sans text-[10px] font-bold px-2 py-0.5 rounded-full bg-manuscript-copper/10 text-manuscript-copper border border-manuscript-copper/20">
                    {currentIndex + 1} of {panels.length}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-xl text-manuscript-ink mb-3 leading-snug whitespace-pre-line">
                  {currentPanel.title}
                </h3>

                <p className="font-sans text-[14px] leading-relaxed text-manuscript-inkSoft whitespace-pre-line mb-4">
                  {currentPanel.body}
                </p>

                {currentPanel.annotation && (
                  <div className="mt-3 pt-3 border-t border-manuscript-parchmentDeep/40">
                    <p className="font-sans italic text-sm text-manuscript-copper">
                      "{currentPanel.annotation}"
                    </p>
                  </div>
                )}

                {currentPanel.footer && (
                  <div className="mt-3 pt-3 border-t border-manuscript-parchmentDeep/40 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-manuscript-copper" />
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-manuscript-copper">
                      {currentPanel.footer}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Touch/Swipe Navigation Bar */}
          <div className="flex items-center justify-between mt-3 px-1">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous origin lesson"
              className="h-9 w-9 rounded-full bg-manuscript-parchmentLight border border-manuscript-parchmentDeep/60 flex items-center justify-center text-manuscript-ink active:scale-90 transition-all shadow-xs"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-1.5">
              {panels.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelect(i)}
                  aria-label={`Go to lesson ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-6 bg-manuscript-copper' : 'w-1.5 bg-manuscript-copper/25'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next origin lesson"
              className="h-9 w-9 rounded-full bg-manuscript-parchmentLight border border-manuscript-parchmentDeep/60 flex items-center justify-center text-manuscript-ink active:scale-90 transition-all shadow-xs"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Compact Mobile Signature Seal */}
          <div className="mt-6 p-5 rounded-2xl bg-manuscript-parchmentLight/90 border border-manuscript-parchmentDeep/60 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-gradient-to-r from-transparent via-manuscript-copper to-transparent" />
            <p className="font-sans italic text-sm text-manuscript-ink mb-1">
              "From an old idea to modern engineering"
            </p>
            <p className="font-sans font-black text-base uppercase tracking-wider text-manuscript-ink mb-2">
              Context <span className="text-manuscript-copper">Creates</span> Intelligence.
            </p>
            <p className="font-sans text-[13px] text-manuscript-inkSoft leading-relaxed max-w-xs mx-auto">
              AINCURU begins with understanding. We study the context. We build with purpose.
            </p>
          </div>
        </div>

        {/* ── Desktop / Tablet Layout (Preserved 12-Column Grid) ───────────────── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-12 gap-8 items-start mb-24">
          
          {/* Panel 01: Inspiration */}
          <div className="md:col-span-1 lg:col-span-3 lg:col-start-1 lg:row-start-1">
            <PanelCard data={panels[0]} delay={0.2} />
          </div>

          {/* Panel 02: Context */}
          <div className="md:col-span-1 lg:col-span-3 lg:col-start-10 lg:row-start-1">
            <PanelCard data={panels[1]} delay={0.4} />
          </div>

          {/* Center: The Origin Map */}
          <div className="md:col-span-2 lg:col-span-6 lg:col-start-4 lg:row-start-1 lg:row-span-2 w-full max-w-[600px] mx-auto self-center lg:self-start mt-4 lg:mt-0">
            {/* Desktop / Tablet Circular Diagram */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-square w-full flex items-center justify-center border border-manuscript-parchmentDeep/40 rounded-full"
            >
              {/* Center Emblem */}
              <div className="relative z-20 flex flex-col items-center">
                <motion.img 
                  itemProp="logo"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  src="/images/np-logo.png" 
                  alt="AINCURU LLP Logo - AI Automation & Web Development Company in Chennai" 
                  title="AINCURU LLP Logo - AI Automation & Web Development Company in Chennai"
                  className="w-24 h-24 object-contain opacity-90 drop-shadow-sm mb-3"
                />
                <span itemProp="brand" className="font-sans tracking-[0.25em] text-[11px] font-bold text-manuscript-ink uppercase">AINCURU</span>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} x1="50" y1="50" x2="15" y2="25" stroke="currentColor" strokeWidth="0.2" className="text-manuscript-copper/40" />
                <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.6 }} x1="50" y1="50" x2="85" y2="25" stroke="currentColor" strokeWidth="0.2" className="text-manuscript-copper/40" />
                <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.7 }} x1="50" y1="50" x2="15" y2="75" stroke="currentColor" strokeWidth="0.2" className="text-manuscript-copper/40" />
                <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.8 }} x1="50" y1="50" x2="85" y2="75" stroke="currentColor" strokeWidth="0.2" className="text-manuscript-copper/40" />
                
                <circle cx="15" cy="25" r="1.5" className="fill-manuscript-parchment stroke-manuscript-copper/60" strokeWidth="0.5" />
                <circle cx="85" cy="25" r="1.5" className="fill-manuscript-parchment stroke-manuscript-copper/60" strokeWidth="0.5" />
                <circle cx="15" cy="75" r="1.5" className="fill-manuscript-parchment stroke-manuscript-copper/60" strokeWidth="0.5" />
                <circle cx="85" cy="75" r="1.5" className="fill-manuscript-parchment stroke-manuscript-copper/60" strokeWidth="0.5" />
              </svg>

              {/* Nodes */}
              <DiagramNode delay={0.9} top="12%" left="0%" num="01" title="INSPIRATION" text="Ainkurunuru" align="left" />
              <DiagramNode delay={1.0} top="12%" right="0%" num="02" title="CONTEXT" text="Meaning depends on circumstance." align="right" />
              <DiagramNode delay={1.1} bottom="12%" left="0%" num="03" title="PHILOSOPHY" text="Understand before building." align="left" />
              <DiagramNode delay={1.2} bottom="12%" right="0%" num="04" title="INTELLIGENCE" text="Context Creates Intelligence." align="right" />
            </motion.div>
          </div>

          {/* Panel 04: The Principle */}
          <div className="md:col-span-1 lg:col-span-3 lg:col-start-1 lg:row-start-2">
            <PanelCard data={panels[3]} delay={0.8} />
          </div>

          {/* Panel 03: The Name */}
          <div className="md:col-span-1 lg:col-span-3 lg:col-start-10 lg:row-start-2">
            <PanelCard data={panels[2]} delay={0.6} />
          </div>

        </div>

        {/* ── Desktop Signature Statement ───────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:block max-w-4xl mx-auto text-center pt-16 md:pt-24 border-t border-manuscript-parchmentDeep/50"
        >
          <h3 className="font-sans font-bold text-3xl md:text-5xl text-manuscript-ink mb-8 md:mb-10 tracking-tight">
            "From an old idea<br /> to a new kind of engineering."
          </h3>
          <div className="space-y-2 font-sans text-[16px] md:text-lg text-manuscript-inkSoft mb-10 md:mb-12">
            <p className="font-semibold text-manuscript-ink">AINCURU begins with understanding.</p>
            <p>We study the context.</p>
            <p>We build with purpose.</p>
            <p>We use intelligence with judgement.</p>
          </div>
          <p className="font-sans text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-manuscript-ink leading-tight">
            Context <span className="text-manuscript-copper">Creates</span> Intelligence.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

function PanelCard({ data, delay }: { data: any, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="manuscript-card p-6 md:p-8 bg-manuscript-parchmentLight border border-manuscript-parchmentDeep/50 rounded-xl relative group hover:border-manuscript-copper/30 transition-colors font-sans"
    >
      {/* Corner marks */}
      <div className="absolute top-2 left-2 w-1 h-1 border-t border-l border-manuscript-copper/40" />
      <div className="absolute top-2 right-2 w-1 h-1 border-t border-r border-manuscript-copper/40" />
      <div className="absolute bottom-2 left-2 w-1 h-1 border-b border-l border-manuscript-copper/40" />
      <div className="absolute bottom-2 right-2 w-1 h-1 border-b border-r border-manuscript-copper/40" />

      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-manuscript-copper mb-4">
        {data.eyebrow}
      </p>
      <h3 className="font-sans font-bold text-xl text-manuscript-ink mb-3 whitespace-pre-line leading-snug">
        {data.title}
      </h3>
      <p className="font-sans text-[14px] leading-relaxed text-manuscript-inkSoft whitespace-pre-line mb-4">
        {data.body}
      </p>
      
      {data.annotation && (
        <div className="mt-4 pt-4 border-t border-manuscript-parchmentDeep/40">
          <p className="font-sans italic text-sm text-manuscript-copper">
            "{data.annotation}"
          </p>
        </div>
      )}

      {data.footer && (
        <div className="mt-5 pt-4 border-t border-manuscript-parchmentDeep/40 flex items-center gap-2">
          {data.id === '02' && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-manuscript-copper">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          )}
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-manuscript-copper/80">
            {data.footer}
          </p>
        </div>
      )}
    </motion.div>
  );
}

function DiagramNode({ delay, top, bottom, left, right, num, title, text, align }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`absolute flex flex-col group z-10 w-32 md:w-40 font-sans ${align === 'right' ? 'items-start text-left' : 'items-end text-right'}`}
      style={{ top, bottom, left, right, transform: align === 'right' ? 'translate(20%, 0)' : 'translate(-20%, 0)' }}
    >
      <span className="font-sans text-[11px] font-bold text-manuscript-copper/60 group-hover:text-manuscript-copper transition-colors">{num}</span>
      <h4 className="font-sans text-[13px] font-bold tracking-wider uppercase text-manuscript-ink mt-1 mb-1">{title}</h4>
      <p className="font-sans text-[11px] leading-tight text-manuscript-inkSoft">{text}</p>
    </motion.div>
  );
}

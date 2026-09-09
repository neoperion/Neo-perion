import React from 'react';
import { motion } from 'framer-motion';

const panels = [
  {
    id: '01',
    eyebrow: '01 · INSPIRATION',
    title: 'Ainkurunuru',
    body: 'AINCURU was inspired by Ainkurunuru, a classical Tamil literary work whose poetry is closely tied to context, people, emotion, landscape and circumstance.',
    annotation: 'Context changes meaning.'
  },
  {
    id: '02',
    eyebrow: '02 · CONTEXT',
    title: 'Meaning does not exist alone.',
    body: 'The world around a problem changes the answer.\n\nPeople, workflows, constraints, goals and circumstances shape what the right solution should be.',
    footer: 'CONTEXT FIRST'
  },
  {
    id: '03',
    eyebrow: '03 · THE NAME',
    title: 'We kept the inspiration.\nWe built something new.',
    body: 'AINCURU carries that inspiration into modern engineering.\n\nNot by preserving the past unchanged, but by carrying its underlying idea forward: understand the context before deciding what to create.',
    footer: 'FROM INSPIRATION → ENGINEERING'
  },
  {
    id: '04',
    eyebrow: '04 · THE PRINCIPLE',
    title: 'Context Creates Intelligence.',
    body: 'For us, intelligence is not simply about using more AI.\n\nIt is about understanding where intelligence belongs, what problem it should solve, and how it should work within the world around it.',
    footer: 'CONTEXT → INTELLIGENCE'
  }
];

export function AboutLessons() {
  return (
    <section 
      className="relative py-24 md:py-32 overflow-hidden parchment-surface border-b border-manuscript-parchmentDeep"
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

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* ── Header ───────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center lg:text-left"
        >
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-manuscript-copper mb-6">
            03 · THE ORIGIN
          </p>
          <h2 className="heading-manuscript text-4xl md:text-5xl lg:text-6xl leading-tight text-manuscript-ink mb-6">
            Why AINCURU<br/>
            is called <span className="text-manuscript-copper">AINCURU.</span>
          </h2>
          <p className="font-manuscriptBody text-lg lg:text-xl text-manuscript-inkSoft max-w-2xl mx-auto lg:mx-0">
            AINCURU was inspired by Ainkurunuru — an old idea that meaning is deeply connected to context.
          </p>
        </motion.div>

        {/* ── Main Layout ───────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start mb-24">
          
          {/* Panel 01: Inspiration */}
          <div className="order-1 lg:order-none md:col-span-1 lg:col-span-3 lg:col-start-1 lg:row-start-1">
            <PanelCard data={panels[0]} delay={0.2} />
          </div>

          {/* Panel 02: Context */}
          <div className="order-2 lg:order-none md:col-span-1 lg:col-span-3 lg:col-start-10 lg:row-start-1">
            <PanelCard data={panels[1]} delay={0.4} />
          </div>

          {/* Center: The Origin Map */}
          <div className="order-3 lg:order-none md:col-span-2 lg:col-span-6 lg:col-start-4 lg:row-start-1 lg:row-span-2 w-full max-w-[600px] mx-auto self-center lg:self-start mt-4 lg:mt-0">
            {/* Desktop / Tablet Circular Diagram */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="hidden md:flex relative aspect-square w-full items-center justify-center border border-manuscript-parchmentDeep/40 rounded-full"
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
                <span itemProp="brand" className="font-mono tracking-[0.3em] text-[11px] font-bold text-manuscript-ink uppercase">AINCURU</span>
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

            {/* Mobile Stacked Diagram */}
            <div className="md:hidden flex flex-col items-center text-center space-y-8 w-full py-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center mb-4"
              >
                <img 
                  itemProp="logo"
                  src="/images/np-logo.png" 
                  alt="AINCURU LLP Logo - AI Automation & Web Development Company in Chennai" 
                  title="AINCURU LLP Logo - AI Automation & Web Development Company in Chennai"
                  className="w-20 h-20 object-contain opacity-90 drop-shadow-sm mb-3" 
                />
                <span itemProp="brand" className="font-mono tracking-[0.3em] text-[10px] font-bold text-manuscript-ink uppercase">AINCURU</span>
              </motion.div>
              
              <div className="w-[1px] h-12 bg-manuscript-copper/30" />
              
              <MobileNode num="01" title="Ainkurunuru" delay={0.2} />
              <MobileNode num="02" title="Context" delay={0.3} />
              <MobileNode num="03" title="Philosophy" delay={0.4} />
              <MobileNode num="04" title="Intelligence" delay={0.5} />
            </div>
          </div>

          {/* Panel 04: The Principle */}
          <div className="order-5 md:order-4 lg:order-none md:col-span-1 lg:col-span-3 lg:col-start-1 lg:row-start-2">
            <PanelCard data={panels[3]} delay={0.8} />
          </div>

          {/* Panel 03: The Name */}
          <div className="order-4 md:order-5 lg:order-none md:col-span-1 lg:col-span-3 lg:col-start-10 lg:row-start-2">
            <PanelCard data={panels[2]} delay={0.6} />
          </div>

        </div>

        {/* ── Signature Statement ───────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center pt-16 md:pt-24 border-t border-manuscript-parchmentDeep/50"
        >
          <h3 className="heading-manuscript text-3xl md:text-5xl text-manuscript-ink mb-10 md:mb-12 italic">
            "From an old idea<br className="md:hidden" /> to a new kind of engineering."
          </h3>
          <div className="space-y-2 font-manuscriptBody text-[16px] md:text-xl text-manuscript-inkSoft mb-12 md:mb-16">
            <p className="font-semibold text-manuscript-ink">AINCURU begins with understanding.</p>
            <p>We study the context.</p>
            <p>We build with purpose.</p>
            <p>We use intelligence with judgement.</p>
          </div>
          <p className="font-display text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-widest text-manuscript-ink leading-tight">
            Context <span className="text-manuscript-copper">Creates</span> Intelligence.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

function MobileNode({ num, title, delay }: { num: string, title: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <span className="font-mono text-[9px] font-bold text-manuscript-copper mb-1">{num}</span>
      <h4 className="font-manuscript text-[16px] font-bold tracking-widest uppercase text-manuscript-ink">{title}</h4>
    </motion.div>
  );
}

function PanelCard({ data, delay }: { data: any, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="manuscript-card p-6 md:p-8 bg-manuscript-parchmentLight border border-manuscript-parchmentDeep/50 rounded-xl relative group hover:border-manuscript-copper/30 transition-colors"
    >
      {/* Corner marks */}
      <div className="absolute top-2 left-2 w-1 h-1 border-t border-l border-manuscript-copper/40" />
      <div className="absolute top-2 right-2 w-1 h-1 border-t border-r border-manuscript-copper/40" />
      <div className="absolute bottom-2 left-2 w-1 h-1 border-b border-l border-manuscript-copper/40" />
      <div className="absolute bottom-2 right-2 w-1 h-1 border-b border-r border-manuscript-copper/40" />

      <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-manuscript-copper mb-4">
        {data.eyebrow}
      </p>
      <h3 className="heading-manuscript text-xl text-manuscript-ink mb-3 whitespace-pre-line leading-snug">
        {data.title}
      </h3>
      <p className="font-manuscriptBody text-[14px] leading-relaxed text-manuscript-inkSoft whitespace-pre-line mb-4">
        {data.body}
      </p>
      
      {data.annotation && (
        <div className="mt-4 pt-4 border-t border-manuscript-parchmentDeep/40">
          <p className="font-caveat text-xl text-manuscript-ink rotate-[-2deg]">
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
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-manuscript-copper/80">
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
      className={`absolute flex flex-col group z-10 w-32 md:w-40 ${align === 'right' ? 'items-start text-left' : 'items-end text-right'}`}
      style={{ top, bottom, left, right, transform: align === 'right' ? 'translate(20%, 0)' : 'translate(-20%, 0)' }}
    >
      <span className="font-mono text-[9px] font-bold text-manuscript-copper/60 group-hover:text-manuscript-copper transition-colors">{num}</span>
      <h4 className="font-manuscript text-[13px] font-bold tracking-widest uppercase text-manuscript-ink mt-1 mb-1">{title}</h4>
      <p className="font-manuscriptBody text-[11px] leading-tight text-manuscript-inkSoft">{text}</p>
    </motion.div>
  );
}

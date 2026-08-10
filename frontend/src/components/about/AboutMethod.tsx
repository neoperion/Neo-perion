import React from 'react';
import { motion } from 'framer-motion';

const methods = [
  {
    number: '01',
    title: 'Understand',
    desc: 'Business, users, workflows, constraints.',
  },
  {
    number: '02',
    title: 'Frame',
    desc: 'Turn the problem into a clear product and technical direction.',
  },
  {
    number: '03',
    title: 'Build',
    desc: 'Design, engineer and integrate the system.',
  },
  {
    number: '04',
    title: 'Ship',
    desc: 'Put it into the real world.',
  },
  {
    number: '05',
    title: 'Learn',
    desc: 'Measure, improve and evolve.',
  }
];

export function AboutMethod() {
  return (
    <section className="py-16 md:py-24 parchment-surface--light border-b border-manuscript-parchmentDeep overflow-hidden relative">
      {/* ── Background Compass Ring ────────────────────────────────────── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-manuscript-copper/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-manuscript-copper/5 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-manuscript-copper mb-6">
            04 · THE AINCURU METHOD
          </p>
          <h2 className="heading-manuscript text-4xl md:text-5xl leading-tight text-manuscript-ink mb-4">
            Context before intelligence.
          </h2>
          <p className="font-manuscriptBody text-[18px] text-manuscript-inkSoft">
            We don't begin with a technology.<br/>
            We begin with understanding.
          </p>
        </div>

        {/* ── Desktop Compass Layout ────────────────────────────────────── */}
        <div className="hidden lg:block relative h-[500px] w-full max-w-4xl mx-auto">
          {/* Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-manuscript-copper flex items-center justify-center bg-manuscript-parchment z-20">
            <div className="text-center">
              <span className="block font-mono text-[10px] font-bold tracking-[0.2em] text-manuscript-copper">AINCURU</span>
              <span className="block font-display font-bold text-manuscript-ink mt-1">METHOD</span>
            </div>
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <circle cx="50%" cy="50%" r="200" fill="none" stroke="rgba(168,82,30,0.15)" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          {/* Nodes placed around the circle */}
          {/* 1. Understand (Top) */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 text-center w-48 z-10">
            <span className="font-mono text-[10px] font-bold text-manuscript-copper block mb-1">01</span>
            <h4 className="heading-manuscript text-xl text-manuscript-ink mb-1">Understand</h4>
            <p className="text-[12px] text-manuscript-inkSoft leading-snug">Business, users, workflows, constraints.</p>
          </motion.div>

          {/* 2. Frame (Top Right) */}
          <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="absolute top-[20%] right-[5%] translate-x-4 text-center w-48 z-10">
            <span className="font-mono text-[10px] font-bold text-manuscript-copper block mb-1">02</span>
            <h4 className="heading-manuscript text-xl text-manuscript-ink mb-1">Frame</h4>
            <p className="text-[12px] text-manuscript-inkSoft leading-snug">Turn the problem into a clear technical direction.</p>
          </motion.div>

          {/* 3. Build (Bottom Right) */}
          <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute bottom-[20%] right-[5%] translate-x-4 text-center w-48 z-10">
            <span className="font-mono text-[10px] font-bold text-manuscript-copper block mb-1">03</span>
            <h4 className="heading-manuscript text-xl text-manuscript-ink mb-1">Build</h4>
            <p className="text-[12px] text-manuscript-inkSoft leading-snug">Design, engineer and integrate the system.</p>
          </motion.div>

          {/* 4. Ship (Bottom Left) */}
          <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="absolute bottom-[20%] left-[5%] -translate-x-4 text-center w-48 z-10">
            <span className="font-mono text-[10px] font-bold text-manuscript-copper block mb-1">04</span>
            <h4 className="heading-manuscript text-xl text-manuscript-ink mb-1">Ship</h4>
            <p className="text-[12px] text-manuscript-inkSoft leading-snug">Put it into the real world.</p>
          </motion.div>

          {/* 5. Learn (Top Left) */}
          <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="absolute top-[20%] left-[5%] -translate-x-4 text-center w-48 z-10">
            <span className="font-mono text-[10px] font-bold text-manuscript-copper block mb-1">05</span>
            <h4 className="heading-manuscript text-xl text-manuscript-ink mb-1">Learn</h4>
            <p className="text-[12px] text-manuscript-inkSoft leading-snug">Measure, improve and evolve.</p>
          </motion.div>
        </div>

        {/* ── Mobile/Tablet List Layout ─────────────────────────────────── */}
        <div className="lg:hidden space-y-8 relative">
          <div className="absolute left-[15px] top-0 bottom-0 w-px bg-manuscript-copper/20" />
          {methods.map((method, idx) => (
            <div key={method.number} className="relative pl-10">
              <div className="absolute left-[11px] top-1.5 w-2 h-2 rounded-full bg-manuscript-copper" />
              <span className="font-mono text-[10px] font-bold text-manuscript-copper block mb-1">{method.number}</span>
              <h4 className="heading-manuscript text-xl text-manuscript-ink mb-2">{method.title}</h4>
              <p className="text-[14px] text-manuscript-inkSoft">{method.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center border-t border-manuscript-parchmentDeep pt-12">
          <p className="font-manuscriptBody italic text-xl text-manuscript-ink">
            Understand deeply. Build deliberately. Improve continuously.
          </p>
        </div>
      </div>
    </section>
  );
}

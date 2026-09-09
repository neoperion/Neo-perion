import React from 'react';
import { motion } from 'framer-motion';

const principles = [
  {
    num: '01',
    title: 'Understand the problem in context.',
    body: 'Every challenge is shaped by the people, workflows, and constraints around it. Context determines what the right solution should be before writing code.',
  },
  {
    num: '02',
    title: 'Build for reality, not presentations.',
    body: 'Prototypes prove concepts, but production systems endure reality. We engineer software to survive scale, messy inputs, and critical production needs.',
  },
  {
    num: '03',
    title: 'Put software in the hands of real users.',
    body: 'Value is only proven when working software solves an actual bottleneck in daily operations. We test assumptions against real usage.',
  },
  {
    num: '04',
    title: 'Learn and iterate from what happens next.',
    body: 'The best engineering is never static. It evolves through close observation of how people interact with systems in the wild.',
  },
];

export function AboutOrigin() {
  return (
    <section id="origin" className="relative py-16 md:py-24 parchment-surface border-b border-manuscript-parchmentDeep font-sans">
      <div className="relative z-10 px-5 sm:px-6 md:px-12 lg:px-16 container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* ── Left Column: Editorial Narrative & Lineage ───────────────── */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <p className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-manuscript-copper mb-4">
                  01 · ORIGIN
                </p>
                <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-manuscript-ink tracking-tight">
                  AINCURU didn't start with a company.<br />
                  <span className="text-manuscript-rustDeep block mt-1">It started with a problem.</span>
                </h2>
              </div>

              <div className="space-y-4 text-manuscript-inkSoft text-base sm:text-[17px] leading-relaxed font-sans">
                <p>
                  We started by building — AI systems, data pipelines, web platforms, and hackathon prototypes.
                </p>
                <p>
                  Each build taught us what happens when ideas have to survive outside of a classroom, a demo, or a slide presentation. An idea is only as valuable as what happens when real people depend on it.
                </p>
                <p>
                  Over time, building through real constraints became an engineering philosophy.
                </p>
              </div>

              {/* Heritage Note */}
              <div className="pt-6 border-t border-manuscript-parchmentDeep/70">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-manuscript-copper shrink-0" />
                  <p className="font-sans text-xs sm:text-sm text-manuscript-inkMuted leading-relaxed">
                    <strong className="font-semibold text-manuscript-ink">Foundational Heritage:</strong> Previously developed as Neo Perion Solutions — now evolved into AINCURU with a dedicated focus on context-driven AI automation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: The 4 Operating Truths ───────────────── */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-6 sm:p-8 md:p-10 rounded-2xl bg-manuscript-parchmentLight/90 border border-manuscript-parchmentDeep/70 shadow-xs relative"
            >
              <div className="mb-6 pb-4 border-b border-manuscript-parchmentDeep/60 flex items-center justify-between">
                <span className="font-sans font-semibold text-xs tracking-[0.2em] uppercase text-manuscript-copper">
                  OPERATING PRINCIPLES
                </span>
                <span className="font-sans text-xs text-manuscript-inkMuted">
                  How We Think
                </span>
              </div>

              <div className="space-y-6">
                {principles.map((p) => (
                  <div key={p.num} className="group flex items-start gap-4">
                    <span className="font-sans font-bold text-sm text-manuscript-copper pt-0.5 shrink-0">
                      {p.num}
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-sans font-bold text-base sm:text-[17px] text-manuscript-ink leading-snug">
                        {p.title}
                      </h3>
                      <p className="font-sans text-sm text-manuscript-inkSoft leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}



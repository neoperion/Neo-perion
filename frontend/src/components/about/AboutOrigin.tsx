import React from 'react';
import { motion } from 'framer-motion';

export function AboutOrigin() {
  return (
    <section id="origin" className="relative py-16 md:py-32 overflow-hidden parchment-surface border-b border-manuscript-parchmentDeep">
      {/* ── Faint Technical Sketches Background ───────────────── */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(91,58,31,0.04) 25%, transparent 25%, transparent 75%, rgba(91,58,31,0.04) 75%, rgba(91,58,31,0.04)), 
            linear-gradient(45deg, rgba(91,58,31,0.04) 25%, transparent 25%, transparent 75%, rgba(91,58,31,0.04) 75%, rgba(91,58,31,0.04))
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-manuscript-copper mb-6">
                01 · ORIGIN
              </p>
              <h2 className="heading-manuscript leading-[1.1] text-manuscript-ink" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
                AINCURU didn't start with a company.<br />
                <span className="italic text-manuscript-rustDeep">It started with a problem.</span>
              </h2>
            </motion.div>
          </div>

          {/* Right Column: Body Copy Manuscript */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="manuscript-card p-8 md:p-12 relative"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-manuscript-copper/20 rounded-l-2xl" />
              
              <div className="space-y-6 font-manuscriptBody text-[16px] leading-[1.8] text-manuscript-inkSoft">
                <p>
                  We started by building.
                </p>
                <p>
                  AI projects. Data systems. Websites. Experiments. Hackathon prototypes. Small products. Client work.
                </p>
                <p>
                  Each project taught us something different — not only about technology, but about what happens when an idea has to work outside a classroom, a demo, or a presentation.
                </p>
                <p>
                  Over time, those projects became a way of thinking.
                </p>
                <div className="pl-6 py-2 my-6 border-l border-manuscript-copper/40 text-manuscript-ink italic">
                  <p className="mb-2">Understand the problem.</p>
                  <p className="mb-2">Build the system.</p>
                  <p className="mb-2">Put it in the hands of people.</p>
                  <p>Learn from what happens next.</p>
                </div>
                <p>
                  That foundation became <strong className="font-semibold text-manuscript-ink">Neo Perion Solutions</strong>.
                </p>
                <p>
                  AINCURU is the next chapter of that journey.
                </p>

                <div className="pt-8 mt-10 border-t border-manuscript-parchmentDeep">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-manuscript-copperMuted">
                    Previously developed as Neo Perion Solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

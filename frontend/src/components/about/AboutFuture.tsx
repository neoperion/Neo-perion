import React from 'react';
import { motion } from 'framer-motion';

export function AboutFuture() {
  return (
    <section className="py-16 md:py-32 parchment-surface border-b border-manuscript-parchmentDeep">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-manuscript-copper mb-6">
            07 · WHAT COMES NEXT
          </p>
          <h2 className="heading-manuscript text-4xl md:text-5xl leading-tight text-manuscript-ink mb-12">
            We're still early.<br/>
            <span className="italic text-manuscript-rustDeep">That's the point.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-manuscriptBody text-[18px] leading-[1.8] text-manuscript-inkSoft max-w-2xl mx-auto space-y-6"
        >
          <p>
            AINCURU is still being built.
          </p>
          <p>
            We are learning how to turn strong engineering into products that matter, how to use AI responsibly inside real systems, and how to build a company that can grow without losing the principles that started it.
          </p>
          
          <div className="py-8">
            <p className="font-manuscript text-2xl text-manuscript-ink mb-2">The ambition is simple:</p>
            <div className="text-manuscript-rust space-y-1 font-semibold italic text-lg">
              <p>Build better systems.</p>
              <p>Build better products.</p>
              <p>Build a better company.</p>
            </div>
          </div>

          <p>
            And keep learning as we go.
          </p>

          <div className="pt-12">
            <div className="w-12 h-px bg-manuscript-copper/40 mx-auto mb-4" />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-manuscript-copper">
              The next chapter is being built now.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

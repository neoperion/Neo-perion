import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function AboutFounderCTA() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-manuscript-rustDeep border-t border-b border-manuscript-rustDeep">
      {/* ── Background Elements ────────────────────────────────────── */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-manuscript-gold/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl relative z-10 w-full box-border">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-6 lg:col-span-5 w-full box-border"
          >
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] !text-manuscript-gold mb-6">
              08 · FOUNDER LETTER
            </p>
            <h2 className="heading-manuscript text-3xl md:text-5xl lg:text-6xl leading-tight mb-8 !text-manuscript-parchmentLight break-words">
              There is more<br />to the story.
            </h2>
            
            <div className="font-manuscriptBody text-[16px] md:text-[18px] leading-[1.8] !text-manuscript-parchment/90 space-y-6 mb-12">
              <p>
                Why start AINCURU? What are we trying to build?
              </p>
              <p>
                And why do we believe technology must always begin with context?
              </p>
            </div>

            <Link
              to="/company/founder-letter"
              className="group relative inline-flex w-full sm:w-auto justify-center items-center gap-3 border border-manuscript-gold/40 px-4 sm:px-8 py-4 font-manuscriptBody text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.2em] !text-manuscript-parchmentLight transition-all hover:border-manuscript-gold hover:bg-manuscript-gold/10 box-border"
            >
              <span className="text-center">Read the Founder Letter</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 !text-manuscript-gold" strokeWidth={2} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-6 lg:col-span-7 relative"
          >
            {/* Elegant framing around the image */}
            <div className="absolute -inset-4 border border-manuscript-gold/20 rounded-sm hidden md:block" />
            <div className="absolute -inset-8 border border-manuscript-gold/10 rounded-sm hidden lg:block" />
            
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-sm bg-manuscript-ink/50 shadow-2xl">
              <div className="absolute inset-0 bg-manuscript-gold/10 mix-blend-color z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-manuscript-rustDeep via-transparent to-transparent z-10 pointer-events-none opacity-80" />
              
              <img 
                src="/images/founder.jpg" 
                alt="Founder of AINCURU"
                className="w-full h-full object-cover filter grayscale-[30%] sepia-[10%] contrast-[1.1]"
              />
              
              <div className="absolute bottom-6 left-6 z-20">
                <p className="font-manuscript text-3xl !text-manuscript-parchmentLight leading-none mb-1">Vasantharaj S</p>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase !text-manuscript-gold font-bold">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

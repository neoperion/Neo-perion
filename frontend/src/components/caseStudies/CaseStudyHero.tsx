import React from 'react';
import { motion } from 'framer-motion';

export const CaseStudyHero: React.FC = () => {
  return (
    <section className="pt-36 pb-20 relative overflow-hidden parchment-surface border-b border-manuscript-parchmentDeep">
      {/* Engineering grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(91,58,31,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(91,58,31,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Copper warm glow — top left */}
      <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-manuscript-copper/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="chapter-eyebrow mb-6"
        >
          Our Work
        </motion.p>

        {/* Copper divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-manuscript-copper/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper/50" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-manuscript-copper/40" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="heading-manuscript text-4xl md:text-6xl lg:text-7xl mb-6"
        >
          Real World <br className="hidden md:block" />
          <span className="heading-manuscript--italic text-manuscript-copper">
            Impact &amp; Solutions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-manuscript-inkMuted max-w-2xl mx-auto font-manuscriptBody leading-relaxed"
        >
          Discover how we have transformed ideas into scalable digital products, AI systems, and intelligent automation solutions.
        </motion.p>
      </div>
    </section>
  );
};

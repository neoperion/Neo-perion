import React from 'react';
import { motion } from 'framer-motion';
import { HeroBadge } from './HeroBadge';
import { HeroActions } from './HeroActions';
import { HeroStats } from './HeroStats';
import { ThreeCanvas } from './ThreeCanvas';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background container for mobile or alternative designs */}
      <div className="absolute inset-0 z-0 pointer-events-none md:hidden">
        <ThreeCanvas />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="flex flex-col items-start max-w-2xl">
            <HeroBadge />
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6"
            >
              From Idea to Product <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-blue to-neo-highlight">
                Powered by AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
              className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed"
            >
              Neo Perion Solutions develops AI-powered software, SaaS products, automation systems, web applications, and digital platforms that help organizations scale faster.
            </motion.p>

            <HeroActions />

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.75 }}
              className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-slate-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-neo-blue" />
                AI First Company
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Product Engineering Experts
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Startup Friendly
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Enterprise Ready
              </div>
            </motion.div>

            {/* Stats */}
            <div className="mt-12 w-full">
              <HeroStats />
            </div>
          </div>

          {/* Right Column - 3D Canvas (Desktop Only) */}
          <div className="hidden lg:block relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/5 bg-[#050816]/50 backdrop-blur-sm">
            <ThreeCanvas />
          </div>

        </div>
      </div>
    </section>
  );
};

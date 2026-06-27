import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { homeData } from '@/data/homeData';

export const HeroActions: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
      className="flex flex-col sm:flex-row items-center gap-4 mt-8"
    >
      <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neo-blue hover:bg-neo-blue text-white font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2 group">
        {homeData.hero.primaryCta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
      <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-purple-400" />
        {homeData.hero.secondaryCta}
      </button>
    </motion.div>
  );
};

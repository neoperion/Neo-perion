import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { homeData } from '@/data/homeData';

export const HeroStats: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10 mt-12"
    >
      {homeData.stats.map((stat, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="text-3xl md:text-4xl font-display font-bold text-neo-gradient flex items-center">
            <AnimatedCounter end={stat.value} duration={2000} suffix={stat.suffix} />
          </div>
          <p className="text-neo-soft text-sm font-medium">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  );
};

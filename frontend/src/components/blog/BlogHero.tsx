import React from 'react';
import { motion } from 'framer-motion';

export const BlogHero: React.FC = () => {
  return (
    <div className="pt-32 pb-16 relative overflow-hidden bg-[#050816] text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-900 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-neo-blue font-bold tracking-widest uppercase mb-4 text-sm"
        >
          NEO PERION BLOG
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight"
        >
          Insights, AI & <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-blue to-blue-500">
            Product Engineering
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
        >
          Thoughts, guides, and industry insights from the Neo Perion engineering team.
        </motion.p>
      </div>
    </div>
  );
};

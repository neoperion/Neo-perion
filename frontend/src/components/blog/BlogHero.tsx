import React from 'react';
import { motion } from 'framer-motion';

interface BlogHeroProps {
  theme?: 'light' | 'dark';
}

export const BlogHero: React.FC<BlogHeroProps> = ({ theme = 'dark' }) => {
  if (theme === 'light') {
    return (
      <section className="relative border-b border-hairline bg-canvas pb-14 pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,#D7DCE5_1px,transparent_1px)] bg-[size:28px_28px] opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="relative mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[12px] font-semibold uppercase tracking-[0.08em] text-brand"
          >
            Blog &amp; Insights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 max-w-3xl font-display text-[clamp(40px,6vw,68px)] font-bold leading-[1.02] tracking-[-0.02em] text-ink"
          >
            Engineering notes on <span className="text-brand">AI, products &amp; scale</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 max-w-xl text-[17px] leading-relaxed text-body"
          >
            Deep-dives, field notes, and guides from the Neo Perion engineering team — what we're
            building, and what we've learned shipping it to production.
          </motion.p>
        </div>
      </section>
    );
  }

  // Dark (mobile / legacy)
  return (
    <div className="relative overflow-hidden bg-[#050816] pb-16 pt-36 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-900 to-transparent" />
      <div className="container relative z-10 mx-auto px-4">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-neo-blue">NEO PERION BLOG</p>
        <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
          Insights, AI & <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-neo-blue to-blue-500 bg-clip-text text-transparent">
            Product Engineering
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400 md:text-xl">
          Thoughts, guides, and industry insights from the Neo Perion engineering team.
        </p>
      </div>
    </div>
  );
};

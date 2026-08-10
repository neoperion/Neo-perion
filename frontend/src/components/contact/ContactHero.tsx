import React from 'react';
import { motion } from 'framer-motion';

interface ContactHeroProps {
  theme?: 'light' | 'dark';
}

export function ContactHero({ theme = 'dark' }: ContactHeroProps) {
  const isLight = theme === 'light';

  if (isLight) {
    return (
      <section className="relative overflow-hidden parchment-surface pt-36 pb-24 border-b border-manuscript-parchmentDeep">
        {/* Engineering grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(91,58,31,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(91,58,31,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Copper warm glow — centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-manuscript-copper/4 blur-[160px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-8 lg:px-16 text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="chapter-eyebrow mb-6"
          >
            Contact Us
          </motion.p>

          {/* Copper divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-manuscript-copper/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-manuscript-copper/40" />
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.82, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="heading-manuscript text-[clamp(2.6rem,6vw,5.5rem)] leading-none text-manuscript-ink"
            >
              Let's build something
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.82, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="heading-manuscript--italic text-[clamp(2.6rem,6vw,5.5rem)] leading-none text-manuscript-copper"
            >
              extraordinary.
            </motion.h1>
          </div>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-[17px] leading-relaxed text-manuscript-inkMuted max-w-xl mx-auto font-manuscriptBody"
          >
            Whether you need a full product team or an AI automation strategy, we're ready to help.
            Fill out the form or book a call directly.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-14 flex items-center justify-center gap-10 md:gap-16 pt-10 border-t border-manuscript-parchmentDeep"
          >
            {[
              { num: '< 24h',  label: 'Response time'  },
              { num: '10+',    label: 'Projects shipped' },
              { num: '98%',    label: 'Client satisfaction' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="heading-manuscript text-[2rem] text-manuscript-ink mb-2">{s.num}</div>
                <div className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-manuscript-copperMuted">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // Dark legacy (mobile)
  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] pt-32 pb-20 lg:pt-40 lg:pb-28">

      {/* Orange radial glow — bottom centre */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 110%, rgba(247,126,13,0.13) 0%, transparent 70%), radial-gradient(40% 35% at 80% 0%, rgba(247,126,13,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Orange top frame line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-[#F77E0D]"
      />

      {/* Subtle grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(247,126,13,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(247,126,13,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-8 lg:px-16 text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#F77E0D]"
        >
          Contact Us
        </motion.p>

        {/* Headline */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.82, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-[0.90] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)' }}
          >
            Let's build something
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.82, delay: 0.60, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-[0.90] tracking-tight text-[#F77E0D]"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)' }}
          >
            extraordinary.
          </motion.h1>
        </div>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.82 }}
          className="text-[15px] leading-relaxed text-neutral-400 max-w-xl mx-auto"
        >
          Whether you need a full product team or an AI automation strategy, we're ready to help.
          Fill out the form or book a call directly.
        </motion.p>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-12 flex items-center justify-center gap-10 md:gap-16"
        >
          {[
            { num: '< 24h',  label: 'Response time'  },
            { num: '10+',    label: 'Projects shipped' },
            { num: '98%',    label: 'Client satisfaction' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-[1.5rem] font-black leading-none text-white mb-1">{s.num}</div>
              <div className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-600">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

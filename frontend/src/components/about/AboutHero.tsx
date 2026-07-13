import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export function AboutHero() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ── Full-bleed video ─────────────────────────────────── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/7565824-hd_2048_1080_25fps.mp4"
      />

      {/* ── Gradient overlays (identical to PortfolioHero) ───── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, #0A0A0B 0%, rgba(10,10,11,0.80) 38%, rgba(10,10,11,0.25) 65%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(10,10,11,0.65) 0%, rgba(10,10,11,0.20) 50%, transparent 100%)',
        }}
      />

      {/* ── Orange top frame line ────────────────────────────── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-0 left-0 right-0 h-[2px] origin-left z-20 bg-[#F77E0D]"
      />

      {/* ── Content — absolutely anchored bottom-left ─────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 pb-16 md:px-16 md:pb-16 lg:px-24 lg:pb-20">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#F77E0D]"
        >
          Our Story
        </motion.p>

        {/* Headline — two-line clip-reveal */}
        <div className="overflow-hidden mb-0.5">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.82, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-[0.88] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 6rem)' }}
          >
            We build things
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-7">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.82, delay: 0.64, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-[0.88] tracking-tight text-[#F77E0D]"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 6rem)' }}
          >
            that last.
          </motion.h1>
        </div>

        {/* Sub-copy + CTAs — single row, identical to PortfolioHero */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10"
        >
          <p
            className="text-[14px] leading-[1.65] text-neutral-400"
            style={{ maxWidth: '26ch' }}
          >
            Engineers first, consultants never. Senior engineers, production-grade delivery.
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-[#F77E0D] px-6 py-2.5 text-[13px] font-bold text-[#0A0A0B] transition-all duration-200 hover:bg-[#ff8f20]"
            >
              Our Work
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              to="/contact"
              className="text-[13px] font-medium text-white/45 transition-colors duration-200 hover:text-white/80"
            >
              Start a project →
            </Link>
          </div>
        </motion.div>

        {/* Thin divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-7 mb-6 h-px bg-white/[0.08]"
        />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="flex gap-8 md:gap-14"
        >
          {[
            { num: '5+',  label: 'Years Building'    },
            { num: '50+', label: 'Products Shipped'  },
            { num: '30+', label: 'Happy Clients'     },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="mb-0.5 font-display text-[1.6rem] font-black leading-none text-white">
                {stat.num}
              </div>
              <div className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator — bottom right ─────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 right-8 z-20 flex flex-col items-center gap-2 md:right-14"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={15} className="text-white/20" />
        </motion.div>
        <span
          className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-white/15"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
      </motion.div>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export function AboutHero() {
  return (
    <div className="relative overflow-hidden parchment-surface border-b border-manuscript-parchmentDeep pt-28 md:pt-36 pb-16 md:pb-20">
      {/* ── Engineering grid / Faint drawing ──────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(circle at 70% 30%, rgba(168,82,30,0.03) 0%, transparent 60%),
            linear-gradient(rgba(91,58,31,0.035) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(91,58,31,0.035) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 60px 60px, 60px 60px',
        }}
      />
      {/* ── Copper warm glow ─────────────────────────────────── */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-manuscript-copper/4 blur-[120px] rounded-full pointer-events-none opacity-60" />

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="relative z-10 px-4 sm:px-6 md:px-16 lg:px-24 container mx-auto max-w-7xl">

        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-end">
          <div className="lg:col-span-7">
            {/* Metadata Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-manuscript-copper">
                AINCURU
              </span>
              <span className="h-px w-6 sm:w-8 bg-manuscript-copper/30" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-manuscript-copperMuted">
                COMPANY RECORD · 001
              </span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-1">
              <motion.h1
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.82, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="heading-manuscript leading-[1.05]"
                style={{ fontSize: 'clamp(2.25rem, 6vw, 5.5rem)' }}
              >
                Built from curiosity.
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8 sm:mb-10">
              <motion.h1
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.82, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="heading-manuscript leading-[1.05] heading-manuscript--italic text-manuscript-copper"
                style={{ fontSize: 'clamp(2.25rem, 6vw, 5.5rem)' }}
              >
                Shaped by engineering.
              </motion.h1>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="lg:col-span-5 pb-2"
          >
            <p className="font-manuscriptBody text-[16px] sm:text-[17px] leading-[1.75] text-manuscript-inkMuted mb-6">
              <strong className="font-semibold text-manuscript-ink">AINCURU</strong> is a founder-led software and AI engineering company building products, intelligent systems, and digital platforms for businesses that want to move from idea to something real.
            </p>

            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-manuscript-copperMuted mb-8 sm:mb-10">
              AINCURU LLP · CHENNAI, INDIA
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
              <Link
                to="/portfolio"
                className="btn-manuscript-primary group"
              >
                Explore our work
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <a
                href="#origin"
                className="font-manuscriptBody font-semibold text-[14px] text-manuscript-copper transition-colors duration-200 hover:text-manuscript-rust flex items-center gap-1.5"
              >
                Read our story
                <ArrowDown size={14} />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

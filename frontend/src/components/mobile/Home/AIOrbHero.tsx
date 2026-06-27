import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useHaptic } from '@/hooks/use-haptic';

export interface AIOrbHeroProps {
  badge?: string;
  headline: React.ReactNode;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

/* ─── Animated Aurora Mesh ─── */
function AuroraMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Blob 1 — top-left, soft blue */}
      <motion.div
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -15, 10, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 -left-16 w-[260px] h-[260px] rounded-full bg-gradient-to-br from-orange-200/40 to-orange-300/30 blur-[80px]"
      />
      {/* Blob 2 — center-right, lavender */}
      <motion.div
        animate={{
          x: [0, -15, 10, 0],
          y: [0, 15, -20, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -right-10 w-[220px] h-[220px] rounded-full bg-gradient-to-br from-violet-200/40 to-purple-200/25 blur-[80px]"
      />
    </div>
  );
}

/* ─── Main Hero (Pure Typography, no heavy visual assets) ─── */
export function AIOrbHero({
  badge = 'AI-First Product Engineering',
  headline,
  subheadline,
  primaryCta = { label: 'Book a strategy call', href: '/contact' },
  secondaryCta = { label: 'See our work', href: '#case-studies' },
}: AIOrbHeroProps) {
  const haptic = useHaptic();

  const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(3px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 260, damping: 22 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="relative w-full min-h-[80vh] flex flex-col justify-center bg-neutral-900 overflow-hidden px-6 pt-24 pb-12 border-b border-neutral-800"
    >
      {/* Subtle dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(circle, #cbd5e1 0.8px, transparent 0.8px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Aurora ambient glow */}
      <AuroraMesh />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neo-blue opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neo-blue" />
            </span>
            {badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-[clamp(32px,8vw,36px)] font-black text-white tracking-tight leading-[1.12] mb-4 font-display max-w-sm"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-neutral-400 text-[14px] leading-relaxed max-w-xs mb-8 font-semibold"
        >
          {subheadline}
        </motion.p>

        {/* Action Stack (ONE primary CTA button full-width 48px height, and link below) */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-4 w-full max-w-xs">
          <Link
            to={primaryCta.href}
            onClick={() => haptic('medium')}
            className="group relative w-full h-[48px] rounded-xl bg-slate-900 text-white font-bold text-[14px] flex items-center justify-center gap-2 shadow-md active:scale-[0.97] transition-transform"
          >
            {primaryCta.label}
            <ArrowRight size={14} strokeWidth={2.5} />
          </Link>

          <a
            href={secondaryCta.href}
            onClick={(e) => {
              if (secondaryCta.href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(secondaryCta.href)?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-[13px] font-bold text-neutral-400 hover:text-neo-blue transition-colors py-2"
          >
            {secondaryCta.label}
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
}

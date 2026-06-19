import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useHaptic } from '@/hooks/use-haptic';
import { ThreeCanvas } from '@/components/features/home/ThreeCanvas';

export interface AIOrbHeroProps {
  badge?: string;
  headline: React.ReactNode;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  trustItems?: string[];
  secondaryCta?: { label: string; href: string };
}

/* ─── Animated Aurora Mesh ─── */
function AuroraMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Blob 1 — top-left, soft blue */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 15, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 -left-16 w-[280px] h-[280px] rounded-full bg-gradient-to-br from-sky-200/60 to-blue-300/40 blur-[80px]"
      />
      {/* Blob 2 — center-right, lavender */}
      <motion.div
        animate={{
          x: [0, -25, 20, 0],
          y: [0, 20, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -right-10 w-[240px] h-[240px] rounded-full bg-gradient-to-br from-violet-200/50 to-purple-200/30 blur-[80px]"
      />
      {/* Blob 3 — bottom, cyan accent */}
      <motion.div
        animate={{
          x: [0, 15, -15, 0],
          y: [0, -20, 10, 0],
          scale: [1, 1.1, 0.92, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-16 left-1/4 w-[220px] h-[220px] rounded-full bg-gradient-to-tr from-cyan-100/50 to-sky-200/30 blur-[80px]"
      />
    </div>
  );
}

/* ─── Main Hero ─── */
export function AIOrbHero({
  badge = 'AI-First Engineering',
  headline,
  subheadline,
  primaryCta = { label: 'Book Free Consultation', href: '/contact' },
}: AIOrbHeroProps) {
  const haptic = useHaptic();

  /* Stagger container */
  const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
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
      className="relative w-full min-h-[92vh] flex flex-col justify-center bg-white overflow-hidden"
    >
      {/* ── Layer 1: Subtle dot grid ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #94a3b8 0.8px, transparent 0.8px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* ── Layer 2: Aurora ambient glow ── */}
      <AuroraMesh />

      {/* ── Layer 3: 3D Crystal Stone — atmospheric background artifact ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none z-[2] animate-crystal-float"
        style={{
          top: '10%',
          right: '-10%',
          width: '380px',
          height: '380px',
        }}
      >
        {/* Ambient radial glow behind stone */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,255,0.38), transparent 70%)',
            width: '300px',
            height: '300px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(20px)',
          }}
        />
        {/* WebGL 3D Stone Canvas */}
        <div className="absolute inset-0 opacity-[0.55]">
          <ThreeCanvas />
        </div>
      </div>

      {/* ── Layer 4: Content (always the visual priority) ── */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-16 pb-10">
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-slate-900/10">
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
          className="text-[clamp(36px,10vw,52px)] font-black text-center text-slate-900 tracking-tight leading-[1.08] mb-5 font-display max-w-md"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-center text-[15px] sm:text-base text-slate-700 leading-relaxed max-w-sm mb-8 font-medium"
        >
          {subheadline}
        </motion.p>

        {/* ── Layer 5: CTA Buttons ── */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 w-full max-w-xs mb-12">
          <Link
            to={primaryCta.href}
            onClick={() => haptic('medium')}
            className="group relative w-full h-[52px] rounded-2xl bg-slate-900 text-white font-bold text-[15px] flex items-center justify-center gap-2 overflow-hidden shadow-xl shadow-slate-900/15 active:scale-[0.97] transition-transform"
          >
            {/* Hover gradient sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-neo-blue via-purple-500 to-neo-blue bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-[gradient-x_3s_linear_infinite] transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-2">
              {primaryCta.label}
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>

          <Link
            to="/services"
            className="w-full h-[52px] rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200 text-slate-700 font-bold text-[15px] flex items-center justify-center gap-2 active:scale-[0.97] transition-all hover:border-slate-300 hover:bg-white"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Trust Tags */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {['AI First Company', 'Product Engineers', 'Startup Friendly', 'Enterprise Ready'].map(
            (tag, i) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500 shadow-sm"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor: ['#2563FF', '#8B5CF6', '#10B981', '#F59E0B'][i],
                  }}
                />
                {tag}
              </span>
            ),
          )}
        </motion.div>

      </div>
    </motion.section>
  );
}

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Project } from '@/data/projectsData';
import { ArrowUpRight } from 'lucide-react';

// ─── GRID CONFIG ──────────────────────────────────────────────────────────────
interface BentoSlotConfig {
  gridClass: string;
  heightClass: string;
  animVariant: 'slideUp' | 'slideLeft' | 'slideRight' | 'fadeScale';
  wide?: boolean;
}

// No row-span — every card has an explicit height so the grid fills gap-free.
// Pattern: 7+5 → 4+4+4 → 5+7 → 12 → 6+6 → repeat
const BENTO_CONFIGS: BentoSlotConfig[] = [
  // Row A — 7+5
  { gridClass: 'col-span-12 md:col-span-7', heightClass: 'h-[460px]', animVariant: 'slideLeft' },
  { gridClass: 'col-span-12 md:col-span-5', heightClass: 'h-[460px]', animVariant: 'slideRight' },
  // Row B — thirds
  { gridClass: 'col-span-12 md:col-span-4', heightClass: 'h-[340px]', animVariant: 'slideUp' },
  { gridClass: 'col-span-12 md:col-span-4', heightClass: 'h-[340px]', animVariant: 'fadeScale' },
  { gridClass: 'col-span-12 md:col-span-4', heightClass: 'h-[340px]', animVariant: 'slideUp' },
  // Row C — reversed 5+7
  { gridClass: 'col-span-12 md:col-span-5', heightClass: 'h-[400px]', animVariant: 'slideLeft' },
  { gridClass: 'col-span-12 md:col-span-7', heightClass: 'h-[400px]', animVariant: 'slideRight', wide: true },
  // Row D — full-width cinematic
  { gridClass: 'col-span-12',               heightClass: 'h-[300px]', animVariant: 'slideUp',    wide: true },
  // Row E — halves
  { gridClass: 'col-span-12 md:col-span-6', heightClass: 'h-[380px]', animVariant: 'slideLeft' },
  { gridClass: 'col-span-12 md:col-span-6', heightClass: 'h-[380px]', animVariant: 'slideRight' },
  // Fallback
  { gridClass: 'col-span-12 md:col-span-4', heightClass: 'h-[320px]', animVariant: 'slideUp' },
];

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────
const ANIM_VARIANTS: Record<BentoSlotConfig['animVariant'], Variants> = {
  slideLeft: {
    hidden:  { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0,   transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  },
  slideRight: {
    hidden:  { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0,  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  },
  slideUp: {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0,  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
  },
  fadeScale: {
    hidden:  { opacity: 0, scale: 0.93 },
    visible: { opacity: 1, scale: 1,   transition: { duration: 0.65, ease: 'easeOut' } },
  },
};

// ─── CARD COMPONENT ───────────────────────────────────────────────────────────
interface BentoCardProps {
  project: Project;
  slotIndex: number;
  config: BentoSlotConfig;
}

const BentoCard: React.FC<BentoCardProps> = ({ project, slotIndex, config }) => {
  const ref      = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    if (videoRef.current && project.video) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };
  const handleMouseLeave = () => {
    if (videoRef.current && project.video) videoRef.current.pause();
  };

  const variant = ANIM_VARIANTS[config.animVariant];

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`${config.gridClass} ${config.heightClass} group cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/portfolio/${project.slug}`)}
    >
      {/* ── Card shell ──────────────────────────────────────── */}
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0D0D0E] border border-white/[0.07] transition-colors duration-500 group-hover:border-[#F77E0D]/30">

        {/* ── Media ─────────────────────────────────────────── */}
        <img
          src={project.thumbnail}
          alt={project.title}
          draggable="false"
          className={`
            absolute inset-0 w-full h-full object-cover pointer-events-none z-10
            transition-transform duration-700 ease-out group-hover:scale-[1.04]
            ${project.video ? 'transition-opacity duration-500 group-hover:opacity-0' : ''}
          `}
        />
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}

        {/* ── Base gradient — creates readable text ground ──── */}
        {config.wide ? (
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-[#0A0A0B]/95 via-[#0A0A0B]/55 to-transparent" />
        ) : (
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/35 to-[#0A0A0B]/08" />
        )}

        {/* ── Hover vignette — additional depth on hover ────── */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-[#0A0A0B]/22 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* ── Top bar: project number + arrow ───────────────── */}
        <div className="absolute top-0 left-0 right-0 flex items-start justify-between px-5 pt-5 z-30 pointer-events-none">
          <span className="font-mono text-[10px] font-semibold text-white/22 tracking-[0.22em] tabular-nums select-none">
            {String(slotIndex + 1).padStart(2, '0')}
          </span>

          {/* Arrow — slides down into view on hover */}
          <div className="w-9 h-9 rounded-full flex items-center justify-center
            bg-white/[0.08] backdrop-blur-sm text-white
            opacity-0 -translate-y-2
            group-hover:opacity-100 group-hover:translate-y-0
            group-hover:bg-[#F77E0D] group-hover:text-[#0A0A0B]
            transition-all duration-300 ease-out">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* ── Text — wide layout (side): text anchored left ─── */}
        {config.wide && (
          <div className="absolute inset-0 z-30 flex flex-col justify-center px-8 md:px-12 pointer-events-none max-w-[52%]">
            {/* Category */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F77E0D] flex-shrink-0" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-white/50">
                {project.industry}
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-display font-black text-white leading-[1.06] tracking-tight"
              style={{ fontSize: 'clamp(1.45rem, 2.8vw, 2.4rem)' }}
            >
              {project.title}
            </h3>

            {/* "View project" — slides up on hover */}
            <div className="mt-5 flex items-center gap-2.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-350 ease-out">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#F77E0D]">
                View Project
              </span>
              <span className="h-px w-8 bg-[#F77E0D]/45" />
            </div>
          </div>
        )}

        {/* ── Text — standard layout: text anchored bottom ──── */}
        {!config.wide && (
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 md:px-6 md:pb-6 z-30 pointer-events-none">
            {/* Category dot + label */}
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F77E0D] flex-shrink-0" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                {project.industry}
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-display font-black text-white leading-[1.08] tracking-tight"
              style={{ fontSize: 'clamp(1.05rem, 2vw, 1.75rem)' }}
            >
              {project.title}
            </h3>
          </div>
        )}

        {/* ── Bottom accent bar — sweeps in from left on hover ─ */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F77E0D] z-40 pointer-events-none origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
      </div>
    </motion.div>
  );
};

export { BentoCard };
export type { BentoSlotConfig };
export { BENTO_CONFIGS };

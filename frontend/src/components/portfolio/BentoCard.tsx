import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Project } from '@/data/projectsData';
import { ArrowUpRight } from 'lucide-react';

const COPPER = '#A8521E';

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
  // Row A — 7+5 (Desktop) -> 12 + 2x6 (Mobile creates a dynamic feel)
  { gridClass: 'col-span-12 md:col-span-7', heightClass: 'h-[280px] md:h-[460px]', animVariant: 'fadeScale' },
  { gridClass: 'col-span-6 md:col-span-5', heightClass: 'h-[200px] md:h-[460px]', animVariant: 'slideUp' },
  // Row B — thirds
  { gridClass: 'col-span-6 md:col-span-4', heightClass: 'h-[200px] md:h-[340px]', animVariant: 'slideUp' },
  { gridClass: 'col-span-6 md:col-span-4', heightClass: 'h-[200px] md:h-[340px]', animVariant: 'fadeScale' },
  { gridClass: 'col-span-6 md:col-span-4', heightClass: 'h-[200px] md:h-[340px]', animVariant: 'slideUp' },
  // Row C — reversed 5+7
  { gridClass: 'col-span-12 md:col-span-5', heightClass: 'h-[280px] md:h-[400px]', animVariant: 'fadeScale' },
  { gridClass: 'col-span-12 md:col-span-7', heightClass: 'h-[240px] md:h-[400px]', animVariant: 'slideUp', wide: true },
  // Row D — full-width cinematic
  { gridClass: 'col-span-12',               heightClass: 'h-[220px] md:h-[300px]', animVariant: 'fadeScale',    wide: true },
  // Row E — halves
  { gridClass: 'col-span-6 md:col-span-6', heightClass: 'h-[240px] md:h-[380px]', animVariant: 'slideUp' },
  { gridClass: 'col-span-6 md:col-span-6', heightClass: 'h-[240px] md:h-[380px]', animVariant: 'slideUp' },
  // Fallback
  { gridClass: 'col-span-12 md:col-span-4', heightClass: 'h-[240px] md:h-[320px]', animVariant: 'slideUp' },
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
      {/* ── Card shell — dark "case file" on parchment ──────────────────────── */}
      <div
        className="relative w-full h-full rounded-xl overflow-hidden border transition-colors duration-500"
        style={{ background: '#0D0D0E', borderColor: 'rgba(168,82,30,0.18)' }}
        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = `${COPPER}50`)}
        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(168,82,30,0.18)')}
      >

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
            crossOrigin="anonymous"
            muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}

        {/* ── Base gradient — creates readable text ground ──── */}
        {config.wide ? (
          <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(11,10,8,0.95) 0%, rgba(11,10,8,0.55) 50%, transparent 100%)' }} />
        ) : (
          <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(11,10,8,0.98) 0%, rgba(11,10,8,0.35) 55%, rgba(11,10,8,0.08) 100%)' }} />
        )}

        {/* ── Hover vignette ────── */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'rgba(11,10,8,0.22)' }} />

        {/* ── Top bar: project number + arrow ───────────────── */}
        <div className="absolute top-0 left-0 right-0 flex items-start justify-between px-5 pt-5 z-30 pointer-events-none">
          <span className="font-mono text-[10px] font-semibold tracking-[0.22em] tabular-nums select-none" style={{ color: 'rgba(240,232,216,0.25)' }}>
            {String(slotIndex + 1).padStart(2, '0')}
          </span>

          {/* Arrow — slides down into view on hover */}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out"
            style={{ background: COPPER, color: '#F0E8D8' }}
          >
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* ── Text — wide layout (side): text anchored left ─── */}
        {config.wide && (
          <div className="absolute inset-0 z-30 flex flex-col justify-center px-5 md:px-12 pointer-events-none max-w-[80%] md:max-w-[52%]">
            {/* Category */}
            <div className="flex items-center gap-1.5 md:gap-2 mb-3 md:mb-4">
              <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full flex-shrink-0" style={{ background: COPPER }} />
              <span className="font-mono text-[8px] md:text-[9px] font-bold uppercase tracking-[0.22em]" style={{ color: 'rgba(240,232,216,0.55)' }}>
                {project.industry}
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-display font-black leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(1.15rem, 3.5vw, 2.4rem)', color: '#F0E8D8' }}
            >
              {project.title}
            </h3>

            {/* "View project" — slides up on hover */}
            <div className="mt-3 md:mt-5 flex items-center gap-2 md:gap-2.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-350 ease-out">
              <span className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: COPPER }}>
                View Project
              </span>
              <span className="h-px w-6 md:w-8" style={{ background: `${COPPER}55` }} />
            </div>
          </div>
        )}

        {/* ── Text — standard layout: text anchored bottom ──── */}
        {!config.wide && (
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 md:px-6 md:pb-6 z-30 pointer-events-none">
            {/* Category dot + label */}
            <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-2.5">
              <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full flex-shrink-0" style={{ background: COPPER }} />
              <span className="font-mono text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(240,232,216,0.55)' }}>
                {project.industry}
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-display font-black leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(0.95rem, 2vw, 1.75rem)', color: '#F0E8D8' }}
            >
              {project.title}
            </h3>
          </div>
        )}

        {/* ── Bottom copper accent bar — sweeps in from left on hover ─ */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] z-40 pointer-events-none origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
          style={{ background: COPPER }}
        />
      </div>
    </motion.div>
  );
};

export { BentoCard };
export type { BentoSlotConfig };
export { BENTO_CONFIGS };

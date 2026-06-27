import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '@/data/projectsData';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

// ─── BENTO SLOT CONFIG ─────────────────────────────────────────────────────────
// Every slot has a completely unique character: size, text layout, animation, hover style.
interface BentoSlotConfig {
  // CSS grid span classes (desktop)
  gridClass: string;
  // Minimum height on desktop
  minHeight: string;
  // Framer motion animation variant key
  animVariant: 'slideLeft' | 'slideRight' | 'slideUp' | 'scaleIn' | 'rotateFade' | 'flipUp' | 'zoomSweep';
  // Where the title text lives inside the card
  textPosition: 'bottomLeft' | 'bottomCenter' | 'centerOverlay' | 'topLeft' | 'sideLeft';
  // Overlay direction
  overlay: 'bottomUp' | 'topDown' | 'leftRight' | 'radial' | 'dark';
  // Accent color class for the industry tag
  accent: string;
  // Bold number shown as a decorative element
  decorNum: string;
}

const BENTO_CONFIGS: BentoSlotConfig[] = [
  // 0 — HERO: 8/12 wide, tall. Slides from left.
  {
    gridClass: 'col-span-12 md:col-span-8 row-span-2',
    minHeight: '520px',
    animVariant: 'slideLeft',
    textPosition: 'bottomLeft',
    overlay: 'bottomUp',
    accent: 'bg-orange-500/20 text-orange-300 border-orange-500/20',
    decorNum: '01',
  },
  // 1 — PORTRAIT right-top. Slides from right.
  {
    gridClass: 'col-span-6 md:col-span-4 row-span-1',
    minHeight: '250px',
    animVariant: 'slideRight',
    textPosition: 'topLeft',
    overlay: 'topDown',
    accent: 'bg-purple-500/20 text-purple-300 border-purple-500/20',
    decorNum: '02',
  },
  // 2 — PORTRAIT right-bottom. Scale in.
  {
    gridClass: 'col-span-6 md:col-span-4 row-span-1',
    minHeight: '250px',
    animVariant: 'scaleIn',
    textPosition: 'bottomCenter',
    overlay: 'radial',
    accent: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/20',
    decorNum: '03',
  },
  // 3 — MEDIUM left. Flip up.
  {
    gridClass: 'col-span-6 md:col-span-4 row-span-1',
    minHeight: '280px',
    animVariant: 'flipUp',
    textPosition: 'centerOverlay',
    overlay: 'dark',
    accent: 'bg-orange-500/20 text-orange-300 border-orange-500/20',
    decorNum: '04',
  },
  // 4 — CINEMATIC wide. Zoom sweep.
  {
    gridClass: 'col-span-12 md:col-span-8 row-span-1',
    minHeight: '280px',
    animVariant: 'zoomSweep',
    textPosition: 'sideLeft',
    overlay: 'leftRight',
    accent: 'bg-pink-500/20 text-pink-300 border-pink-500/20',
    decorNum: '05',
  },
  // 5 — TALL portrait left. Rotate fade.
  {
    gridClass: 'col-span-6 md:col-span-5 row-span-2',
    minHeight: '560px',
    animVariant: 'rotateFade',
    textPosition: 'bottomLeft',
    overlay: 'bottomUp',
    accent: 'bg-amber-500/20 text-amber-300 border-amber-500/20',
    decorNum: '06',
  },
  // 6 — SMALL top right. Slide up.
  {
    gridClass: 'col-span-6 md:col-span-4 row-span-1',
    minHeight: '270px',
    animVariant: 'slideUp',
    textPosition: 'bottomLeft',
    overlay: 'dark',
    accent: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/20',
    decorNum: '07',
  },
  // 7 — SMALL bottom right. Scale in.
  {
    gridClass: 'col-span-6 md:col-span-3 row-span-1',
    minHeight: '270px',
    animVariant: 'scaleIn',
    textPosition: 'bottomCenter',
    overlay: 'radial',
    accent: 'bg-orange-500/20 text-orange-300 border-orange-500/20',
    decorNum: '08',
  },
  // 8 — FULL-WIDTH panoramic. Slide left.
  {
    gridClass: 'col-span-12 row-span-1',
    minHeight: '320px',
    animVariant: 'slideLeft',
    textPosition: 'sideLeft',
    overlay: 'leftRight',
    accent: 'bg-rose-500/20 text-rose-300 border-rose-500/20',
    decorNum: '09',
  },
  // 9 — SQUARE accent. Rotate fade.
  {
    gridClass: 'col-span-6 md:col-span-4 row-span-1',
    minHeight: '300px',
    animVariant: 'rotateFade',
    textPosition: 'centerOverlay',
    overlay: 'dark',
    accent: 'bg-teal-500/20 text-teal-300 border-teal-500/20',
    decorNum: '10',
  },
  // 10+ fallback — alternating medium cards
  {
    gridClass: 'col-span-6 md:col-span-4 row-span-1',
    minHeight: '260px',
    animVariant: 'slideUp',
    textPosition: 'bottomLeft',
    overlay: 'bottomUp',
    accent: 'bg-orange-500/20 text-orange-300 border-orange-500/20',
    decorNum: '??',
  },
];

// ─── ANIMATION VARIANTS ────────────────────────────────────────────────────────
const ANIM_VARIANTS: Record<BentoSlotConfig['animVariant'], Variants> = {
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] } },
  },
  rotateFade: {
    hidden: { opacity: 0, rotate: -4, scale: 0.95 },
    visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  },
  flipUp: {
    hidden: { opacity: 0, rotateX: 20, y: 40 },
    visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
  },
  zoomSweep: {
    hidden: { opacity: 0, scale: 1.08, filter: 'blur(8px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.9, ease: 'easeOut' } },
  },
};

// ─── OVERLAY STYLES ────────────────────────────────────────────────────────────
const OVERLAY_STYLES: Record<BentoSlotConfig['overlay'], string> = {
  bottomUp: 'bg-gradient-to-t from-black/95 via-black/40 to-transparent',
  topDown: 'bg-gradient-to-b from-black/80 via-black/20 to-transparent',
  leftRight: 'bg-gradient-to-r from-black/95 via-black/50 to-transparent',
  radial: 'bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.3)_60%,transparent_100%)]',
  dark: 'bg-black/55',
};

// ─── BENTO CARD ────────────────────────────────────────────────────────────────
interface BentoCardProps {
  project: Project;
  slotIndex: number;
  config: BentoSlotConfig;
}

const BentoCard: React.FC<BentoCardProps> = ({ project, slotIndex, config }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const videoRef = useRef<HTMLVideoElement>(null);

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
      className={`${config.gridClass} relative group cursor-pointer`}
      style={{ minHeight: config.minHeight }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/portfolio/${project.slug}`} className="block w-full h-full absolute inset-0">
        {/* ── Card Container ──────────────────────────────────── */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/60 transition-all duration-700 group-hover:border-white/20 group-hover:shadow-white/5">

          {/* Thumbnail */}
          <img
            src={project.thumbnail}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${project.video ? 'group-hover:opacity-0' : ''} z-10`}
          />

          {/* Video on hover */}
          {project.video && (
            <video
              ref={videoRef}
              src={project.video}
              muted loop playsInline
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-0 group-hover:opacity-100 z-0"
            />
          )}

          {/* Overlay */}
          <div className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-500 ${OVERLAY_STYLES[config.overlay]}`} />

          {/* Decorative number watermark */}
          <div className="absolute top-4 right-5 z-20 font-bold text-white/5 select-none pointer-events-none leading-none"
            style={{ fontSize: 'clamp(40px, 8vw, 90px)', fontFamily: "'Anton', sans-serif" }}>
            {config.decorNum}
          </div>

          {/* ── TEXT: bottomLeft ──────────────────────────────── */}
          {config.textPosition === 'bottomLeft' && (
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 z-30">
              <span className={`inline-block px-2.5 py-1 text-[9px] font-medium rounded-md border uppercase font-mono tracking-widest mb-3 ${config.accent}`}>
                {project.industry}
              </span>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white tracking-tight font-display leading-tight group-hover:text-orange-100 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/50 text-xs md:text-sm mt-1.5 line-clamp-2 font-sans hidden sm:block">
                {project.overview}
              </p>
            </div>
          )}

          {/* ── TEXT: topLeft ────────────────────────────────── */}
          {config.textPosition === 'topLeft' && (
            <div className="absolute top-0 left-0 right-0 p-5 z-30">
              <span className={`inline-block px-2.5 py-1 text-[9px] font-medium rounded-md border uppercase font-mono tracking-widest mb-3 ${config.accent}`}>
                {project.industry}
              </span>
              <h3 className="text-lg md:text-xl font-extrabold text-white tracking-tight font-display leading-tight group-hover:text-orange-100 transition-colors">
                {project.title}
              </h3>
            </div>
          )}

          {/* ── TEXT: bottomCenter ───────────────────────────── */}
          {config.textPosition === 'bottomCenter' && (
            <div className="absolute bottom-0 left-0 right-0 p-5 z-30 text-center">
              <span className={`inline-block px-2.5 py-1 text-[9px] font-medium rounded-md border uppercase font-mono tracking-widest mb-2 ${config.accent}`}>
                {project.category}
              </span>
              <h3 className="text-lg md:text-xl font-extrabold text-white tracking-tight font-display leading-tight group-hover:text-orange-100 transition-colors">
                {project.title}
              </h3>
            </div>
          )}

          {/* ── TEXT: centerOverlay ──────────────────────────── */}
          {config.textPosition === 'centerOverlay' && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-5 text-center">
              <span className={`inline-block px-2.5 py-1 text-[9px] font-medium rounded-md border uppercase font-mono tracking-widest mb-3 ${config.accent}`}>
                {project.industry}
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight font-display leading-tight group-hover:text-orange-100 transition-colors">
                {project.title}
              </h3>
              {/* Arrow icon appears on hover */}
              <div className="mt-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          )}

          {/* ── TEXT: sideLeft (cinematic) ───────────────────── */}
          {config.textPosition === 'sideLeft' && (
            <div className="absolute inset-0 z-30 flex flex-col justify-center p-6 md:p-10 max-w-[55%] md:max-w-[45%]">
              <span className={`inline-block px-2.5 py-1 text-[9px] font-medium rounded-md border uppercase font-mono tracking-widest mb-4 w-fit ${config.accent}`}>
                {project.industry}
              </span>
              <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight font-display leading-none group-hover:text-orange-100 transition-colors mb-3">
                {project.title}
              </h3>
              <p className="text-white/50 text-sm font-sans line-clamp-2 hidden md:block">{project.overview}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-white/60 text-xs font-medium group-hover:text-white transition-colors font-sans">
                <ExternalLink className="w-3.5 h-3.5" />
                View Case Study
              </div>
            </div>
          )}

          {/* Arrow button — always top right, appears on hover */}
          {config.textPosition !== 'centerOverlay' && (
            <div className="absolute top-4 right-4 z-40 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 group-hover:bg-neutral-900 group-hover:text-white">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          )}

          {/* Index badge (decorative) */}
          <div className={`absolute bottom-5 right-5 z-30 text-[9px] font-mono font-medium opacity-0 group-hover:opacity-60 transition-opacity duration-300 ${config.accent.split(' ')[1]}`}>
            {String(slotIndex + 1).padStart(2, '0')} / PROJECT
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export { BentoCard };
export type { BentoSlotConfig };
export { BENTO_CONFIGS };

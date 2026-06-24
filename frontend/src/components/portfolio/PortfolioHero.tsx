import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const PortfolioHero: React.FC = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-10"
      style={{ backgroundColor: '#0A0F1C' }}
    >
      {/* === LAYER 1: Denim texture via CSS === */}
      <div
        className="absolute inset-0 z-0 opacity-70"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.012) 2px,
              rgba(255,255,255,0.012) 3px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 4px,
              rgba(255,255,255,0.008) 4px,
              rgba(255,255,255,0.008) 5px
            )
          `,
          backgroundBlendMode: 'overlay',
        }}
      />

      {/* === LAYER 2: Film grain noise overlay === */}
      <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* === LAYER 3: Vertical scratch lines === */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 60px,
              rgba(255,255,255,0.5) 60px,
              rgba(255,255,255,0.5) 60.5px
            )
          `,
        }}
      />

      {/* === LAYER 4: Subtle radial glow === */}
      <div className="absolute inset-0 z-[3] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-blue-500/[0.04] rounded-full blur-[150px] md:blur-[200px]" />
      </div>

      {/* === CORNER LABEL: Bottom Right only (removed Product Studio) === */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 text-[9px] md:text-[11px] text-white uppercase hidden sm:block"
        style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.35em' }}
      >
        Digital Agency
      </motion.span>

      {/* === MAIN TYPOGRAPHY STACK === */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-screen-xl mx-auto">

        {/* Script overlay: "View My" */}
        <motion.h2
          initial={{ opacity: 0, y: 20, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -5 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="relative z-20 self-center sm:self-start sm:ml-[8%] md:ml-[10%]"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: 'clamp(28px, 7vw, 80px)',
            lineHeight: 1,
            marginBottom: 'clamp(-20px, -3.5vw, -70px)',
            background: 'linear-gradient(135deg, #4A9EFF, #A8D4FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          View My
        </motion.h2>

        {/* Chrome display: "PORTFOLIO" */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
          className="relative z-10 text-center w-full leading-none"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(56px, 18vw, 220px)',
            lineHeight: 0.85,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(90deg, #8BA8CC 0%, #FFFFFF 35%, #C8D8F0 55%, #FFFFFF 70%, #6A8CAA 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0px 4px 25px rgba(0,0,0,0.6))',
            textTransform: 'uppercase' as const,
          }}
        >
          Portfolio
        </motion.h1>

        {/* Emboss duplicate for depth */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute z-[5] text-center pointer-events-none select-none w-full"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(56px, 18vw, 220px)',
            lineHeight: 0.85,
            letterSpacing: '-0.02em',
            color: 'white',
            transform: 'translateY(3px)',
            textTransform: 'uppercase' as const,
          }}
          aria-hidden="true"
        >
          Portfolio
        </motion.div>
      </div>

      {/* === THIN HORIZONTAL RULE === */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: 'easeInOut' }}
        className="relative z-10 w-[85%] max-w-3xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-10 md:mt-16 mb-8 md:mb-12"
      />

      {/* === CTAs === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full max-w-xs sm:max-w-none sm:w-auto px-6 sm:px-0"
      >
        <a
          href="#featured"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-white/[0.06] border border-white/15 text-white/90 text-sm font-medium backdrop-blur-sm hover:bg-white/10 hover:border-white/25 transition-all duration-300 font-sans"
        >
          Explore Work
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <Link
          to="/contact"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 md:px-10 py-3.5 md:py-4 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:text-white hover:border-white/30 transition-all duration-300 font-sans"
        >
          Book a Call
        </Link>
      </motion.div>

      {/* === STATS ROW === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 mt-12 md:mt-20 flex gap-8 sm:gap-12 md:gap-20 px-4"
      >
        {[
          { num: '10+', label: 'Projects' },
          { num: '6+', label: 'Industries' },
          { num: '98%', label: 'Satisfied' },
        ].map(stat => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 mb-1 font-display">
              {stat.num}
            </div>
            <div
              className="text-[9px] sm:text-[10px] text-white/40 uppercase font-sans"
              style={{ letterSpacing: '0.25em' }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

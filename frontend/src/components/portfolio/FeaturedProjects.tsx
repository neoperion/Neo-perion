import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '@/data/projectsData';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projectsData';

const COPPER = '#A8521E';

interface FeatureCardProps {
  project: Project;
  index: number;
  wide?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ project, index, wide }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full w-full cursor-pointer"
      onMouseEnter={() => {
        if (videoRef.current && project.video) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});
        }
      }}
      onMouseLeave={() => {
        if (videoRef.current && project.video) videoRef.current.pause();
      }}
      onClick={() => navigate(`/portfolio/${project.slug}`)}
    >
      {/* Card shell — dark image cards sit as "framed case files" on parchment */}
      <div
        className="relative w-full h-full rounded-xl overflow-hidden border transition-colors duration-500"
        style={{
          background: '#0D0D0E',
          borderColor: 'rgba(168,82,30,0.18)',
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = `${COPPER}55`)}
        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(168,82,30,0.18)')}
      >
        {/* Media */}
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

        {/* Gradient overlay */}
        {wide ? (
          <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(11,10,8,0.92) 0%, rgba(11,10,8,0.52) 50%, transparent 100%)' }} />
        ) : (
          <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(11,10,8,0.98) 0%, rgba(11,10,8,0.30) 55%, rgba(11,10,8,0.08) 100%)' }} />
        )}

        {/* Hover vignette */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'rgba(11,10,8,0.22)' }} />

        {/* Top bar: number + arrow */}
        <div className="absolute top-0 left-0 right-0 flex items-start justify-between px-5 pt-5 z-30 pointer-events-none">
          <span className="font-mono text-[10px] font-semibold tracking-[0.22em] tabular-nums select-none" style={{ color: 'rgba(240,232,216,0.25)' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out"
            style={{ background: COPPER, color: '#F0E8D8' }}
          >
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Wide layout: text anchored left */}
        {wide && (
          <div className="absolute inset-0 z-30 flex flex-col justify-end px-8 md:px-10 pb-7 md:pb-8 pointer-events-none max-w-[55%]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: COPPER }} />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.22em]" style={{ color: 'rgba(240,232,216,0.55)' }}>
                {project.industry}
              </span>
            </div>
            <h3 className="font-display font-black leading-[1.06] tracking-tight text-2xl md:text-3xl" style={{ color: '#F0E8D8' }}>
              {project.title}
            </h3>
          </div>
        )}

        {/* Standard layout: text at bottom */}
        {!wide && (
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 md:px-7 md:pb-7 z-30 pointer-events-none">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: COPPER }} />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.22em]" style={{ color: 'rgba(240,232,216,0.55)' }}>
                {project.industry}
              </span>
            </div>
            <h3 className="font-display font-black leading-[1.08] tracking-tight text-xl md:text-2xl lg:text-3xl" style={{ color: '#F0E8D8' }}>
              {project.title}
            </h3>
          </div>
        )}

        {/* Bottom copper accent bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] z-40 pointer-events-none origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
          style={{ background: COPPER }}
        />
      </div>
    </motion.div>
  );
};

export const FeaturedProjects: React.FC = () => {
  const featured = projectsData.filter(p => p.featured).slice(0, 3);
  if (featured.length === 0) return null;

  const [first, second, third] = featured;

  return (
    <section
      id="featured"
      className="py-20 md:py-32 relative"
      style={{
        background: '#F3EBDD',
        // Subtle radial warmth — barely perceptible paper depth
        backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(168,82,30,0.04) 0%, transparent 60%)',
      }}
    >
      {/* Subtle engineering grid overlay — ghosted, barely visible */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(31,26,20,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(31,26,20,0.025) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1280px] relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 md:mb-16 flex items-end justify-between gap-8"
        >
          <div>
            <span className="mb-3 block font-mono text-[10px] font-bold uppercase tracking-[0.32em]" style={{ color: COPPER }}>
              ✦ Selected Work
            </span>
            <h2
              className="font-display font-black tracking-tight"
              style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: '#1F1A14' }}
            >
              Featured Projects
            </h2>
          </div>
          <div
            className="hidden md:block h-px flex-1"
            style={{ background: 'linear-gradient(to right, rgba(168,82,30,0.20) 0%, transparent 100%)' }}
          />
        </motion.div>

        {/* 2-up top row + 1 full-width */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 md:pb-0 md:grid md:grid-cols-2 md:gap-5 lg:gap-6 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {first && (
            <div className="w-[85vw] flex-shrink-0 snap-center h-[420px] md:w-auto md:h-[520px]">
              <FeatureCard project={first} index={0} />
            </div>
          )}
          {second && (
            <div className="w-[85vw] flex-shrink-0 snap-center h-[420px] md:w-auto md:h-[520px]">
              <FeatureCard project={second} index={1} />
            </div>
          )}
          {third && (
            <div className="w-[85vw] flex-shrink-0 snap-center h-[420px] md:w-auto md:h-[340px] md:col-span-2">
              <FeatureCard project={third} index={2} wide />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

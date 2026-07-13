import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '@/data/projectsData';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projectsData';

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
      {/* Card shell */}
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0D0D0E] border border-white/[0.07] transition-colors duration-500 group-hover:border-[#F77E0D]/30">

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
            muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}

        {/* Gradient overlay */}
        {wide ? (
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-[#0A0A0B]/90 via-[#0A0A0B]/50 to-transparent" />
        ) : (
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/30 to-[#0A0A0B]/08" />
        )}

        {/* Hover vignette */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-[#0A0A0B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Top bar: number + arrow */}
        <div className="absolute top-0 left-0 right-0 flex items-start justify-between px-5 pt-5 z-30 pointer-events-none">
          <span className="font-mono text-[10px] font-semibold text-white/22 tracking-[0.22em] tabular-nums select-none">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="w-9 h-9 rounded-full flex items-center justify-center
            bg-white/[0.08] backdrop-blur-sm text-white
            opacity-0 -translate-y-2
            group-hover:opacity-100 group-hover:translate-y-0
            group-hover:bg-[#F77E0D] group-hover:text-[#0A0A0B]
            transition-all duration-300 ease-out">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Wide layout: text anchored left */}
        {wide && (
          <div className="absolute inset-0 z-30 flex flex-col justify-end px-8 md:px-10 pb-7 md:pb-8 pointer-events-none max-w-[55%]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F77E0D] flex-shrink-0" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-white/50">
                {project.industry}
              </span>
            </div>
            <h3 className="font-display font-black text-white leading-[1.06] tracking-tight text-2xl md:text-3xl">
              {project.title}
            </h3>
          </div>
        )}

        {/* Standard layout: text at bottom */}
        {!wide && (
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 md:px-7 md:pb-7 z-30 pointer-events-none">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F77E0D] flex-shrink-0" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-white/50">
                {project.industry}
              </span>
            </div>
            <h3 className="font-display font-black text-white leading-[1.08] tracking-tight text-xl md:text-2xl lg:text-3xl">
              {project.title}
            </h3>
          </div>
        )}

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F77E0D] z-40 pointer-events-none origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
      </div>
    </motion.div>
  );
};

export const FeaturedProjects: React.FC = () => {
  const featured = projectsData.filter(p => p.featured).slice(0, 3);
  if (featured.length === 0) return null;

  const [first, second, third] = featured;

  return (
    <section id="featured" className="bg-[#0A0A0B] py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1280px]">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 md:mb-16 flex items-end justify-between gap-8"
        >
          <div>
            <span className="mb-3 block font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-[#F77E0D]">
              Selected Work
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-black tracking-tight text-white">
              Featured Projects
            </h2>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
        </motion.div>

        {/* 2-up top row + 1 full-width */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
          {first && (
            <div className="h-[420px] md:h-[520px]">
              <FeatureCard project={first} index={0} />
            </div>
          )}
          {second && (
            <div className="h-[420px] md:h-[520px]">
              <FeatureCard project={second} index={1} />
            </div>
          )}
          {third && (
            <div className="h-[300px] md:h-[340px] col-span-1 md:col-span-2">
              <FeatureCard project={third} index={2} wide />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

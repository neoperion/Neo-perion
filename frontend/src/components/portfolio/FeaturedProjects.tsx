import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projectsData';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projectsData';

const flyerLayouts = [
  { rotate: -3, width: 'w-full lg:w-[55%]', height: 'h-[55vw] sm:h-[420px] lg:h-[500px]', align: 'self-start', zIndex: 30 },
  { rotate: 2,  width: 'w-full lg:w-[45%]', height: 'h-[55vw] sm:h-[360px] lg:h-[420px]', align: 'self-end',   zIndex: 20 },
  { rotate: -1, width: 'w-full lg:w-[38%]', height: 'h-[55vw] sm:h-[320px] lg:h-[380px]', align: 'self-start lg:ml-[8%]', zIndex: 10 },
];

interface FlyerCardProps {
  project: Project;
  layout: typeof flyerLayouts[0];
  index: number;
}

const FlyerCard: React.FC<FlyerCardProps> = ({ project, layout, index }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current && project.video) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };
  const handleMouseLeave = () => {
    if (videoRef.current && project.video) videoRef.current.pause();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: layout.rotate }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
      whileHover={{ y: -10, rotate: 0, scale: 1.02, transition: { duration: 0.35, ease: 'easeOut' } }}
      className={`group relative ${layout.width} ${layout.height} ${layout.align} cursor-pointer`}
      style={{ zIndex: layout.zIndex }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/portfolio/${project.slug}`} className="block w-full h-full">
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/60 group-hover:shadow-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500">
          <img
            src={project.thumbnail}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${project.video ? 'group-hover:opacity-0 z-10' : 'z-0'}`}
          />
          {project.video && (
            <video ref={videoRef} src={project.video} muted loop playsInline
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-0 group-hover:opacity-100 z-0"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-20 pointer-events-none" />

          <div className="absolute top-4 left-4 z-30">
            <span className="inline-block px-2.5 py-1 text-[9px] sm:text-[10px] font-medium text-white/90 bg-white/10 backdrop-blur-md rounded-md border border-white/10 uppercase font-mono tracking-widest">
              {project.industry}
            </span>
          </div>

          <div className="absolute top-4 right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 group-hover:bg-blue-500">
            <ArrowUpRight className="w-4 h-4" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-30">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-1.5 tracking-tight group-hover:text-blue-300 transition-colors duration-300 font-display">
              {project.title}
            </h3>
            <p className="text-white/50 text-xs sm:text-sm line-clamp-2 font-sans hidden sm:block">
              {project.overview}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const FeaturedProjects: React.FC = () => {
  const featured = projectsData.filter(p => p.featured).slice(0, 3);
  if (featured.length === 0) return null;

  return (
    <section id="featured" className="py-16 md:py-32 relative" style={{ backgroundColor: '#050810' }}>
      <div className="container mx-auto px-4 mb-10 md:mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-[11px] text-white/40 uppercase block mb-4 md:mb-6 font-sans tracking-[0.3em]">
            Selected Work
          </span>
          <div className="flex items-end justify-between gap-8">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight font-display">
              Featured
              <span className="ml-2 sm:ml-3" style={{ background: 'linear-gradient(135deg, #3B6EFF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Projects
              </span>
            </h2>
            <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 md:gap-8 relative">
          {featured.map((project, index) => (
            <FlyerCard key={project.id} project={project} layout={flyerLayouts[index % flyerLayouts.length]} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

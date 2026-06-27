import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '@/data/projectsData';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const rotationPattern = [0, -1.5, 1, -0.5, 1.5, -1, 0.5, -2, 1.2];

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const rotation = rotationPattern[index % rotationPattern.length];

  const handleMouseEnter = () => {
    if (videoRef.current && project.video) { videoRef.current.currentTime = 0; videoRef.current.play().catch(() => {}); }
  };
  const handleMouseLeave = () => {
    if (videoRef.current && project.video) videoRef.current.pause();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      whileHover={{ y: -8, rotate: 0, scale: 1.02, transition: { duration: 0.3, ease: 'easeOut' } }}
      className="group cursor-pointer"
    >
      <Link to={`/portfolio/${project.slug}`} className="block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="relative rounded-xl overflow-hidden bg-[#0D1221] border border-white/[0.05] aspect-[4/3] mb-4 shadow-2xl shadow-black/50 group-hover:shadow-orange-500/10 group-hover:border-orange-500/25 transition-all duration-500">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20 pointer-events-none" />

          <div className="absolute top-3 right-3 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 group-hover:bg-orange-500">
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex gap-1.5 flex-wrap z-30">
            <span className="px-2 py-0.5 text-[8px] sm:text-[9px] font-medium bg-orange-500/20 text-orange-300 rounded-md backdrop-blur-md border border-orange-500/20 uppercase font-mono tracking-widest">
              {project.category}
            </span>
            {project.techStack.frontend?.slice(0, 2).map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-[8px] sm:text-[9px] font-medium bg-white/5 text-white/60 rounded-md backdrop-blur-md border border-white/5 uppercase font-mono tracking-widest hidden sm:inline-block">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-orange-400/70 text-[9px] sm:text-[10px] font-medium mb-1 uppercase font-mono tracking-[0.15em]">
            {project.industry}
          </p>
          <h3 className="text-base sm:text-xl font-bold text-white mb-1.5 group-hover:text-orange-300 transition-colors duration-300 tracking-tight font-display">
            {project.title}
          </h3>
          <p className="text-white/40 line-clamp-2 text-xs sm:text-sm font-sans hidden sm:block">
            {project.overview}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

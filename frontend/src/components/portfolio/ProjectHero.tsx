import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/projectsData';

interface ProjectHeroProps {
  project: Project;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ project }) => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-end md:items-center pt-20 pb-10 md:pb-0 bg-[#050816] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src={project.video}
          poster={project.thumbnail}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 md:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/80 to-[#050816]/30 md:bg-gradient-to-r md:from-[#050816] md:via-[#050816]/90 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
              <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-neo-blue/20 text-neo-blue rounded-full backdrop-blur-md">
                {project.industry}
              </span>
              <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-white/10 text-white rounded-full backdrop-blur-md">
                {project.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6 md:mb-8">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-6 md:gap-8">
              <div>
                <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Duration</p>
                <p className="text-white font-medium text-sm md:text-base">3-6 Months</p>
              </div>
              <div>
                <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Role</p>
                <p className="text-white font-medium text-sm md:text-base">End-to-end Product Engineering</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

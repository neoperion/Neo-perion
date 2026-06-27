import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/projectsData';

interface ProjectVideoShowcaseProps {
  project: Project;
}

export const ProjectVideoShowcase: React.FC<ProjectVideoShowcaseProps> = ({ project }) => {
  if (!project.video) return null;

  return (
    <section className="py-14 md:py-24 bg-[#050816] relative border-b border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-neo-blue" />
            <h2 className="text-neo-blue font-mono text-sm uppercase tracking-widest">
              Cinematic Showcase
            </h2>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white max-w-3xl">
            See {project.title} in action.
          </h3>
          <p className="text-slate-400 mt-4 md:mt-6 max-w-2xl text-base md:text-lg leading-relaxed">
            A complete walkthrough of the product experience, highlighting core features, user flows, and technical capabilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl shadow-neo-blue/5 group"
        >
          {/* Main Video Player */}
          <div className="aspect-video w-full relative bg-black">
            <video 
              src={project.video}
              poster={project.thumbnail}
              controls
              playsInline
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neo-blue/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />
    </section>
  );
};

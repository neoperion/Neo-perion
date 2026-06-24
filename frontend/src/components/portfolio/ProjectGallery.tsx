import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/projectsData';

interface ProjectGalleryProps {
  project: Project;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project }) => {
  if (!project.gallery || project.gallery.length === 0) return null;

  return (
    <section className="py-14 md:py-24 bg-[#050816] relative">
      <div className="container mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Project Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {project.gallery.map((media, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl overflow-hidden border border-white/10 bg-slate-900 ${index % 3 === 0 ? 'md:col-span-2' : ''}`}
            >
              {media.includes('.mp4') ? (
                <video 
                  src={media} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <img 
                  src={media} 
                  alt={`${project.title} gallery item ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

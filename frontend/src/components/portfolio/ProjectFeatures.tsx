import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/projectsData';
import { Sparkles } from 'lucide-react';

interface ProjectFeaturesProps {
  project: Project;
}

export const ProjectFeatures: React.FC<ProjectFeaturesProps> = ({ project }) => {
  return (
    <section className="py-14 md:py-24 bg-[#050816] relative">
      <div className="container mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Key Features
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            The core capabilities that power this product experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {project.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-slate-900 border border-white/5 hover:border-neo-blue/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-neo-blue/20 transition-colors">
                <Sparkles className="w-6 h-6 text-slate-400 group-hover:text-neo-blue transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              {feature.description && (
                <p className="text-slate-400">
                  {feature.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

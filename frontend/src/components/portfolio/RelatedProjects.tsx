import React from 'react';
import { motion } from 'framer-motion';
import { Project, projectsData } from '@/data/projectsData';
import { BentoCard, BENTO_CONFIGS } from './BentoCard';

interface RelatedProjectsProps {
  currentProject: Project;
}

export const RelatedProjects: React.FC<RelatedProjectsProps> = ({ currentProject }) => {
  const related = projectsData
    .filter(p => p.id !== currentProject.id && (p.category === currentProject.category || p.industry === currentProject.industry))
    .slice(0, 3);

  // If no related by category/industry, just show 3 random others
  const displayProjects = related.length > 0 
    ? related 
    : projectsData.filter(p => p.id !== currentProject.id).slice(0, 3);

  return (
    <section className="py-14 md:py-24 bg-slate-900 border-t border-white/10 relative">
      <div className="container mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Related Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 auto-rows-auto">
          {displayProjects.map((project, index) => {
             // Let's use some nice smaller/medium configs for related projects
             // Index 1, 2, 6 are good medium/small layouts
             const configIndices = [1, 2, 6];
             const config = BENTO_CONFIGS[configIndices[index % configIndices.length]];
             return (
              <BentoCard key={project.id} project={project} slotIndex={index} config={config} />
             );
          })}
        </div>

      </div>
    </section>
  );
};

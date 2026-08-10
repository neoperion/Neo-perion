import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project, projectsData } from '@/data/projectsData';

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
    <section className="py-14 md:py-24 bg-manuscript-parchment border-t border-manuscript-ink/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-manuscript-copper/80 mb-2">Archive</p>
              <h2 className="text-3xl font-display font-bold text-manuscript-ink">
                Selected Work
              </h2>
            </div>
            <Link to="/portfolio" className="text-sm font-medium text-manuscript-copper hover:text-brand transition-colors">
              View All Projects →
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/portfolio/${project.slug}`} className="group block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-manuscript-parchmentWarm border border-manuscript-ink/10 shadow-lg shadow-manuscript-ink/5 mb-4 relative">
                  {project.thumbnail && (
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-manuscript-copper/0 group-hover:bg-manuscript-copper/5 transition-colors duration-500 pointer-events-none" />
                </div>
                
                <div className="flex gap-4">
                  <span className="text-xs font-mono text-manuscript-copper/60 pt-1">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-display font-bold text-manuscript-ink group-hover:text-manuscript-copper transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-manuscript-inkSoft mt-1">
                      {project.category}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

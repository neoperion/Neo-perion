import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/projectsData';

interface ProjectTechStackProps {
  project: Project;
}

export const ProjectTechStack: React.FC<ProjectTechStackProps> = ({ project }) => {
  const { frontend, backend, database, ai, infrastructure, other } = project.techStack;

  const StackGroup = ({ title, items }: { title: string, items?: string[] }) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">{title}</h3>
        <div className="flex flex-wrap gap-3">
          {items.map((item, idx) => (
            <div key={idx} className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-900 border border-white/10 text-slate-300 text-sm font-medium">
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-14 md:py-24 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Technology Architecture
            </h2>
            <p className="text-slate-400 text-lg">
              The engineering foundation built for scale, security, and performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12"
          >
            <div>
              <StackGroup title="Frontend" items={frontend} />
              <StackGroup title="Backend API" items={backend} />
              <StackGroup title="Database" items={database} />
            </div>
            <div>
              <StackGroup title="AI & Machine Learning" items={ai} />
              <StackGroup title="Infrastructure" items={infrastructure} />
              <StackGroup title="Other & Tools" items={other} />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

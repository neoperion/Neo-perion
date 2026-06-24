import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data/projectsData';
import { CheckCircle2, Target, Lightbulb } from 'lucide-react';

interface ProjectOverviewProps {
  project: Project;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ project }) => {
  return (
    <section className="py-14 md:py-24 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        
        {/* Top Overview Text */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-3xl text-slate-300 leading-relaxed font-light"
          >
            {project.overview}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Business Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">The Challenge</h2>
            </div>
            
            <div className="space-y-6">
              {project.businessProblem.map((problem, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#050816] border border-white/5">
                  <p className="text-slate-300 leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution Delivered */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-neo-blue/10 flex items-center justify-center text-neo-blue">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">The Solution</h2>
            </div>
            
            <div className="p-8 rounded-3xl bg-neo-blue/5 border border-neo-blue/20 h-full">
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {project.solution}
              </p>

              <h3 className="text-xl font-semibold text-white mb-6">Business Impact</h3>
              <ul className="space-y-4">
                {project.impact.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-neo-blue shrink-0 mt-0.5" />
                    <span className="text-slate-300">{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

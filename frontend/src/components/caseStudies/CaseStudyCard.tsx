import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CaseStudy } from '@/types/caseStudy';
import { ArrowRight } from 'lucide-react';

interface Props {
  caseStudy: CaseStudy;
  index?: number;
}

export const CaseStudyCard: React.FC<Props> = ({ caseStudy, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col md:flex-row bg-slate-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-neo-blue/50 transition-all mb-12"
    >
      <Link to={`/company/case-studies/${caseStudy.slug}`} className="absolute inset-0 z-10" aria-label={`Read ${caseStudy.title}`} />
      
      <div className="w-full md:w-2/5 relative aspect-video md:aspect-auto overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={caseStudy.cover_image} 
          alt={caseStudy.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-neo-blue/10 text-neo-blue text-xs font-bold rounded-full uppercase tracking-wider">
            {caseStudy.industry}
          </span>
          <span className="px-3 py-1 bg-white/5 text-slate-300 text-xs font-bold rounded-full uppercase tracking-wider">
            {caseStudy.service_type}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-neo-blue transition-colors">
          {caseStudy.title}
        </h3>
        
        <p className="text-slate-400 text-base md:text-lg mb-8 line-clamp-3">
          {caseStudy.problem}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {caseStudy.tech_stack.slice(0, 4).map(tech => (
            <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-md">
              {tech}
            </span>
          ))}
          {caseStudy.tech_stack.length > 4 && (
            <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-md">
              +{caseStudy.tech_stack.length - 4} more
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 text-neo-blue font-bold group-hover:gap-4 transition-all">
          Read Full Case Study <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};

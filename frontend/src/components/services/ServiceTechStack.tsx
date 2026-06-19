import React from 'react';
import { motion } from 'framer-motion';
import { ServicePageConfig } from '@/data/services/types';

interface Props {
  service: ServicePageConfig;
}

export const ServiceTechStack: React.FC<Props> = ({ service }) => {
  return (
    <section className="py-20 border-y border-white/5 bg-[#050816]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-slate-400 uppercase tracking-widest text-sm font-bold mb-8">
          Technology Stack
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {service.techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-white/10 hover:border-neo-blue/30 transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

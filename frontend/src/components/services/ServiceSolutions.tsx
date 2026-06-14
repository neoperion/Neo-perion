import React from 'react';
import { motion } from 'framer-motion';
import { ServicePageConfig } from '@/data/services/types';
import { CheckCircle2 } from 'lucide-react';

interface Props {
  service: ServicePageConfig;
}

export const ServiceSolutions: React.FC<Props> = ({ service }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-cyan-400 font-bold tracking-widest uppercase mb-4 text-sm">Solutions</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Our {service.title} Offerings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/50 border border-white/10 p-8 rounded-3xl hover:bg-white/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
              <p className="text-slate-400 leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

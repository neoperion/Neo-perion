import React from 'react';
import { motion } from 'framer-motion';
import { ServicePageConfig } from '@/data/services/types';

interface Props {
  service: ServicePageConfig;
}

export const ServiceProcess: React.FC<Props> = ({ service }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-neo-blue font-bold tracking-widest uppercase mb-4 text-sm">Delivery</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Execution Process
          </h2>
        </div>

        <div className="space-y-6 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 top-10 bottom-10 w-px bg-white/10 hidden md:block" />

          {service.process.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row items-start gap-6 bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-white/5 relative z-10"
            >
              <div className="w-16 h-16 rounded-2xl bg-neo-blue/10 border border-neo-blue/20 flex items-center justify-center shrink-0">
                <span className="text-2xl font-black text-neo-blue">{step.step}</span>
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

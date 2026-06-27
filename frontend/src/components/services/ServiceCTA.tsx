import React from 'react';
import { motion } from 'framer-motion';
import { ServicePageConfig } from '@/data/services/types';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface Props {
  service: ServicePageConfig;
}

export const ServiceCTA: React.FC<Props> = ({ service }) => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
            {service.cta.headline}
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            {service.cta.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neo-blue hover:bg-neo-blue text-white font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2 group">
              {service.cta.primaryButtonText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4" />
              {service.cta.secondaryButtonText}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

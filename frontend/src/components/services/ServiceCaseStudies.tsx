import React from 'react';
import { motion } from 'framer-motion';
import { ServicePageConfig } from '@/data/services/types';
import { ArrowRight } from 'lucide-react';

interface Props {
  service: ServicePageConfig;
}

// Since Case Studies data isn't fully defined per service yet, we'll use a generic placeholder that prompts the user to check the portfolio
export const ServiceCaseStudies: React.FC<Props> = ({ service }) => {
  return (
    <section className="py-24 bg-[#050816] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              See how our {service.title.toLowerCase()} expertise has transformed businesses.
            </p>
          </div>
          <button className="text-cyan-400 font-bold flex items-center gap-2 hover:text-cyan-300 transition-colors group pb-2">
            View full portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Placeholder Case Study Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-video bg-slate-900 flex items-end p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
            <div className="relative z-20">
              <p className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-2">Enterprise Tech</p>
              <h3 className="text-2xl font-bold text-white">Scaling to 1M+ Users</h3>
            </div>
          </motion.div>

          {/* Placeholder Case Study Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-video bg-slate-900 flex items-end p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
            <div className="relative z-20">
              <p className="text-purple-400 text-sm font-bold tracking-widest uppercase mb-2">Series A Startup</p>
              <h3 className="text-2xl font-bold text-white">Accelerated Time-to-Market</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { industriesData } from '@/data/industriesData';
import { ArrowUpRight } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Industries We Transform
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            We partner with forward-thinking organizations across key sectors to build scalable, secure, and intelligent solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-80 rounded-2xl p-6 flex flex-col justify-end overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-md cursor-pointer hover:border-cyan-500/50 transition-colors"
            >
              {/* Fallback gradient background for when images aren't present */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10" />
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900 to-transparent z-0" />

              <div className="relative z-20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {industry.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <ul className="space-y-2 mb-0">
                  {industry.solutions?.map((solution, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

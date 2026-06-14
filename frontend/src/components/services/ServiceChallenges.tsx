import React from 'react';
import { motion } from 'framer-motion';
import { ServicePageConfig } from '@/data/services/types';
import { AlertTriangle } from 'lucide-react';

interface Props {
  service: ServicePageConfig;
}

export const ServiceChallenges: React.FC<Props> = ({ service }) => {
  return (
    <section className="py-24 bg-[#050816] border-y border-white/5 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            The Challenges We Solve
          </h2>
          <p className="text-slate-400 text-lg">
            Common roadblocks our {service.title.toLowerCase()} services address.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {service.challenges.map((challenge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/40 border border-red-500/10 p-6 rounded-2xl flex items-start gap-4 hover:border-red-500/30 transition-colors"
            >
              <div className="p-3 bg-red-500/10 rounded-xl shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{challenge}</h3>
                <p className="text-slate-400 text-sm">We engineer robust solutions to eliminate this bottleneck, ensuring smooth execution and scalability.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

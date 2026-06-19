import React from 'react';
import { motion } from 'framer-motion';
import { ServicePageConfig } from '@/data/services/types';
import FloatingLines from '@/components/FloatingLines';

interface Props {
  service: ServicePageConfig;
}

export const ServiceHero: React.FC<Props> = ({ service }) => {
  const Icon = service.icon;

  return (
    <section className="min-h-[70vh] flex items-center pt-32 pb-20 px-4 md:px-6 relative overflow-hidden bg-[#050816]">
      {/* Background Graphic */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.heroGradient} opacity-20 pointer-events-none`} />
      
      <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-auto">
          <FloatingLines
              linesGradient={['#15b0c1', '#0d8fa0', '#0a6e7c']}
              enabledWaves={['middle', 'bottom']}
              lineCount={[8, 6]}
              lineDistance={[3, 4]}
              middleWavePosition={{ x: 5.0, y: 0.0, rotate: 0.3 }}
              bottomWavePosition={{ x: 2.0, y: -0.5, rotate: -0.2 }}
              animationSpeed={0.5}
              interactive={true}
              bendRadius={3.0}
              bendStrength={-0.3}
              mouseDamping={0.08}
              parallax={true}
              parallaxStrength={0.15}
              mixBlendMode="screen"
          />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
            <Icon className="w-8 h-8 text-neo-blue" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight"
        >
          {service.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10"
        >
          {service.subtitle}
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 rounded-xl bg-neo-blue hover:bg-neo-blue text-slate-900 font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Explore {service.title}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

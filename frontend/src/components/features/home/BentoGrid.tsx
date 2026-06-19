import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Zap, Layers, Rocket, Infinity } from 'lucide-react';
import { HeroStats } from './HeroStats';

const bentoItems = [
  {
    title: 'Innovation First Approach',
    description: 'We prioritize cutting-edge solutions, integrating the latest advancements in AI and product engineering.',
    icon: <Brain className="w-8 h-8 text-purple-400" />,
    className: 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-900/40 to-slate-900/40'
  },
  {
    title: 'End-to-End Product Development',
    description: 'From wireframes to production deployment, we handle the entire product lifecycle.',
    icon: <Infinity className="w-6 h-6 text-emerald-400" />,
    className: 'md:col-span-1 bg-slate-900/40'
  },
  {
    title: 'Industry Expertise',
    description: 'Deep domain knowledge across education, startups, SMBs, and healthcare.',
    icon: <Layers className="w-6 h-6 text-yellow-400" />,
    className: 'md:col-span-1 bg-slate-900/40'
  },
  {
    title: 'Future Ready Technology',
    description: 'SOC2 compliant, highly available, and rigorously tested architectures.',
    icon: <Shield className="w-6 h-6 text-neo-blue" />,
    className: 'md:col-span-1 bg-slate-900/40'
  },
  {
    title: 'Long-Term Strategic Partnership',
    description: 'Fractional CTO support and dedicated scaling teams.',
    icon: <Rocket className="w-6 h-6 text-red-400" />,
    className: 'md:col-span-1 bg-slate-900/40'
  },
  {
    title: 'AI-Driven Engineering',
    description: 'Native LLM integrations and automated workflows built directly into the core.',
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    className: 'md:col-span-2 bg-gradient-to-br from-blue-900/20 to-slate-900/40'
  }
];

export const BentoGrid: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Why Organizations Choose Neo Perion
          </h2>
          <p className="text-slate-400 text-lg">
            We bridge the gap between enterprise reliability and startup agility, empowering you to innovate faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] mb-16">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 border border-white/10 overflow-hidden group flex flex-col justify-between backdrop-blur-md hover:border-white/20 transition-colors cursor-pointer ${item.className}`}
            >
              {/* Subtle hover glow inside the card */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {item.icon}
              </div>
              <div className="relative z-10 mt-4">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section included as part of Why Neo Perion */}
        <div className="max-w-5xl mx-auto border-t border-white/10 pt-16">
          <HeroStats />
        </div>
      </div>
    </section>
  );
};

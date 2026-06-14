import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '@/data/servicesData';
import { Code, Globe, Smartphone, BrainCircuit, Cpu, Workflow, Rocket, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  BrainCircuit: <BrainCircuit className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Workflow: <Workflow className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
};

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#050816]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Engineering Expertise
            </h2>
            <p className="text-slate-400 text-lg">
              We provide end-to-end technology solutions, taking your product from initial architecture to global scale.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors group">
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-8 rounded-2xl border border-white/5 bg-slate-900/20 hover:bg-slate-900/50 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                {iconMap[service.icon] || <Code className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

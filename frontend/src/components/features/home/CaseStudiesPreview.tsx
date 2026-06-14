import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const placeholderStudies = [
  {
    client: 'FinTech Innovate',
    industry: 'Financial Services',
    challenge: 'Legacy system couldn\'t handle high-frequency trading data.',
    solution: 'Re-architected core engine to serverless microservices with Redis caching.',
    impact: '500% increase in throughput, 40% reduction in cloud costs.',
    image: 'bg-gradient-to-br from-blue-900 to-slate-900'
  },
  {
    client: 'HealthSync AI',
    industry: 'Healthcare',
    challenge: 'Manual patient triaging leading to critical delays.',
    solution: 'Custom LLM integration to analyze patient intake forms securely (HIPAA compliant).',
    impact: 'Reduced triage time by 85%, improving patient outcomes.',
    image: 'bg-gradient-to-br from-emerald-900 to-slate-900'
  },
  {
    client: 'EduScale',
    industry: 'EdTech',
    challenge: 'Platform crashing during peak online exam periods.',
    solution: 'Migrated to auto-scaling PostgreSQL clusters and optimized React frontend.',
    impact: 'Zero downtime during 100k+ concurrent user sessions.',
    image: 'bg-gradient-to-br from-purple-900 to-slate-900'
  }
];

export const CaseStudiesPreview: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#050816]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Featured Work
            </h2>
            <p className="text-slate-400 text-lg">
              We don't just write code. We solve complex business problems. Here's how we've helped our partners scale.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors group">
            View All Case Studies
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {placeholderStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-slate-900/30 cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className={`h-48 w-full ${study.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    {study.industry}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {study.client}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <span className="block text-sm text-slate-500 mb-1">Challenge</span>
                    <p className="text-slate-300 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="block text-sm text-slate-500 mb-1">Impact</span>
                    <p className="text-emerald-400 text-sm font-medium">{study.impact}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

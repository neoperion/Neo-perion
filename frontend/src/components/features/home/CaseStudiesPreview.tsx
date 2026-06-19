import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockCaseStudies } from '@/data/mock/caseStudies';

export const CaseStudiesPreview: React.FC = () => {
  const navigate = useNavigate();
  const featured = mockCaseStudies.slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <section className="py-24 relative bg-[#050816]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-neo-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4 block">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
              Featured Work
            </h2>
            <p className="text-slate-400 text-[15px] leading-relaxed">
              We don't just write code. We solve complex business problems. Here's how we've helped our partners scale.
            </p>
          </div>
          <button
            onClick={() => navigate('/case-studies')}
            className="hidden md:flex items-center gap-2 text-neo-blue font-medium hover:text-neo-blue-bright transition-colors group"
          >
            View All Case Studies
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((study, index) => (
            <motion.button
              key={study.slug}
              onClick={() => navigate(`/case-studies/${study.slug}`)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0B1120] text-left cursor-pointer hover:border-neo-blue/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="h-44 w-full relative overflow-hidden">
                <img
                  src={study.cover_image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-black/30 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full text-neo-blue border border-neo-blue/20">
                  {study.industry}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-2xl font-bold text-white group-hover:text-neo-blue transition-colors duration-300">
                    {study.client_name}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-neo-blue transition-colors duration-300 shrink-0" />
                </div>

                <div className="space-y-5">
                  <div>
                    <span className="block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-500 mb-1.5">
                      The Challenge
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">{study.problem}</p>
                  </div>
                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-500 mb-1.5">
                      The Impact
                    </span>
                    <p className="text-emerald-400 text-sm font-semibold line-clamp-2">{study.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-10 text-center md:hidden">
          <button
            onClick={() => navigate('/case-studies')}
            className="inline-flex items-center gap-2 text-neo-blue font-medium hover:text-neo-blue-bright transition-colors"
          >
            View All Case Studies
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

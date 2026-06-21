import React from 'react';
import { motion } from 'framer-motion';
import { industriesData } from '@/data/industriesData';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const IndustriesSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative bg-[#FAFAFA] border-b border-[#E4E4E7]/60 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1200px] relative z-10">
        <div className="mb-16 text-left max-w-2xl">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">
            Sectors We Empower
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#09090B] mb-6 tracking-tight">
            Industries We Transform
          </h2>
          <p className="text-slate-600 text-[15px] font-medium leading-relaxed">
            We partner with forward-thinking organizations across key sectors to build scalable, secure, and intelligent solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((industry, index) => {
            const Icon = industry.icon;
            const preview = industry.caseStudyPreview;
            return (
              <motion.button
                key={industry.id}
                type="button"
                onClick={() => navigate(`/industries/${industry.slug}`)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative rounded-xl overflow-hidden border border-[#E4E4E7] bg-white cursor-pointer hover:border-[#A1A1AA] hover:-translate-y-0.5 transition-all duration-150 ease-out text-left flex flex-col shadow-sm"
              >
                {/* Accent bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(to right, ${industry.gradientFrom}, ${industry.gradientTo})`,
                  }}
                />

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${industry.color}10`, color: industry.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-neo-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </div>

                  <h3 className="text-base font-bold text-[#09090B] mb-1 group-hover:text-neo-blue transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{industry.tagline}</p>

                  {/* Capability chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {industry.solutions?.slice(0, 3).map((solution, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-slate-50 text-slate-500 border border-[#E4E4E7] font-semibold"
                      >
                        {solution}
                      </span>
                    ))}
                  </div>

                  {/* Case study micro-case-study excerpt */}
                  {preview && (
                    <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-2">
                      <div>
                        <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-slate-400">
                          Featured Result
                        </span>
                        <p className="text-[12px] text-slate-600 leading-relaxed font-semibold mt-1">
                          {preview.result}
                        </p>
                      </div>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-xl font-bold text-[#1D4ED8] font-display leading-none">
                          {preview.metric}
                        </span>
                        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                          {preview.metricLabel}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

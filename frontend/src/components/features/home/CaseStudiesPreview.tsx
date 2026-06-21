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
    <section id="case-studies" className="py-24 relative bg-[#FAFAFA] border-b border-[#E4E4E7]/60">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1200px] relative z-10">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4 block">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#09090B] mb-6 tracking-tight">
              Featured Work
            </h2>
            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
              We don't just write code. We solve complex business problems. Here's how we've helped our partners scale.
            </p>
          </div>
          <button
            onClick={() => navigate('/company/case-studies')}
            className="hidden md:flex items-center gap-2 text-neo-blue font-bold text-sm hover:text-neo-highlight transition-colors group"
          >
            View All Case Studies
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((study, index) => (
            <motion.button
              key={study.slug}
              onClick={() => navigate(`/company/case-studies/${study.slug}`)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative rounded-xl overflow-hidden border border-[#E4E4E7] bg-white text-left cursor-pointer hover:border-[#A1A1AA] hover:-translate-y-0.5 transition-all duration-150 ease-out"
            >
              {/* Image */}
              <div className="h-48 w-full relative overflow-hidden bg-slate-100 border-b border-[#E4E4E7]">
                <img
                  src={study.cover_image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-neo-blue border border-[#E4E4E7]">
                  {study.industry}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#09090B] group-hover:text-neo-blue transition-colors duration-300">
                    {study.client_name}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-neo-blue transition-colors duration-300 shrink-0" />
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="block text-[9px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-1">
                      The Challenge
                    </span>
                    <p className="text-slate-600 text-[13px] leading-relaxed line-clamp-2 font-medium">{study.problem}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <span className="block text-[9px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-1">
                      The Impact
                    </span>
                    <p className="text-[#1D4ED8] text-sm font-bold line-clamp-2 leading-snug">{study.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-10 text-center md:hidden">
          <button
            onClick={() => navigate('/company/case-studies')}
            className="inline-flex items-center gap-2 text-neo-blue font-bold text-sm hover:text-neo-highlight transition-colors"
          >
            View All Case Studies
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

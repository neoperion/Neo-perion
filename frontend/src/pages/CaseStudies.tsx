import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CaseStudyHero } from '@/components/caseStudies/CaseStudyHero';
import { CaseStudyGrid } from '@/components/caseStudies/CaseStudyGrid';
import { useCaseStudies } from '@/hooks/useCaseStudies';

const INDUSTRIES = ['All', 'Healthcare', 'Education', 'Retail & E-commerce', 'Finance', 'Logistics'];
const SERVICES = ['All', 'AI & Automation', 'SaaS Development', 'Machine Learning', 'Cloud Architecture'];

export const CaseStudies: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [activeService, setActiveService] = useState('All');

  const { data: caseStudies = [], isLoading } = useCaseStudies(activeIndustry, activeService);

  return (
    <div className="bg-[#050816] min-h-screen font-sans text-slate-200">
      <SEO 
        title="Case Studies & Work | Neo Perion Solutions"
        description="Explore how Neo Perion has transformed businesses through AI, enterprise SaaS, and cutting-edge product engineering."
        url="https://www.neoperion.com/case-studies"
      />
      <Header />
      
      <main>
        <CaseStudyHero />
        
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-7xl">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-6 mb-16 pb-8 border-b border-white/10">
            <div className="flex-1">
              <h4 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4">Filter by Industry</h4>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map(industry => (
                  <button
                    key={industry}
                    onClick={() => setActiveIndustry(industry)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      activeIndustry === industry
                        ? 'bg-neo-blue text-slate-900 font-bold shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                        : 'bg-white/5 text-slate-300 border border-white/10 hover:border-neo-blue/50'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4">Filter by Service</h4>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map(service => (
                  <button
                    key={service}
                    onClick={() => setActiveService(service)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      activeService === service
                        ? 'bg-neo-blue text-slate-900 font-bold shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                        : 'bg-white/5 text-slate-300 border border-white/10 hover:border-neo-blue/50'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="py-32 flex justify-center items-center">
              <div className="w-8 h-8 rounded-full border-4 border-neo-blue/20 border-t-neo-blue animate-spin" />
            </div>
          ) : (
            <CaseStudyGrid caseStudies={caseStudies} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;

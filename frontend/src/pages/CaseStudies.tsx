import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { seoConfig } from '@/lib/seoConfig';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CaseStudyHero } from '@/components/caseStudies/CaseStudyHero';
import { CaseStudyGrid } from '@/components/caseStudies/CaseStudyGrid';
import { useCaseStudies } from '@/hooks/useCaseStudies';
import { MobileGate, MobileShell } from '@/components/mobile';
import { SITE_URL } from '@/lib/seo';

const INDUSTRIES = ['All', 'Healthcare', 'Education', 'Retail & E-commerce', 'Finance', 'Logistics'];
const SERVICES = ['All', 'AI & Automation', 'SaaS Development', 'Machine Learning', 'Cloud Architecture'];

export const CaseStudies: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [activeService, setActiveService] = useState('All');

  const { data: caseStudies = [], isLoading } = useCaseStudies(activeIndustry, activeService);

  return (
      <div className="manuscript-root min-h-[auto]">
      
        <SEO {...seoConfig.caseStudies} />
        <Header />
        <main>
          <CaseStudyHero />
          <div className="container mx-auto px-4 md:px-6 py-14 max-w-7xl parchment-surface--warm min-h-screen">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-6 mb-14 pb-8 border-b border-manuscript-parchmentDeep">
            <div className="flex-1">
              <h4 className="font-mono text-[9px] tracking-[0.4em] uppercase text-manuscript-copperMuted mb-4">Filter by Industry</h4>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map(industry => (
                  <button
                    key={industry}
                    onClick={() => setActiveIndustry(industry)}
                    className={`px-3.5 py-1.5 rounded-sm text-[12px] font-semibold transition-all font-manuscriptBody border ${
                      activeIndustry === industry
                        ? 'bg-manuscript-copper border-manuscript-copper text-manuscript-parchmentLight'
                        : 'bg-transparent text-manuscript-inkMuted border-manuscript-parchmentDeep hover:border-manuscript-copper/50 hover:text-manuscript-copper'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h4 className="font-mono text-[9px] tracking-[0.4em] uppercase text-manuscript-copperMuted mb-4">Filter by Service</h4>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map(service => (
                  <button
                    key={service}
                    onClick={() => setActiveService(service)}
                    className={`px-3.5 py-1.5 rounded-sm text-[12px] font-semibold transition-all font-manuscriptBody border ${
                      activeService === service
                        ? 'bg-manuscript-copper border-manuscript-copper text-manuscript-parchmentLight'
                        : 'bg-transparent text-manuscript-inkMuted border-manuscript-parchmentDeep hover:border-manuscript-copper/50 hover:text-manuscript-copper'
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
              <div className="w-8 h-8 rounded-full border-2 border-manuscript-copper/20 border-t-manuscript-copper animate-spin" />
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





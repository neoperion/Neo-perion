import React from 'react';
import { useRelatedCaseStudies } from '@/hooks/useCaseStudy';
import { CaseStudyCard } from './CaseStudyCard';

interface Props {
  industry: string;
  currentSlug: string;
  theme?: 'light' | 'dark';
}

export const RelatedCaseStudies: React.FC<Props> = ({ industry, currentSlug, theme = 'dark' }) => {
  const { data: related, isLoading } = useRelatedCaseStudies(industry, currentSlug);

  if (isLoading || !related || related.length === 0) return null;

  return (
    <div className="mt-24 pt-16 border-t border-manuscript-gold/20">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-display font-bold text-manuscript-parchmentLight mb-4">Related Projects</h2>
        <p className="text-manuscript-parchment/60">Discover more of our work in {industry}.</p>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        {related.map((study, idx) => (
          <CaseStudyCard key={study.id} caseStudy={study} index={idx} theme={theme} />
        ))}
      </div>
    </div>
  );
};

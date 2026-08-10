import React from 'react';
import { CaseStudy } from '@/types/caseStudy';
import { CaseStudyCard } from './CaseStudyCard';

interface Props {
  caseStudies: CaseStudy[];
}

export const CaseStudyGrid: React.FC<Props> = ({ caseStudies }) => {
  if (!caseStudies || caseStudies.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="heading-manuscript text-2xl text-manuscript-ink mb-2">No projects found</h3>
        <p className="font-manuscriptBody text-manuscript-inkMuted">Try adjusting your industry or service filters.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {caseStudies.map((study, idx) => (
        <CaseStudyCard key={study.id} caseStudy={study} index={idx} />
      ))}
    </div>
  );
};

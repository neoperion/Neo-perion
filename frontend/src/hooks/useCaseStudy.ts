import { useQuery } from '@tanstack/react-query';
import { caseStudyService } from '@/services/caseStudyService';

export const useCaseStudy = (slug: string) => {
  return useQuery({
    queryKey: ['caseStudy', slug],
    queryFn: () => caseStudyService.getCaseStudyBySlug(slug),
    enabled: !!slug,
  });
};

export const useRelatedCaseStudies = (industry: string, currentSlug: string) => {
  return useQuery({
    queryKey: ['relatedCaseStudies', industry, currentSlug],
    queryFn: () => caseStudyService.getRelatedCaseStudies(industry, currentSlug),
    enabled: !!industry && !!currentSlug,
  });
};

import { useQuery } from '@tanstack/react-query';
import { caseStudyService } from '@/services/caseStudyService';

export const useCaseStudies = (industry: string = 'All', service: string = 'All') => {
  return useQuery({
    queryKey: ['caseStudies', industry, service],
    queryFn: () => caseStudyService.filterCaseStudies(industry, service),
  });
};

export const useFeaturedCaseStudies = () => {
  return useQuery({
    queryKey: ['featuredCaseStudies'],
    queryFn: () => caseStudyService.getFeaturedCaseStudies(),
  });
};

import { supabase } from '@/lib/supabase';
import { CaseStudy } from '@/types/caseStudy';
import { mockCaseStudies } from '@/data/mock/caseStudies';

export const caseStudyService = {
  async getCaseStudies(): Promise<CaseStudy[]> {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (!data || data.length === 0) return mockCaseStudies;
      return data as CaseStudy[];
    } catch (error) {
      console.warn('Supabase fetch failed, using mock data:', error);
      return mockCaseStudies;
    }
  },

  async getFeaturedCaseStudies(): Promise<CaseStudy[]> {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('published', true)
        .eq('featured', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (!data || data.length === 0) {
        return mockCaseStudies.filter(c => c.featured);
      }
      return data as CaseStudy[];
    } catch (error) {
      return mockCaseStudies.filter(c => c.featured);
    }
  },

  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (error) throw error;
      if (!data) return mockCaseStudies.find(c => c.slug === slug) || null;
      return data as CaseStudy;
    } catch (error) {
      return mockCaseStudies.find(c => c.slug === slug) || null;
    }
  },

  async filterCaseStudies(industry?: string, service?: string): Promise<CaseStudy[]> {
    try {
      let queryBuilder = supabase
        .from('case_studies')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (industry && industry !== 'All') {
        queryBuilder = queryBuilder.eq('industry', industry);
      }
      if (service && service !== 'All') {
        queryBuilder = queryBuilder.eq('service_type', service);
      }

      const { data, error } = await queryBuilder;

      if (error) throw error;
      if (!data || data.length === 0) {
        return mockCaseStudies.filter(c => {
          const matchesIndustry = industry && industry !== 'All' ? c.industry === industry : true;
          const matchesService = service && service !== 'All' ? c.service_type === service : true;
          return matchesIndustry && matchesService;
        });
      }
      return data as CaseStudy[];
    } catch (error) {
      return mockCaseStudies.filter(c => {
        const matchesIndustry = industry && industry !== 'All' ? c.industry === industry : true;
        const matchesService = service && service !== 'All' ? c.service_type === service : true;
        return matchesIndustry && matchesService;
      });
    }
  },

  async getRelatedCaseStudies(industry: string, currentSlug: string): Promise<CaseStudy[]> {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('published', true)
        .eq('industry', industry)
        .neq('slug', currentSlug)
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      if (!data || data.length === 0) {
        return mockCaseStudies.filter(c => c.industry === industry && c.slug !== currentSlug).slice(0, 3);
      }
      return data as CaseStudy[];
    } catch (error) {
      return mockCaseStudies.filter(c => c.industry === industry && c.slug !== currentSlug).slice(0, 3);
    }
  }
};

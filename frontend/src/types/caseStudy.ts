export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  industry: string;
  service_type: string;
  problem: string;
  solution: string;
  outcome: string;
  tech_stack: string[];
  cover_image: string;
  gallery: string[];
  client_name: string;
  client_quote: string;
  duration: string;
  featured: boolean;
  published: boolean;
  seo_title: string;
  seo_description: string;
  created_at: string;
  updated_at: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  author: string;
  category: string;
  tags: string[];
  read_time: number;
  featured: boolean;
  published: boolean;
  seo_title: string;
  seo_description: string;
  created_at: string;
  updated_at: string;
}

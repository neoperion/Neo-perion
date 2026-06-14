import { supabase } from '@/lib/supabase';
import { Blog } from '@/types/blog';
import { mockBlogs } from '@/data/mock/blogs';

export const blogService = {
  async getBlogs(): Promise<Blog[]> {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (!data || data.length === 0) return mockBlogs; // Fallback
      return data as Blog[];
    } catch (error) {
      console.warn('Supabase fetch failed, using mock data:', error);
      return mockBlogs;
    }
  },

  async getFeaturedBlogs(): Promise<Blog[]> {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .eq('featured', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (!data || data.length === 0) {
        return mockBlogs.filter(b => b.featured);
      }
      return data as Blog[];
    } catch (error) {
      return mockBlogs.filter(b => b.featured);
    }
  },

  async getBlogBySlug(slug: string): Promise<Blog | null> {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (error) throw error;
      if (!data) return mockBlogs.find(b => b.slug === slug) || null;
      return data as Blog;
    } catch (error) {
      return mockBlogs.find(b => b.slug === slug) || null;
    }
  },

  async searchBlogs(query: string, category?: string): Promise<Blog[]> {
    try {
      let queryBuilder = supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (query) {
        queryBuilder = queryBuilder.ilike('title', `%${query}%`);
      }
      if (category && category !== 'All') {
        queryBuilder = queryBuilder.eq('category', category);
      }

      const { data, error } = await queryBuilder;

      if (error) throw error;
      if (!data || data.length === 0) {
        // Mock filter fallback
        return mockBlogs.filter(b => {
          const matchesQuery = query ? b.title.toLowerCase().includes(query.toLowerCase()) : true;
          const matchesCategory = category && category !== 'All' ? b.category === category : true;
          return matchesQuery && matchesCategory;
        });
      }
      return data as Blog[];
    } catch (error) {
       return mockBlogs.filter(b => {
          const matchesQuery = query ? b.title.toLowerCase().includes(query.toLowerCase()) : true;
          const matchesCategory = category && category !== 'All' ? b.category === category : true;
          return matchesQuery && matchesCategory;
        });
    }
  },

  async getRelatedBlogs(category: string, currentSlug: string): Promise<Blog[]> {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .eq('category', category)
        .neq('slug', currentSlug)
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      if (!data || data.length === 0) {
        return mockBlogs.filter(b => b.category === category && b.slug !== currentSlug).slice(0, 3);
      }
      return data as Blog[];
    } catch (error) {
      return mockBlogs.filter(b => b.category === category && b.slug !== currentSlug).slice(0, 3);
    }
  }
};

-- ==========================================
-- SPRINT 4: CMS, BLOG & CASE STUDIES PLATFORM
-- ==========================================

-- 1. Create blogs table
CREATE TABLE IF NOT EXISTS public.blogs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT,
    cover_image TEXT,
    author TEXT,
    category TEXT,
    tags TEXT[],
    read_time INTEGER,
    featured BOOLEAN DEFAULT false,
    published BOOLEAN DEFAULT false,
    seo_title TEXT,
    seo_description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create case_studies table
CREATE TABLE IF NOT EXISTS public.case_studies (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    industry TEXT,
    service_type TEXT,
    problem TEXT,
    solution TEXT,
    outcome TEXT,
    tech_stack TEXT[],
    cover_image TEXT,
    gallery TEXT[],
    client_name TEXT,
    client_quote TEXT,
    duration TEXT,
    featured BOOLEAN DEFAULT false,
    published BOOLEAN DEFAULT false,
    seo_title TEXT,
    seo_description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Create Indexes
CREATE INDEX IF NOT EXISTS blogs_slug_idx ON public.blogs(slug);
CREATE INDEX IF NOT EXISTS blogs_category_idx ON public.blogs(category);
CREATE INDEX IF NOT EXISTS blogs_published_idx ON public.blogs(published);
CREATE INDEX IF NOT EXISTS blogs_featured_idx ON public.blogs(featured);
CREATE INDEX IF NOT EXISTS blogs_created_at_idx ON public.blogs(created_at);

CREATE INDEX IF NOT EXISTS case_studies_slug_idx ON public.case_studies(slug);
CREATE INDEX IF NOT EXISTS case_studies_industry_idx ON public.case_studies(industry);
CREATE INDEX IF NOT EXISTS case_studies_service_type_idx ON public.case_studies(service_type);
CREATE INDEX IF NOT EXISTS case_studies_published_idx ON public.case_studies(published);
CREATE INDEX IF NOT EXISTS case_studies_featured_idx ON public.case_studies(featured);

-- 4. Enable RLS
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- 5. Create RLS Policies
-- Blogs Policies
CREATE POLICY "Public Read Blogs" ON public.blogs FOR SELECT USING (true);
CREATE POLICY "Admin Create Blogs" ON public.blogs FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin Update Blogs" ON public.blogs FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Delete Blogs" ON public.blogs FOR DELETE USING (auth.role() = 'authenticated');

-- Case Studies Policies
CREATE POLICY "Public Read Case Studies" ON public.case_studies FOR SELECT USING (true);
CREATE POLICY "Admin Create Case Studies" ON public.case_studies FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin Update Case Studies" ON public.case_studies FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Delete Case Studies" ON public.case_studies FOR DELETE USING (auth.role() = 'authenticated');

-- 6. Storage Buckets
-- Note: Storage buckets are usually created via the Supabase UI or API, but we can try to insert them into storage.buckets if permissions allow.
INSERT INTO storage.buckets (id, name, public) 
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('case-study-images', 'case-study-images', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('seo-assets', 'seo-assets', true)
ON CONFLICT (id) DO NOTHING;

-- 7. Storage RLS (Allow public read for these buckets)
CREATE POLICY "Public Read Blog Images" ON storage.objects FOR SELECT USING (bucket_id = 'blog-images');
CREATE POLICY "Public Read Case Study Images" ON storage.objects FOR SELECT USING (bucket_id = 'case-study-images');
CREATE POLICY "Public Read SEO Assets" ON storage.objects FOR SELECT USING (bucket_id = 'seo-assets');

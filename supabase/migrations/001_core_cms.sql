-- Migration 001: Core CMS Tables

CREATE TABLE blogs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL, -- Rich HTML
    cover_image TEXT, -- Supabase Storage URL
    author TEXT DEFAULT 'Neo Perion Team',
    category TEXT NOT NULL,
    tags TEXT[] DEFAULT '{}',
    read_time INT DEFAULT 5,
    published BOOLEAN DEFAULT false,
    featured BOOLEAN DEFAULT false,
    views INT DEFAULT 0,
    seo_title TEXT,
    seo_desc TEXT,
    og_image TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE case_studies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    client_name TEXT,
    industry TEXT NOT NULL,
    service_type TEXT NOT NULL,
    problem TEXT NOT NULL,
    solution TEXT NOT NULL,
    tech_stack TEXT[] DEFAULT '{}',
    outcome TEXT,
    duration TEXT,
    cover_image TEXT,
    gallery TEXT[] DEFAULT '{}',
    client_quote TEXT,
    published BOOLEAN DEFAULT false,
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    company TEXT,
    designation TEXT,
    feedback TEXT NOT NULL,
    avatar TEXT,
    industry TEXT,
    rating INT DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE careers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    department TEXT NOT NULL,
    type TEXT NOT NULL, -- 'Full-time','Internship','Contract'
    location TEXT DEFAULT 'Chennai, Tamil Nadu (Hybrid)',
    description TEXT NOT NULL,
    requirements TEXT[] DEFAULT '{}',
    perks TEXT[] DEFAULT '{}',
    open BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now()
);

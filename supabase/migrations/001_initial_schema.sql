-- Core CMS Tables

CREATE TABLE IF NOT EXISTS blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL, -- Rich HTML
  cover_image TEXT, -- Supabase Storage URL
  author TEXT DEFAULT 'Neo Perion Team',
  category TEXT NOT NULL, -- 'AI','SaaS','Startups' etc
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

CREATE TABLE IF NOT EXISTS case_studies (
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

CREATE TABLE IF NOT EXISTS testimonials (
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

CREATE TABLE IF NOT EXISTS careers (
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

-- Lead & Contact Tables

CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  industry TEXT,
  budget TEXT,
  project_type TEXT,
  message TEXT,
  source TEXT DEFAULT 'website', -- 'contact','hero-cta','service-page'
  lead_score INT DEFAULT 0,
  category TEXT, -- AI-qualified: startup/edu/smb/health
  status TEXT DEFAULT 'new', -- new/contacted/qualified/converted
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  active BOOLEAN DEFAULT true,
  source TEXT DEFAULT 'footer',
  subscribed_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS job_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  career_id UUID REFERENCES careers(id),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  resume_url TEXT,
  cover_letter TEXT,
  linkedin TEXT,
  portfolio TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS cookie_consents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL,
  necessary BOOLEAN DEFAULT true,
  analytics BOOLEAN DEFAULT false,
  marketing BOOLEAN DEFAULT false,
  preferences BOOLEAN DEFAULT false,
  consent_version TEXT DEFAULT '1.0',
  ip_hash TEXT, -- Hashed for privacy
  user_agent TEXT,
  consented_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

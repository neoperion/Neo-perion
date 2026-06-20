-- Migration 006: Company Ecosystem

-- Ensure base tables exist before attempting alters
CREATE TABLE IF NOT EXISTS careers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    department TEXT NOT NULL,
    location TEXT DEFAULT 'Remote',
    description TEXT NOT NULL,
    requirements TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS job_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL,
    phone TEXT,
    resume_url TEXT,
    cover_letter TEXT,
    linkedin TEXT,
    portfolio TEXT,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT now()
);

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
    source TEXT DEFAULT 'website',
    lead_score INT DEFAULT 0,
    category TEXT,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    source TEXT DEFAULT 'website'
);

-- 1. Update `careers` table
ALTER TABLE careers
ADD COLUMN IF NOT EXISTS slug TEXT UNIQUE,
ADD COLUMN IF NOT EXISTS experience_level TEXT,
ADD COLUMN IF NOT EXISTS salary_range TEXT,
ADD COLUMN IF NOT EXISTS responsibilities TEXT[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT now(),
ADD COLUMN IF NOT EXISTS employment_type TEXT,
ADD COLUMN IF NOT EXISTS benefits TEXT[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS published BOOLEAN DEFAULT true;

-- Rename legacy columns if they exist
DO $$ BEGIN
  IF EXISTS(SELECT * FROM information_schema.columns WHERE table_name='careers' AND column_name='type') THEN
      ALTER TABLE careers RENAME COLUMN type TO employment_type;
  END IF;
  IF EXISTS(SELECT * FROM information_schema.columns WHERE table_name='careers' AND column_name='perks') THEN
      ALTER TABLE careers RENAME COLUMN perks TO benefits;
  END IF;
  IF EXISTS(SELECT * FROM information_schema.columns WHERE table_name='careers' AND column_name='open') THEN
      ALTER TABLE careers RENAME COLUMN open TO published;
  END IF;
END $$;

-- 2. Update `job_applications` table
ALTER TABLE job_applications
ADD COLUMN IF NOT EXISTS job_id UUID REFERENCES careers(id),
ADD COLUMN IF NOT EXISTS full_name TEXT;

DO $$ BEGIN
  IF EXISTS(SELECT * FROM information_schema.columns WHERE table_name='job_applications' AND column_name='career_id') THEN
      ALTER TABLE job_applications RENAME COLUMN career_id TO job_id;
  END IF;
  IF EXISTS(SELECT * FROM information_schema.columns WHERE table_name='job_applications' AND column_name='name') THEN
      ALTER TABLE job_applications RENAME COLUMN name TO full_name;
  END IF;
END $$;

-- 3. Update `leads` table
ALTER TABLE leads
ADD COLUMN IF NOT EXISTS timeline TEXT,
ADD COLUMN IF NOT EXISTS service_required TEXT;

DO $$ BEGIN
  IF EXISTS(SELECT * FROM information_schema.columns WHERE table_name='leads' AND column_name='project_type') THEN
      ALTER TABLE leads RENAME COLUMN project_type TO service_required;
  END IF;
END $$;

-- 4. Update `newsletter_subscribers` table
ALTER TABLE newsletter_subscribers
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'subscribed',
ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT now();

DO $$ BEGIN
  IF EXISTS(SELECT * FROM information_schema.columns WHERE table_name='newsletter_subscribers' AND column_name='subscribed_at') THEN
      ALTER TABLE newsletter_subscribers RENAME COLUMN subscribed_at TO created_at;
  END IF;
END $$;

-- 5. Create `profiles` table
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 6. Create `user_roles` table
CREATE TABLE IF NOT EXISTS user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    role TEXT NOT NULL DEFAULT 'viewer',
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 7. Enable RLS on new tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
CREATE POLICY "Public profiles are viewable by everyone."
ON profiles FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile."
ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile."
ON profiles FOR UPDATE USING (auth.uid() = id);

-- Roles Policies
CREATE POLICY "Roles are viewable by authenticated users."
ON user_roles FOR SELECT USING (auth.role() = 'authenticated');

-- 8. Create Storage Buckets
INSERT INTO storage.buckets (id, name, public) VALUES 
('resumes', 'resumes', false),
('career-assets', 'career-assets', true),
('newsletter-assets', 'newsletter-assets', true),
('company-assets', 'company-assets', true)
ON CONFLICT (id) DO NOTHING;

-- 9. Storage Policies
-- Resumes (Private)
CREATE POLICY "Anyone can upload a resume" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Only authenticated users can view resumes" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'resumes' AND auth.role() = 'authenticated');

-- Public Assets
CREATE POLICY "Public assets are viewable by everyone" 
ON storage.objects FOR SELECT 
USING (bucket_id IN ('career-assets', 'newsletter-assets', 'company-assets'));

CREATE POLICY "Authenticated users can upload public assets" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id IN ('career-assets', 'newsletter-assets', 'company-assets') AND auth.role() = 'authenticated');

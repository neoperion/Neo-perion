-- Add missing columns to leads
ALTER TABLE leads ADD COLUMN IF NOT EXISTS project_type TEXT;

-- Ensure testimonials exists
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

-- Ensure newsletter_subscribers exists
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  active BOOLEAN DEFAULT true,
  source TEXT DEFAULT 'footer',
  subscribed_at TIMESTAMPTZ DEFAULT now()
);

-- Also add missing RLS policies just in case
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- PostgREST cache reload
NOTIFY pgrst, 'reload schema';

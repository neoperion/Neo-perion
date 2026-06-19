-- Migration 002: Lead System

CREATE TABLE leads (
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

CREATE TABLE newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    active BOOLEAN DEFAULT true,
    source TEXT DEFAULT 'footer',
    subscribed_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE job_applications (
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

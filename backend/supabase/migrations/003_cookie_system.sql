-- Migration 003: Cookie Consent System

CREATE TABLE cookie_consents (
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

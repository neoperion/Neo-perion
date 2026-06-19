-- Calendly Meetings Table

CREATE TABLE IF NOT EXISTS meetings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id) ON DELETE SET NULL,
  event_uri TEXT UNIQUE NOT NULL, -- Calendly event URI
  invitee_uri TEXT UNIQUE NOT NULL, -- Calendly invitee URI
  invitee_email TEXT NOT NULL,
  invitee_name TEXT,
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ NOT NULL,
  status TEXT DEFAULT 'active', -- active or canceled
  meeting_url TEXT, -- Google Meet or Zoom link if available
  timezone TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Index for fast lookup by email
CREATE INDEX IF NOT EXISTS idx_meetings_email ON meetings(invitee_email);

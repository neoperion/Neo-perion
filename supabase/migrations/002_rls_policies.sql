-- Enable Row Level Security
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE careers ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE cookie_consents ENABLE ROW LEVEL SECURITY;

-- Public Read Access Policies (Anonymous users can read published data)
CREATE POLICY "Public can view published blogs" ON blogs FOR SELECT USING (published = true);
CREATE POLICY "Public can view published case studies" ON case_studies FOR SELECT USING (published = true);
CREATE POLICY "Public can view active testimonials" ON testimonials FOR SELECT USING (active = true);
CREATE POLICY "Public can view open careers" ON careers FOR SELECT USING (open = true);

-- Public Insert Access Policies (Anonymous users can submit forms)
CREATE POLICY "Public can submit leads" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can subscribe to newsletter" ON newsletter_subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can apply for jobs" ON job_applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can save cookie consent" ON cookie_consents FOR INSERT WITH CHECK (true);

-- Authenticated Admin Access Policies (Admins have full access to everything)
-- Assuming 'authenticated' users are admins based on the application setup
CREATE POLICY "Admins have full access to blogs" ON blogs FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins have full access to case studies" ON case_studies FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins have full access to testimonials" ON testimonials FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins have full access to careers" ON careers FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins have full access to leads" ON leads FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins have full access to newsletter_subscribers" ON newsletter_subscribers FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins have full access to job_applications" ON job_applications FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admins have full access to cookie_consents" ON cookie_consents FOR ALL TO authenticated USING (true) WITH CHECK (true);

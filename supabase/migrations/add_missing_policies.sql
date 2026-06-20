ALTER TABLE careers ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view active testimonials" ON testimonials FOR SELECT USING (active = true);
CREATE POLICY "Public can view open careers" ON careers FOR SELECT USING (published = true);

CREATE POLICY "Public can insert leads" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert newsletter subscribers" ON newsletter_subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert job applications" ON job_applications FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins have full access to testimonials" ON testimonials FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins have full access to careers" ON careers FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins have full access to leads" ON leads FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins have full access to newsletter_subscribers" ON newsletter_subscribers FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins have full access to job_applications" ON job_applications FOR ALL USING (auth.role() = 'authenticated');

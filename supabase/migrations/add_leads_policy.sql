CREATE POLICY "Public can insert leads" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins have full access to leads" ON leads FOR ALL USING (auth.role() = 'authenticated');

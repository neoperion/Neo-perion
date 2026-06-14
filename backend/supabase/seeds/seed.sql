-- Insert Demo Admin User (Assuming roles logic)
-- Note: In Supabase, auth.users is managed by Supabase Auth, 
-- but you might have a public.users profile table. We'll skip raw insert into auth.users 
-- because it requires hashed passwords, but we can document it or insert a profile.

-- Insert Demo Blog
INSERT INTO public.blogs (id, title, slug, summary, content, author_name, read_time, published_at, seo_keywords)
VALUES (
  '11111111-1111-1111-1111-111111111111',
  'The Future of Enterprise AI',
  'future-of-enterprise-ai',
  'How artificial intelligence is reshaping enterprise product development.',
  '# The Future of Enterprise AI \n\nAI is changing everything...',
  'Neo Perion Team',
  '5 min read',
  NOW(),
  ARRAY['AI', 'Enterprise', 'Product Development']
);

-- Insert Demo Case Study
INSERT INTO public.case_studies (id, title, client_name, industry, challenge, solution, impact, is_featured)
VALUES (
  '22222222-2222-2222-2222-222222222222',
  'Scaling FinTech Infrastructure',
  'FinTech Corp',
  'Finance',
  'Legacy systems could not handle transaction volume.',
  'Migrated to scalable microservices with Node.js and PostgreSQL.',
  'Increased transaction throughput by 500% and reduced downtime to zero.',
  true
);

-- Insert Demo Testimonial
INSERT INTO public.testimonials (id, client_name, client_role, company, content, rating)
VALUES (
  '33333333-3333-3333-3333-333333333333',
  'Jane Doe',
  'CTO',
  'InnovateTech',
  'Neo Perion delivered exceptional quality and architecture for our scalable web platform.',
  5
);

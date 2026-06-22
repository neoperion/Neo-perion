import { Router } from 'express';
import { supabase } from '../config/supabase';

const router = Router();

const STATIC_ROUTES = [
  '/',
  '/company/about',
  '/company/founder-letter',
  '/services',
  '/industries',
  '/technologies',
  '/company/blog',
  '/company/case-studies',
  '/company/careers',
  '/contact',
  '/company/newsletter',
  '/security',
  '/privacy',
  '/terms',
  '/company/success-stories',
  '/company/testimonials',
  '/company/insights'
];

router.get('/', async (req, res) => {
  try {
    const siteUrl = 'https://www.neoperion.com';
    
    // Fetch dynamic content
    const [blogsResult, caseStudiesResult] = await Promise.all([
      supabase.from('blogs').select('slug, updated_at').eq('status', 'published'),
      supabase.from('case_studies').select('slug, updated_at')
    ]);

    const blogs = blogsResult.data || [];
    const caseStudies = caseStudiesResult.data || [];

    // Construct XML
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Add static routes
    STATIC_ROUTES.forEach((route) => {
      xml += `  <url>\n`;
      xml += `    <loc>${siteUrl}${route}</loc>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n`;
      xml += `  </url>\n`;
    });

    // Add blogs
    blogs.forEach((blog) => {
      xml += `  <url>\n`;
      xml += `    <loc>${siteUrl}/company/blog/${blog.slug}</loc>\n`;
      if (blog.updated_at) {
        xml += `    <lastmod>${new Date(blog.updated_at).toISOString()}</lastmod>\n`;
      }
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.7</priority>\n`;
      xml += `  </url>\n`;
    });

    // Add case studies
    caseStudies.forEach((study) => {
      xml += `  <url>\n`;
      xml += `    <loc>${siteUrl}/company/case-studies/${study.slug}</loc>\n`;
      if (study.updated_at) {
        xml += `    <lastmod>${new Date(study.updated_at).toISOString()}</lastmod>\n`;
      }
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.7</priority>\n`;
      xml += `  </url>\n`;
    });

    // Add Services (Assuming we have static service list on frontend, mapping them here manually for now)
    const services = [
      'ai-systems-automation',
      'deep-ai-engineering',
      'enterprise-product-engineering',
      'cloud-native-web-platforms',
      'mobile-product-engineering',
      'intelligent-operations-automation',
      'startup-to-scale-engineering'
    ];

    services.forEach((slug) => {
      xml += `  <url>\n`;
      xml += `    <loc>${siteUrl}/services/${slug}</loc>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;
      xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(xml);

  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send('Error generating sitemap');
  }
});

export default router;

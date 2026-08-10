import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://www.aincuru.com';

// Static routes
const staticRoutes = [
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
  '/company/success-stories',
  '/company/testimonials',
  '/company/insights',
  '/privacy',
  '/terms',
  '/security',
  '/portfolio',
  '/for-us-clients',
];

// Dynamic mock data routes (you could ideally import these or hardcode for now)
const dynamicServices = [
  'ai-systems-automation',
  'deep-ai-engineering',
  'enterprise-product-engineering',
  'cloud-native-web-platforms',
  'mobile-product-engineering',
  'intelligent-operations-automation',
  'startup-to-scale-engineering'
];

const dynamicIndustries = ['education', 'startups', 'smbs', 'healthcare'];
const dynamicCaseStudies = ['ai-healthcare-rpa', 'edtech-saas-platform', 'intelligent-inventory-system'];
const dynamicBlogs = [
  'future-of-ai-enterprise-saas',
  'monolith-to-serverless-guide',
  'building-high-performance-mvp',
  'automating-healthcare-workflows-rpa',
  'how-much-does-custom-web-platform-cost-india',
  'ai-chatbot-for-business-rag-explained',
  'freelancer-vs-agency-vs-inhouse-mvp'
];

const dynamicPortfolio = [
  'krishna-packers-movers',
  'izhaiyam-ecommerce',
  'funnova',
  'lexzify-ai-travel-planner',
  'farm-profit-analyzer',
  'donateconnect',
  'mobile-case-accessories',
  'polystore-solution',
  'web-analyzer',
  'holo-mehndi'
];

function buildUrlNode(loc, priority = 0.8, changefreq = 'monthly') {
  return `  <url>
    <loc>${SITE_URL}${loc}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes.map(r => buildUrlNode(r, r === '/' ? 1.0 : 0.8)).join('\n')}
${dynamicServices.map(r => buildUrlNode(`/services/${r}`, 0.9)).join('\n')}
${dynamicIndustries.map(r => buildUrlNode(`/industries/${r}`, 0.7)).join('\n')}
${dynamicCaseStudies.map(r => buildUrlNode(`/company/case-studies/${r}`, 0.9)).join('\n')}
${dynamicBlogs.map(r => buildUrlNode(`/company/blog/${r}`, 0.7)).join('\n')}
${dynamicPortfolio.map(r => buildUrlNode(`/portfolio/${r}`, 0.8)).join('\n')}
</urlset>`;

const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(publicPath, sitemap, 'utf8');
console.log('Successfully generated sitemap.xml to ' + publicPath);

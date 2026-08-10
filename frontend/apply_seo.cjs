const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'src', 'pages');

const mapping = {
  'AboutPage.tsx': 'about',
  'ServicesPage.tsx': 'services',
  'BlogPage.tsx': 'blog',
  'CaseStudies.tsx': 'caseStudies',
  'Portfolio.tsx': 'portfolio',
  'FounderLetter.tsx': 'founderLetter',
  'Careers.tsx': 'careers',
  'Contact.tsx': 'contact',
  'Insights.tsx': 'insights',
  'Testimonials.tsx': 'testimonials',
  'SuccessStories.tsx': 'successStories',
  'UsClients.tsx': 'forUsClients',
  'Technologies.tsx': 'technologies',
  'IndustriesPage.tsx': 'industries'
};

function processFile(filename, seoKey) {
  const fullPath = path.join(PAGES_DIR, filename);
  if (!fs.existsSync(fullPath)) {
    console.log(`Skipping ${filename}, not found.`);
    return;
  }
  let content = fs.readFileSync(fullPath, 'utf8');

  // Skip if already has seoConfig
  if (content.includes('seoConfig')) {
    console.log(`Skipping ${filename}, already has seoConfig.`);
    return;
  }

  // Remove existing Helmet usage
  content = content.replace(/import\s*\{\s*Helmet\s*\}\s*from\s*['"]react-helmet-async['"];?\n?/, '');
  content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/, '');

  // Ensure SEO is imported
  if (!content.includes('import { SEO }')) {
    // Add import after first import
    content = content.replace(/(import.*?;?\n)/, `$1import { SEO } from "@/components/SEO";\nimport { seoConfig } from "@/lib/seoConfig";\n`);
  } else {
    content = content.replace(/(import \{ SEO \} .*?;?\n)/, `$1import { seoConfig } from "@/lib/seoConfig";\n`);
  }

  // Inject <SEO /> right after the first return (
  const seoTag = `\n      <SEO title={seoConfig.${seoKey}.title} description={seoConfig.${seoKey}.description} url={seoConfig.${seoKey}.url} />`;
  
  // Find where to inject
  const match = content.match(/return\s*\(\s*(<[^>]+>)/);
  if (match) {
    const insertPos = match.index + match[0].length;
    content = content.substring(0, insertPos) + seoTag + content.substring(insertPos);
    fs.writeFileSync(fullPath, content);
    console.log(`Updated ${filename}`);
  } else {
    // try finding first wrapper div/main
    const match2 = content.match(/return\s*\(?[\s\S]*?(<div[^>]*>|<main[^>]*>|<PageWrapper[^>]*>)/);
    if (match2) {
      const insertPos = match2.index + match2[0].length;
      content = content.substring(0, insertPos) + seoTag + content.substring(insertPos);
      fs.writeFileSync(fullPath, content);
      console.log(`Updated ${filename} (fallback regex)`);
    } else {
      console.log(`Failed to find injection point in ${filename}`);
    }
  }
}

for (const [filename, seoKey] of Object.entries(mapping)) {
  processFile(filename, seoKey);
}

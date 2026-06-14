const fs = require('fs');
const path = require('path');

const pages = [
  'FounderLetter',
  'Careers',
  'CareerDetail',
  'Contact',
  'Newsletter',
  'Security',
  'SuccessStories',
  'Testimonials',
  'Insights',
  'Technologies',
  'TechnologyDetail',
  'admin/Dashboard',
  'admin/CareersAdmin',
  'admin/ApplicationsAdmin',
  'admin/LeadsAdmin',
  'admin/NewsletterAdmin'
];

const basePath = path.join(__dirname, '../frontend/src/pages');

pages.forEach(page => {
  const isDynamic = page.includes('Detail');
  const name = page.split('/').pop();
  const dir = path.join(basePath, path.dirname(page));
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const filePath = path.join(basePath, `${page}.tsx`);
  
  if (!fs.existsSync(filePath)) {
    const content = `import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
${isDynamic ? 'import { useParams } from "react-router-dom";' : ''}

const ${name} = () => {
  ${isDynamic ? 'const { slug } = useParams();' : ''}
  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-cyan-500/30">
      <Helmet>
        <title>${name} | Neo Perion</title>
      </Helmet>
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">${name} Page</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            ${isDynamic ? 'Viewing details for: {slug}' : 'This page is currently under construction for Sprint 5.'}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ${name};
`;
    fs.writeFileSync(filePath, content);
    console.log(`Created ${filePath}`);
  }
});

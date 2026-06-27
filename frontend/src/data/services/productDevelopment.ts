import { Code } from 'lucide-react';
import { ServicePageConfig } from './types';

export const productDevelopment: ServicePageConfig = {
  slug: 'product-development',
  title: 'Product Development',
  subtitle: 'End-to-end SaaS and enterprise product engineering.',
  heroGradient: 'from-amber-500/20 to-orange-500/20',
  icon: Code,
  challenges: [
    'Startup MVP Development',
    'Product Validation',
    'Scalability',
    'Architecture Planning'
  ],
  solutions: [
    { title: 'Product Discovery', description: 'Validate your idea and scope the requirements before writing a single line of code.' },
    { title: 'Architecture Design', description: 'Build a scalable, robust, and secure foundation for your application.' },
    { title: 'MVP Development', description: 'Launch your core product quickly to gather user feedback and iterate.' },
    { title: 'Product Scaling', description: 'Refactoring and optimizing existing platforms to handle millions of users.' }
  ],
  techStack: [
    'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Supabase', 'AWS', 'Docker'
  ],
  process: [
    { step: '01', title: 'Discovery', description: 'Requirement analysis and technical scoping.' },
    { step: '02', title: 'Architecture', description: 'System design and database planning.' },
    { step: '03', title: 'Development', description: 'Agile sprints with regular deliverables.' },
    { step: '04', title: 'Launch', description: 'Production deployment and monitoring.' }
  ],
  faqs: [
    { question: 'How long does an MVP take?', answer: 'Typically 8-12 weeks depending on complexity.' },
    { question: 'Do I own the source code?', answer: 'Yes, 100% intellectual property ownership is transferred to you.' }
  ],
  cta: {
    headline: 'Ready to build your product?',
    subheadline: 'Let\'s transform your idea into a scalable digital product.',
    primaryButtonText: 'Book Free Consultation',
    secondaryButtonText: 'Start Your Project'
  }
};

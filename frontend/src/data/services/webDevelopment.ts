import { Globe } from 'lucide-react';
import { ServicePageConfig } from './types';

export const webDevelopment: ServicePageConfig = {
  slug: 'web-development',
  title: 'Web Development',
  subtitle: 'High-performance web applications using modern tech stacks.',
  heroGradient: 'from-orange-500/20 to-orange-500/20',
  icon: Globe,
  challenges: [
    'Slow Websites',
    'Poor UX',
    'Low Conversion',
    'SEO Issues'
  ],
  solutions: [
    { title: 'Corporate Websites', description: 'Premium, fast-loading brand experiences that build trust.' },
    { title: 'Startup Websites', description: 'High-converting landing pages tailored for product launches.' },
    { title: 'Landing Pages', description: 'Optimized single-page marketing funnels.' },
    { title: 'SaaS Dashboards', description: 'Complex web applications with rich user interfaces.' }
  ],
  techStack: [
    'React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'PostgreSQL'
  ],
  process: [
    { step: '01', title: 'Design', description: 'UI/UX mockups and wireframes.' },
    { step: '02', title: 'Code', description: 'Frontend development with semantic HTML.' },
    { step: '03', title: 'Optimize', description: 'Lighthouse scoring and SEO implementation.' },
    { step: '04', title: 'Deploy', description: 'Edge network deployment for global speed.' }
  ],
  faqs: [
    { question: 'Do you provide hosting?', answer: 'Yes, we handle end-to-end deployment on enterprise edge networks.' },
    { question: 'Will my website be mobile friendly?', answer: 'Absolutely. Every site is built mobile-first and fully responsive.' }
  ],
  cta: {
    headline: 'Need a high-performance website?',
    subheadline: 'Upgrade your digital presence with enterprise web development.',
    primaryButtonText: 'Book Free Consultation',
    secondaryButtonText: 'Start Your Project'
  }
};

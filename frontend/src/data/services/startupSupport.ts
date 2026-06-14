import { Rocket } from 'lucide-react';
import { ServicePageConfig } from './types';

export const startupSupport: ServicePageConfig = {
  slug: 'startup-support',
  title: 'Startup Support',
  subtitle: 'Technical consulting and MVP engineering for founders.',
  heroGradient: 'from-blue-500/20 to-cyan-500/20',
  icon: Rocket,
  challenges: [
    'Lack of Technical Co-Founder',
    'Unclear Product Roadmap',
    'Budget Constraints',
    'Choosing the Right Tech Stack'
  ],
  solutions: [
    { title: 'Idea Validation', description: 'Testing concepts with landing pages and waitlists.' },
    { title: 'MVP Development', description: 'Building the core feature set to gain initial traction.' },
    { title: 'Fundraising Support', description: 'Technical documentation and architecture diagrams for investors.' },
    { title: 'Product Roadmaps', description: 'Planning Phase 1, Phase 2, and future technical iterations.' },
    { title: 'Technical Consulting', description: 'Acting as your fractional CTO for key architectural decisions.' },
    { title: 'Go-To-Market Support', description: 'Ensuring the tech is ready for an influx of launch traffic.' }
  ],
  techStack: [
    'Next.js', 'Supabase', 'Vercel', 'Tailwind CSS', 'Stripe', 'PostHog'
  ],
  process: [
    { step: '01', title: 'Consultation', description: 'Deep dive into your startup vision and business model.' },
    { step: '02', title: 'Scoping', description: 'Defining the absolute minimum viable product features.' },
    { step: '03', title: 'Execution', description: 'Rapid engineering sprints to get to market fast.' },
    { step: '04', title: 'Iteration', description: 'Analyzing user feedback to pivot or double-down.' }
  ],
  faqs: [
    { question: 'Do you take equity?', answer: 'We typically work on a straightforward fee-for-service model.' },
    { question: 'Can you help us hire our own team later?', answer: 'Yes, we set up the architecture so it is easy to hand off to your internal hires.' }
  ],
  cta: {
    headline: 'Need a technical partner?',
    subheadline: 'We build MVPs that help founders secure funding and user traction.',
    primaryButtonText: 'Book Free Consultation',
    secondaryButtonText: 'Start Your Project'
  }
};

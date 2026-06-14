import { Smartphone } from 'lucide-react';
import { ServicePageConfig } from './types';

export const mobileDevelopment: ServicePageConfig = {
  slug: 'mobile-development',
  title: 'Mobile Development',
  subtitle: 'Native and cross-platform mobile experiences.',
  heroGradient: 'from-emerald-500/20 to-teal-500/20',
  icon: Smartphone,
  challenges: [
    'Poor App Performance',
    'Low User Retention',
    'Platform Fragmentation',
    'High Development Costs'
  ],
  solutions: [
    { title: 'Android Apps', description: 'Native performance for the global Android market.' },
    { title: 'iOS Apps', description: 'Premium Apple experiences built with Swift.' },
    { title: 'Cross Platform Apps', description: 'React Native solutions for unified codebases.' },
    { title: 'Flutter Apps', description: 'Beautiful natively compiled applications from a single codebase.' },
    { title: 'React Native Apps', description: 'Web-like development speed with native performance.' }
  ],
  techStack: [
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Supabase'
  ],
  process: [
    { step: '01', title: 'Prototyping', description: 'Interactive mobile wireframes.' },
    { step: '02', title: 'Development', description: 'Native code implementation.' },
    { step: '03', title: 'Testing', description: 'Cross-device QA.' },
    { step: '04', title: 'Store Launch', description: 'App Store and Google Play submission.' }
  ],
  faqs: [
    { question: 'Which platforms do you support?', answer: 'We build for both iOS and Android simultaneously.' },
    { question: 'Do you handle app store submission?', answer: 'Yes, we manage the entire review and publishing process.' }
  ],
  cta: {
    headline: 'Ready to build your mobile app?',
    subheadline: 'Reach your users wherever they are with our premium mobile apps.',
    primaryButtonText: 'Book Free Consultation',
    secondaryButtonText: 'Start Your Project'
  }
};

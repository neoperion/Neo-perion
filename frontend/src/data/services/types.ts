import { LucideIcon } from 'lucide-react';

export interface ServicePageConfig {
  slug: string;
  title: string;
  subtitle: string;
  heroGradient: string;
  icon: LucideIcon;
  challenges: string[];
  solutions: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  cta: {
    headline: string;
    subheadline: string;
    primaryButtonText: string;
    secondaryButtonText: string;
  };
}

import { GraduationCap, Rocket, Building2, Activity } from 'lucide-react';

export interface IndustryData {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: any;
  color: string;
  solutions: string[];
  benefits: {
    title: string;
    description: string;
  }[];
}

export const industriesData: IndustryData[] = [
  {
    id: 'education',
    title: 'Education & EdTech',
    slug: '/industries#education',
    description: 'Empowering the future of learning with scalable educational technology and AI-driven platforms.',
    icon: GraduationCap,
    color: '#06b6d4',
    solutions: [
      'LMS Platforms',
      'School Management Systems',
      'Student Analytics',
      'AI Learning Assistants',
      'Assessment Platforms'
    ],
    benefits: [
      { title: 'Personalized Learning', description: 'AI algorithms adapt to individual student needs and pacing.' },
      { title: 'Administrative Efficiency', description: 'Automate grading, scheduling, and student enrollment processes.' },
      { title: 'Scalability', description: 'Cloud-native platforms capable of handling millions of concurrent users.' }
    ]
  },
  {
    id: 'startups',
    title: 'Startups & Founders',
    slug: '/industries#startups',
    description: 'Transforming visionary ideas into market-ready digital products with rapid engineering cycles.',
    icon: Rocket,
    color: '#8b5cf6',
    solutions: [
      'MVP Development',
      'SaaS Platforms',
      'Product Engineering',
      'Technical Consulting',
      'Startup Automation'
    ],
    benefits: [
      { title: 'Speed to Market', description: 'Launch your core product in weeks, not months.' },
      { title: 'Investor Ready', description: 'Enterprise-grade architecture that passes technical due diligence.' },
      { title: 'Cost Predictability', description: 'Transparent pricing and agile scoping to manage burn rate.' }
    ]
  },
  {
    id: 'smbs',
    title: 'Small & Medium Businesses',
    slug: '/industries#smbs',
    description: 'Accelerating growth through end-to-end digital transformation and intelligent automation.',
    icon: Building2,
    color: '#f59e0b',
    solutions: [
      'Digital Transformation',
      'Workflow Automation',
      'CRM Systems',
      'ERP Systems',
      'Business Intelligence'
    ],
    benefits: [
      { title: 'Operational Efficiency', description: 'Eliminate manual data entry and streamline daily operations.' },
      { title: 'Data-Driven Decisions', description: 'Real-time dashboards that provide actionable business insights.' },
      { title: 'Improved Customer Experience', description: 'Automated follow-ups and personalized communication channels.' }
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    slug: '/industries#healthcare',
    description: 'Modernizing patient care with secure, compliant, and intelligent health-tech solutions.',
    icon: Activity,
    color: '#ef4444',
    solutions: [
      'Healthcare Platforms',
      'Patient Management',
      'AI Diagnostics',
      'Analytics Dashboards',
      'Telemedicine Systems'
    ],
    benefits: [
      { title: 'HIPAA Compliance', description: 'Security-first architecture that protects sensitive patient data.' },
      { title: 'Predictive Care', description: 'AI models that assist in diagnosing and forecasting patient needs.' },
      { title: 'Seamless Integration', description: 'Connecting legacy EHR systems with modern patient portals.' }
    ]
  }
];

import { GraduationCap, Rocket, Building2, HeartPulse, BookOpen, BarChart3, Bot, ClipboardCheck, Code2, Layers, Lightbulb, Users, Briefcase, TrendingUp, PieChart, Settings, Stethoscope, Video, Brain, Activity, FileSpreadsheet, FileCheck, Calculator, LucideIcon } from 'lucide-react';

export interface IndustryOffering {
  title: string;
  description: string;
  icon: LucideIcon;
}


export interface IndustryProcess {
  step: number;
  title: string;
  description: string;
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryBenefit {
  title: string;
  description: string;
}

export interface IndustryData {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  heroHeadline: string;
  heroSubtext: string;
  ctaText: string;
  description: string;
  icon: LucideIcon;
  color: string;
  colorLight: string;
  gradientFrom: string;
  gradientTo: string;
  solutions: string[];
  benefits: IndustryBenefit[];
  offerings: IndustryOffering[];
  process: IndustryProcess[];
  techStack: string[];
  caseStudyPreview: {
    title: string;
    client: string;
    result: string;
    metric: string;
    metricLabel: string;
  };
  faq: IndustryFAQ[];
}

export const industriesData: IndustryData[] = [
  {
    id: 'education',
    title: 'Education & EdTech',
    slug: 'education',
    tagline: 'FUTURE OF LEARNING',
    heroHeadline: 'Reimagine Education with Intelligent Technology',
    heroSubtext: 'We build AI-powered learning ecosystems that personalize education at scale — from adaptive LMS platforms to real-time student analytics that help educators understand every learner\'s journey.',
    ctaText: 'Build Your EdTech Platform',
    description: 'Empowering the future of learning with scalable educational technology and AI-driven platforms.',
    icon: GraduationCap,
    color: '#F59E0B',
    colorLight: '#ecfeff',
    gradientFrom: '#F59E0B',
    gradientTo: '#0891b2',
    solutions: [
      'LMS Platforms',
      'Student Analytics',
      'AI Learning Assistants',
      'Assessment Systems',
      'School Management'
    ],
    benefits: [
      { title: 'Personalized Learning', description: 'AI algorithms adapt to individual student needs and pacing.' },
      { title: 'Administrative Efficiency', description: 'Automate grading, scheduling, and student enrollment processes.' },
      { title: 'Scalability', description: 'Cloud-native platforms capable of handling millions of concurrent users.' }
    ],

    offerings: [
      {
        title: 'AI-Powered LMS Platforms',
        description: 'Custom learning management systems with adaptive content delivery, progress tracking, gamification, and multi-tenant architecture for institutions.',
        icon: BookOpen
      },
      {
        title: 'Student Analytics & Insights',
        description: 'Real-time dashboards with predictive analytics that identify at-risk students, track engagement patterns, and measure learning outcomes.',
        icon: BarChart3
      },
      {
        title: 'AI Learning Assistants',
        description: 'Conversational AI tutors trained on curriculum data that provide 24/7 personalized support, answer questions, and generate practice problems.',
        icon: Bot
      },
      {
        title: 'Smart Assessment Systems',
        description: 'Automated grading engines with anti-cheating AI, adaptive testing, rubric-based evaluation, and detailed performance reports.',
        icon: ClipboardCheck
      }
    ],
    process: [
      { step: 1, title: 'Curriculum Analysis', description: 'Deep-dive into your curriculum structure, learner personas, and institutional goals to architect the ideal platform.' },
      { step: 2, title: 'Platform Architecture', description: 'Design scalable multi-tenant infrastructure with content delivery pipelines and real-time analytics layers.' },
      { step: 3, title: 'AI Integration', description: 'Build and fine-tune AI models for adaptive learning, automated assessment, and intelligent tutoring systems.' },
      { step: 4, title: 'Launch & Scale', description: 'Deploy with load testing for 100K+ concurrent users, integrate with SIS/LTI systems, and provide ongoing optimization.' }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Python', 'TensorFlow', 'OpenAI', 'AWS', 'Redis', 'WebRTC', 'GraphQL'],
    caseStudyPreview: {
      title: 'AI-Powered Adaptive Learning Platform',
      client: 'Leading K-12 EdTech Startup',
      result: 'Built a personalized learning platform serving 500K+ students with AI-driven content recommendations and real-time progress tracking.',
      metric: '340%',
      metricLabel: 'Student Engagement Increase'
    },
    faq: [
      {
        question: 'Can you integrate with existing Student Information Systems (SIS)?',
        answer: 'Absolutely. We build LTI-compliant platforms that integrate seamlessly with PowerSchool, Infinite Campus, Canvas, Blackboard, and any SIS using REST/GraphQL APIs.'
      },
      {
        question: 'How does the AI personalization work?',
        answer: 'Our adaptive engine uses collaborative filtering and knowledge graph models to assess each student\'s mastery level, then dynamically adjusts content difficulty, pacing, and learning pathways in real-time.'
      },
      {
        question: 'What about data privacy for student records (FERPA)?',
        answer: 'All platforms are built FERPA-compliant by default. We implement end-to-end encryption, role-based access control, audit logging, and data residency controls.'
      }
    ]
  },
  {
    id: 'startups',
    title: 'Startups & Founders',
    slug: 'startups',
    tagline: 'FROM IDEA TO IPO',
    heroHeadline: 'Turn Your Vision Into a Scalable Product',
    heroSubtext: 'We partner with founders to build investor-ready MVPs, scale SaaS platforms, and provide fractional CTO expertise — helping you move from zero to product-market fit at startup speed.',
    ctaText: 'Launch Your MVP',
    description: 'Transforming visionary ideas into market-ready digital products with rapid engineering cycles.',
    icon: Rocket,
    color: '#8b5cf6',
    colorLight: '#f5f3ff',
    gradientFrom: '#8b5cf6',
    gradientTo: '#7c3aed',
    solutions: [
      'MVP Development',
      'SaaS Platforms',
      'Product Engineering',
      'Startup Consulting',
      'Technical Due Diligence'
    ],
    benefits: [
      { title: 'Speed to Market', description: 'Launch your core product in weeks, not months.' },
      { title: 'Investor Ready', description: 'Enterprise-grade architecture that passes technical due diligence.' },
      { title: 'Cost Predictability', description: 'Transparent pricing and agile scoping to manage burn rate.' }
    ],

    offerings: [
      {
        title: 'Rapid MVP Development',
        description: 'Go from idea to working product in 4–6 weeks. We validate your concept with real users while building scalable foundations — no throwaway code.',
        icon: Rocket
      },
      {
        title: 'SaaS Platform Engineering',
        description: 'Multi-tenant architecture, subscription billing (Stripe/Razorpay), user management, analytics dashboards, and API-first design for B2B/B2C SaaS.',
        icon: Layers
      },
      {
        title: 'Product Strategy & Consulting',
        description: 'Fractional CTO services, technical due diligence prep, architecture reviews, and technology roadmap planning for seed to Series B startups.',
        icon: Lightbulb
      },
      {
        title: 'Scale Engineering',
        description: 'Performance optimization, microservices migration, CI/CD pipelines, and infrastructure automation to handle 10x → 100x growth without breaking.',
        icon: TrendingUp
      }
    ],
    process: [
      { step: 1, title: 'Discovery Sprint', description: 'One-week deep-dive into your vision, market, user personas, and competitive landscape to define the core MVP scope.' },
      { step: 2, title: 'Rapid Prototyping', description: 'Interactive Figma prototypes and user flow validation before writing a single line of production code.' },
      { step: 3, title: 'Agile Build', description: 'Two-week sprints with daily standups, demo Fridays, and continuous deployment. You see progress every single day.' },
      { step: 4, title: 'Launch & Iterate', description: 'Go live with monitoring, user analytics, and a prioritized backlog for rapid iteration based on real user feedback.' }
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Stripe', 'Vercel', 'Docker', 'GitHub Actions'],
    caseStudyPreview: {
      title: 'SaaS MVP to $2M ARR in 8 Months',
      client: 'B2B Workflow Automation Startup',
      result: 'Built and launched a full SaaS platform from scratch in 5 weeks. The startup secured $1.5M seed funding within 3 months of launch.',
      metric: '$2M',
      metricLabel: 'ARR Within 8 Months'
    },
    faq: [
      {
        question: 'How fast can you build and launch an MVP?',
        answer: 'Most MVPs launch in 4–6 weeks. We prioritize core features that validate your hypothesis, then iterate rapidly based on user feedback and metrics.'
      },
      {
        question: 'Do you take equity or only charge fees?',
        answer: 'We primarily work on a fixed-fee or retainer model. For exceptional partnerships, we occasionally consider equity arrangements alongside reduced fees.'
      },
      {
        question: 'Can you help us prepare for investor pitches?',
        answer: 'Yes. We provide technical due diligence documentation, architecture diagrams, scalability reports, and can join investor calls to answer technical questions.'
      }
    ]
  },
  {
    id: 'smbs',
    title: 'SMBs & Enterprise',
    slug: 'smbs',
    tagline: 'DIGITAL TRANSFORMATION',
    heroHeadline: 'Automate, Optimize & Scale Your Business',
    heroSubtext: 'We help small-to-medium businesses and enterprises eliminate manual bottlenecks through intelligent automation, custom CRM/ERP systems, and real-time analytics dashboards that drive data-informed decisions.',
    ctaText: 'Transform Your Operations',
    description: 'Accelerating growth through end-to-end digital transformation and intelligent automation.',
    icon: Building2,
    color: '#f59e0b',
    colorLight: '#fffbeb',
    gradientFrom: '#f59e0b',
    gradientTo: '#d97706',
    solutions: [
      'Business Automation',
      'CRM Systems',
      'Analytics Dashboards',
      'ERP Solutions',
      'Workflow Digitization'
    ],
    benefits: [
      { title: 'Operational Efficiency', description: 'Eliminate manual data entry and streamline daily operations.' },
      { title: 'Data-Driven Decisions', description: 'Real-time dashboards that provide actionable business insights.' },
      { title: 'Improved Customer Experience', description: 'Automated follow-ups and personalized communication channels.' }
    ],

    offerings: [
      {
        title: 'Intelligent Business Automation',
        description: 'End-to-end workflow automation with AI-powered document processing, smart routing, approval chains, and integration with 200+ business tools.',
        icon: Settings
      },
      {
        title: 'Custom CRM Solutions',
        description: 'Purpose-built customer relationship management with lead scoring, pipeline visualization, automated outreach, and deep analytics.',
        icon: Users
      },
      {
        title: 'Real-Time Analytics Dashboards',
        description: 'Executive dashboards with KPI tracking, predictive forecasting, anomaly detection, and automated reporting for every department.',
        icon: PieChart
      },
      {
        title: 'ERP & Operations Platform',
        description: 'Unified enterprise resource planning with inventory management, procurement workflows, financial tracking, and HR modules.',
        icon: Briefcase
      }
    ],
    process: [
      { step: 1, title: 'Operations Audit', description: 'Map every business process, identify bottlenecks, calculate time-waste metrics, and prioritize high-ROI automation opportunities.' },
      { step: 2, title: 'Solution Design', description: 'Architect custom solutions that integrate with your existing tools — no rip-and-replace. We augment, not disrupt.' },
      { step: 3, title: 'Build & Integrate', description: 'Develop, test, and deploy with zero downtime. We integrate with your CRM, accounting, inventory, and communication systems.' },
      { step: 4, title: 'Train & Optimize', description: 'Comprehensive team training, documentation, and ongoing optimization with monthly performance reviews and ROI tracking.' }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Python', 'Power BI', 'Zapier', 'Salesforce API', 'AWS Lambda', 'Redis', 'Elasticsearch'],
    caseStudyPreview: {
      title: 'End-to-End Digital Transformation for Manufacturing SMB',
      client: 'Mid-Size Manufacturing Company',
      result: 'Automated 15 manual workflows, built a custom ERP dashboard, and reduced operational costs by 45% within 6 months of deployment.',
      metric: '45%',
      metricLabel: 'Cost Reduction in 6 Months'
    },
    faq: [
      {
        question: 'Will this disrupt our current operations during implementation?',
        answer: 'No. We use a phased rollout approach with parallel systems running simultaneously. Your team continues working normally while we migrate processes one module at a time.'
      },
      {
        question: 'Can you integrate with our existing tools like Tally, Zoho, or QuickBooks?',
        answer: 'Yes. We specialize in building integration layers that connect legacy systems with modern platforms using APIs, webhooks, and middleware — no data silos.'
      },
      {
        question: 'How do you measure ROI on automation?',
        answer: 'We establish baseline metrics before implementation, then track time saved, error reduction, throughput improvement, and cost savings with real-time dashboards.'
      }
    ]
  },
  {
    id: 'accounting-automation',
    title: 'Business Registrations & Accounting Automation',
    slug: 'accounting-automation',
    tagline: 'WORK THAT DISAPPEARS',
    heroHeadline: 'The Work Your Team Shouldn\'t Have To Do',
    heroSubtext: 'We turn repetitive business registrations and statutory workflows into intelligent, human-controlled systems. One methodology applied across MSME, GST, MCA, and compliance operations.',
    ctaText: 'Automate Your Registrations',
    description: 'We find repetitive business workflows and turn them into intelligent, human-controlled systems.',
    icon: FileSpreadsheet,
    color: '#A8521E',
    colorLight: '#fdf8f4',
    gradientFrom: '#A8521E',
    gradientTo: '#7C3411',
    solutions: [
      'MSME & Udyam Registrations',
      'GST Filing & Registration Automation',
      'MCA & Incorporation Workflows',
      'Statutory & License Filings (IEC, FSSAI)',
      'Document Extraction & Verification'
    ],
    benefits: [
      { title: '40 Minutes → 1 Minute', description: 'Dramatic reduction in manual data entry cycles with instant document parsing.' },
      { title: 'All Registration Workflows', description: 'One proven methodology applied across MSME, GST, MCA, and license filings.' },
      { title: 'Human-in-the-Loop Control', description: 'The system extracts and prepares; the professional reviews and executes.' }
    ],

    offerings: [
      {
        title: 'MSME & Statutory Registrations',
        description: 'Automated intake of identity, bank, and business proofs. Instant field extraction and automated portal preparation with 1-click human verification.',
        icon: FileCheck
      },
      {
        title: 'GST & Tax Compliance Prep',
        description: 'Multi-state invoice parsing, reconciliation engines, and automated draft preparation that eliminate repetitive portal data entry.',
        icon: Calculator
      },
      {
        title: 'MCA & Corporate Incorporations',
        description: 'Name reservation collation, Director KYC parsing, SPICe+ form preparation, and license filings (IEC, FSSAI, Shop & Establishment).',
        icon: Building2
      },
      {
        title: 'Intelligent Document Extraction',
        description: 'OCR & Vision AI pipelines that convert raw PDFs, images, and scanned identity documents into structured schema ready for portal execution.',
        icon: Bot
      }
    ],
    process: [
      { step: 1, title: 'Workflow Auditing', description: 'Map repetitive data entry, document verification, and portal submission bottlenecks across your office.' },
      { step: 2, title: 'Extraction & Validation Engine', description: 'Train deterministic schema validation on your document templates with 100% field accuracy checks.' },
      { step: 3, title: 'Human Verification Interface', description: 'Deploy a clean dashboard where professionals review auto-prepared drafts before final portal submission.' },
      { step: 4, title: 'Cross-Service Scaling', description: 'Expand the same automation pipeline across GST, MCA, and regulatory filings without adding headcount.' }
    ],
    techStack: ['Python', 'FastAPI', 'Document AI', 'Vision LLMs', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    caseStudyPreview: {
      title: 'MSME Registration: 40 Minutes Became 1 Minute',
      client: 'Bengaluru Finance & Accounting Firm',
      result: 'Transformed a 30–40 minute manual data entry ordeal into a 1-minute automated preparation with one human in final control.',
      metric: '40m → 1m',
      metricLabel: 'Preparation Time Transformation'
    },
    faq: [
      {
        question: 'Does this replace our accounting professionals?',
        answer: 'No. AI doesn\'t replace the professional — it removes the repetition. The system handles extraction, preparation, and repetitive data entry. The professional reviews the information and remains in full control of the final action.'
      },
      {
        question: 'Can this engine handle registrations other than MSME?',
        answer: 'Yes. While MSME registration serves as our benchmark proof point, the exact same extraction and preparation methodology automates GST, MCA / Company Incorporations, IEC, FSSAI, Trademarks, and client onboarding workflows.'
      },
      {
        question: 'How do you guarantee accuracy on statutory portals?',
        answer: 'We enforce deterministic validation rules and checksum calculations on all extracted fields (PAN, Aadhaar, GSTIN, Bank IFSC) prior to presentation. No filing is submitted without professional verification and approval.'
      }
    ]
  }
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  if (slug === 'healthcare' || slug === 'finance-accounting') {
    return industriesData.find(i => i.slug === 'accounting-automation');
  }
  return industriesData.find(i => i.slug === slug);
}

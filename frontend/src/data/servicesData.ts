import { Code, Globe, Smartphone, BrainCircuit, Cpu, Workflow, Rocket, LucideIcon } from 'lucide-react';

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  color: string;
  icon: LucideIcon;
  description: string;
  heroHeadline: string;
  heroSubtext: string;
  overview: string;
  ctaText: string;
  features: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceData[] = [
  {
    id: 'product-development',
    title: 'Product Development',
    slug: 'product-development',
    tagline: 'END-TO-END ENGINEERING',
    color: '#06b6d4',
    icon: Code,
    description: 'End-to-end SaaS and enterprise product engineering.',
    heroHeadline: 'Build Scalable Products',
    heroSubtext: 'We engineer enterprise-grade SaaS and digital products from the ground up.',
    overview: 'Our product development service takes your idea from concept to market.\n\nWe ensure rigorous testing and scalable architecture.',
    ctaText: 'Build with us',
    features: [
      { title: 'MVP Development', description: 'Launch your core product quickly to gather user feedback.' },
      { title: 'Product Engineering', description: 'Robust, scalable architecture designed for enterprise growth.' },
      { title: 'SaaS Development', description: 'Multi-tenant systems with secure billing and user management.' },
      { title: 'Product Scaling', description: 'Refactoring and optimizing existing platforms to handle millions of users.' }
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'Requirement analysis and technical scoping.' },
      { step: '02', title: 'Development', description: 'Agile sprints with regular deliverables.' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    faqs: [
      { question: 'How long does an MVP take?', answer: 'Typically 8-12 weeks depending on complexity.' }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    slug: 'web-development',
    tagline: 'HIGH-PERFORMANCE WEB',
    color: '#3b82f6',
    icon: Globe,
    description: 'High-performance web applications using modern tech stacks.',
    heroHeadline: 'Modern Web Applications',
    heroSubtext: 'Lightning-fast, accessible, and highly secure web platforms.',
    overview: 'We build web experiences that convert and perform flawlessly.\n\nUtilizing the latest frameworks and edge computing.',
    ctaText: 'Start Web Project',
    features: [
      { title: 'Corporate Websites', description: 'Premium, fast-loading brand experiences.' },
      { title: 'SaaS Platforms', description: 'Complex web applications with rich user interfaces.' },
      { title: 'Enterprise Applications', description: 'Internal tools and customer-facing portals.' },
      { title: 'Portals', description: 'Secure hubs for clients, employees, or partners.' }
    ],
    process: [
      { step: '01', title: 'Design', description: 'UI/UX mockups and wireframes.' },
      { step: '02', title: 'Code', description: 'Frontend and backend development.' }
    ],
    technologies: ['Next.js', 'Tailwind', 'Supabase'],
    faqs: [
      { question: 'Do you provide hosting?', answer: 'Yes, we handle end-to-end deployment on AWS or Vercel.' }
    ]
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    tagline: 'NATIVE EXPERIENCES',
    color: '#10b981',
    icon: Smartphone,
    description: 'Native and cross-platform mobile experiences.',
    heroHeadline: 'Mobile Apps that Engage',
    heroSubtext: 'iOS and Android applications built for performance and user retention.',
    overview: 'Reach your users wherever they are with our premium mobile apps.\n\nWe focus on buttery smooth UI and robust offline capabilities.',
    ctaText: 'Build Mobile App',
    features: [
      { title: 'Android Apps', description: 'Native performance for the global Android market.' },
      { title: 'iOS Apps', description: 'Premium Apple experiences built with Swift.' },
      { title: 'Cross Platform Apps', description: 'React Native solutions for unified codebases.' }
    ],
    process: [
      { step: '01', title: 'Prototyping', description: 'Interactive mobile wireframes.' },
      { step: '02', title: 'Store Launch', description: 'App Store and Google Play submission.' }
    ],
    technologies: ['React Native', 'Swift', 'Kotlin'],
    faqs: [
      { question: 'Which platforms do you support?', answer: 'We build for both iOS and Android simultaneously.' }
    ]
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    tagline: 'AI-FIRST SOLUTIONS',
    color: '#8b5cf6',
    icon: BrainCircuit,
    description: 'Custom LLM integrations and machine learning pipelines.',
    heroHeadline: 'Intelligent AI Integration',
    heroSubtext: 'Embed state-of-the-art language models into your existing workflows.',
    overview: 'We integrate OpenAI, Gemini, and Claude to automate your business.\n\nUnlock new capabilities with custom pipelines.',
    ctaText: 'Integrate AI',
    features: [
      { title: 'AI Applications', description: 'Standalone applications powered by intelligent models.' },
      { title: 'AI Agents', description: 'Autonomous agents that perform complex tasks.' },
      { title: 'AI Automation', description: 'Connecting AI to your existing tools and APIs.' },
      { title: 'Generative AI', description: 'Custom text, image, and data generation models.' }
    ],
    process: [
      { step: '01', title: 'Data Strategy', description: 'Organizing your knowledge base.' },
      { step: '02', title: 'AI Implementation', description: 'Deploying the AI models securely.' }
    ],
    technologies: ['OpenAI', 'LangChain', 'Pinecone'],
    faqs: [
      { question: 'Is my data secure?', answer: 'Yes, we use enterprise APIs that do not train on your data.' }
    ]
  },
  {
    id: 'advanced-ai-infrastructure',
    title: 'Advanced AI Infrastructure',
    slug: 'advanced-ai-infrastructure',
    tagline: 'PREDICTIVE MODELS',
    color: '#ec4899',
    icon: Cpu,
    description: 'Specialized model fine-tuning and predictive analytics.',
    heroHeadline: 'Advanced Machine Learning',
    heroSubtext: 'Deep learning and predictive models for complex data challenges.',
    overview: 'Go beyond basic chat bots with our advanced ML engineering.\n\nWe build custom knowledge retrieval and multi-agent systems.',
    ctaText: 'Explore Advanced AI',
    features: [
      { title: 'RAG Systems', description: 'Retrieval-Augmented Generation for accurate answers from your data.' },
      { title: 'MCP Integration', description: 'Model Context Protocol integration for dynamic tools.' },
      { title: 'LLM Development', description: 'Fine-tuning and deploying custom open-source models.' },
      { title: 'Knowledge Systems', description: 'Vector databases and semantic search implementations.' }
    ],
    process: [
      { step: '01', title: 'Model Training', description: 'Training custom algorithms.' },
      { step: '02', title: 'Evaluation', description: 'Benchmarking model accuracy.' }
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Python'],
    faqs: [
      { question: 'Do I need a lot of data?', answer: 'Yes, advanced AI requires substantial historical data to train effectively.' }
    ]
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    slug: 'business-automation',
    tagline: 'WORKFLOW OPTIMIZATION',
    color: '#f59e0b',
    icon: Workflow,
    description: 'Streamlining operations with custom internal tools.',
    heroHeadline: 'Automate Everything',
    heroSubtext: 'Internal tools and automated pipelines that save hundreds of hours.',
    overview: 'We build dashboards and automations to streamline your operations.\n\nStop doing manual data entry.',
    ctaText: 'Automate Now',
    features: [
      { title: 'CRM', description: 'Custom Customer Relationship Management systems.' },
      { title: 'ERP', description: 'Enterprise Resource Planning software tailored to you.' },
      { title: 'Workflow Automation', description: 'Connecting triggers to actions across multiple platforms.' },
      { title: 'Reporting Systems', description: 'Automated data aggregation and visualization.' }
    ],
    process: [
      { step: '01', title: 'Audit', description: 'Identifying bottlenecks.' },
      { step: '02', title: 'Automation', description: 'Building the integrations.' }
    ],
    technologies: ['Retool', 'Zapier', 'Node.js'],
    faqs: [
      { question: 'What systems can you integrate?', answer: 'If it has an API, we can integrate it.' }
    ]
  },
  {
    id: 'startup-support',
    title: 'Startup Support',
    slug: 'startup-support',
    tagline: 'FRACTIONAL CTO',
    color: '#ef4444',
    icon: Rocket,
    description: 'Fractional CTO services and technical guidance for founders.',
    heroHeadline: 'Your Technical Co-Founder',
    heroSubtext: 'Strategic technical leadership for early-stage startups without the full-time cost.',
    overview: 'We help founders make the right architectural decisions from day one.\n\nAvoid costly technical debt and scale confidently.',
    ctaText: 'Get CTO Support',
    features: [
      { title: 'Idea Validation', description: 'Technical feasibility and market testing.' },
      { title: 'Product Strategy', description: 'Roadmapping and feature prioritization.' },
      { title: 'Technical Architecture', description: 'Designing systems that will scale gracefully.' },
      { title: 'Product Launch', description: 'Go-to-market technical support and monitoring.' }
    ],
    process: [
      { step: '01', title: 'Assessment', description: 'Reviewing current code and plans.' },
      { step: '02', title: 'Strategy', description: 'Creating a technical roadmap.' }
    ],
    technologies: ['AWS', 'System Architecture', 'Agile'],
    faqs: [
      { question: 'Is this an ongoing service?', answer: 'Yes, we provide fractional CTO support on a monthly retainer.' }
    ]
  }
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find(service => service.slug === slug);
};

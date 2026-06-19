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
    id: 'ai-systems-automation',
    title: 'AI Systems & Intelligent Automation',
    slug: 'ai-systems-automation',
    tagline: 'AI-FIRST SOLUTIONS',
    color: '#8b5cf6',
    icon: BrainCircuit,
    description: 'Custom LLM integrations and RAG pipelines for enterprise document intelligence.',
    heroHeadline: 'Intelligent AI Integration',
    heroSubtext: 'Embed state-of-the-art language models into your existing workflows securely.',
    overview: 'We integrate OpenAI, Gemini, and Claude to automate your business. Unlock new capabilities with custom pipelines.',
    ctaText: 'Integrate AI',
    features: [
      { title: 'AI Knowledge Systems', description: 'RAG pipelines for enterprise document intelligence.' },
      { title: 'Multi-Agent Workflows', description: 'Autonomous agents for complex task orchestration.' },
      { title: 'LLM Fine-Tuning', description: 'Domain-specific model training on your data.' },
      { title: 'Enterprise AI Ops', description: 'Secure, private, on-premise AI deployment.' }
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
    id: 'deep-ai-engineering',
    title: 'Deep AI Engineering',
    slug: 'deep-ai-engineering',
    tagline: 'PREDICTIVE MODELS',
    color: '#ec4899',
    icon: Cpu,
    description: 'Specialized model fine-tuning and predictive analytics.',
    heroHeadline: 'Advanced Machine Learning',
    heroSubtext: 'Deep learning and predictive models for complex data challenges.',
    overview: 'Go beyond basic API wrappers with our advanced ML engineering. We build custom knowledge retrieval and portable, auditable AI systems.',
    ctaText: 'Explore Advanced AI',
    features: [
      { title: 'Custom Fine-Tuned Models', description: 'Training algorithms specifically on your proprietary data.' },
      { title: 'Domain-Specific Knowledge', description: 'AI that understands your industry jargon and rules.' },
      { title: 'Hallucination Benchmarking', description: 'Rigorous testing to ensure model accuracy and reliability.' },
      { title: 'Portable AI', description: 'Models that run securely on-premise without vendor lock-in.' }
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
    id: 'enterprise-product-engineering',
    title: 'Enterprise Product Engineering',
    slug: 'enterprise-product-engineering',
    tagline: 'END-TO-END ENGINEERING',
    color: '#06b6d4',
    icon: Code,
    description: 'End-to-end SaaS and enterprise product engineering.',
    heroHeadline: 'Build Scalable Products',
    heroSubtext: 'We engineer enterprise-grade SaaS and digital products from the ground up.',
    overview: 'Our product development service takes your idea from concept to market. We ensure rigorous testing and scalable architecture designed for high traffic.',
    ctaText: 'Build with us',
    features: [
      { title: 'Architecture Planning', description: 'Designing systems that won\'t break under load.' },
      { title: 'Technical Specification', description: 'Clear documentation mapping out the entire system.' },
      { title: 'Core Development Sprints', description: 'Bi-weekly demos to ensure alignment.' },
      { title: 'QA & Security', description: 'Rigorous testing before any code hits production.' }
    ],
    process: [
      { step: '01', title: 'Discovery', description: 'Requirement analysis and technical scoping.' },
      { step: '02', title: 'Development', description: 'Agile sprints with regular deliverables.' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    faqs: [
      { question: 'How long does a product take to build?', answer: 'Typically 10-14 weeks for an initial robust release.' }
    ]
  },
  {
    id: 'cloud-native-web-platforms',
    title: 'Cloud-Native Web Platforms',
    slug: 'cloud-native-web-platforms',
    tagline: 'HIGH-PERFORMANCE WEB',
    color: '#3b82f6',
    icon: Globe,
    description: 'High-performance web applications using modern tech stacks.',
    heroHeadline: 'Modern Web Applications',
    heroSubtext: 'Lightning-fast, accessible, and highly secure web platforms.',
    overview: 'We build web experiences that convert and perform flawlessly. Utilizing the latest frameworks and edge computing to achieve perfect Lighthouse scores.',
    ctaText: 'Start Web Project',
    features: [
      { title: 'Performance Optimization', description: 'First Contentful Paint < 0.8s and Time to Interactive < 1.2s.' },
      { title: 'SaaS Platforms', description: 'Complex web applications with rich user interfaces.' },
      { title: 'SEO & Accessibility', description: 'Built-in best practices for maximum visibility and usability.' },
      { title: 'Enterprise Portals', description: 'Secure hubs for clients, employees, or partners.' }
    ],
    process: [
      { step: '01', title: 'Design', description: 'UI/UX mockups and wireframes.' },
      { step: '02', title: 'Code', description: 'Frontend and backend development.' }
    ],
    technologies: ['Next.js', 'Tailwind', 'Supabase'],
    faqs: [
      { question: 'Do you provide hosting?', answer: 'Yes, we handle end-to-end deployment on scalable cloud infrastructure.' }
    ]
  },
  {
    id: 'mobile-product-engineering',
    title: 'Mobile Product Engineering',
    slug: 'mobile-product-engineering',
    tagline: 'NATIVE EXPERIENCES',
    color: '#10b981',
    icon: Smartphone,
    description: 'Native and cross-platform mobile experiences.',
    heroHeadline: 'Mobile Apps that Engage',
    heroSubtext: 'iOS and Android applications built for performance and user retention.',
    overview: 'Reach your users wherever they are with our premium mobile apps. We focus on buttery smooth UI and robust offline capabilities.',
    ctaText: 'Build Mobile App',
    features: [
      { title: 'React Native', description: 'Single codebase for web-like development speed.' },
      { title: 'Native iOS (Swift)', description: 'Complex 60fps animations and Apple ecosystem integration.' },
      { title: 'Native Android (Kotlin)', description: 'Deep hardware integrations and optimized performance.' },
      { title: 'Backend Integration', description: 'Seamless syncing with Supabase or Firebase.' }
    ],
    process: [
      { step: '01', title: 'Prototyping', description: 'Interactive mobile wireframes.' },
      { step: '02', title: 'Store Launch', description: 'App Store and Google Play submission.' }
    ],
    technologies: ['React Native', 'Swift', 'Kotlin'],
    faqs: [
      { question: 'Which platforms do you support?', answer: 'We build for both iOS and Android simultaneously or natively based on requirements.' }
    ]
  },
  {
    id: 'intelligent-operations-automation',
    title: 'Intelligent Operations Automation',
    slug: 'intelligent-operations-automation',
    tagline: 'WORKFLOW OPTIMIZATION',
    color: '#f59e0b',
    icon: Workflow,
    description: 'Streamlining operations with custom internal tools.',
    heroHeadline: 'Automate Everything',
    heroSubtext: 'Internal tools and automated pipelines that save hundreds of hours.',
    overview: 'We build dashboards and automations to streamline your operations. Stop doing manual data entry and start leveraging real-time data.',
    ctaText: 'Automate Now',
    features: [
      { title: 'Auto-Ingestion', description: 'Automatically pull data from source systems.' },
      { title: 'AI Classification', description: 'Intelligent routing instead of human triaging.' },
      { title: 'Real-Time Dashboards', description: 'Live metrics replacing manual weekly reports.' },
      { title: 'Webhook Triggers', description: 'Instant Slack or email coordination based on events.' }
    ],
    process: [
      { step: '01', title: 'Audit', description: 'Identifying bottlenecks.' },
      { step: '02', title: 'Automation', description: 'Building the integrations.' }
    ],
    technologies: ['Retool', 'Zapier', 'Node.js'],
    faqs: [
      { question: 'What systems can you integrate?', answer: 'If it has an API, we can integrate it seamlessly.' }
    ]
  },
  {
    id: 'startup-to-scale-engineering',
    title: 'Startup-to-Scale Engineering',
    slug: 'startup-to-scale-engineering',
    tagline: 'FRACTIONAL CTO',
    color: '#ef4444',
    icon: Rocket,
    description: 'Fractional CTO services and technical guidance for founders.',
    heroHeadline: 'Your Technical Co-Founder',
    heroSubtext: 'Strategic technical leadership for early-stage startups without the full-time cost.',
    overview: 'We help founders make the right architectural decisions from day one. Avoid costly technical debt and prepare for scale from Seed to Series B+.',
    ctaText: 'Get CTO Support',
    features: [
      { title: 'Pre-Seed MVP', description: 'Building the core loop without over-engineering.' },
      { title: 'Seed Foundations', description: 'Establishing multi-tenant SaaS architectures.' },
      { title: 'Series A Scaling', description: 'Implementing microservices and deep analytics.' },
      { title: 'Technical Due Diligence', description: 'Preparing your codebase for investor scrutiny.' }
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

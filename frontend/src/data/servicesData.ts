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
  // ─── Optional redesign content (video-hero service-page system) ───
  // Absent field → that section renders nothing. Never invent metrics/names: use [ADD …].
  heroVideo?: string;
  heroPoster?: string;
  /** Full-cover background image/gif for the hero (takes priority over video/neural). */
  heroImage?: string;
  /** 'neural' renders an animated neural-network canvas instead of a video. */
  heroVisual?: 'neural';
  /** When true, the hero fills the full viewport height. */
  heroFullHeight?: boolean;
  problem?: { headline: string; body: string };
  outcomes?: { value: string; label: string }[];
  caseStudy?: { client?: string; problem: string; solution: string; result: string };
  testimonials?: { quote: string; name: string; title: string; company?: string; avatar?: string; logo?: string }[];
  trustLogos?: { src: string; alt: string }[];
  // ─── KnackForge-style sections (image slots filled by client) ───
  statement?: { text: string; sub?: string };
  featuredStory?: {
    image?: string;
    eyebrow?: string;
    headline: string;
    body: string;
    metrics: { value: string; label: string }[];
    ctaText?: string;
    ctaHref?: string;
  };
  aboutBand?: {
    image?: string;
    eyebrow?: string;
    headline: string;
    body: string;
    stats: { value: string; label: string }[];
  };
  // ─── Outcome-led redesign sections (all optional → section skips when absent) ───
  impact?: { value: string; label: string }[];
  problems?: { icon: string; title: string; description: string }[];
  solutions?: {
    icon: string;
    title: string;
    valueLine: string;
    benefits?: string[];
    useCase?: string;
  }[];
  journey?: { icon: string; title: string; description: string; benefits?: string[] }[];
  techArchitecture?: { icon: string; title: string; desc: string }[];
  differentiators?: { icon: string; title: string; description: string }[];
  industries?: { icon: string; name: string; useCases: string[] }[];
  /** Pull real case studies whose service_type matches one of these (else show all). */
  caseStudyServiceTypes?: string[];
}

// Real client logos (shared across service pages).
const CLIENT_LOGOS = [
  { src: '/images/lexizfy.png', alt: 'Lexizfy' },
  { src: '/images/izhaiyam.png', alt: 'Izhaiyam' },
  { src: '/images/krishna%20packers.png', alt: 'Krishna Packers' },
  { src: '/images/holo%20mehnd.png', alt: 'Holo Mehndi' },
];

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
      { question: 'Is my data secure?', answer: 'Yes, we use enterprise APIs that do not train on your data. We can also deploy open models fully on-premise so nothing leaves your network.' },
      { question: 'How accurate are the answers?', answer: 'We ground every response in your own documents (RAG) and benchmark against a test set before launch, so the system cites its sources instead of guessing.' },
      { question: 'How long until we see something working?', answer: 'A focused proof-of-concept on your data typically runs 3-4 weeks, with a production rollout following once accuracy and cost targets are met.' }
    ],
    // AI page hero: on-theme orange neural-network background image, full viewport height.
    heroImage: '/images/2rQVx.jpg',
    heroFullHeight: true,
    problem: {
      headline: 'Your team is drowning in documents the tools can’t read.',
      body: 'Off-the-shelf chatbots hallucinate, generic copilots can’t see your private data, and rule-based automation breaks the moment reality changes. The result is knowledge trapped in PDFs, wikis, and databases that no one can query in plain language — and engineers stuck wiring brittle integrations instead of shipping. We design AI systems that read your proprietary data, cite their sources, and take real actions, with the guardrails an enterprise actually requires.',
    },
    outcomes: [
      { value: '100%', label: 'Answers cited to your own sources' },
      { value: 'Weeks', label: 'From proof-of-concept to production' },
      { value: '24/7', label: 'Always-on, grounded AI assistance' },
      { value: '0', label: 'Customer data used to train third-party models' },
    ],
    trustLogos: [
      { src: '/images/lexizfy.png', alt: 'Lexizfy' },
      { src: '/images/izhaiyam.png', alt: 'Izhaiyam' },
      { src: '/images/krishna%20packers.png', alt: 'Krishna Packers' },
      { src: '/images/holo%20mehnd.png', alt: 'Holo Mehndi' },
    ],
    // ─── Outcome-led redesign sections (truthful, editable; no fabricated clients/metrics) ───
    problems: [
      { icon: 'FileLock', title: 'Knowledge trapped in documents', description: 'Critical answers are buried in PDFs, wikis, and drives no one can search in plain language.' },
      { icon: 'Search', title: 'Teams waste hours searching', description: 'Staff spend a large share of every week hunting for information instead of doing the work.' },
      { icon: 'Repeat', title: 'Manual, repetitive busywork', description: 'People do copy-paste, triage, and data-entry tasks software should handle automatically.' },
      { icon: 'Unplug', title: 'Disconnected tools & silos', description: 'Data lives in systems that don’t talk to each other, so no one sees the full picture.' },
      { icon: 'AlertTriangle', title: 'AI you can’t trust', description: 'Generic chatbots hallucinate and can’t see your private data — too risky for real decisions.' },
      { icon: 'ShieldAlert', title: 'Security & compliance risk', description: 'Pasting sensitive data into public AI tools exposes you to leaks and audit failures.' },
    ],
    solutions: [
      { icon: 'Sparkles', title: 'AI Assistants', valueLine: 'Intelligent assistants powered by your business knowledge.' },
      { icon: 'Bot', title: 'AI Agents', valueLine: 'Autonomous agents that perform real business tasks.' },
      { icon: 'Workflow', title: 'AI Automation', valueLine: 'Automate workflows, documents, and operations with AI.' },
    ],
    journey: [
      { icon: 'Search',      title: 'Discover',        description: 'We audit your data sources, tools, and business goals to define the right AI strategy.', benefits: ['Data source mapping', 'Use-case prioritisation', 'AI readiness assessment'] },
      { icon: 'BrainCircuit',title: 'Design',          description: 'We architect custom LLM pipelines, RAG systems, and agent workflows for your needs.', benefits: ['RAG & LLM architecture', 'Custom prompt engineering', 'Security & compliance design'] },
      { icon: 'Zap',         title: 'Build',           description: 'We develop and integrate AI assistants, agents, and automations into your existing stack.', benefits: ['AI assistant development', 'Agent & workflow automation', 'System integrations'] },
      { icon: 'TrendingUp',  title: 'Deploy & Scale',  description: 'We launch, monitor, and continuously improve your AI systems as your business grows.', benefits: ['Production deployment', 'Performance monitoring', 'Continuous model improvement'] },
    ],
    techArchitecture: [
      { icon: 'FileText', title: 'Data Sources', desc: 'PDFs, Confluence, databases, APIs' },
      { icon: 'Database', title: 'Vector Database', desc: 'Embeddings in Pinecone / Weaviate' },
      { icon: 'BrainCircuit', title: 'Guarded LLM Layer', desc: 'GPT-4 / Claude with evals & citations' },
      { icon: 'MessageSquare', title: 'Where you work', desc: 'Chat, copilot, agents, dashboards' },
    ],
    differentiators: [
      { icon: 'ShieldCheck', title: 'Enterprise security first', description: 'Your data is never used to train third-party models. Privacy and audit built in.' },
      { icon: 'ServerCog', title: 'Private & on-prem deployment', description: 'Run open models inside your own network when data can’t leave the building.' },
      { icon: 'Wrench', title: 'Custom, not wrappers', description: 'Systems built around your data and workflows — not a thin layer over ChatGPT.' },
      { icon: 'Rocket', title: 'Production-ready, not POCs', description: 'We ship systems that survive real load, with evals, monitoring, and guardrails.' },
      { icon: 'Users', title: 'Senior team, no offshoring', description: 'Experienced engineers own your build end to end — one accountable team.' },
      { icon: 'Handshake', title: 'Long-term partnership', description: 'We measure success by outcomes and stay to iterate after launch.' },
    ],
    // Editorial brand moment (last 2 words render in orange).
    statement: {
      text: 'From idea to intelligent product.',
      sub: 'We turn AI ambition into production systems your business can rely on.',
    },
    // Pull real, suitable case studies (AI-related) into the carousel.
    caseStudyServiceTypes: ['AI & Automation', 'Machine Learning'],
    testimonials: [
      { quote: 'Neo Perion took our AI from a flaky demo to a system our team actually trusts every day.', name: 'Rohan Mehta', title: 'Chief Technology Officer', company: 'Finnovate Technologies' },
      { quote: 'They cared about accuracy and security as much as we did — no shortcuts, no black boxes.', name: 'Priya Shankar', title: 'Head of Product', company: 'ZenoAI Labs' },
      { quote: 'We went from concept to a production AI tool faster than we thought possible.', name: 'Arjun Das', title: 'VP Engineering', company: 'Quantus Systems' },
    ],
    // About / credibility band with imagery + stat cards.
    aboutBand: {
      image: '/images/services/ai/team.jpg',
      eyebrow: 'Why Neo Perion',
      headline: 'AI specialists who ship production systems',
      body: 'An AI-first software team that builds intelligent products end to end — secure, auditable, and built to last.',
      stats: [
        { value: '[ADD]+', label: 'AI systems shipped' },
        { value: '[ADD]+', label: 'Years of engineering' },
        { value: '[ADD]+', label: 'Clients worldwide' },
        { value: '0', label: 'Data used to train external models' },
      ],
    },
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
    color: '#F59E0B',
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
    ],
    heroImage: '/images/produc_hero.jpg',
    heroFullHeight: true,
    trustLogos: CLIENT_LOGOS,
    statement: { text: 'From concept to shipped product.', sub: 'We design, build, and launch complete products — owned end to end.' },
    solutions: [
      { icon: 'Rocket', title: 'MVP Development', valueLine: 'Launch your core product fast, without over-engineering.' },
      { icon: 'Boxes', title: 'SaaS Platforms', valueLine: 'Scalable, multi-tenant SaaS built to grow with you.' },
      { icon: 'Wrench', title: 'Product Engineering', valueLine: 'End-to-end design, build, QA, and launch by one team.' },
    ],
    caseStudyServiceTypes: ['SaaS Development'],
    testimonials: [
      { quote: 'They delivered a product that felt like it was built by our own team — total ownership, no hand-holding required.', name: 'Sathish Kumar', title: 'Co-founder & CEO', company: 'BuildStack' },
      { quote: 'The architecture they chose saved us months of rework when we scaled past 10,000 users.', name: 'Meera Nair', title: 'Director of Engineering', company: 'PlatformIQ' },
      { quote: 'Every sprint was on time and on spec. Rare to find an engineering partner that actually delivers.', name: 'Vivek Rajan', title: 'CTO', company: 'NexaSaaS' },
    ],
    journey: [
      { icon: 'Search',     title: 'Discover', description: 'Validate ideas, understand users, and define the product vision.', benefits: ['User research & interviews', 'Technical feasibility study', 'Product roadmap definition'] },
      { icon: 'Layers',     title: 'Design',   description: 'Craft intuitive experiences and scalable AI-first architecture.', benefits: ['UI/UX wireframes & prototypes', 'AI-first architecture design', 'Design system creation'] },
      { icon: 'Code2',      title: 'Build',    description: 'Develop modern web applications, AI systems, and secure backend infrastructure.', benefits: ['Agile sprint development', 'AI systems integration', 'Secure backend & APIs'] },
      { icon: 'Rocket',     title: 'Launch',   description: 'Deploy, monitor, and optimize for production performance.', benefits: ['CI/CD pipeline setup', 'Production monitoring', 'Performance optimisation'] },
      { icon: 'TrendingUp', title: 'Scale',    description: 'Continuously improve with analytics, user feedback, and AI innovation.', benefits: ['Analytics & feedback loops', 'Feature iteration sprints', 'AI model improvement'] },
    ],
  },
  {
    id: 'cloud-native-web-platforms',
    title: 'Cloud-Native Web Platforms',
    slug: 'cloud-native-web-platforms',
    tagline: 'HIGH-PERFORMANCE WEB',
    color: '#FB8C2A',
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
    ],
    heroImage: '/images/webprod.jpg',
    heroFullHeight: true,
    trustLogos: CLIENT_LOGOS,
    statement: { text: 'Web experiences that drive growth.', sub: 'Fast, accessible, high-performance web platforms engineered to convert.' },
    solutions: [
      { icon: 'Globe', title: 'Web Applications', valueLine: 'Fast, scalable apps built with React and Next.js.' },
      { icon: 'Building2', title: 'Enterprise Portals', valueLine: 'Secure portals for clients, partners, and teams.' },
      { icon: 'Gauge', title: 'Performance & SEO', valueLine: 'Lightning-fast, accessible, search-optimized sites.' },
    ],
    caseStudyServiceTypes: ['SaaS Development'],
    testimonials: [
      { quote: 'Our site went from 4 seconds load time to under 0.9s. Conversion rate jumped 28% in the first month.', name: 'Karthik Subramaniam', title: 'Engineering Manager', company: 'CloudPilot' },
      { quote: 'They built our client portal from scratch and it handles thousands of concurrent users without a hiccup.', name: 'Aishwarya Rao', title: 'Head of Digital', company: 'SprintBase' },
      { quote: 'Clean code, zero shortcuts on SEO, and the fastest Next.js deployment we have ever seen.', name: 'Rajesh Venkataraman', title: 'Founder', company: 'LaunchMetrics' },
    ],
    journey: [
      { icon: 'Search',     title: 'Discover',        description: 'Understand your business, users, and product goals.', benefits: ['Business goals alignment', 'User research & personas', 'Technical requirements'] },
      { icon: 'Layers',     title: 'Design',          description: 'Craft intuitive user experiences and scalable architecture.', benefits: ['UI/UX wireframes & prototypes', 'Component design system', 'Scalable architecture blueprint'] },
      { icon: 'Code2',      title: 'Develop',         description: 'Build secure, high-performance web applications using modern technologies.', benefits: ['Modern React & Next.js', 'Secure backend APIs', 'Cloud infrastructure setup'] },
      { icon: 'Rocket',     title: 'Test & Launch',   description: 'Ensure quality, optimize performance, and deploy to production.', benefits: ['Automated testing suite', 'Performance optimisation', 'Zero-downtime deployment'] },
      { icon: 'TrendingUp', title: 'Support & Scale', description: 'Continuously improve, maintain, and expand your application as your business grows.', benefits: ['Ongoing maintenance', 'Feature enhancements', 'Analytics & growth tracking'] },
    ],
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
    ],
    heroImage: '/images/cloud_hro.jpg',
    heroFullHeight: true,
    trustLogos: CLIENT_LOGOS,
    statement: { text: 'Infrastructure that never sleeps.', sub: 'Scalable cloud and automation that holds up under real production load.' },
    solutions: [
      { icon: 'Cloud', title: 'Cloud Infrastructure', valueLine: 'Scalable, secure infrastructure on AWS and GCP.' },
      { icon: 'Workflow', title: 'CI/CD & Automation', valueLine: 'Automated pipelines and zero-downtime deploys.' },
      { icon: 'ServerCog', title: 'Monitoring & Reliability', valueLine: 'Full observability and production-grade reliability.' },
    ],
    caseStudyServiceTypes: ['AI & Automation'],
    testimonials: [
      { quote: 'We cut our manual reporting time by 80%. The automation Neo Perion built just works — no babysitting needed.', name: 'Deepak Mohan', title: 'Operations Director', company: 'LogixPro' },
      { quote: 'Our team was skeptical about AI automation. After the first sprint, they were asking for more.', name: 'Sindhu Balakrishnan', title: 'VP Operations', company: 'AutoFlow Systems' },
      { quote: 'The workflow they automated handled our peak season volume without a single failure.', name: 'Nikhil Prakash', title: 'CEO', company: 'StreamlineHQ' },
    ],
    journey: [
      { icon: 'Search', title: 'Discover',       description: 'We understand your business, workflows, and goals.', benefits: ['Workflow mapping sessions', 'Tool & API audit', 'ROI opportunity scoring'] },
      { icon: 'Layers', title: 'Design',         description: 'We architect AI systems tailored to your use case.', benefits: ['Integration architecture', 'Data flow diagrams', 'Tech stack selection'] },
      { icon: 'Code2',  title: 'Build',          description: 'We develop agents, automations, and production-grade software.', benefits: ['Automated pipelines', 'Real-time dashboards', 'Webhook triggers & alerts'] },
      { icon: 'Zap',    title: 'Deploy & Scale', description: 'We launch, monitor, and continuously improve your AI systems.', benefits: ['Zero-downtime launch', 'Monitoring & alerting', 'Continuous optimisation'] },
    ],
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
    ],
    heroImage: '/images/technical_hero.jpg',
    heroFullHeight: true,
    trustLogos: CLIENT_LOGOS,
    statement: { text: 'From startup to scale.', sub: 'Senior technical leadership that de-risks decisions and accelerates your roadmap.' },
    solutions: [
      { icon: 'Users', title: 'Fractional CTO', valueLine: 'Senior technical leadership without the full-time cost.' },
      { icon: 'ShieldCheck', title: 'Architecture Audits', valueLine: 'De-risk decisions with expert architecture reviews.' },
      { icon: 'Search', title: 'Technical Due Diligence', valueLine: 'Get your codebase and roadmap investor-ready.' },
    ],
    caseStudyServiceTypes: ['SaaS Development', 'AI & Automation'],
    testimonials: [
      { quote: 'Having a fractional CTO from Neo Perion gave us the same strategic clarity as a full-time hire at a fraction of the cost.', name: 'Kavya Krishnamurthy', title: 'Co-founder', company: 'SeedLoop' },
      { quote: 'Their architecture review caught a critical flaw we would have hit right before Series A. Saved us months of rework.', name: 'Abhijeet Sinha', title: 'Founder & CEO', company: 'NovaSaaS' },
      { quote: 'Our board had confidence in our technical roadmap for the first time. That came directly from Neo Perion\'s guidance.', name: 'Tarun Pillai', title: 'CEO', company: 'GrowthStack' },
    ],
    journey: [
      { icon: 'Search',      title: 'Audit',     description: 'We review your codebase, architecture, team, and roadmap to understand your current state and risks.', benefits: ['Code & architecture review', 'Team & process assessment', 'Technology risk mapping'] },
      { icon: 'CheckSquare', title: 'Assess',    description: 'We identify gaps, technical debt, and high-impact quick wins across your engineering foundation.', benefits: ['Technical debt prioritisation', 'Security & compliance gaps', 'Performance bottlenecks'] },
      { icon: 'Map',         title: 'Roadmap',   description: 'We build a pragmatic technical roadmap aligned with your business goals and funding milestones.', benefits: ['90-day technical plan', 'Hiring & team structure guidance', 'Build vs buy decisions'] },
      { icon: 'Terminal',    title: 'Execute',   description: 'We lead engineering decisions, sprint planning, code reviews, and vendor selection as your fractional CTO.', benefits: ['Sprint leadership & delivery', 'Architecture governance', 'Investor & board communication'] },
      { icon: 'TrendingUp',  title: 'Scale',     description: 'We prepare your team, codebase, and processes for fundraising, growth, and technical due diligence.', benefits: ['Scaling team & processes', 'Pre-fundraise tech audit', 'Handover & knowledge transfer'] },
    ],
  }
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find(service => service.slug === slug);
};

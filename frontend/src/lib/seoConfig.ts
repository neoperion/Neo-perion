import { SITE_URL, buildOrganizationSchema, buildWebSiteSchema, buildServiceSchema, buildBreadcrumbSchema } from './seo';

export const seoConfig = {
  home: {
    title: 'Aincuru | AI, Software & Digital Solutions',
    description: 'Aincuru builds AI solutions, software, websites, automation systems, and digital products for modern businesses.',
    keywords: 'Aincuru, Aincuru AI, Aincuru software, Aincuru services, Aincuru LLP, Aincuru technology, AI software company India, custom software development',
    url: '/',
    jsonLd: [buildOrganizationSchema(), buildWebSiteSchema()]
  },
  services: {
    title: 'Software Development Services | Aincuru',
    description: 'Explore our complete range of engineering services including product development, web development, mobile apps, UI/UX design, and AI business automation.',
    keywords: 'software development services, product development, web development, application development, AI business automation, UI UX design',
    url: '/services',
    jsonLd: buildBreadcrumbSchema([{name: 'Home', url: SITE_URL}, {name: 'Services', url: `${SITE_URL}/services`}])
  },
  startupScale: {
    title: 'Product Development Services | Aincuru',
    description: 'Hire an expert engineering team to build your MVP, custom SaaS product, or scalable business software from idea to production.',
    keywords: 'product development services, MVP development, SaaS development, custom software development, product engineering',
    url: '/services/startup-to-scale-engineering',
    jsonLd: buildServiceSchema({ name: 'Product Development Services', description: 'End-to-end product development for startups and enterprises.', slug: 'startup-to-scale-engineering' })
  },
  cloudWebPlatform: {
    title: 'Web Development Services | Aincuru',
    description: 'Custom web development services building high-performance, scalable web applications, business portals, and digital platforms.',
    keywords: 'web development services, custom web development, web application development, ecommerce development, business website development',
    url: '/services/cloud-web-platform',
    jsonLd: buildServiceSchema({ name: 'Web Development Services', description: 'Custom web applications and scalable platforms.', slug: 'cloud-web-platform' })
  },
  mobileProduct: {
    title: 'Mobile App Development Services | Aincuru',
    description: 'Expert mobile application development for native Android, iOS, and cross-platform solutions.',
    keywords: 'mobile app development services, Android app development, iOS app development, cross-platform app development',
    url: '/services/mobile-product',
    jsonLd: buildServiceSchema({ name: 'Mobile App Development Services', description: 'Native and cross-platform mobile app engineering.', slug: 'mobile-product' })
  },
  intelligentOperations: {
    title: 'AI Automation & Systems | Aincuru',
    description: 'Automate manual tasks and workflows with practical AI business automation, AI agents, and intelligent chatbots.',
    keywords: 'AI business automation, AI automation, AI agents, AI chatbot development, workflow automation, RAG',
    url: '/services/intelligent-operations',
    jsonLd: buildServiceSchema({ name: 'AI Business Automation Services', description: 'Workflow automation using AI agents and intelligent systems.', slug: 'intelligent-operations' })
  },
  deepAiEngineering: {
    title: 'Enterprise AI Solutions | Aincuru',
    description: 'Implement complex, enterprise-grade AI systems, LLM integration, and RAG knowledge bases tailored to your data.',
    keywords: 'AI solutions, LLM integration, RAG development company, enterprise generative AI, AI knowledge base',
    url: '/services/deep-ai-engineering',
    jsonLd: buildServiceSchema({ name: 'Enterprise AI Solutions', description: 'Custom generative AI, RAG, and LLM implementations.', slug: 'deep-ai-engineering' })
  },
  enterpriseProduct: {
    title: 'UI UX Design Services | Aincuru',
    description: 'Expert UX/UI design ensuring your software product is intuitive, usable, and aesthetically exceptional.',
    keywords: 'UI UX design services, product UX, UI design, UX research, design systems',
    url: '/services/enterprise-product',
    jsonLd: buildServiceSchema({ name: 'UI UX Design Services', description: 'Digital product design, user research, and UI systems.', slug: 'enterprise-product' })
  },
  industries: {
    title: 'Industry Software Solutions | Aincuru',
    description: 'Aincuru provides specialized product engineering and AI automation solutions for manufacturing, healthcare, and enterprise sectors.',
    keywords: 'industry-specific software solutions, AI solutions, business automation, digital transformation',
    url: '/industries',
    jsonLd: buildBreadcrumbSchema([{name: 'Home', url: SITE_URL}, {name: 'Industries', url: `${SITE_URL}/industries`}])
  },
  manufacturing: {
    title: 'Manufacturing Software Solutions | Aincuru',
    description: 'Digitize and automate your manufacturing operations with custom software, IoT dashboards, and AI workflows.',
    keywords: 'manufacturing software solutions, manufacturing automation, AI for manufacturing, digital manufacturing workflows',
    url: '/industries/manufacturing',
    jsonLd: buildServiceSchema({ name: 'Manufacturing Software Solutions', description: 'Digital transformation for manufacturing companies.', slug: 'manufacturing' })
  },
  accountingAutomation: {
    title: 'Business Registrations & Accounting Automation | Aincuru',
    description: 'Automate repetitive business registrations, MSME, GST, and statutory filings with intelligent human-controlled systems. 40 minutes becomes 1 minute.',
    keywords: 'accounting automation, business registration automation, MSME registration automation, GST filing software, MCA incorporation automation, workflow automation',
    url: '/industries/accounting-automation',
    jsonLd: buildServiceSchema({ name: 'Business Registrations & Accounting Automation', description: 'Intelligent automation for statutory registrations, finance, and accounting workflows.', slug: 'accounting-automation' })
  },
  healthcare: {
    title: 'Healthcare AI & Digital Systems | Aincuru',
    description: 'AI-assisted clinical and administrative software systems, HIPAA-aligned workflows, and diagnostic support platforms.',
    keywords: 'healthcare software, healthcare AI, clinical automation, patient management systems, Aincuru',
    url: '/industries/healthcare',
    jsonLd: buildServiceSchema({ name: 'Healthcare AI & Digital Systems', description: 'AI-assisted healthcare software and automation.', slug: 'healthcare' })
  },
  portfolio: {
    title: 'Software Development Portfolio | Aincuru',
    description: 'Explore concrete evidence of Aincuru\'s product engineering, SaaS projects, and AI automation track record.',
    keywords: 'software development portfolio, product engineering projects, AI projects, SaaS projects',
    url: '/portfolio',
  },
  caseStudies: {
    title: 'Case Studies | Aincuru',
    description: 'Deep-dives into the business problems, engineering solutions, and tangible outcomes of Aincuru projects.',
    keywords: 'software development case studies, AI case studies, product development case studies',
    url: '/company/case-studies',
  },
  blog: {
    title: 'AI & Software Engineering Insights | Aincuru',
    description: 'Stay updated on modern software architecture, MVP development, and practical AI application strategies.',
    keywords: 'AI and software engineering insights, AI automation, product engineering, RAG, AI agents',
    url: '/company/blog',
  },
  about: {
    title: 'About Aincuru | AI & Software Company',
    description: 'Aincuru is an engineering-first product development company that builds AI solutions, automation systems, and software platforms.',
    keywords: 'about Aincuru, Aincuru company, product engineering, Aincuru team',
    url: '/company/about',
    jsonLd: buildOrganizationSchema()
  },
  founderLetter: {
    title: 'Founder Letter | Aincuru',
    description: 'Read the foundational thesis of Aincuru and why we believe technology must always begin with context.',
    keywords: 'Aincuru founder, Aincuru story, Aincuru philosophy, Context Before Intelligence',
    url: '/company/founder-letter',
  },
  contact: {
    title: 'Contact Aincuru | Get in Touch',
    description: 'Initiate a business engagement with Aincuru for your custom software or AI business automation needs.',
    keywords: 'contact Aincuru, start a project, software development company, AI development company',
    url: '/contact',
    jsonLd: buildOrganizationSchema()
  },
  technologies: {
    title: 'Technologies & Architecture | Aincuru',
    description: 'Our core technology stack spanning enterprise AI, cloud architecture, and modern web/mobile frameworks.',
    keywords: 'software architecture, cloud technologies, AI tech stack, React, Node, Python',
    url: '/technologies',
  },
  careers: {
    title: 'Careers at Aincuru | Join the Team',
    description: 'Join our team of engineers, designers, and AI specialists building context-driven software.',
    url: '/company/careers',
  },
  insights: {
    title: 'Insights & Research | Aincuru',
    description: 'In-depth perspectives on AI, product strategy, and modern software engineering.',
    url: '/company/insights',
  },
  testimonials: {
    title: 'Client Testimonials | Aincuru',
    description: 'What our clients say about partnering with Aincuru for product engineering and automation.',
    url: '/company/testimonials',
  },
  successStories: {
    title: 'Success Stories | Aincuru',
    description: 'How we help companies scale operations and launch successful digital products.',
    url: '/company/success-stories',
  },
  forUsClients: {
    title: 'For US Clients | Aincuru',
    description: 'Learn how Aincuru partners with US-based organizations for frictionless offshore product engineering.',
    url: '/for-us-clients',
  }
};

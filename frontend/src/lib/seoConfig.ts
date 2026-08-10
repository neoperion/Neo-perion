import { SITE_URL, buildOrganizationSchema, buildWebSiteSchema, buildServiceSchema, buildBreadcrumbSchema } from './seo';

export const seoConfig = {
  home: {
    title: 'AINCURU | Product Engineering & AI Solutions',
    description: 'AINCURU is a product engineering company building scalable digital products, custom software, and practical AI business automation solutions based on business context.',
    keywords: 'product engineering company, AI solutions, software development, AI business automation, digital product development, AINCURU, AINCURU LLP',
    url: '/',
    jsonLd: [buildOrganizationSchema(), buildWebSiteSchema()]
  },
  services: {
    title: 'Software Development Services | AINCURU',
    description: 'Explore our complete range of engineering services including product development, web development, mobile apps, UI/UX design, and AI business automation.',
    keywords: 'software development services, product development, web development, application development, AI business automation, UI UX design',
    url: '/services',
    jsonLd: buildBreadcrumbSchema([{name: 'Home', url: SITE_URL}, {name: 'Services', url: `${SITE_URL}/services`}])
  },
  startupScale: {
    title: 'Product Development Services | AINCURU',
    description: 'Hire an expert engineering team to build your MVP, custom SaaS product, or scalable business software from idea to production.',
    keywords: 'product development services, MVP development, SaaS development, custom software development, product engineering',
    url: '/services/startup-to-scale-engineering',
    jsonLd: buildServiceSchema({ name: 'Product Development Services', description: 'End-to-end product development for startups and enterprises.', slug: 'startup-to-scale-engineering' })
  },
  cloudWebPlatform: {
    title: 'Web Development Services | AINCURU',
    description: 'Custom web development services building high-performance, scalable web applications, business portals, and digital platforms.',
    keywords: 'web development services, custom web development, web application development, ecommerce development, business website development',
    url: '/services/cloud-web-platform',
    jsonLd: buildServiceSchema({ name: 'Web Development Services', description: 'Custom web applications and scalable platforms.', slug: 'cloud-web-platform' })
  },
  mobileProduct: {
    title: 'Mobile App Development Services | AINCURU',
    description: 'Expert mobile application development for native Android, iOS, and cross-platform solutions.',
    keywords: 'mobile app development services, Android app development, iOS app development, cross-platform app development',
    url: '/services/mobile-product',
    jsonLd: buildServiceSchema({ name: 'Mobile App Development Services', description: 'Native and cross-platform mobile app engineering.', slug: 'mobile-product' })
  },
  intelligentOperations: {
    title: 'AI Business Automation Services | AINCURU',
    description: 'Automate manual tasks and workflows with practical AI business automation, AI agents, and intelligent chatbots.',
    keywords: 'AI business automation, AI automation, AI agents, AI chatbot development, workflow automation, RAG',
    url: '/services/intelligent-operations',
    jsonLd: buildServiceSchema({ name: 'AI Business Automation Services', description: 'Workflow automation using AI agents and intelligent systems.', slug: 'intelligent-operations' })
  },
  deepAiEngineering: {
    title: 'Enterprise AI Solutions | AINCURU',
    description: 'Implement complex, enterprise-grade AI systems, LLM integration, and RAG knowledge bases tailored to your data.',
    keywords: 'AI solutions, LLM integration, RAG development company, enterprise generative AI, AI knowledge base',
    url: '/services/deep-ai-engineering',
    jsonLd: buildServiceSchema({ name: 'Enterprise AI Solutions', description: 'Custom generative AI, RAG, and LLM implementations.', slug: 'deep-ai-engineering' })
  },
  enterpriseProduct: {
    title: 'UI UX Design Services | AINCURU',
    description: 'Expert UX/UI design ensuring your software product is intuitive, usable, and aesthetically exceptional.',
    keywords: 'UI UX design services, product UX, UI design, UX research, design systems',
    url: '/services/enterprise-product',
    jsonLd: buildServiceSchema({ name: 'UI UX Design Services', description: 'Digital product design, user research, and UI systems.', slug: 'enterprise-product' })
  },
  industries: {
    title: 'Industry Software Solutions | AINCURU',
    description: 'AINCURU provides specialized product engineering and AI automation solutions for manufacturing, healthcare, and enterprise sectors.',
    keywords: 'industry-specific software solutions, AI solutions, business automation, digital transformation',
    url: '/industries',
    jsonLd: buildBreadcrumbSchema([{name: 'Home', url: SITE_URL}, {name: 'Industries', url: `${SITE_URL}/industries`}])
  },
  manufacturing: {
    title: 'Manufacturing Software Solutions | AINCURU',
    description: 'Digitize and automate your manufacturing operations with custom software, IoT dashboards, and AI workflows.',
    keywords: 'manufacturing software solutions, manufacturing automation, AI for manufacturing, digital manufacturing workflows',
    url: '/industries/manufacturing',
    jsonLd: buildServiceSchema({ name: 'Manufacturing Software Solutions', description: 'Digital transformation for manufacturing companies.', slug: 'manufacturing' })
  },
  healthcare: {
    title: 'Healthcare Software Solutions | AINCURU',
    description: 'Build secure patient portals, healthcare apps, and automate hospital administrative tasks with custom software and AI.',
    keywords: 'healthcare software solutions, healthcare automation, healthcare AI, hospital software development',
    url: '/industries/healthcare',
    jsonLd: buildServiceSchema({ name: 'Healthcare Software Solutions', description: 'Custom software and AI automation for healthcare organizations.', slug: 'healthcare' })
  },
  portfolio: {
    title: 'Software Development Portfolio | AINCURU',
    description: 'Explore concrete evidence of AINCURU\'s product engineering, SaaS projects, and AI automation track record.',
    keywords: 'software development portfolio, product engineering projects, AI projects, SaaS projects',
    url: '/portfolio',
  },
  caseStudies: {
    title: 'Software Development Case Studies | AINCURU',
    description: 'Deep-dives into the business problems, engineering solutions, and tangible outcomes of AINCURU projects.',
    keywords: 'software development case studies, AI case studies, product development case studies',
    url: '/company/case-studies',
  },
  blog: {
    title: 'AI & Software Engineering Insights | AINCURU',
    description: 'Stay updated on modern software architecture, MVP development, and practical AI application strategies.',
    keywords: 'AI and software engineering insights, AI automation, product engineering, RAG, AI agents',
    url: '/company/blog',
  },
  about: {
    title: 'About AINCURU | Product Engineering Company',
    description: 'AINCURU is an engineering-first product development company that puts business context before intelligence.',
    keywords: 'about AINCURU, AINCURU company, product engineering, Context Before Intelligence',
    url: '/company/about',
    jsonLd: buildOrganizationSchema()
  },
  founderLetter: {
    title: 'AINCURU Founder Letter | Context Before Intelligence',
    description: 'Read the foundational thesis of AINCURU and why we believe technology must always begin with context.',
    keywords: 'AINCURU founder, AINCURU story, AINCURU philosophy, Context Before Intelligence',
    url: '/company/founder-letter',
  },
  contact: {
    title: 'Contact AINCURU | Start a Project',
    description: 'Initiate a business engagement with AINCURU for your custom software or AI business automation needs.',
    keywords: 'contact AINCURU, start a project, software development company, AI development company',
    url: '/contact',
    // Using Organization schema for contact page as fallback since LocalBusiness requires specific address
    jsonLd: buildOrganizationSchema()
  },
  technologies: {
    title: 'Engineering Technologies | AINCURU',
    description: 'Our core technology stack spanning enterprise AI, cloud architecture, and modern web/mobile frameworks.',
    keywords: 'software architecture, cloud technologies, AI tech stack, React, Node, Python',
    url: '/technologies',
  },
  careers: {
    title: 'Careers at AINCURU | Build the Future',
    description: 'Join our team of engineers, designers, and AI specialists building context-driven software.',
    url: '/company/careers',
  },
  insights: {
    title: 'Insights & Research | AINCURU',
    description: 'In-depth perspectives on AI, product strategy, and modern software engineering.',
    url: '/company/insights',
  },
  testimonials: {
    title: 'Client Testimonials | AINCURU',
    description: 'What our clients say about partnering with AINCURU for product engineering and automation.',
    url: '/company/testimonials',
  },
  successStories: {
    title: 'Success Stories | AINCURU',
    description: 'How we help companies scale operations and launch successful digital products.',
    url: '/company/success-stories',
  },
  forUsClients: {
    title: 'For US Clients | Seamless Engineering Partnerships',
    description: 'Learn how AINCURU partners with US-based organizations for frictionless offshore product engineering.',
    url: '/for-us-clients',
  }
};

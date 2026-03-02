import { Bot, Globe, Cloud, Smartphone, Brain, Megaphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceFeature {
    title: string;
    description: string;
}

export interface ServiceProcess {
    step: string;
    title: string;
    description: string;
}

export interface ServiceFAQ {
    question: string;
    answer: string;
}

export interface ServiceData {
    slug: string;
    icon: LucideIcon;
    title: string;
    tagline: string;
    shortDescription: string;
    heroHeadline: string;
    heroSubtext: string;
    color: string;
    overview: string;
    features: ServiceFeature[];
    process: ServiceProcess[];
    technologies: string[];
    faqs: ServiceFAQ[];
    ctaText: string;
}

export const servicesData: ServiceData[] = [
    {
        slug: "ui-ux-design",
        icon: Bot,
        title: "UI/UX Design",
        tagline: "Design that converts",
        shortDescription: "Creating intuitive and engaging user interfaces that enhance user experience across web and mobile platforms.",
        heroHeadline: "Interfaces that users love",
        heroSubtext: "We design beautiful, intuitive digital experiences that keep users engaged and drive meaningful business outcomes. Every pixel matters.",
        color: "hsl(186, 80%, 42%)",
        overview: "Great design isn't just about aesthetics — it's about solving problems. At NEO PERION, our UI/UX design process starts with understanding your users: their goals, frustrations, and behavior patterns. We then translate those insights into clean, intuitive interfaces that feel natural to use.\n\nOur designers work hand-in-hand with developers from day one. This means designs aren't just pretty mockups — they're production-ready blueprints built with real technical constraints in mind. The result? Faster delivery, fewer revisions, and experiences that actually work.\n\nWhether you're building a new product from scratch or redesigning an existing platform, we bring the strategic thinking and craft needed to make your digital presence stand out.",
        features: [
            {
                title: "User Research & Persona Mapping",
                description: "We conduct in-depth user interviews, surveys, and competitive analysis to build detailed personas. This ensures every design decision is backed by real user data, not assumptions."
            },
            {
                title: "Wireframing & Interactive Prototyping",
                description: "Before writing a single line of code, we create clickable prototypes that simulate the final product. This lets you test user flows, validate ideas, and iterate quickly without development costs."
            },
            {
                title: "Responsive Design Systems",
                description: "We build comprehensive design systems with reusable components, consistent typography, spacing, and color tokens. This ensures brand consistency across all screens and speeds up future development."
            },
            {
                title: "Accessibility-First Approach",
                description: "Our designs meet WCAG 2.1 AA standards by default. We ensure proper color contrast, keyboard navigation, screen reader compatibility, and inclusive interaction patterns."
            },
            {
                title: "Usability Testing & Iteration",
                description: "We run moderated and unmoderated usability tests with real users. The insights drive data-backed design improvements that measurably improve key metrics like conversion and engagement."
            },
            {
                title: "Design Handoff & Developer Support",
                description: "We deliver pixel-perfect specs with annotated designs, exportable assets, and CSS-ready tokens. Our designers stay available throughout development to ensure nothing gets lost in translation."
            }
        ],
        process: [
            { step: "01", title: "Discover", description: "Stakeholder interviews, user research, competitive audit, and goal definition to set a clear design direction." },
            { step: "02", title: "Define", description: "Information architecture, user flows, and wireframes that map out the entire user journey." },
            { step: "03", title: "Design", description: "High-fidelity visual designs, interactive prototypes, and a complete component library." },
            { step: "04", title: "Deliver", description: "Developer-ready specs, usability testing, and ongoing design support during implementation." }
        ],
        technologies: ["Figma", "Adobe XD", "Framer", "Storybook", "Maze", "Hotjar", "Lottie", "Zeplin"],
        faqs: [
            { question: "How long does a typical UI/UX project take?", answer: "Most projects take 4-8 weeks depending on scope. A simple landing page redesign might take 2-3 weeks, while a full SaaS product design can take 8-12 weeks including research and testing phases." },
            { question: "Do you work with existing design systems?", answer: "Yes. We can extend your existing design system, audit and improve it, or build a completely new one from scratch. We adapt to whatever makes sense for your team." },
            { question: "Can we see designs before development starts?", answer: "Absolutely. We deliver clickable prototypes that simulate the final product. You'll be able to test every screen and interaction before any code is written." }
        ],
        ctaText: "Start designing your product"
    },
    {
        slug: "web-app-modernization",
        icon: Globe,
        title: "Future-Ready Web & App Development",
        tagline: "Build for today. Scale for tomorrow.",
        shortDescription: "Transform legacy platforms and build modern web & app experiences — faster, cleaner, and architected to scale with your business.",
        heroHeadline: "Web & apps built to outlast change",
        heroSubtext: "From legacy rewrites to ground-up builds — we engineer web and app platforms that perform at scale, adapt to change, and stay ahead of what comes next.",
        color: "hsl(186, 80%, 42%)",
        overview: "Most platforms weren't built to handle what business demands today. As user expectations, traffic volumes, and feature complexity grow, the gap between legacy code and modern requirements widens fast.\n\nWe bridge that gap without disrupting what works. Our approach is incremental and deliberate — replacing the weakest layers first while keeping your core business logic intact. Every sprint delivers measurable improvement: faster load times, cleaner architecture, and a codebase your team can confidently maintain.\n\nThe result isn't just modernized software. It's a platform engineered to grow with your business — scalable, secure, and built to last.",
        features: [
            {
                title: "Legacy System Migration",
                description: "We migrate applications from outdated frameworks (jQuery, PHP, .NET MVC) to modern stacks (React, Next.js, Node.js) while preserving all business logic and data integrity."
            },
            {
                title: "Performance Optimization",
                description: "Database query optimization, caching layers, CDN setup, code splitting, and lazy loading. We typically achieve 60-80% improvement in page load times."
            },
            {
                title: "Modern Framework Adoption",
                description: "Transition from server-rendered pages to modern frameworks like React, Vue, or Next.js. We build component-based architectures that are easier to maintain and extend."
            },
            {
                title: "Progressive Web Apps (PWA)",
                description: "Convert existing web applications into PWAs with offline support, push notifications, and app-like experiences. Users can install your web app on any device."
            },
            {
                title: "CI/CD Pipeline Setup",
                description: "Automated testing, continuous integration, and deployment pipelines using GitHub Actions, GitLab CI, or Jenkins. Ship code confidently with every push."
            },
            {
                title: "Architecture Decomposition",
                description: "Break monolithic applications into microservices or modular architectures. Each component can be deployed, scaled, and updated independently."
            }
        ],
        process: [
            { step: "01", title: "Assess", description: "Full technical audit of your current system — code quality, architecture, performance bottlenecks, and security vulnerabilities." },
            { step: "02", title: "Prioritize", description: "We create a modernization roadmap ranked by business impact. High-ROI changes come first." },
            { step: "03", title: "Modernize", description: "Incremental changes in production. Every sprint delivers measurable improvements without disrupting your users." },
            { step: "04", title: "Stabilize", description: "Monitoring, documentation, and knowledge transfer. Your team can maintain the modernized system independently." }
        ],
        technologies: ["React", "Next.js", "TypeScript", "Node.js", "Docker", "GitHub Actions", "PostgreSQL", "Redis", "Nginx", "Vercel"],
        faqs: [
            { question: "How do you modernize without breaking existing features?", answer: "We use the strangler fig pattern — new features are built with modern tech while old ones continue working. Over time, the old code is gradually replaced. Users never notice the transition." },
            { question: "How long does modernization take?", answer: "It depends on system size, but most projects see significant improvements within 4-8 weeks. We work in sprints so you get value continuously, not just at the end." },
            { question: "Do we need to stop development during modernization?", answer: "No. We work alongside your existing team. New features can continue shipping while we modernize the underlying architecture in parallel." }
        ],
        ctaText: "Start your transformation"
    },
    {
        slug: "data-analytics",
        icon: Cloud,
        title: "Data & Analytics Support",
        tagline: "Decisions backed by data",
        shortDescription: "Delivering expert guidance in deploying, monitoring, and interpreting your data through scalable infrastructure and cutting-edge analytics solutions.",
        heroHeadline: "Turn raw data into business intelligence",
        heroSubtext: "Data without insight is just noise. We build the pipelines, dashboards, and models that transform your data into actionable decisions.",
        color: "hsl(186, 80%, 42%)",
        overview: "Most businesses are sitting on a goldmine of data — customer behavior, sales patterns, operational metrics — but lack the infrastructure to actually use it. Spreadsheets and manual reports only get you so far.\n\nWe build end-to-end data infrastructure: from collection and storage to processing, visualization, and predictive modeling. Our approach focuses on answering specific business questions rather than building abstract data lakes.\n\nWhether you need real-time dashboards for your operations team, predictive models for inventory management, or automated reporting for stakeholders, we design data systems that deliver actionable insights — not just pretty charts.",
        features: [
            {
                title: "Data Pipeline Architecture",
                description: "We build reliable ETL/ELT pipelines that collect data from multiple sources (databases, APIs, files), transform it, and load it into your analytics warehouse. Automated, scheduled, and monitored."
            },
            {
                title: "Real-Time Dashboards & Reporting",
                description: "Interactive dashboards built with tools like Metabase, Grafana, or custom React dashboards. Your team gets live visibility into the metrics that matter most."
            },
            {
                title: "Predictive Analytics & ML Models",
                description: "From demand forecasting to customer churn prediction, we build and deploy machine learning models that help you make data-backed decisions before things happen."
            },
            {
                title: "Data Warehouse Design",
                description: "Structured, optimized data warehouses on BigQuery, Snowflake, or PostgreSQL. Star schemas, slowly changing dimensions, and query optimization for fast analytical queries."
            },
            {
                title: "KPI Tracking & Business Intelligence",
                description: "We help you define the right KPIs, set up tracking, and build automated reports. Monthly business reviews become data conversations instead of guesswork."
            },
            {
                title: "Data Quality & Governance",
                description: "Automated data validation, anomaly detection, and lineage tracking. You can trust the numbers in your reports because we ensure data accuracy at every stage."
            }
        ],
        process: [
            { step: "01", title: "Audit Data Sources", description: "We catalog all your data sources, assess data quality, and identify the gaps between what you have and what you need." },
            { step: "02", title: "Design Architecture", description: "Pipeline architecture, warehouse schema, and dashboard wireframes — all designed before implementation begins." },
            { step: "03", title: "Build & Integrate", description: "Pipeline development, warehouse deployment, and dashboard creation. We integrate with your existing tools and workflows." },
            { step: "04", title: "Monitor & Optimize", description: "Ongoing monitoring, query optimization, and iterative improvements based on how your team actually uses the data." }
        ],
        technologies: ["Python", "Apache Airflow", "BigQuery", "Snowflake", "PostgreSQL", "Metabase", "Grafana", "Pandas", "dbt", "TensorFlow"],
        faqs: [
            { question: "What if our data is messy and spread across multiple systems?", answer: "That's actually the most common starting point. Our ETL pipelines are designed to handle messy, inconsistent data from multiple sources. We clean, normalize, and unify it into a single source of truth." },
            { question: "Do we need a data engineer on our team?", answer: "Not necessarily. We can set up self-maintaining pipelines and dashboards that require minimal ongoing management. For complex setups, we also offer ongoing support contracts." },
            { question: "Can you work with small datasets?", answer: "Absolutely. Not every company needs big data infrastructure. Sometimes a well-designed PostgreSQL database with smart queries and a Metabase dashboard is all you need." }
        ],
        ctaText: "Unlock your data potential"
    },
    {
        slug: "mobile-app-development",
        icon: Smartphone,
        title: "Mobile App Development",
        tagline: "Native & cross-platform",
        shortDescription: "High-performance mobile applications built for iOS and Android using modern frameworks that deliver native-quality experiences.",
        heroHeadline: "Apps that feel native on every device",
        heroSubtext: "We build mobile applications that users love — fast, beautiful, and reliable across iOS and Android from a single codebase.",
        color: "hsl(186, 80%, 42%)",
        overview: "Mobile users expect perfection. Slow load times, janky animations, or confusing navigation will get your app uninstalled. We build mobile applications that meet these high standards while keeping development efficient.\n\nUsing React Native and Flutter, we develop cross-platform applications from a single codebase — meaning you get iOS and Android coverage without doubling your budget. When native performance is critical, we build platform-specific modules that deliver 60fps animations and hardware-level access.\n\nFrom offline-first architectures for field workers to real-time sync for collaborative tools, our mobile apps are engineered for real-world usage conditions — not just demo-day scenarios.",
        features: [
            {
                title: "React Native & Flutter Development",
                description: "Cross-platform development that delivers near-native performance on both iOS and Android. One codebase, two platforms, consistent experience across devices."
            },
            {
                title: "Offline-First Architecture",
                description: "Apps that work without internet. Local data storage, background sync, and conflict resolution ensure your users are never stuck waiting for connectivity."
            },
            {
                title: "Push Notifications & Real-Time Updates",
                description: "Firebase Cloud Messaging, WebSocket connections, and in-app messaging. Keep users engaged and informed with timely, relevant notifications."
            },
            {
                title: "App Store Optimization (ASO)",
                description: "Optimize your app listing for discovery: keyword research, compelling screenshots, A/B tested descriptions, and review management strategies."
            },
            {
                title: "Over-the-Air (OTA) Updates",
                description: "Ship critical updates without going through App Store review. CodePush and EAS Update let you fix bugs and push changes instantly."
            },
            {
                title: "Biometrics & Secure Authentication",
                description: "Face ID, fingerprint login, and secure token management. We implement authentication that's both secure and frictionless for users."
            }
        ],
        process: [
            { step: "01", title: "Define", description: "App requirements, platform strategy (iOS, Android, or both), and feature prioritization for the MVP launch." },
            { step: "02", title: "Design", description: "Platform-specific UI patterns, interactive prototypes, and user flow testing before any development begins." },
            { step: "03", title: "Develop", description: "Sprint-based development with weekly builds. You can test the app on your device throughout the entire process." },
            { step: "04", title: "Launch", description: "App Store and Play Store submission, crash monitoring, analytics integration, and post-launch support." }
        ],
        technologies: ["React Native", "Flutter", "Expo", "Firebase", "TypeScript", "Redux", "SQLite", "CodePush", "Fastlane", "TestFlight"],
        faqs: [
            { question: "React Native or Flutter — which should we choose?", answer: "If your team already uses React/JavaScript, React Native is the natural choice. If you're starting fresh and want the best UI performance, Flutter has a slight edge. We'll recommend based on your specific requirements." },
            { question: "How long does it take to build a mobile app?", answer: "A focused MVP typically takes 8-12 weeks. More complex apps with backends, real-time features, and integrations can take 16-20 weeks. We always start with the minimum viable set of features." },
            { question: "Can you convert our existing website into a mobile app?", answer: "Yes. We can build a mobile app that shares the API backend with your website, ensuring data consistency. We can also wrap your web app as a PWA for a lighter approach." }
        ],
        ctaText: "Build your mobile app"
    },
    {
        slug: "ai-automation",
        icon: Brain,
        title: "AI & Automation",
        tagline: "Smarter systems, less manual work",
        shortDescription: "Integrate AI-powered automations, chatbots, and intelligent workflows that reduce manual effort and accelerate decision-making.",
        heroHeadline: "Automate the repetitive, amplify the human",
        heroSubtext: "We integrate AI and automation into your existing workflows — eliminating busywork, reducing errors, and freeing your team to focus on high-value tasks.",
        color: "hsl(186, 80%, 42%)",
        overview: "AI isn't magic — it's engineering. The real value of AI in business isn't chatbots that sound human. It's the mundane, repetitive tasks that eat hours of your team's time every week: data entry, document processing, classification, routing, scheduling, and reporting.\n\nWe build practical AI automations that solve specific, measurable problems. Whether it's an intelligent document processor that extracts data from invoices, a recommendation engine that personalizes user experiences, or an automated QA system that catches errors before they reach production.\n\nOur approach is always ROI-first: we identify the highest-impact automation opportunities, build targeted solutions, and measure the actual time and money saved. No hype, just results.",
        features: [
            {
                title: "Custom AI/ML Model Development",
                description: "We build, train, and deploy machine learning models tailored to your business data. Classification, prediction, recommendation, and anomaly detection — purpose-built for your use case."
            },
            {
                title: "Chatbot & Conversational AI",
                description: "Intelligent chatbots powered by LLMs that handle customer queries, route support tickets, and provide instant answers. Integrated with your knowledge base and CRM."
            },
            {
                title: "Robotic Process Automation (RPA)",
                description: "Automate repetitive tasks across applications: data entry, form filling, report generation, and cross-system data sync. Runs 24/7 without human intervention."
            },
            {
                title: "Intelligent Document Processing",
                description: "Extract structured data from invoices, contracts, applications, and forms using OCR and NLP. Handles handwriting, tables, and complex layouts with high accuracy."
            },
            {
                title: "AI-Driven Recommendations",
                description: "Personalization engines for e-commerce, content platforms, and SaaS products. Show each user the most relevant items based on their behavior and preferences."
            },
            {
                title: "Workflow Automation & Orchestration",
                description: "Connect your tools and automate multi-step workflows. When X happens in system A, automatically do Y in system B. No more manual bridging between tools."
            }
        ],
        process: [
            { step: "01", title: "Identify", description: "We audit your workflows to find the highest-ROI automation opportunities — tasks that are repetitive, time-consuming, and error-prone." },
            { step: "02", title: "Prototype", description: "Quick proof-of-concept to validate the AI/automation approach. You see results within 2-3 weeks, not months." },
            { step: "03", title: "Integrate", description: "Production-grade implementation integrated with your existing tools, databases, and workflows. Monitored and reliable." },
            { step: "04", title: "Optimize", description: "Continuous model retraining, performance monitoring, and expansion to additional use cases as the system learns." }
        ],
        technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face", "n8n", "Zapier", "AWS Lambda", "FastAPI"],
        faqs: [
            { question: "Do we need a lot of data for AI to work?", answer: "It depends on the use case. Custom ML models typically need hundreds to thousands of examples. However, many automation tasks use pre-trained models (like LLMs) that work out of the box with minimal data." },
            { question: "How do you ensure AI accuracy?", answer: "We implement human-in-the-loop systems for critical decisions, automated monitoring for model drift, and regular accuracy benchmarks. Low-confidence predictions get flagged for human review." },
            { question: "Can AI integrate with our existing software?", answer: "Yes. We build API-based integrations that connect AI capabilities with your existing tools — CRMs, ERPs, databases, communication platforms, and more." }
        ],
        ctaText: "Automate your workflows"
    },
    {
        slug: "digital-marketing",
        icon: Megaphone,
        title: "Digital Marketing",
        tagline: "Grow your reach online",
        shortDescription: "Strategic digital marketing that boosts brand visibility, drives qualified traffic, and converts leads through SEO, social media, PPC, and content strategies.",
        heroHeadline: "Marketing that drives measurable growth",
        heroSubtext: "We don't just run ads — we build comprehensive digital marketing strategies that generate leads, build brand authority, and deliver measurable ROI.",
        color: "hsl(186, 80%, 42%)",
        overview: "Digital marketing isn't about being everywhere — it's about being in the right places with the right message at the right time. Most businesses waste budget on channels that don't work or campaigns that don't convert because they lack a cohesive strategy.\n\nWe take a data-driven approach to digital marketing. Every campaign starts with clear KPIs, audience research, and competitive analysis. We then execute across the channels that matter most for your business — whether that's SEO for long-term organic growth, PPC for immediate lead generation, or content marketing for thought leadership.\n\nWhat makes us different? We're a tech company first. That means we bring engineering precision to marketing: automated reporting, A/B testing at scale, conversion tracking that actually works, and landing pages optimized for performance.",
        features: [
            {
                title: "Search Engine Optimization (SEO)",
                description: "Technical SEO audits, keyword strategy, on-page optimization, and link building. We improve your organic rankings with sustainable, white-hat strategies that compound over time."
            },
            {
                title: "Social Media Marketing & Management",
                description: "Strategic content creation, community management, and paid social campaigns across LinkedIn, Instagram, Twitter, and Facebook. Build brand awareness and engage your audience."
            },
            {
                title: "PPC & Paid Advertising",
                description: "Google Ads, Meta Ads, and LinkedIn Ads campaigns with precise targeting, A/B tested creatives, and continuous bid optimization. Maximum ROI from every rupee spent."
            },
            {
                title: "Content Marketing & Strategy",
                description: "Blog posts, case studies, whitepapers, and video content that establishes thought leadership. We create content that ranks, resonates, and converts."
            },
            {
                title: "Email Marketing & Automation",
                description: "Drip campaigns, newsletters, and automated email sequences that nurture leads through your funnel. Personalized messaging at scale with detailed analytics."
            },
            {
                title: "Analytics & Conversion Optimization",
                description: "Google Analytics setup, conversion tracking, heatmap analysis, and A/B testing. We identify exactly where you're losing leads and fix it with data-backed changes."
            }
        ],
        process: [
            { step: "01", title: "Research", description: "Audience analysis, competitor benchmarking, keyword research, and channel assessment. We build strategy on data, not assumptions." },
            { step: "02", title: "Strategize", description: "Custom marketing plan with clear KPIs, channel mix, content calendar, and budget allocation aligned to your business goals." },
            { step: "03", title: "Execute", description: "Campaign launch across selected channels with continuous monitoring, A/B testing, and creative optimization." },
            { step: "04", title: "Report & Scale", description: "Monthly performance reports with clear ROI metrics. We double down on what works and cut what doesn't." }
        ],
        technologies: ["Google Analytics", "Google Ads", "Meta Business Suite", "SEMrush", "Ahrefs", "Mailchimp", "HubSpot", "Canva", "Hootsuite", "Google Search Console"],
        faqs: [
            { question: "How long before we see results from SEO?", answer: "SEO is a long-term investment. You'll typically see improvements in 3-6 months, with significant results at the 6-12 month mark. We complement SEO with PPC for immediate visibility while organic rankings build." },
            { question: "What's the minimum budget for PPC campaigns?", answer: "We recommend a minimum of ₹30,000/month for ad spend (separate from management fees) to gather enough data for optimization. Larger budgets allow for more channels and faster learning." },
            { question: "Do you create the content too?", answer: "Yes. Our team handles everything from strategy to creation — blog posts, social media graphics, ad creatives, email copy, and video scripts. You just need to approve before we publish." }
        ],
        ctaText: "Grow your brand online"
    }
];

// Helper to get service by slug
export const getServiceBySlug = (slug: string): ServiceData | undefined => {
    return servicesData.find(s => s.slug === slug);
};

// Get all slugs for routing
export const getServiceSlugs = (): string[] => {
    return servicesData.map(s => s.slug);
};

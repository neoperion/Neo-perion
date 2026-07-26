export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  industry: string;
  overview: string;
  businessProblem: string[];
  solution: string;
  features: { title: string; description?: string }[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    ai?: string[];
    infrastructure?: string[];
    other?: string[];
  };
  challenges: string[];
  impact: string[];
  gallery: string[];
  video: string;
  thumbnail: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "project-01",
    slug: "krishna-packers-movers",
    title: "Krishna Packers & Movers",
    category: "Corporate Websites",
    industry: "Logistics & Relocation",
    overview: "Krishna Packers & Movers is a regional logistics and home-relocation service provider operating across Tamil Nadu. The goal was to create a digital storefront communicating trust, professionalism, and reliability, converting online visitors into inquiries.",
    businessProblem: [
      "The business had no online presence, resulting in zero organic search visibility.",
      "Potential customers could not verify credibility, services, or coverage area.",
      "Inquiry management was handled entirely through phone calls.",
      "Competitors with functional websites were capturing search traffic.",
    ],
    solution: "AINCURU designed and built a performance-optimized corporate website with a clean, professional visual identity. A structured inquiry form was implemented to capture lead details. Built with on-page SEO fundamentals from the ground up targeting local search queries.",
    features: [
      { title: "Professional homepage with trust signals" },
      { title: "Dedicated service pages" },
      { title: "Inquiry and quote request form" },
      { title: "Mobile-first, responsive design" },
      { title: "Service coverage area section" },
      { title: "Customer testimonial section" },
      { title: "Local SEO structure" }
    ],
    techStack: {
      frontend: ["React", "Next.js", "Tailwind CSS"],
      infrastructure: ["Static Hosting"]
    },
    challenges: [
      "Achieving fast page load speeds on mobile networks.",
      "Building an SEO-ready structure with proper heading hierarchy.",
      "Creating a visual design that balanced professionalism with approachability."
    ],
    impact: [
      "Established a credible digital presence for the business.",
      "Created a functional lead capture mechanism.",
      "Built organic search discoverability."
    ],
    gallery: ['/portfolio-images/krishna-gallery-admin.png', '/portfolio-images/krishna-gallery-contact.png'],
    video: "https://res.cloudinary.com/dkkdmpulb/video/upload/v1782328951/krishna_packers_website_o1byjp.mp4",
    thumbnail: "/portfolio-images/krishna-thumbnail.png",
    featured: false
  },
  {
    id: "project-02",
    slug: "izhaiyam-ecommerce",
    title: "Izhaiyam E-Commerce Platform",
    category: "E-Commerce",
    industry: "Retail — Handloom & Lifestyle Products",
    overview: "Izhaiyam is a Chennai-based brand focused on handloom furniture and lifestyle products rooted in traditional craftsmanship. We developed a full-featured e-commerce platform reflecting the brand's heritage aesthetic while delivering a modern shopping experience.",
    businessProblem: [
      "No online sales channel, restricting revenue to physical retail.",
      "Customers outside Chennai had no way to discover or purchase.",
      "Inventory managed manually with no central system.",
      "Heritage story not communicated effectively to new audiences."
    ],
    solution: "Built a custom e-commerce platform tailored to Izhaiyam. Streamlined checkout flow to minimize drop-off. Mobile-first shopping experience. Backend built for inventory and order tracking.",
    features: [
      { title: "Full product catalog with categories" },
      { title: "Detailed product pages with material specs" },
      { title: "Secure multi-option checkout" },
      { title: "Admin panel for inventory management" },
      { title: "Brand storytelling pages" }
    ],
    techStack: {
      frontend: ["React", "Next.js", "Tailwind CSS"],
      backend: ["Node.js"],
      database: ["PostgreSQL"],
      other: ["Payment Gateway"]
    },
    challenges: [
      "Building an inventory management system for real-time stock availability.",
      "Structuring product SEO for handloom search terms.",
      "Implementing secure payment flow for Indian e-commerce."
    ],
    impact: [
      "Opened a direct-to-consumer digital sales channel.",
      "Extended brand reach beyond Chennai.",
      "Centralized product and inventory management."
    ],
    gallery: ['/portfolio-images/izhaiyam2gallery.png'],
    video: "https://res.cloudinary.com/dkkdmpulb/video/upload/v1782328981/izhaiyam_twmt16.mp4",
    thumbnail: "/portfolio-images/izhaiyamthumnail.png",
    featured: false
  },
  {
    id: "project-03",
    slug: "funnova",
    title: "FUNNOVA (Educational Gaming Platform)",
    category: "EdTech",
    industry: "K-5 Education",
    overview: "FUNNOVA is an educational gaming platform built for Grade 3 to Grade 5 students, designed to make curriculum-aligned learning genuinely engaging through interactive game mechanics.",
    businessProblem: [
      "Traditional educational content formats fail to sustain attention in young learners.",
      "Existing edtech platforms sacrifice either engagement or curriculum rigor.",
      "Teachers have limited tools to make digital practice rewarding.",
      "No affordable product specifically targeting Grade 3-5 with game mechanics."
    ],
    solution: "FUNNOVA was built on a modular game template architecture mapping learning objectives to formats like matching and drag-and-drop. Features a student dashboard tracking completion and streaks.",
    features: [
      { title: "Curriculum-aligned game templates" },
      { title: "Student dashboard with streaks & badges" },
      { title: "Level-select system" },
      { title: "Admin content management" },
      { title: "Gamified reward system" }
    ],
    techStack: {
      frontend: ["React", "Vite", "Tailwind CSS"],
      backend: ["Express.js"],
      database: ["PostgreSQL"]
    },
    challenges: [
      "Designing a flexible game template system.",
      "Building a student dashboard meaningful to 8-11 year old users.",
      "Architecting the CMS to support rapid curriculum expansion."
    ],
    impact: [
      "Created a differentiated edtech product.",
      "Produced scalable platform architecture.",
      "Built an extensible foundation for future school integrations."
    ],
    gallery: ['/portfolio-images/funnovo2gallery.png'],
    video: "https://res.cloudinary.com/dkkdmpulb/video/upload/v1782328988/funnovo_alpqhd.mp4",
    thumbnail: "/portfolio-images/funnovothamnail1.png",
    featured: true
  },
  {
    id: "project-04",
    slug: "lexzify-ai-travel-planner",
    title: "Lexzify AI Travel Planner",
    category: "AI Products",
    industry: "Travel Technology",
    overview: "Lexzify is an AI-powered travel planning and community platform designed for the Indian travel market. It centralizes the planning experience using LLM integration to generate personalized itineraries.",
    businessProblem: [
      "Travelers spend disproportionate time researching across fragmented sources.",
      "Generic travel engines apply Western patterns to an audience with distinct preferences.",
      "Budget planning requires local pricing context.",
      "No community layer exists connecting travelers with shared interests."
    ],
    solution: "Lexzify uses an AI planning engine accepting natural language inputs to generate structured itineraries. Features a community layer for sharing experiences and reviews.",
    features: [
      { title: "AI-powered itinerary generation" },
      { title: "Destination discovery feed" },
      { title: "Budget planning with India-specific cost estimation" },
      { title: "Community travel stories" },
      { title: "Conversational itinerary refinement" }
    ],
    techStack: {
      frontend: ["React"],
      backend: ["FastAPI", "Python"],
      database: ["PostgreSQL"],
      ai: ["LLM Integration"]
    },
    challenges: [
      "Designing LLM prompts that produce structured, actionable itineraries.",
      "Managing LLM response latency in the UI.",
      "Incorporating India-specific travel context into AI outputs."
    ],
    impact: [
      "Created a differentiated travel AI product.",
      "Demonstrated practical LLM integration for a consumer product.",
      "Established a foundation for multiple revenue streams."
    ],
    gallery: ['/portfolio-images/lexzify2gallery.png', '/portfolio-images/lexzify3gallery.png'],
    video: "https://res.cloudinary.com/dkkdmpulb/video/upload/v1782328988/lexzify_io3vha.mp4",
    thumbnail: "/portfolio-images/lexzifythumbnail.png",
    featured: true
  },
  {
    id: "project-05",
    slug: "farm-profit-analyzer",
    title: "Farm Profit Analyzer",
    category: "Agritech",
    industry: "Agriculture",
    overview: "An AI-powered agricultural decision support platform designed to help small and marginal farmers across India estimate profitability before committing to a crop cycle.",
    businessProblem: [
      "Farmers commit to crop selection without reliable profitability forecasting.",
      "Market prices fluctuate significantly between planting and harvest.",
      "Cost estimation is inaccurate due to lack of structured accounting.",
      "Small farmers bear disproportionate financial risk."
    ],
    solution: "The AI engine predicts expected yield using XGBoost models, forecasts market price ranges, calculates total cost of cultivation, and computes expected profit, loss, and ROI.",
    features: [
      { title: "Crop profitability prediction" },
      { title: "AI-based yield forecasting" },
      { title: "Market price forecasting" },
      { title: "Total cultivation cost calculation" },
      { title: "Tamil and English language support" }
    ],
    techStack: {
      frontend: ["React", "Next.js"],
      backend: ["FastAPI", "Python"],
      database: ["PostgreSQL"],
      ai: ["XGBoost"],
      other: ["APY Data", "CACP Data", "Agmarknet"]
    },
    challenges: [
      "Integrating heterogeneous government datasets.",
      "Training XGBoost models across diverse agroclimatic zones.",
      "Designing an accessible UI for varying literacy levels."
    ],
    impact: [
      "Empowers farmers to make data-informed decisions.",
      "Reduces financial risk for small farmers.",
      "Provides channel-level selling optimization."
    ],
    gallery: ['/portfolio-images/farmer2gallery.png', '/portfolio-images/farmer3gallery.png'],
    video: "https://res.cloudinary.com/dkkdmpulb/video/upload/v1782328972/farmer_profit_anazer_lfpzee.mp4",
    thumbnail: "/portfolio-images/farmerthumnail.png",
    featured: true
  },
  {
    id: "project-06",
    slug: "donateconnect",
    title: "DonateConnect",
    category: "Social Impact",
    industry: "NGO & Social Sector",
    overview: "A three-sided digital platform connecting individual donors, NGOs, and beneficiaries in a structured, transparent donation lifecycle with automated notifications and AI support.",
    businessProblem: [
      "Informal donation networks lack transparency.",
      "NGOs coordinate logistics manually.",
      "Beneficiaries have no visibility into delivery.",
      "Valuable donations expire during delays."
    ],
    solution: "Role-based authentication for donors, NGOs, and beneficiaries. Donors upload items, NGOs assign them, and real-time delivery tracking ensures transparent, closed-loop accountability.",
    features: [
      { title: "Role-based authentication dashboards" },
      { title: "Donation verification workflow" },
      { title: "Real-time delivery tracking via Socket.IO" },
      { title: "AI-powered NGO assistant (Claude API)" }
    ],
    techStack: {
      frontend: ["React"],
      backend: ["FastAPI", "Python", "Socket.IO"],
      database: ["PostgreSQL"],
      ai: ["Claude AI"]
    },
    challenges: [
      "Designing three distinct role experiences.",
      "Implementing real-time tracking with Socket.IO.",
      "Integrating AI assistance effectively."
    ],
    impact: [
      "End-to-end transparency in the donation lifecycle.",
      "Reduces NGO administrative overhead.",
      "Enables NGOs to generate real impact reports."
    ],
    gallery: [
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80"
    ],
    video: "https://res.cloudinary.com/dkkdmpulb/video/upload/v1782328944/donation_project_doxfjt.mp4",
    thumbnail: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
    featured: false
  },
  {
    id: "project-07",
    slug: "mobile-case-accessories",
    title: "Mobile Case Accessories",
    category: "E-Commerce",
    industry: "Retail Electronics",
    overview: "A dedicated D2C e-commerce platform for mobile case accessories, delivering high-performance mobile-first shopping with integrated payment and real-time inventory management.",
    businessProblem: [
      "High competition on large marketplaces reducing brand loyalty.",
      "Need for a standalone responsive store.",
      "Complex variants management (color, phone model, material)."
    ],
    solution: "Developed a modern, visually striking e-commerce store with intuitive product filtering, high-quality media galleries, and seamless cart operations.",
    features: [
      { title: "Variant-based product selection" },
      { title: "Integrated payment gateways" },
      { title: "Real-time order tracking" }
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js"],
      database: ["PostgreSQL"]
    },
    challenges: [
      "Managing complex product variants.",
      "Optimizing image loading times for mobile."
    ],
    impact: [
      "Established independent digital storefront.",
      "Improved brand retention and loyalty."
    ],
    gallery: ['/portfolio-images/mobileecommerce2gallery.png'],
    video: "https://res.cloudinary.com/dkkdmpulb/video/upload/v1782328972/mobile_accesories_e_commerce_website_hfl4qh.mp4",
    thumbnail: "/portfolio-images/mobileecommercethumbnail.png",
    featured: false
  },
  {
    id: "project-08",
    slug: "polystore-solution",
    title: "Polystore Solution",
    category: "SaaS Platforms",
    industry: "E-Commerce Recommendation Systems",
    overview: "An AI-powered product recommendation and customer behavior analytics platform built to solve the echo chamber effect in e-commerce using intelligent bundling strategies.",
    businessProblem: [
      "Standard engines create echo chambers showing only previously purchased items.",
      "Discovery of new products is suppressed.",
      "Recommendation systems act as a 'black box' eroding trust."
    ],
    solution: "Combines H2O AutoML for purchase prediction with an intelligent bundling layer ensuring product diversity. Features a 3:1 strategy (3 high-probability, 1 discovery) and human-readable explanations.",
    features: [
      { title: "Reorder probability prediction" },
      { title: "Intelligent product bundling (3:1, 2:2, 4:0)" },
      { title: "Explainable AI recommendations" },
      { title: "Customer behavioral segmentation" }
    ],
    techStack: {
      frontend: ["React"],
      backend: ["Python"],
      ai: ["H2O AutoML", "Machine Learning"],
      other: ["Pandas", "Analytics Pipeline"]
    },
    challenges: [
      "Designing a diverse bundle composition algorithm.",
      "Generating natural language explanations for ML recommendations.",
      "Scaling inference pipeline for large catalogs."
    ],
    impact: [
      "Addresses echo chamber recommendation patterns.",
      "Provides operators with configurable strategies.",
      "Improves customer trust and long-term engagement."
    ],
    gallery: ['/portfolio-images/polystore2gallery.png'],
    video: "https://res.cloudinary.com/dkkdmpulb/video/upload/v1782328975/polystore_with_voice_pexjxs.mp4",
    thumbnail: "/portfolio-images/polystorethumnail.png",
    featured: false
  },
  {
    id: "project-09",
    slug: "web-analyzer",
    title: "Web Analyzer",
    category: "SaaS Platforms",
    industry: "Web Performance & Accessibility",
    overview: "An AI-powered developer intelligence platform integrating Lighthouse, axe-core, and Playwright to interpret audit findings and generate human-readable, prioritized recommendations.",
    businessProblem: [
      "Performance issues cause measurable business impact but owners lack prioritization tools.",
      "Accessibility compliance requires specialized knowledge.",
      "Lighthouse scores lack business context."
    ],
    solution: "Consolidates performance, accessibility, and SEO auditing. An AI layer translates findings into plain-language actions, visualized via Recharts and Three.js.",
    features: [
      { title: "AI-driven analysis interpretation" },
      { title: "Lighthouse & Axe-core integration" },
      { title: "Playwright headless browser scraping" },
      { title: "Three.js & Recharts visualizations" }
    ],
    techStack: {
      frontend: ["React 19", "Tailwind CSS", "Three.js", "Framer Motion", "Recharts"],
      backend: ["FastAPI", "Python"],
      ai: ["LLM Integration"],
      other: ["Playwright", "Lighthouse", "Axe-core"]
    },
    challenges: [
      "Orchestrating three auditing engines in a single pipeline.",
      "Designing LLM prompts for consistent recommendations.",
      "Managing headless browser instances efficiently."
    ],
    impact: [
      "Makes intelligence accessible to non-technical stakeholders.",
      "Reduces time-to-insight from hours to minutes.",
      "Provides a commercially viable SaaS platform."
    ],
    gallery: ['/portfolio-images/webanalzer2gallery.png'],
    video: "https://res.cloudinary.com/dkkdmpulb/video/upload/v1782328983/final_web_analyzer_aab19j.mp4",
    thumbnail: "/portfolio-images/webanalyzerthumnail.png",
    featured: false
  },
  {
    id: "project-10",
    slug: "holo-mehndi",
    title: "Holo Mehndi",
    category: "E-Commerce",
    industry: "Beauty & Lifestyle",
    overview: "A premium e-commerce platform for Holo Mehndi products, featuring visually stunning displays of mehndi designs, seamless purchasing, and booking integrations.",
    businessProblem: [
      "Lack of a centralized platform to view portfolios and purchase products.",
      "High dependency on social media for orders."
    ],
    solution: "Designed a beautiful, fast-loading e-commerce site with integrated galleries and secure checkout processes.",
    features: [
      { title: "High-resolution portfolio gallery" },
      { title: "Secure shopping cart" },
      { title: "Mobile-responsive design" }
    ],
    techStack: {
      frontend: ["React", "Next.js", "Tailwind CSS"],
      backend: ["Node.js"],
      database: ["PostgreSQL"]
    },
    challenges: [
      "Optimizing heavy image loads for performance.",
      "Creating an aesthetic matching the brand's premium vibe."
    ],
    impact: [
      "Streamlined the purchasing process.",
      "Elevated the brand's digital presence."
    ],
    gallery: ['/portfolio-images/holomehndi2gallery.png', '/portfolio-images/holomenhdi3gallery.png'],
    video: "https://res.cloudinary.com/dkkdmpulb/video/upload/v1782328952/holomehndi_website_hwlnn9.mp4",
    thumbnail: "/portfolio-images/holomendithumbail.png",
    featured: false
  }
];

import { CaseStudy } from '@/types/caseStudy';

export const mockCaseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Transforming Legacy Healthcare with AI-Driven RPA',
    slug: 'ai-healthcare-rpa',
    industry: 'Healthcare',
    service_type: 'AI & Automation',
    problem: 'A major regional hospital network was struggling with manual data entry for patient intake, leading to 15% error rates and 40+ hours of wasted administrative time per week per clinic.',
    solution: 'We engineered a custom AI-driven Robotic Process Automation (RPA) solution that integrates with their existing EHR (Electronic Health Records) system. Using OCR and NLP, the system extracts patient data from handwritten forms and automatically populates the EHR.',
    outcome: 'Reduced data entry errors by 98%. Saved over 12,000 administrative hours annually. Improved patient check-in speed by 60%.',
    tech_stack: ['Python', 'UiPath', 'OpenAI API', 'React', 'Node.js', 'PostgreSQL'],
    cover_image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop'
    ],
    client_name: 'MediCare Health Network',
    client_quote: "AINCURU didn't just build a software tool; they completely revolutionized our clinic operations. Our nurses are back to doing what they do best: caring for patients.",
    duration: '4 Months',
    featured: true,
    published: true,
    seo_title: 'AI Healthcare Automation Case Study | AINCURU',
    seo_description: 'Discover how we reduced administrative overhead by 12,000 hours using AI and RPA in healthcare.',
    created_at: new Date('2026-05-15T10:00:00Z').toISOString(),
    updated_at: new Date('2026-05-15T10:00:00Z').toISOString()
  },
  {
    id: '2',
    title: 'Scaling EdTech: A Next-Gen SaaS Learning Platform',
    slug: 'edtech-saas-platform',
    industry: 'Education',
    service_type: 'SaaS Development',
    problem: 'An expanding online university needed to migrate from a legacy monolithic LMS that crashed during peak exam hours to a scalable, cloud-native SaaS platform.',
    solution: 'We architected a serverless microservices platform on AWS, utilizing Next.js for a lightning-fast frontend and a real-time WebSocket architecture for live virtual classrooms.',
    outcome: 'Achieved 99.99% uptime during peak loads of 50,000 concurrent users. Reduced infrastructure costs by 40%.',
    tech_stack: ['Next.js', 'AWS Lambda', 'DynamoDB', 'WebSockets', 'TailwindCSS'],
    cover_image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop'
    ],
    client_name: 'Global EduTech',
    client_quote: "The technical expertise of the AINCURU team is unmatched. They delivered a platform that not only scales effortlessly but also looks incredibly modern.",
    duration: '6 Months',
    featured: true,
    published: true,
    seo_title: 'EdTech SaaS Platform Case Study | AINCURU',
    seo_description: 'How we built a scalable serverless EdTech platform handling 50k concurrent users.',
    created_at: new Date('2026-04-20T10:00:00Z').toISOString(),
    updated_at: new Date('2026-04-20T10:00:00Z').toISOString()
  },
  {
    id: '3',
    title: 'Intelligent Inventory Prediction System',
    slug: 'intelligent-inventory-system',
    industry: 'Retail & E-commerce',
    service_type: 'Machine Learning',
    problem: 'A national retail chain was losing $2M annually due to stockouts and overstocking across their 50+ locations.',
    solution: 'Developed a predictive Machine Learning model that analyzes historical sales data, local weather patterns, and social media trends to forecast inventory demand at a per-store level.',
    outcome: 'Reduced stockouts by 35% and decreased overstock waste by 22%, resulting in a $1.5M positive impact in Year 1.',
    tech_stack: ['Python', 'TensorFlow', 'Snowflake', 'FastAPI', 'React'],
    cover_image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop',
    gallery: [],
    client_name: 'RetailCorp Inc.',
    client_quote: "The predictive accuracy of the model AINCURU built has completely changed how we manage our supply chain.",
    duration: '3 Months',
    featured: false,
    published: true,
    seo_title: 'Retail AI Inventory Case Study | AINCURU',
    seo_description: 'Predictive machine learning model for retail inventory optimization.',
    created_at: new Date('2026-03-10T10:00:00Z').toISOString(),
    updated_at: new Date('2026-03-10T10:00:00Z').toISOString()
  }
];

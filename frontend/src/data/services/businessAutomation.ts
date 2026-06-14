import { Workflow } from 'lucide-react';
import { ServicePageConfig } from './types';

export const businessAutomation: ServicePageConfig = {
  slug: 'business-automation',
  title: 'Business Automation',
  subtitle: 'Streamline operations with custom software integrations.',
  heroGradient: 'from-orange-500/20 to-amber-500/20',
  icon: Workflow,
  challenges: [
    'Manual Data Entry',
    'Disparate Systems',
    'High Error Rates',
    'Slow Reporting'
  ],
  solutions: [
    { title: 'Workflow Automation', description: 'Connecting multiple SaaS tools to trigger automated actions.' },
    { title: 'CRM Automation', description: 'Automating lead assignments, follow-ups, and data hygiene.' },
    { title: 'Lead Automation', description: 'Capturing, scoring, and routing inbound sales prospects.' },
    { title: 'Email Automation', description: 'Personalized outreach sequences triggered by user behavior.' },
    { title: 'Document Automation', description: 'Generating invoices, contracts, and PDFs automatically.' }
  ],
  techStack: [
    'Make', 'Zapier', 'n8n', 'HubSpot', 'Salesforce', 'Stripe'
  ],
  process: [
    { step: '01', title: 'Audit', description: 'Mapping your current manual processes.' },
    { step: '02', title: 'Design', description: 'Creating the automation logic flow.' },
    { step: '03', title: 'Integration', description: 'Setting up webhooks, API keys, and triggers.' },
    { step: '04', title: 'Testing', description: 'Running test data to ensure perfect execution.' }
  ],
  faqs: [
    { question: 'Do you use no-code tools?', answer: 'Yes, we use platforms like n8n and Make for rapid, maintainable automations.' },
    { question: 'Can you write custom API scripts?', answer: 'Absolutely. If a tool lacks a pre-built connector, we write custom Node.js/Python scripts.' }
  ],
  cta: {
    headline: 'Tired of manual data entry?',
    subheadline: 'Let us automate your repetitive tasks so your team can focus on growth.',
    primaryButtonText: 'Book Free Consultation',
    secondaryButtonText: 'Start Your Project'
  }
};

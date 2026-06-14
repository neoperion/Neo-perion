import { BrainCircuit } from 'lucide-react';
import { ServicePageConfig } from './types';

export const artificialIntelligence: ServicePageConfig = {
  slug: 'artificial-intelligence',
  title: 'Artificial Intelligence',
  subtitle: 'Custom LLM integrations and machine learning pipelines.',
  heroGradient: 'from-purple-500/20 to-pink-500/20',
  icon: BrainCircuit,
  challenges: [
    'Manual Workflows',
    'Data Overload',
    'Inefficient Processes',
    'Lack of Predictive Insights'
  ],
  solutions: [
    { title: 'AI Assistants', description: 'Standalone applications powered by intelligent models.' },
    { title: 'AI Automation', description: 'Connecting AI to your existing tools and APIs.' },
    { title: 'Prediction Systems', description: 'Forecasting trends based on your historical data.' },
    { title: 'Recommendation Systems', description: 'Personalizing user experiences dynamically.' },
    { title: 'Computer Vision', description: 'Analyzing and classifying images or video streams.' },
    { title: 'NLP', description: 'Natural language processing for text analysis and generation.' }
  ],
  techStack: [
    'OpenAI', 'Anthropic', 'TensorFlow', 'PyTorch', 'Python', 'LangChain'
  ],
  process: [
    { step: '01', title: 'Data Strategy', description: 'Organizing your knowledge base and datasets.' },
    { step: '02', title: 'Model Selection', description: 'Choosing the right models for your use case.' },
    { step: '03', title: 'AI Implementation', description: 'Deploying the AI models securely.' },
    { step: '04', title: 'Monitoring', description: 'Tracking model drift and accuracy over time.' }
  ],
  faqs: [
    { question: 'Is my data secure?', answer: 'Yes, we use enterprise APIs that do not train on your private data.' },
    { question: 'Can you integrate with our existing software?', answer: 'Yes, we build custom API layers to connect AI to any system.' }
  ],
  cta: {
    headline: 'Ready to automate with AI?',
    subheadline: 'Embed state-of-the-art language models into your existing workflows.',
    primaryButtonText: 'Book Free Consultation',
    secondaryButtonText: 'Start Your Project'
  }
};

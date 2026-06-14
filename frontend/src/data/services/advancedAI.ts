import { Cpu } from 'lucide-react';
import { ServicePageConfig } from './types';

export const advancedAI: ServicePageConfig = {
  slug: 'advanced-ai',
  title: 'Advanced AI',
  subtitle: 'Specialized model fine-tuning and predictive analytics.',
  heroGradient: 'from-pink-500/20 to-rose-500/20',
  icon: Cpu,
  challenges: [
    'Generic AI Responses',
    'Complex Knowledge Retrieval',
    'Data Privacy Requirements',
    'Multi-Step Reasoning'
  ],
  solutions: [
    { title: 'RAG Systems', description: 'Retrieval-Augmented Generation for accurate answers from your proprietary data.' },
    { title: 'AI Agents', description: 'Autonomous agents that perform complex tasks and use tools.' },
    { title: 'LLM Fine Tuning', description: 'Training open-source models on your specific domain data.' },
    { title: 'Knowledge Bases', description: 'Vector databases and semantic search implementations.' },
    { title: 'Multi Agent Systems', description: 'Coordinated AI agents working together to solve complex problems.' },
    { title: 'Enterprise AI', description: 'Secure, on-premise or private cloud AI deployments.' }
  ],
  techStack: [
    'Pinecone', 'Weaviate', 'Llama 3', 'Hugging Face', 'LangGraph', 'Docker'
  ],
  process: [
    { step: '01', title: 'Architecture', description: 'Designing the agentic workflow or RAG pipeline.' },
    { step: '02', title: 'Data Ingestion', description: 'Chunking and embedding your knowledge base.' },
    { step: '03', title: 'Model Training', description: 'Fine-tuning models if required.' },
    { step: '04', title: 'Evaluation', description: 'Benchmarking accuracy and hallucination rates.' }
  ],
  faqs: [
    { question: 'Do I need a lot of data for fine-tuning?', answer: 'Yes, advanced AI requires high-quality, curated datasets to train effectively.' },
    { question: 'What is RAG?', answer: 'RAG connects a language model to your database, allowing it to read your documents before answering.' }
  ],
  cta: {
    headline: 'Need enterprise-grade AI?',
    subheadline: 'Go beyond basic chat bots with our advanced ML engineering.',
    primaryButtonText: 'Book Free Consultation',
    secondaryButtonText: 'Start Your Project'
  }
};

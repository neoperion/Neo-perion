import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { FAQBlock, type FAQItem } from '@/components/shared/FAQBlock';
import { ServiceData } from '@/data/servicesData';
import { MobileGate, MobileShell } from '@/components/mobile';
import { EnterpriseCTA, FooterTransition } from '@/components/services/shared';
import {
  ServiceVideoHero,
  ServiceTrustStrip,
  ServiceStatement,
  ServiceProblemGrid,
  ServiceSolutionCards,
  ServiceCaseStudyCarousel,
  ServiceJourney,
  ServiceDifferentiators,
  ServiceTestimonials,
  ServiceAboutStats,
  ServiceStickyCta,
} from '@/components/services/index';
import { SITE_URL, buildFAQSchema } from '@/lib/seo';

interface Props {
  service: ServiceData;
}

const aiSystemsFaqs: FAQItem[] = [
  {
    question: 'What kinds of AI systems do you build?',
    answer:
      'We build production-grade retrieval-augmented generation (RAG) pipelines, custom LLM integrations, and autonomous AI agents that act on your proprietary data. Recent work spans customer-facing chatbots, internal document Q&A, and multi-step agentic workflows with strict guardrails.',
  },
  {
    question: 'How do you prevent hallucinations in production AI systems?',
    answer:
      'Every response is cited against your source documents, scoped to your knowledge base, and governed by guardrails you control. We instrument the system so hallucination rates, refusal rates, and response latency are visible in production — not after launch.',
  },
  {
    question: 'Which LLM providers do you work with?',
    answer:
      'We work with OpenAI (GPT-4o and earlier), Anthropic (Claude), Google Gemini, and self-hosted open-weight models (Llama, Mistral) when deployment requirements demand it. The choice is driven by your data residency, latency, and cost constraints — never by our preference.',
  },
];

export function AiSystemsPage({ service }: Props) {
  const seo = (
    <SEO
      title={`${service.title} - Custom AI Chatbots & LLM Integration | AINCURU LLP`}
      description={service.description}
      keywords="AI Chatbot Development, Enterprise Conversational AI, Custom LLM Integration, RAG Architectures, AI Automation Services, Intelligent Agents, Deep AI Engineering"
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Custom AI Chatbots & Enterprise LLM Integration',
          serviceType: service.title,
          description: service.description,
          provider: {
            '@type': 'LocalBusiness',
            name: 'AINCURU LLP',
            image: 'https://www.aincuru.com/images/np-logo.png',
            address: { '@type': 'PostalAddress', addressLocality: 'Chennai', addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
          },
          areaServed: [
            { '@type': 'Country', name: 'India' },
            { '@type': 'Country', name: 'United States' },
            { '@type': 'Country', name: 'Global' },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
            { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE_URL}/services/${service.slug}` },
          ],
        },
        buildFAQSchema(aiSystemsFaqs),
      ]}
    />
  );

  // KnackForge-style alternating flow: grids ↔ editorial ↔ image-led sections.
  const sections = (
    <>
      <ServiceStatement service={service} theme="manuscript" />
      <ServiceSolutionCards service={service} theme="manuscript" />
      <ServiceCaseStudyCarousel service={service} theme="manuscript" />
      <ServiceJourney service={service} theme="manuscript" />
    </>
  );

  return (
        <div className="flex min-h-[auto] flex-col bg-manuscript-parchment text-manuscript-ink">
          {seo}
          <Header />
          <main className="flex-grow">
            <ServiceVideoHero service={service} theme="manuscript" />
            {sections}
            <FAQBlock items={aiSystemsFaqs} heading={`${service.title}: FAQ`} className="bg-manuscript-parchment [&_h2]:!text-manuscript-ink [&_h3]:!text-manuscript-ink [&_p]:!text-manuscript-inkSoft [&_div.divide-y]:!divide-manuscript-walnut/20 [&_div.border-y]:!border-manuscript-walnut/20 [&_span]:!text-manuscript-copper" />
            <ServiceStickyCta service={service} theme="manuscript" />
            <FooterTransition theme="manuscript" />
          </main>
          <Footer />
        </div>
  );
}


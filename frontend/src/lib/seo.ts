export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  schema?: Record<string, unknown>;
}

export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined) ?? 'https://www.aincuru.com';

export function buildCanonical(path: string): string {
  const trimmed = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${trimmed}`;
}

export function buildArticleSchema(opts: { title: string; description: string; slug: string; image?: string; publishedAt: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    image: opts.image ? [opts.image] : undefined,
    datePublished: opts.publishedAt,
    url: `${SITE_URL}/blog/${opts.slug}`,
    publisher: { '@type': 'Organization', name: 'AINCURU LLP' },
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: item.url })),
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
  };
}

export function buildServiceSchema(opts: { name: string; description: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    description: opts.description,
    provider: { '@type': 'Organization', name: 'AINCURU LLP' },
    url: `${SITE_URL}/services/${opts.slug}`,
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'AINCURU LLP',
    url: SITE_URL,
    logo: `${SITE_URL}/images/np-logo.png`,
    description: 'Product engineering company focused on turning ideas into scalable digital products through engineering, software development, AI business automation, and UI/UX.',
    sameAs: [
      'https://www.linkedin.com/company/aincuru' // Assuming this based on brand, but we will comment if unsure
    ]
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'AINCURU LLP',
    alternateName: ['AINCURU'],
    description:
      'AINCURU builds AI business automation, product software and digital systems around business context.',
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-US',
  };
}

export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  schema?: Record<string, unknown>;
}

export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined) ?? 'https://www.neoperion.com';

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
    publisher: { '@type': 'Organization', name: 'Neo Perion Solutions' },
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
    provider: { '@type': 'Organization', name: 'Neo Perion Solutions' },
    url: `${SITE_URL}/services/${opts.slug}`,
  };
}

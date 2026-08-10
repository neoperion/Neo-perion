import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import type { ServiceData } from '@/data/servicesData';
import { MobileGate, MobileShell } from '@/components/mobile';
import { FooterTransition } from '@/components/services/shared';
import {
  ServiceVideoHero,
  ServiceTrustStrip,
  ServiceStatement,
  ServiceSolutionCards,
  ServiceCaseStudyCarousel,
  ServiceJourney,
  ServiceTestimonials,
  ServiceStickyCta,
} from '@/components/services/index';

interface Props {
  service: ServiceData;
}

/**
 * Shared service-page layout (KnackForge-style, black + orange) used by every
 * "What we do" service. All content comes from ServiceData; sections that lack
 * data simply don't render.
 */
export function ServicePage({ service }: Props) {
  const seo = (
    <SEO
      title={`${service.title} | AINCURU LLP`}
      description={service.description}
      keywords={`${service.title}, ${service.technologies?.join(', ') ?? ''}, AINCURU`}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
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
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aincuru.com/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.aincuru.com/services' },
            { '@type': 'ListItem', position: 3, name: service.title, item: `https://www.aincuru.com/services/${service.slug}` },
          ],
        },
      ]}
    />
  );

  const sections = (
    <>
      <ServiceStatement service={service} theme="manuscript" />
      <ServiceSolutionCards service={service} theme="manuscript" />
      <ServiceCaseStudyCarousel service={service} theme="manuscript" />
      <ServiceJourney service={service} theme="manuscript" />
    </>
  );

  return (
    <MobileGate
      mobileOnly
      fallback={
        <div className="flex min-h-[auto] flex-col bg-manuscript-parchment text-manuscript-ink">
          {seo}
          <Header />
          <main className="flex-grow">
            <ServiceVideoHero service={service} theme="manuscript" />
            {sections}
            <ServiceStickyCta service={service} theme="manuscript" />
            <FooterTransition theme="manuscript" />
          </main>
          <Footer />
        </div>
      }
    >
      <MobileShell nav="bottom" showFooter bgClass="bg-manuscript-parchment">
        {seo}
        <ServiceVideoHero service={service} compact theme="manuscript" />
        {sections}
        <FooterTransition theme="manuscript" />
      </MobileShell>
    </MobileGate>
  );
}


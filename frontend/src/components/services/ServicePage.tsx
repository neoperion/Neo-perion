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
      title={`${service.title} | AINCURU Solutions`}
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
            name: 'AINCURU Solutions',
            image: 'https://www.neoperion.com/images/np-logo.png',
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
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.neoperion.com/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.neoperion.com/services' },
            { '@type': 'ListItem', position: 3, name: service.title, item: `https://www.neoperion.com/services/${service.slug}` },
          ],
        },
      ]}
    />
  );

  const sections = (
    <>
      <ServiceTrustStrip service={service} />
      <ServiceStatement service={service} />
      <ServiceSolutionCards service={service} />
      <ServiceCaseStudyCarousel service={service} />
      <ServiceJourney service={service} />
      <ServiceTestimonials service={service} />
    </>
  );

  return (
    <MobileGate
      mobileOnly
      fallback={
        <div className="flex min-h-[auto] flex-col bg-[#0A0A0B] text-white">
          {seo}
          <Header />
          <main className="flex-grow">
            <ServiceVideoHero service={service} />
            {sections}
            <ServiceStickyCta service={service} />
            <FooterTransition />
          </main>
          <Footer />
        </div>
      }
    >
      <MobileShell nav="bottom" showFooter bgClass="bg-[#0A0A0B]">
        {seo}
        <ServiceVideoHero service={service} compact />
        {sections}
        <FooterTransition />
      </MobileShell>
    </MobileGate>
  );
}

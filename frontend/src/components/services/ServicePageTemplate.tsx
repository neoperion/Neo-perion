import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getServiceConfig } from '@/data/services';
import { ServiceHero } from './ServiceHero';
import { ServiceChallenges } from './ServiceChallenges';
import { ServiceSolutions } from './ServiceSolutions';
import { ServiceTechStack } from './ServiceTechStack';
import { ServiceProcess } from './ServiceProcess';
import { ServiceCaseStudies } from './ServiceCaseStudies';
import { ServiceFaq } from './ServiceFaq';
import { ServiceCTA } from './ServiceCTA';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { StickyCTA } from './StickyCTA';

export const ServicePageTemplate: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = getServiceConfig(slug || '');

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
        <p className="text-slate-400 mb-8">The service you are looking for does not exist.</p>
        <button
          onClick={() => navigate('/services')}
          className="px-6 py-3 bg-cyan-500 text-slate-900 rounded-lg font-bold"
        >
          View all services
        </button>
      </div>
    );
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.subtitle,
    "provider": {
      "@type": "Organization",
      "name": "Neo Perion Solutions",
      "url": "https://www.neoperion.com"
    }
  };

  return (
    <div className="bg-[#050816] text-slate-200 min-h-screen">
      <SEO 
        title={`${service.title} | Neo Perion Solutions`}
        description={service.subtitle}
        url={`https://www.neoperion.com/services/${service.slug}`}
        jsonLd={serviceSchema}
      />
      <Header />
      <main>
        <ServiceHero service={service} />
        <ServiceChallenges service={service} />
        <ServiceSolutions service={service} />
        <ServiceTechStack service={service} />
        <ServiceProcess service={service} />
        <ServiceCaseStudies service={service} />
        <ServiceFaq service={service} />
        <ServiceCTA service={service} />
      </main>
      <StickyCTA />
      <Footer />
    </div>
  );
};

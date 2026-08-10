import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getServiceBySlug } from '@/data/servicesData';
import { ServicePage } from '@/components/services/index';
import { AiSystemsPage } from '@/pages/services/AiSystemsPage';
import { DeepAiEngineeringPage } from '@/pages/services/DeepAiEngineeringPage';
import { EnterpriseProductPage } from '@/pages/services/EnterpriseProductPage';
import { CloudWebPlatformPage } from '@/pages/services/CloudWebPlatformPage';
import { MobileProductPage } from '@/pages/services/MobileProductPage';
import { IntelligentOpsPage } from '@/pages/services/IntelligentOpsPage';
import { StartupScalePage } from '@/pages/services/StartupScalePage';
import { MobileGate } from '@/components/mobile';
import { MobileDynamicService } from '@/components/mobile/Services/MobileDynamicService';

export const ServicePageTemplate: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug || '');

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-[auto] bg-manuscript-parchmentDark flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-manuscript-ink mb-4">Service Not Found</h1>
        <p className="text-manuscript-inkSoft mb-8">The service you are looking for does not exist.</p>
        <button
          onClick={() => navigate('/services')}
          className="px-6 py-3 bg-neo-blue text-manuscript-ink rounded-lg font-bold"
        >
          View all services
        </button>
      </div>
    );
  }

  const renderDesktop = () => {
    switch (slug) {
      // The 5 "What we do" services share one KnackForge-style layout.
      case 'ai-systems-automation':
        return <AiSystemsPage service={service} />;
      case 'enterprise-product-engineering':
      case 'cloud-native-web-platforms':
      case 'intelligent-operations-automation':
      case 'startup-to-scale-engineering':
        return <ServicePage service={service} />;
      // Out-of-scope services keep their existing bespoke pages.
      case 'deep-ai-engineering':
        return <DeepAiEngineeringPage service={service} />;
      case 'mobile-product-engineering':
        return <MobileProductPage service={service} />;
      default:
        return (
          <div className="min-h-[auto] bg-manuscript-parchmentDark flex flex-col items-center justify-center">
            <h2>Template Not Implemented</h2>
          </div>
        );
    }
  };

  return renderDesktop();
};


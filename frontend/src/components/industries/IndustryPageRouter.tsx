import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getIndustryBySlug } from '@/data/industriesData';
import { EducationPage } from '@/pages/industries/EducationPage';
import { StartupsPage } from '@/pages/industries/StartupsPage';
import { SMBEnterprisePage } from '@/pages/industries/SMBEnterprisePage';
import { HealthcarePage } from '@/pages/industries/HealthcarePage';
import { MobileGate } from '@/components/mobile';
import { MobileDynamicIndustry } from '@/components/mobile/Industries/MobileDynamicIndustry';

export const IndustryPageRouter: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const industry = getIndustryBySlug(slug || '');

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!industry) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Industry Not Found</h1>
        <p className="text-slate-600 mb-8">The industry page you are looking for does not exist.</p>
        <button
          onClick={() => navigate('/industries')}
          className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors"
        >
          View All Industries
        </button>
      </div>
    );
  }

  const renderDesktop = () => {
    switch (slug) {
      case 'education':
        return <EducationPage />;
      case 'startups':
        return <StartupsPage />;
      case 'smbs':
        return <SMBEnterprisePage />;
      case 'healthcare':
        return <HealthcarePage />;
      default:
        return (
          <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-slate-900">Industry page coming soon</h2>
            <button
              onClick={() => navigate('/industries')}
              className="mt-4 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold"
            >
              Back to Industries
            </button>
          </div>
        );
    }
  };

  return (
    <MobileGate mobileOnly fallback={renderDesktop()}>
      <MobileDynamicIndustry industry={industry} />
    </MobileGate>
  );
};

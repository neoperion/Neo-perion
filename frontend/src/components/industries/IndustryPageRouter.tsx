import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getIndustryBySlug } from '@/data/industriesData';
import { EducationPage } from '@/pages/industries/EducationPage';
import { StartupsPage } from '@/pages/industries/StartupsPage';
import { SMBEnterprisePage } from '@/pages/industries/SMBEnterprisePage';
import { AccountingAutomationPage } from '@/pages/industries/AccountingAutomationPage';

export const IndustryPageRouter: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const industry = getIndustryBySlug(slug || '');

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!industry) {
    return (
      <div className="manuscript-root min-h-[60vh] parchment-surface flex flex-col items-center justify-center text-center px-4 py-24 w-full max-w-full overflow-x-clip box-border">
        <h1 className="heading-manuscript text-4xl sm:text-5xl font-normal !text-manuscript-ink mb-4">Industry Not Found</h1>
        <p className="font-manuscriptBody text-manuscript-inkMuted mb-8 max-w-md">The industry publication you are looking for does not exist.</p>
        <button
          onClick={() => navigate('/industries')}
          className="px-6 py-3.5 bg-manuscript-ink text-manuscript-parchmentLight rounded font-manuscriptBody text-xs font-bold uppercase tracking-wider hover:bg-manuscript-walnutDeep transition-colors shadow-sm"
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
      case 'accounting-automation':
      case 'finance-accounting':
      case 'healthcare':
        return <AccountingAutomationPage />;
      default:
        return (
          <div className="manuscript-root min-h-[60vh] parchment-surface flex flex-col items-center justify-center text-center px-4 py-24 w-full max-w-full overflow-x-clip box-border">
            <h2 className="heading-manuscript text-3xl sm:text-4xl font-normal !text-manuscript-ink mb-3">Industry Field Notes in Preparation</h2>
            <p className="font-manuscriptBody text-manuscript-inkMuted mb-6 max-w-md">This domain dossier is currently being prepared by our editorial engineering team.</p>
            <button
              onClick={() => navigate('/industries')}
              className="px-6 py-3.5 bg-manuscript-ink text-manuscript-parchmentLight rounded font-manuscriptBody text-xs font-bold uppercase tracking-wider hover:bg-manuscript-walnutDeep transition-colors shadow-sm"
            >
              Back to Industries
            </button>
          </div>
        );
    }
  };

  return renderDesktop();
};


import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useCaseStudy } from '@/hooks/useCaseStudy';
import { ArrowLeft, Quote, Activity } from 'lucide-react';
import { CaseStudyGallery } from '@/components/caseStudies/CaseStudyGallery';
import { RelatedCaseStudies } from '@/components/caseStudies/RelatedCaseStudies';
import { MobileGate, MobileShell } from '@/components/mobile';
import { SITE_URL } from '@/lib/seo';

export const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: caseStudy, isLoading } = useCaseStudy(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-[auto] bg-manuscript-rustDeep flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-manuscript-gold/20 border-t-manuscript-gold animate-spin" />
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-[auto] bg-manuscript-rustDeep flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-manuscript-parchmentLight mb-4">Project Not Found</h1>
        <p className="text-manuscript-parchment/70 mb-8">The case study you are looking for does not exist.</p>
        <button onClick={() => navigate('/company/case-studies')} className="px-6 py-3 bg-manuscript-gold text-manuscript-ink rounded-lg font-bold transition-colors hover:bg-manuscript-gold/90">
          Back to Work
        </button>
      </div>
    );
  }

  const postUrl = `${SITE_URL}/company/case-studies/${caseStudy.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "headline": caseStudy.seo_title || caseStudy.title,
    "description": caseStudy.seo_description || caseStudy.problem,
    "image": caseStudy.cover_image,
    "datePublished": caseStudy.created_at,
    "dateModified": caseStudy.updated_at,
    "publisher": {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "AINCURU LLP",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/np-logo.png`
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${SITE_URL}/`
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Case Studies",
      "item": `${SITE_URL}/company/case-studies`
    },{
      "@type": "ListItem",
      "position": 3,
      "name": caseStudy.title,
      "item": postUrl
    }]
  };

  const renderContent = () => (
    <>
      {/* Hero */}
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <button 
          onClick={() => navigate('/company/case-studies')}
          className="flex items-center gap-2 text-manuscript-parchment/60 hover:text-manuscript-gold transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </button>

        <div className="mb-12 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
            <span className="px-4 py-1.5 bg-manuscript-gold/10 text-manuscript-gold text-sm font-bold rounded-full uppercase tracking-wider">
              {caseStudy.industry}
            </span>
            <span className="px-4 py-1.5 bg-manuscript-parchment/5 text-manuscript-parchment/70 text-sm font-bold rounded-full uppercase tracking-wider border border-manuscript-gold/20">
              {caseStudy.service_type}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-manuscript-parchmentLight mb-6 leading-tight max-w-4xl">
            {caseStudy.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-manuscript-parchment/70">
            <span className="font-medium text-manuscript-parchmentLight">Client: {caseStudy.client_name}</span>
            <span>Duration: {caseStudy.duration}</span>
          </div>
        </div>

        <div className="w-full aspect-[21/9] rounded-[2rem] overflow-hidden border border-manuscript-gold/20 shadow-xl shadow-black/10 mb-20 relative">
          <img 
            src={caseStudy.cover_image} 
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Body */}
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-display font-bold text-manuscript-parchmentLight mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-manuscript-gold/20 text-manuscript-gold flex items-center justify-center">1</span>
              The Challenge
            </h2>
            <p className="text-manuscript-parchment/90 leading-relaxed text-lg">{caseStudy.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-manuscript-parchmentLight mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-manuscript-gold/20 text-manuscript-gold flex items-center justify-center">2</span>
              The Solution
            </h2>
            <p className="text-manuscript-parchment/90 leading-relaxed text-lg">{caseStudy.solution}</p>
          </div>
        </div>

        <div className="bg-manuscript-ink/50 border border-manuscript-gold/20 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden shadow-xl shadow-black/10">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Activity className="w-32 h-32 text-manuscript-gold" />
          </div>
          <h2 className="text-3xl font-display font-bold text-manuscript-parchmentLight mb-6">Business Impact</h2>
          <p className="text-xl text-manuscript-gold font-medium leading-relaxed max-w-2xl relative z-10">
            {caseStudy.outcome}
          </p>
        </div>

        {caseStudy.client_quote && (
          <div className="mb-20 text-center px-4 md:px-12">
            <Quote className="w-12 h-12 text-manuscript-gold/30 mx-auto mb-6" />
            <p className="text-2xl md:text-3xl font-display text-manuscript-parchmentLight font-medium italic mb-8 leading-snug">
              "{caseStudy.client_quote}"
            </p>
            <div className="text-manuscript-parchment/60 font-medium uppercase tracking-widest text-sm">
              — {caseStudy.client_name}
            </div>
          </div>
        )}

        <div className="mb-20">
          <h3 className="text-sm font-bold text-manuscript-parchment/60 uppercase tracking-widest mb-6">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {caseStudy.tech_stack.map(tech => (
              <span key={tech} className="px-4 py-2 bg-manuscript-ink border border-manuscript-gold/20 text-manuscript-parchment/80 rounded-lg font-mono text-sm shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <CaseStudyGallery gallery={caseStudy.gallery} />
      </div>

      {/* Related */}
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <RelatedCaseStudies industry={caseStudy.industry} currentSlug={caseStudy.slug} />
      </div>
    </>
  );

  return (
    <>
      <SEO 
        title={`${caseStudy.seo_title || caseStudy.title} | AINCURU Case Study`}
        description={caseStudy.seo_description}
        url={postUrl}
        ogImage={caseStudy.cover_image}
        type="article"
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
        <div className="bg-manuscript-rustDeep min-h-[auto] font-sans text-manuscript-parchmentLight">
        <Header />
        <main className="pt-32 pb-24">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CaseStudyDetail;



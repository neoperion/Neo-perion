import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PortfolioHero } from '@/components/portfolio/PortfolioHero';
import { FeaturedProjects } from '@/components/portfolio/FeaturedProjects';
import { ProjectGrid } from '@/components/portfolio/ProjectGrid';
import { MobileGate, MobileShell } from '@/components/mobile';
import { SITE_URL } from '@/lib/seo';
import { SEO } from '@/components/SEO';
import { seoConfig } from '@/lib/seoConfig';

const seo = (
  <SEO {...seoConfig.portfolio} />
);

const content = (
  <>
    <PortfolioHero />
    <FeaturedProjects />
    <ProjectGrid />
  </>
);

const Portfolio: React.FC = () => (
  <MobileGate
    mobileOnly
    fallback={
      /* ── Desktop ─────────────────────────────────── */
      <div className="min-h-screen overflow-x-hidden">
        {seo}
        <Header />
        <main>{content}</main>
        <Footer />
      </div>
    }
  >
    {/* ── Mobile ───────────────────────────────────── */}
    {seo}
    <MobileShell nav="bottom" showFooter bgClass="bg-manuscript-parchment">
      <div className="overflow-x-hidden pb-24">
        {content}
      </div>
    </MobileShell>
  </MobileGate>
);

export default Portfolio;

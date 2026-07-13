import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PortfolioHero } from '@/components/portfolio/PortfolioHero';
import { FeaturedProjects } from '@/components/portfolio/FeaturedProjects';
import { ProjectGrid } from '@/components/portfolio/ProjectGrid';
import { MobileGate, MobileShell } from '@/components/mobile';

const seo = (
  <Helmet>
    <title>Portfolio | Neo Perion Solutions</title>
    <meta name="description" content="Explore our award-winning portfolio of AI products, SaaS platforms, and enterprise systems." />
  </Helmet>
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
      <div className="min-h-screen bg-[#0A0A0B] overflow-x-hidden">
        {seo}
        <Header heroDark />
        <main>{content}</main>
        <Footer />
      </div>
    }
  >
    {/* ── Mobile ───────────────────────────────────── */}
    {seo}
    <MobileShell nav="bottom" showFooter bgClass="bg-[#0A0A0B]">
      <div className="bg-[#0A0A0B] overflow-x-hidden pb-24">
        {content}
      </div>
    </MobileShell>
  </MobileGate>
);

export default Portfolio;

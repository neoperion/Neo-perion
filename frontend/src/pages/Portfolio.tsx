import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PortfolioHero } from '@/components/portfolio/PortfolioHero';
import { FeaturedProjects } from '@/components/portfolio/FeaturedProjects';
import { ProjectGrid } from '@/components/portfolio/ProjectGrid';
import { MobileGate, MobileShell } from '@/components/mobile';
import { SITE_URL } from '@/lib/seo';

const seo = (
  <Helmet>
    <title>Portfolio — Platforms & AI Systems We&apos;ve Built | AINCURU Solutions</title>
    <meta name="description" content="Selected work by AINCURU Solutions: web platforms, AI automations and applications built for real businesses. Screenshots, stacks and outcomes." />
    <link rel="canonical" href={`${SITE_URL}/portfolio`} />
    <meta property="og:url" content={`${SITE_URL}/portfolio`} />
    <meta property="og:title" content="Portfolio — Platforms & AI Systems We've Built | AINCURU Solutions" />
    <meta property="og:description" content="Selected work by AINCURU Solutions: web platforms, AI automations and applications built for real businesses. Screenshots, stacks and outcomes." />
    <meta name="twitter:url" content={`${SITE_URL}/portfolio`} />
    <meta name="twitter:title" content="Portfolio — Platforms & AI Systems We've Built | AINCURU Solutions" />
    <meta name="twitter:description" content="Selected work by AINCURU Solutions: web platforms, AI automations and applications built for real businesses. Screenshots, stacks and outcomes." />
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

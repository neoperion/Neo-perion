import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/layout/Footer';
import { PortfolioHero } from '@/components/portfolio/PortfolioHero';
import { FeaturedProjects } from '@/components/portfolio/FeaturedProjects';
import { ProjectGrid } from '@/components/portfolio/ProjectGrid';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050810' }}>
      <Helmet>
        <title>Portfolio | Neo Perion Solutions</title>
        <meta name="description" content="Explore our award-winning portfolio of AI products, SaaS platforms, and enterprise systems." />
      </Helmet>
      
      <Header heroDark />
      
      <main>
        <PortfolioHero />

        {/* Scroll transition: texture → clean void */}
        <div
          className="h-24 relative z-20"
          style={{
            background: 'linear-gradient(to bottom, #0A0F1C, #050810)',
          }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <FeaturedProjects />
        <ProjectGrid />
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;

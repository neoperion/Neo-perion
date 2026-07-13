import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { projectsData, Project } from '@/data/projectsData';
import { MobileGate, MobileShell } from '@/components/mobile';

import { ProjectHero } from '@/components/portfolio/ProjectHero';
import { ProjectVideoShowcase } from '@/components/portfolio/ProjectVideoShowcase';
import { ProjectOverview } from '@/components/portfolio/ProjectOverview';
import { ProjectFeatures } from '@/components/portfolio/ProjectFeatures';
import { ProjectTechStack } from '@/components/portfolio/ProjectTechStack';
import { ProjectGallery } from '@/components/portfolio/ProjectGallery';
import { RelatedProjects } from '@/components/portfolio/RelatedProjects';
import { PortfolioCTA } from '@/components/portfolio/PortfolioCTA';

const PortfolioDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading]  = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (slug) {
      const found = projectsData.find(p => p.slug === slug);
      setProject(found || null);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#F77E0D] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!project) return <Navigate to="/not-found" replace />;

  const seo = (
    <Helmet>
      <title>{project.title} | Portfolio | Neo Perion Solutions</title>
      <meta name="description" content={project.overview} />
    </Helmet>
  );

  const mainContent = (
    <>
      <ProjectHero project={project} />
      <ProjectVideoShowcase project={project} />
      <ProjectOverview project={project} />
      {project.features?.length > 0 && <ProjectFeatures project={project} />}
      <ProjectTechStack project={project} />
      <ProjectGallery project={project} />
      <RelatedProjects currentProject={project} />
      <PortfolioCTA />
    </>
  );

  return (
    <MobileGate
      mobileOnly
      fallback={
        /* ── Desktop ──────────────────────────────── */
        <div className="bg-[#0A0A0B] min-h-screen text-slate-300">
          {seo}
          <Header heroDark />
          <main>{mainContent}</main>
          <Footer />
        </div>
      }
    >
      {/* ── Mobile ────────────────────────────────── */}
      {seo}
      <MobileShell nav="bottom" showFooter bgClass="bg-[#0A0A0B]">
        <div className="bg-[#0A0A0B] text-slate-300 pb-24">
          {mainContent}
        </div>
      </MobileShell>
    </MobileGate>
  );
};

export default PortfolioDetail;

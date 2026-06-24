import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/layout/Footer';
import { projectsData, Project } from '@/data/projectsData';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on mount or when slug changes
    window.scrollTo(0, 0);
    
    if (slug) {
      const foundProject = projectsData.find(p => p.slug === slug);
      setProject(foundProject || null);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050816] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-neo-blue border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!project) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className="bg-[#050816] min-h-screen text-slate-300">
      <Helmet>
        <title>{project.title} | Portfolio | Neo Perion Solutions</title>
        <meta name="description" content={project.overview} />
      </Helmet>
      
      <Header heroDark />
      
      <main>
        <ProjectHero project={project} />
        <ProjectVideoShowcase project={project} />
        <ProjectOverview project={project} />
        {project.features && project.features.length > 0 && <ProjectFeatures project={project} />}
        <ProjectTechStack project={project} />
        <ProjectGallery project={project} />
        <RelatedProjects currentProject={project} />
        <PortfolioCTA />
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;

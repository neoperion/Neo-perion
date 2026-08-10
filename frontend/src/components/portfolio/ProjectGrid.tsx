import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { projectsData } from '@/data/projectsData';
import { ProjectFilters } from './ProjectFilters';
import { BentoCard, BENTO_CONFIGS } from './BentoCard';

export const ProjectGrid: React.FC = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Handle URL query parameters for category
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    
    if (categoryParam) {
      const formatted = categoryParam
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Special case mappings
      if (categoryParam === 'all') setSelectedCategory("All");
      else if (categoryParam === 'ai-products') setSelectedCategory("AI Products");
      else if (categoryParam === 'saas-platforms') setSelectedCategory("SaaS Platforms");
      else if (categoryParam === 'e-commerce') setSelectedCategory("E-Commerce");
      else if (categoryParam === 'agritech') setSelectedCategory("Agritech");
      else if (categoryParam === 'edtech') setSelectedCategory("EdTech");
      else if (categoryParam === 'social-impact') setSelectedCategory("Social Impact");
      else if (categoryParam === 'corporate-websites') setSelectedCategory("Corporate Websites");
      else setSelectedCategory(formatted);
    }
  }, [location.search]);

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      className="py-16 md:py-24 relative z-10"
      style={{
        background: '#EDE5D4',
        // Subtle engineering grid
        backgroundImage: 'linear-gradient(rgba(31,26,20,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(31,26,20,0.03) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    >
      {/* Subtle top copper rule */}
      <div
        aria-hidden="true"
        className="w-full h-px mb-0"
        style={{ background: 'rgba(168,82,30,0.12)' }}
      />

      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <ProjectFilters 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {filteredProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-12 gap-4 md:gap-5 auto-rows-auto">
              {filteredProjects.map((project, index) => {
                // Wrap index around config length if more projects than configs
                const config = BENTO_CONFIGS[index % BENTO_CONFIGS.length];
                return (
                  <BentoCard 
                    key={project.id} 
                    project={project} 
                    slotIndex={index} 
                    config={config} 
                  />
                );
              })}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center py-28 text-center">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#A8521E' }}>No results</p>
            <h3 className="font-display text-2xl font-black mb-2" style={{ color: '#1F1A14' }}>No projects found</h3>
            <p className="font-sans text-[14px] mb-8" style={{ color: '#6B5B47' }}>Try a different category or clear the search.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[13px] font-bold font-mono transition-colors"
              style={{ background: '#A8521E', color: '#F3EBDD' }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

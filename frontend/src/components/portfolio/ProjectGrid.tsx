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
    <section className="py-14 md:py-24 bg-[#050816] relative z-10">
      <div className="container mx-auto px-4">
        <ProjectFilters 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {filteredProjects.length > 0 ? (
          <>
            {/* Bento Grid layout */}
            <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 auto-rows-auto">
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
          <div className="text-center py-24">
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-slate-400">Try adjusting your category or search query.</p>
            <button 
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-6 px-6 py-2 rounded-full bg-neo-blue text-white font-medium hover:bg-blue-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

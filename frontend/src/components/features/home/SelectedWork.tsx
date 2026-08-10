import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, Project } from "@/data/projectsData";

const CaseFile = ({ 
  project, 
  caseNumber, 
  tags, 
  isOpen, 
  onToggle 
}: { 
  project: Project; 
  caseNumber: string; 
  tags: string; 
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <div className={`border border-manuscriptAlpha-ink-20 bg-manuscript-parchment transition-colors duration-300 ${isOpen ? 'shadow-[0_12px_40px_-16px_rgba(31,26,20,0.15)] bg-manuscript-parchmentLight' : 'hover:bg-manuscript-parchmentLight'}`}>
      
      {/* File Tab (Header) */}
      <button 
        onClick={onToggle}
        className="w-full px-6 py-6 md:px-10 md:py-8 flex items-center justify-between group text-left"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 lg:gap-16">
          <div className="font-manuscriptBody text-[11px] font-semibold tracking-[0.25em] uppercase text-manuscript-inkMuted w-32 shrink-0">
            FILE · {caseNumber}
          </div>
          <h3 className="heading-manuscript text-2xl md:text-3xl text-manuscript-ink uppercase transition-colors group-hover:text-manuscript-copper">
            {project.title.split(" — ")[0].split(" (")[0]}
          </h3>
          <div className="hidden lg:block font-manuscriptBody text-sm italic text-manuscript-walnutDeep">
            {project.category}
          </div>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden md:block font-manuscriptBody text-[10px] font-semibold tracking-widest uppercase text-manuscript-copper mr-4">
            {tags}
          </div>
          <div className="h-8 w-8 flex items-center justify-center rounded-full border border-manuscriptAlpha-ink-15 text-manuscript-inkSoft group-hover:border-manuscript-copper group-hover:text-manuscript-copper transition-colors">
            {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </div>
        </div>
      </button>

      {/* File Contents (Accordion Body) */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 md:px-10 md:pb-10 pt-2 border-t border-manuscriptAlpha-ink-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
              
              {/* Image */}
              <div 
                className="w-full lg:w-3/5 border border-manuscriptAlpha-ink-15 p-2 parchment-surface/40 cursor-pointer overflow-hidden group/img"
                onClick={() => navigate(`/portfolio/${project.slug}`)}
              >
                <div className="relative overflow-hidden w-full aspect-[16/9] bg-manuscriptAlpha-ink-5">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="w-full lg:w-2/5 flex flex-col">
                <p className="font-manuscriptBody text-[15px] leading-relaxed text-manuscript-inkSoft mb-6">
                  {project.overview}
                </p>
                
                <div className="mb-8 space-y-2">
                  <div className="font-manuscriptBody text-[11px] font-semibold uppercase tracking-widest text-manuscript-walnutDeep mb-3 border-b border-manuscriptAlpha-ink-15 pb-2 inline-block">
                    Tech Stack
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {project.techStack.frontend?.map(t => <li key={t} className="text-xs px-2 py-1 border border-manuscriptAlpha-ink-15 text-manuscript-inkMuted">{t}</li>)}
                    {project.techStack.backend?.map(t => <li key={t} className="text-xs px-2 py-1 border border-manuscriptAlpha-ink-15 text-manuscript-inkMuted">{t}</li>)}
                    {project.techStack.ai?.map(t => <li key={t} className="text-xs px-2 py-1 border border-manuscriptAlpha-ink-15 text-manuscript-inkMuted">{t}</li>)}
                  </ul>
                </div>

                <div className="mt-auto">
                  <button
                    onClick={() => navigate(`/portfolio/${project.slug}`)}
                    className="group/btn inline-flex items-center gap-3 font-manuscriptBody text-[13px] font-semibold uppercase tracking-wider text-manuscript-rustDeep transition-colors hover:text-manuscript-copper"
                  >
                    EXAMINE FULL CASE
                    <span className="flex h-6 w-6 items-center justify-center border border-manuscript-rustDeep/30 group-hover/btn:border-manuscript-copper/50 transition-colors rounded-sm">
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                    </span>
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SelectedWork = () => {
  const navigate = useNavigate();
  // We'll keep the first one open by default
  const [openId, setOpenId] = useState<string>("project-03"); 

  const funnova = projectsData.find((p) => p.slug === "funnova");
  const lexzify = projectsData.find((p) => p.slug === "lexzify-ai-travel-planner");
  const izhaiyam = projectsData.find((p) => p.slug === "izhaiyam-ecommerce");

  if (!funnova || !lexzify || !izhaiyam) return null;

  const handleToggle = (id: string) => {
    setOpenId(prev => prev === id ? "" : id);
  };

  return (
    <section className="parchment-surface--deep relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto max-w-[1000px] px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
          <p className="chapter-eyebrow text-manuscript-copper mb-4">FEATURED CASE FILES</p>
          <h2 className="heading-manuscript text-4xl md:text-5xl max-w-2xl leading-[1.1] mb-6">
            A look inside the archive.
          </h2>
          <p className="font-manuscriptBody text-[15px] leading-relaxed text-manuscript-inkSoft max-w-xl">
            A small selection of products we've helped shape across education, travel and commerce.
          </p>
        </div>

        {/* Case File Accordion Stack */}
        <div className="flex flex-col -space-y-px">
          <CaseFile 
            project={funnova} 
            caseNumber="001" 
            tags="EDTECH · GAMIFICATION" 
            isOpen={openId === funnova.id}
            onToggle={() => handleToggle(funnova.id)}
          />
          <CaseFile 
            project={lexzify} 
            caseNumber="002" 
            tags="AI · TRAVEL"
            isOpen={openId === lexzify.id}
            onToggle={() => handleToggle(lexzify.id)}
          />
          <CaseFile 
            project={izhaiyam} 
            caseNumber="003" 
            tags="E-COMMERCE · WEB"
            isOpen={openId === izhaiyam.id}
            onToggle={() => handleToggle(izhaiyam.id)}
          />
        </div>

        {/* View Full Archive CTA */}
        <div className="mt-16 flex justify-center pt-8">
          <button
            onClick={() => navigate("/portfolio")}
            className="group/btn inline-flex items-center gap-3 font-manuscriptBody text-[14px] font-semibold tracking-wider text-manuscript-ink transition-colors hover:text-manuscript-rustDeep uppercase"
          >
            OPEN THE FULL LEDGER
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-manuscript-ink/20 group-hover/btn:border-manuscript-rustDeep/40 transition-colors">
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

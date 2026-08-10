import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Capability {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  image: string;
}

const CAPABILITIES: Capability[] = [
  {
    id: "01",
    title: "AI Solutions",
    shortDesc: "Safe, predictable AI models.",
    description: "RAG pipelines, AI agents, and LLM integration constrained by strict code and human-in-the-loop checks.",
    features: ["RAG & agents", "LLM integration", "Observability"],
    cta: "Explore AI",
    href: "/services/ai-systems-automation",
    image: "/images/3d_icon_ai.png",
  },
  {
    id: "02",
    title: "Product Engineering",
    shortDesc: "From MVP to scalable SaaS.",
    description: "We design, build, and ship complete products — from first architecture to launch and scale.",
    features: ["MVP → scale", "SaaS platforms", "Full ownership"],
    cta: "Build product",
    href: "/services/enterprise-product-engineering",
    image: "/images/3d_icon_product.png",
  },
  {
    id: "03",
    title: "Web Platforms",
    shortDesc: "Fast, accessible web apps.",
    description: "High-performance React/Next.js apps engineered for speed, accessibility, and conversion.",
    features: ["React / Next.js", "PWAs", "Performance-first"],
    cta: "Build web",
    href: "/services/cloud-native-web-platforms",
    image: "/images/3d_icon_web.png",
  },
  {
    id: "04",
    title: "Cloud & DevOps",
    shortDesc: "Scalable infrastructure.",
    description: "Kubernetes, CI/CD, and full observability on AWS/GCP. We build cloud infrastructure that holds up.",
    features: ["AWS / GCP", "Kubernetes", "Monitoring"],
    cta: "Scale infra",
    href: "/services/intelligent-operations-automation",
    image: "/images/3d_icon_cloud.png",
  },
  {
    id: "05",
    title: "Technical Consulting",
    shortDesc: "Architecture reviews & CTO guidance.",
    description: "Senior direction when you need it — architecture audits, and fractional-CTO guidance.",
    features: ["Audits", "Due diligence", "Fractional CTO"],
    cta: "Get guidance",
    href: "/services/startup-to-scale-engineering",
    image: "/images/3d_icon_consulting.png",
  },
];

export const Services = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // 400px width + 32px gap approximately
      const scrollAmount = window.innerWidth >= 768 ? 432 : window.innerWidth * 0.85;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="parchment-surface relative py-24 md:py-32 overflow-hidden bg-manuscript-parchmentDark">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header & Controls */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="chapter-eyebrow text-manuscript-copper mb-4">THE ENGINEERING LEDGER</p>
            <h2 className="heading-manuscript text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.1]">
              What we build.
            </h2>
          </div>
          
          {/* Manual Scroll Controls (Hidden on mobile, visible on tablet/desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-manuscriptAlpha-ink-20 bg-manuscript-parchment text-manuscript-ink hover:border-manuscript-copper hover:text-manuscript-copper transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-manuscriptAlpha-ink-20 bg-manuscript-parchment text-manuscript-ink hover:border-manuscript-copper hover:text-manuscript-copper transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Swipe Carousel / Desktop Grid */}
      <div className="w-full relative">
        
        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 md:gap-8 px-6 lg:px-8 overflow-x-auto snap-x snap-mandatory pb-12 hide-scrollbar container mx-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          
          {CAPABILITIES.map((cap, i) => (
            <motion.div 
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-[85vw] md:w-[400px] shrink-0 snap-center flex flex-col relative group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-manuscript-copper focus-visible:ring-offset-4 focus-visible:ring-offset-manuscript-parchmentLight rounded-lg"
              onClick={() => navigate(cap.href)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate(cap.href);
                }
              }}
            >
              
              {/* Card Surface */}
              <div className="relative overflow-hidden bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-15 h-full min-h-[560px] flex flex-col transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(31,26,20,0.2)] group-hover:-translate-y-1">
                
                {/* 3D Image Half */}
                <div className="relative h-[240px] shrink-0 w-full overflow-hidden bg-[#1a1714]">
                  {/* Subtle radial glow behind image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1714] z-10 mix-blend-multiply" />
                  <img 
                    src={cap.image} 
                    alt={cap.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 z-20 chapter-eyebrow text-white/50">
                    {cap.id}
                  </div>
                </div>

                {/* Text Half */}
                <div className="relative flex-1 p-6 md:p-8 flex flex-col">
                  <h3 className="heading-manuscript text-2xl md:text-3xl text-manuscript-ink mb-2">
                    {cap.title}
                  </h3>
                  <p className="font-manuscriptBody text-sm italic text-manuscript-walnutDeep mb-4">
                    {cap.shortDesc}
                  </p>
                  
                  <p className="font-manuscriptBody text-[14px] leading-relaxed text-manuscript-inkSoft mb-6 line-clamp-3">
                    {cap.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-manuscriptAlpha-ink-10 pt-4">
                    <span className="font-manuscriptBody text-[12px] font-semibold tracking-widest uppercase text-manuscript-copper transition-colors group-hover:text-manuscript-rustDeep">
                      {cap.cta}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-manuscriptAlpha-ink-15 text-manuscript-copper group-hover:border-manuscript-rustDeep/40 transition-colors">
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
        
      </div>
    </section>
  );
};

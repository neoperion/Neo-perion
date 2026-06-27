import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Sparkles, Blocks, Cloud, Smartphone, Cog, Rocket, Target, Zap, Shield, 
  BarChart3, Users, Layers, Lightbulb, ChevronDown, ChevronUp, Clock, TrendingUp,
  type LucideIcon 
} from 'lucide-react';
import { AIOrbHero } from './AIOrbHero';
import { BentoMobile, type BentoCard } from './BentoMobile';
import { ProcessJourney } from './ProcessJourney';
import { MobileScaleCTA } from './MobileScaleCTA';
import { TestimonialsPhysics, type Testimonial } from './TestimonialsPhysics';
import { MobileShell } from '../Navigation/MobileShell';
import { mockCaseStudies } from '@/data/mock/caseStudies';

import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

const services: ServiceItem[] = [
  { slug: 'ai-systems-automation', title: 'AI Systems', description: 'RAG architectures, LLM orchestration, and production-grade contextual AI integration.', icon: Brain, href: '/services/ai-systems-automation' },
  { slug: 'deep-ai-engineering', title: 'Deep AI Engineering', description: 'Custom fine-tuned models, neural networks, and generative AI for specialized domains.', icon: Sparkles, href: '/services/deep-ai-engineering' },
  { slug: 'enterprise-product-engineering', title: 'Enterprise Product', description: 'End-to-end scalable product development from concept through launch.', icon: Blocks, href: '/services/enterprise-product-engineering' },
  { slug: 'cloud-native-web-platforms', title: 'Cloud-Native Web', description: 'High-performance, secure web applications on modern cloud infrastructure.', icon: Cloud, href: '/services/cloud-native-web-platforms' },
  { slug: 'mobile-product-engineering', title: 'Mobile Engineering', description: 'Native and cross-platform mobile experiences that drive engagement.', icon: Smartphone, href: '/services/mobile-product-engineering' },
  { slug: 'intelligent-operations-automation', title: 'Business Automation', description: 'Intelligent workflow automation and operational efficiency powered by AI.', icon: Cog, href: '/services/intelligent-operations-automation' },
  { slug: 'startup-to-scale-engineering', title: 'Startup Support', description: 'Fractional CTO, MVP development, and technical due diligence for startups.', icon: Rocket, href: '/services/startup-to-scale-engineering' },
];

const bentoCards: BentoCard[] = [
  { title: 'AI-Native Mindset', description: 'Every system architected with AI at the core — not as an add-on.', icon: Brain, accent: 'cyan' },
  { title: 'Product Thinking', description: 'We ship products, not code. Every line maps to a business outcome.', icon: Target, accent: 'purple' },
  { title: 'Fast & Reliable', description: 'Modern CI/CD, infrastructure as code, automated quality gates.', icon: Zap, accent: 'gradient' },
  { title: 'Enterprise Security', description: 'SOC-2 aligned, end-to-end encryption, zero-trust architecture.', icon: Shield, accent: 'cyan' },
  { title: 'Data-Driven', description: 'Decisions validated by data. Measure, iterate, optimize.', icon: BarChart3, accent: 'gradient' },
  { title: 'Talent Network', description: 'Vetted senior engineers, AI researchers, product strategists on demand.', icon: Users, accent: 'purple' },
  { title: 'Full-Stack Delivery', description: 'Infrastructure to frontend, database to deployment — one team.', icon: Layers, accent: 'cyan' },
  { title: 'Scale-First Architecture', description: 'Systems designed to grow from the first commit.', icon: Lightbulb, accent: 'gradient' },
];

const testimonials: Testimonial[] = [
  { id: '1', name: 'Rajesh Kannan', designation: 'CEO', company: 'EdTech Startup', feedback: 'Neo Perion transformed our product vision into reality. Their AI-first architecture understanding is exceptional.', rating: 5 },
  { id: '2', name: 'Priya Sharma', designation: 'CTO', company: 'Healthcare Platform', feedback: 'Deep expertise in AI and scalable systems. Platform handles 10x initial scale with compliance built in.', rating: 5 },
  { id: '3', name: 'Arun Venkatesh', designation: 'Founder', company: 'SaaS Company', feedback: 'Speed and quality exceeded expectations. They are product thinkers who care about outcomes.', rating: 5 },
];

/* ─── Mobile Services Accordion ─── */
function MobileServicesAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-neutral-900 border-b border-neutral-800">
      <div className="px-6 mb-8">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-1">Services</p>
        <h2 className="text-[28px] font-bold text-white tracking-tight font-display">Core Capabilities</h2>
      </div>

      <div className="px-6 flex flex-col gap-3">
        {services.map((s, idx) => {
          const Icon = s.icon;
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={s.slug}
              onClick={() => setExpandedIndex(isExpanded ? null : idx)}
              className="rounded-xl border border-neutral-800 bg-neutral-900 p-5 cursor-pointer transition-all duration-200 active:bg-neutral-900"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-neo-blue shrink-0">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-base font-bold text-white">{s.title}</h3>
                </div>
                {isExpanded ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
              </div>

              {isExpanded && (
                <div className="mt-4 text-[13px] text-neutral-400 leading-relaxed font-semibold">
                  <p>{s.description}</p>
                  <div className="mt-4 pt-3 border-t border-neutral-800 flex justify-end">
                    <Link
                      to={s.href}
                      className="text-neo-blue font-bold text-[11px] uppercase tracking-wider inline-flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Explore Capability →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Mobile Case Studies Stack ─── */
function MobileCaseStudies() {
  const [visibleCount, setVisibleCount] = useState(2);
  const featured = mockCaseStudies.slice(0, visibleCount);

  return (
    <section id="case-studies" className="py-16 bg-[#0A0A0B] border-b border-neutral-800">
      <div className="px-6 mb-8">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-1">Case Studies</p>
        <h2 className="text-[28px] font-bold text-white tracking-tight font-display">Featured Work</h2>
      </div>

      <div className="px-6 flex flex-col gap-6">
        {featured.map((study) => (
          <div
            key={study.slug}
            className="rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden shadow-sm flex flex-col"
          >
            {/* Image 16:9 */}
            <div className="aspect-video w-full bg-neutral-900 border-b border-neutral-800 relative">
              <img src={study.cover_image} alt={study.client_name} className="w-full h-full object-cover" />
              <span className="absolute bottom-3 left-3 text-[9px] font-bold uppercase tracking-wider bg-white/95 px-2 py-0.5 rounded-full text-neo-blue border border-neutral-800">
                {study.industry}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-1.5">{study.client_name}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed font-semibold mb-4">{study.problem}</p>
              </div>

              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-[#1D4ED8] text-[13px] font-bold">{study.outcome}</span>
                <Link to={`/company/case-studies/${study.slug}`} className="text-neo-blue font-bold text-[11px] uppercase tracking-wider">
                  Read →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < mockCaseStudies.length && (
        <div className="px-6 mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 2)}
            className="w-full h-11 border border-neutral-800 bg-neutral-900 rounded-xl text-neutral-200 text-xs font-bold active:bg-neutral-900 transition-colors"
          >
            Load More Case Studies
          </button>
        </div>
      )}
    </section>
  );
}

export function MobileHome() {
  return (
    <MobileShell nav="bottom" showFooter>
      <AIOrbHero
        headline="The product engineering firm that doesn't disappear after launch"
        subheadline="AI-native platforms, SaaS infrastructure, and enterprise automation — engineered for production from day one."
      />
      <MobileServicesAccordion />
      <MobileCaseStudies />
      <BentoMobile cards={bentoCards} />
      <ProcessJourney />
      <MobileScaleCTA />
      <TestimonialsPhysics testimonials={testimonials} />
    </MobileShell>
  );
}

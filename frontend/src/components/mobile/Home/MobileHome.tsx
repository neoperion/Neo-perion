import { Brain, Sparkles, Blocks, Cloud, Smartphone, Cog, Rocket, Target, Zap, Shield, BarChart3, Users, Layers, Lightbulb, type LucideIcon } from 'lucide-react';
import { AIOrbHero } from './AIOrbHero';
import { ServiceCarouselMobile, type ServiceItem } from './ServiceCarouselMobile';
import { BentoMobile, type BentoCard } from './BentoMobile';
import { ProcessJourney } from './ProcessJourney';
import { TestimonialsPhysics, type Testimonial } from './TestimonialsPhysics';
import { MobileShell } from '../Navigation/MobileShell';

const services: ServiceItem[] = [
  { slug: 'ai-systems-automation', title: 'AI Systems', description: 'RAG architectures, LLM orchestration, and production-grade contextual AI integration.', icon: Brain, gradient: 'from-[rgba(0,229,255,0.12)] to-[rgba(0,229,255,0.02)]', href: '/services/ai-systems-automation' },
  { slug: 'deep-ai-engineering', title: 'Deep AI Engineering', description: 'Custom fine-tuned models, neural networks, and generative AI for specialized domains.', icon: Sparkles, gradient: 'from-[rgba(168,85,247,0.12)] to-[rgba(168,85,247,0.02)]', href: '/services/deep-ai-engineering' },
  { slug: 'enterprise-product-engineering', title: 'Enterprise Product', description: 'End-to-end scalable product development from concept through launch.', icon: Blocks, gradient: 'from-[rgba(37,99,255,0.12)] to-[rgba(37,99,255,0.02)]', href: '/services/enterprise-product-engineering' },
  { slug: 'cloud-native-web-platforms', title: 'Cloud-Native Web', description: 'High-performance, secure web applications on modern cloud infrastructure.', icon: Cloud, gradient: 'from-[rgba(0,229,255,0.10)] to-[rgba(0,229,255,0.02)]', href: '/services/cloud-native-web-platforms' },
  { slug: 'mobile-product-engineering', title: 'Mobile Engineering', description: 'Native and cross-platform mobile experiences that drive engagement.', icon: Smartphone, gradient: 'from-[rgba(139,92,246,0.12)] to-[rgba(139,92,246,0.02)]', href: '/services/mobile-product-engineering' },
  { slug: 'intelligent-operations-automation', title: 'Business Automation', description: 'Intelligent workflow automation and operational efficiency powered by AI.', icon: Cog, gradient: 'from-[rgba(34,211,238,0.12)] to-[rgba(34,211,238,0.02)]', href: '/services/intelligent-operations-automation' },
  { slug: 'startup-to-scale-engineering', title: 'Startup Support', description: 'Fractional CTO, MVP development, and technical due diligence for startups.', icon: Rocket, gradient: 'from-[rgba(249,115,22,0.12)] to-[rgba(249,115,22,0.02)]', href: '/services/startup-to-scale-engineering' },
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

export function MobileHome() {
  return (
    <MobileShell nav="bottom" showFooter>
      <AIOrbHero
        headline={<>From Idea to Product<br /><span className="bg-gradient-to-r from-neo-blue to-purple-500 bg-clip-text text-transparent">Powered by AI</span></>}
        subheadline="Neo Perion Solutions develops AI-powered software, SaaS products, automation systems, web applications, and digital platforms that help organizations scale faster."
      />
      <ServiceCarouselMobile services={services} />
      <BentoMobile cards={bentoCards} />
      <ProcessJourney />
      <TestimonialsPhysics testimonials={testimonials} />
    </MobileShell>
  );
}

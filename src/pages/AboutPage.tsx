import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import FloatingLines from "@/components/FloatingLines";

// Interactive Workflow Section Component
function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    { num: '01', title: 'We listen first', desc: 'Understanding your workflow matters more than jumping into tools.' },
    { num: '02', title: 'We design for real usage', desc: 'Every system is built around how your team actually works — not assumptions.' },
    { num: '03', title: 'We ship incrementally', desc: 'Clear milestones, visible progress, continuous feedback.' },
    { num: '04', title: 'We stay after launch', desc: 'Support, improvements, and scaling are part of the deal — not add-ons.' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;

      // Calculate which step should be active based on scroll position
      const scrollProgress = (windowHeight / 2 - rect.top) / sectionHeight;
      const stepIndex = Math.max(0, Math.min(3, Math.floor(scrollProgress * 5)));

      setActiveStep(stepIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-8 lg:px-16 py-32 max-w-6xl mx-auto relative"
    >
      {/* Heading */}
      <div className="mb-32 opacity-0 text-center" style={{ animation: 'fadeIn 0.8s ease-out 0.1s forwards' }}>
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#E5E7EB]">
          How we work with you
        </h2>
      </div>

      {/* Workflow */}
      <div className="space-y-28">
        {steps.map((step, i) => {
          const isActive = activeStep === i;

          return (
            <div
              key={i}
              className="relative transition-all duration-700 flex items-start gap-8"
              style={{
                opacity: isActive ? 1 : 0.25,
                transform: isActive ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(12px)',
              }}
            >
              {/* Background number - left side */}
              <div
                className="flex-shrink-0 text-[100px] lg:text-[140px] font-bold leading-none transition-all duration-1000 ease-out"
                style={{
                  color: '#00d4ff',
                  opacity: isActive ? 0.2 : 0.05,
                  transform: isActive ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
                  minWidth: '120px',
                }}
              >
                {step.num}
              </div>

              {/* Content - right side with clear separation */}
              <div className="relative z-10 flex-1 pt-4">
                {/* Title */}
                <h3
                  className="text-2xl lg:text-3xl font-medium tracking-tight mb-4 transition-colors duration-700"
                  style={{
                    color: isActive ? '#E5E7EB' : '#6B7280',
                  }}
                >
                  {step.title}
                </h3>

                {/* Description - fade in/out */}
                <div
                  className="overflow-hidden transition-all duration-700"
                  style={{
                    maxHeight: isActive ? '80px' : '0px',
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <p className="text-base text-[#9CA3AF] leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Intersection Observer for fade-in effects
      const elements = document.querySelectorAll('[data-fade]');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#02040A] text-[#E5E7EB]">
      <SEO
        title="About Us - NEO PERION"
        description="Learn about NEO PERION - We build software partnerships, not just products. Discover our mission, values, and how we work with teams to deliver stable, scalable SaaS solutions."
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        [data-fade] {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        [data-fade].fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-dots {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.03;
        }
        
        .dot {
          position: absolute;
          width: 2px;
          height: 2px;
          background: currentColor;
          border-radius: 50%;
        }
        
        .button-primary {
          padding: 12px 28px;
          background: #00d4ff;
          color: #02040A;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .button-primary:hover {
          background: #00b8e6;
          transform: translateY(-1px);
          box-shadow: 0 8px 30px -6px rgba(0, 212, 255, 0.4);
        }
        
        .button-secondary {
          padding: 12px 28px;
          background: transparent;
          color: #E5E7EB;
          border: 1px solid #2F3138;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .button-secondary:hover {
          border-color: #00d4ff;
          background: #050816;
        }
        
        .divider-light {
          height: 1px;
          background: linear-gradient(to right, transparent, #2F3138, transparent);
        }
        
        .card-principle {
          padding: 32px;
          border: 1px solid #2F3138;
          border-radius: 8px;
          transition: all 0.3s ease;
          background: #050816;
        }
        
        .card-principle:hover {
          border-color: #00d4ff;
          background: #0a0f1e;
          box-shadow: 0 8px 30px -6px rgba(0, 212, 255, 0.2);
        }
        
        /* Hero Grid Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }
        
        @keyframes gridPulse {
          0%, 100% {
            opacity: 0.3;
            border-color: #2F3138;
          }
          50% {
            opacity: 0.6;
            border-color: #00d4ff;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-grid-pulse {
          animation: gridPulse 3s ease-in-out infinite;
        }
        
        /* Hero Text Animations - Professional SaaS Style */
        @keyframes heroHeadline {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes heroSubtext {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-hero-headline {
          animation: heroHeadline 1s ease-out 0.2s both;
        }
        
        .animate-hero-subtext {
          animation: heroSubtext 0.9s ease-out 0.5s both;
        }
        
        .animate-hero-subtext-2 {
          animation: heroSubtext 0.9s ease-out 0.7s both;
        }
        
        .animate-hero-cta {
          animation: heroSubtext 0.9s ease-out 0.9s both;
        }
      `}</style>

      <Header />

      {/* 1. HERO SECTION */}
      <section className="min-h-screen flex items-center justify-between px-8 lg:px-16 py-32 bg-gradient-to-br from-[#050816] to-[#02040A] relative overflow-hidden">
        {/* Floating Lines Background */}
        <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-auto">
          <FloatingLines
            linesGradient={['#00d4ff', '#0099cc', '#006699']}
            enabledWaves={['middle', 'bottom']}
            lineCount={[8, 6]}
            lineDistance={[3, 4]}
            middleWavePosition={{ x: 5.0, y: 0.0, rotate: 0.3 }}
            bottomWavePosition={{ x: 2.0, y: -0.5, rotate: -0.2 }}
            animationSpeed={0.5}
            interactive={true}
            bendRadius={3.0}
            bendStrength={-0.3}
            mouseDamping={0.08}
            parallax={true}
            parallaxStrength={0.15}
            mixBlendMode="screen"
          />
        </div>

        <div className="hero-dots pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="dot"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-2xl relative z-10 pointer-events-auto">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#E5E7EB] animate-hero-headline">
            We build software partnerships — not just products.
          </h1>
          <p className="text-lg text-[#9CA3AF] mb-8 leading-relaxed max-w-lg animate-hero-subtext">
            At NEO PERION, we design, build, and support SaaS systems that stay stable, scale smoothly, and actually make teams faster.
          </p>
          <p className="text-base text-[#6B7280] mb-8 max-w-lg animate-hero-subtext-2">
            No jargon. No disappearing after launch. Just clear thinking and reliable execution.
          </p>
          <div className="flex gap-4 animate-hero-cta">
            <button className="button-primary flex items-center gap-2">
              Work with us <ArrowRight size={16} />
            </button>
            <button className="button-secondary">
              How we work
            </button>
          </div>
        </div>

      </section>

      {/* 2. WHO WE ARE */}
      <section className="px-8 lg:px-16 py-24 max-w-6xl mx-auto">
        <div data-fade>
          <h2 className="text-4xl font-bold mb-12 text-[#E5E7EB]">Who we are</h2>
          <div className="space-y-6 text-lg text-[#9CA3AF] leading-relaxed">
            <p>
              NEO PERION was founded to help teams navigate SaaS and automation without confusion, chaos, or unnecessary complexity. We've seen businesses struggle with fragmented tools, rushed implementations, and vendors who vanish once the project ships. We decided to build differently.
            </p>
            <p>
              Our work focuses on stability, clarity, and long-term impact — systems that don't just launch, but keep running clean as your business grows.
            </p>
          </div>
        </div>
      </section>

      <div className="px-8 lg:px-16">
        <div className="divider-light max-w-6xl mx-auto" />
      </div>

      {/* 3. WHAT WE BELIEVE IN */}
      <section className="px-8 lg:px-16 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-[#E5E7EB]" data-fade>What drives our work</h2>
        <div className="grid md:grid-cols-2 gap-6" data-fade>
          {[
            { title: 'Stability over hype', desc: 'We build solutions meant to last — not experiments that break after launch.' },
            { title: 'Clarity over complexity', desc: 'Simple systems beat complicated ones. Always.' },
            { title: 'Partnership over projects', desc: 'We think long-term, not just delivery day.' },
            { title: 'Execution over promises', desc: 'We ship, support, and stay accountable.' },
          ].map((principle, i) => (
            <div key={i} className="card-principle" data-fade>
              <h3 className="font-semibold text-lg text-[#E5E7EB] mb-3">{principle.title}</h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-8 lg:px-16">
        <div className="divider-light max-w-6xl mx-auto" />
      </div>

      {/* 4. HOW WE WORK - Interactive Scroll Section */}
      <WorkflowSection />

      <div className="px-8 lg:px-16">
        <div className="divider-light max-w-6xl mx-auto" />
      </div>

      {/* 5. WHY NEO PERION */}
      <section className="px-8 lg:px-16 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-[#E5E7EB]" data-fade>Why teams choose NEO PERION</h2>
        <div className="space-y-4" data-fade>
          {[
            'Clear, no-nonsense communication',
            'Predictable delivery timelines',
            'Transparent pricing and scope',
            'Human support — not ticket-only systems',
            'Flexible engagement for startups & SMEs',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 pb-4">
              <Check size={20} className="text-[#00d4ff] flex-shrink-0" />
              <span className="text-lg text-[#9CA3AF]">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="px-8 lg:px-16">
        <div className="divider-light max-w-6xl mx-auto" />
      </div>

      {/* 6. MISSION STATEMENT */}
      <section className="px-8 lg:px-16 py-32 bg-gradient-to-br from-[#050816] to-[#02040A] border border-[#2F3138] rounded-lg mx-8 lg:mx-16 my-24">
        <div className="max-w-3xl mx-auto text-center" data-fade>
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight text-[#E5E7EB]">
            Run the business daily like we mean it. Deliver every project clean. Support our clients long after launch. Build trust until it becomes our strongest asset.
          </h2>
        </div>
      </section>

      {/* 7. VALUES */}
      <section className="px-8 lg:px-16 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-[#E5E7EB]" data-fade>Our values</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8" data-fade>
          {['Stability', 'Transparency', 'Respect for time', 'Long-term thinking', 'Ownership mindset'].map((value, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#050816] border border-[#2F3138] mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#00d4ff] opacity-20" />
              </div>
              <p className="text-sm font-medium text-[#9CA3AF]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-8 lg:px-16">
        <div className="divider-light max-w-6xl mx-auto" />
      </div>

      {/* 8. CLOSING CTA */}
      <section className="px-8 lg:px-16 py-32 max-w-4xl mx-auto text-center">
        <div data-fade>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-[#E5E7EB]">
            Let's build something that actually works.
          </h2>
          <p className="text-lg text-[#9CA3AF] mb-12 max-w-2xl mx-auto leading-relaxed">
            If you're looking for a reliable tech partner — not just another vendor — we should talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="button-primary">
              Book a free discovery call
            </button>
            <button className="button-secondary">
              Contact us
            </button>
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-24" />

      <Footer />
    </div>
  );
}

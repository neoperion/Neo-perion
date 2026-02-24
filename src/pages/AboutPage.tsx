import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Shield, Eye, Clock, Lightbulb, Fingerprint } from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import FloatingLines from "@/components/FloatingLines";
import TiltedCard from "@/components/TiltedCard";

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
        title="About NEO PERION | Founders - Vasantharaj S (CEO), Adhi Ganesh K (COO), Tamilselvan (CTO)"
        description="Meet the founders of NEO PERION — Vasantharaj S (CEO), Adhi Ganesh K (COO), and Tamilselvan (CTO). We build software partnerships, not just products. Discover our mission, values, and leadership team delivering stable, scalable SaaS solutions."
        keywords="NEO PERION, NEO PERION CEO, NEO PERION founder, Vasantharaj S, Vasantharaj NEO PERION, Adhi Ganesh K, Adhi Ganesh NEO PERION COO, Tamilselvan CTO, NEO PERION CTO, NEO PERION leadership, NEO PERION team, SaaS company founders, NEO PERION about, software company India, NEO PERION Chennai"
        url="https://www.neoperion.com/about"
        type="website"
        ogImage="https://www.neoperion.com/images/np-logo.png"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NEO PERION",
            "alternateName": "NEOPERION",
            "url": "https://www.neoperion.com",
            "logo": "https://www.neoperion.com/images/np-logo.png",
            "image": "https://www.neoperion.com/images/np-logo.png",
            "description": "NEO PERION is a leading SaaS company transforming businesses with cutting-edge Web Development, Mobile Apps, Data Analytics & AI Automation solutions. Founded by Vasantharaj S, Adhi Ganesh K, and Tamilselvan.",
            "foundingDate": "2024",
            "founders": [
              {
                "@type": "Person",
                "name": "Vasantharaj S",
                "jobTitle": "Chief Executive Officer (CEO)",
                "image": "https://www.neoperion.com/images/founder.jpg",
                "url": "https://www.neoperion.com/about",
                "worksFor": {
                  "@type": "Organization",
                  "name": "NEO PERION"
                }
              },
              {
                "@type": "Person",
                "name": "Adhi Ganesh K",
                "jobTitle": "Chief Operating Officer (COO)",
                "image": "https://www.neoperion.com/images/adhi.png",
                "url": "https://www.neoperion.com/about",
                "worksFor": {
                  "@type": "Organization",
                  "name": "NEO PERION"
                }
              },
              {
                "@type": "Person",
                "name": "Tamilselvan",
                "jobTitle": "Chief Technology Officer (CTO)",
                "image": "https://www.neoperion.com/images/tamilselvan.jpg",
                "url": "https://www.neoperion.com/about",
                "worksFor": {
                  "@type": "Organization",
                  "name": "NEO PERION"
                }
              }
            ],
            "member": [
              {
                "@type": "Person",
                "name": "Vasantharaj S",
                "jobTitle": "CEO & Founder",
                "image": "https://www.neoperion.com/images/founder.jpg"
              },
              {
                "@type": "Person",
                "name": "Adhi Ganesh K",
                "jobTitle": "COO & Co-Founder",
                "image": "https://www.neoperion.com/images/adhi.png"
              },
              {
                "@type": "Person",
                "name": "Tamilselvan",
                "jobTitle": "CTO & Co-Founder",
                "image": "https://www.neoperion.com/images/tamilselvan.jpg"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.linkedin.com/company/neoperion",
              "https://twitter.com/neoperion"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "email": "contact@neoperion.com"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Vasantharaj S",
            "alternateName": "Vaanth Raj",
            "jobTitle": "Chief Executive Officer",
            "description": "Vasantharaj S is the CEO and Founder of NEO PERION, a SaaS company specializing in Web Development, Mobile Apps, Data Analytics & AI Automation.",
            "image": "https://www.neoperion.com/images/founder.jpg",
            "url": "https://www.neoperion.com/about",
            "worksFor": {
              "@type": "Organization",
              "name": "NEO PERION",
              "url": "https://www.neoperion.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "knowsAbout": ["SaaS", "Web Development", "AI Automation", "Software Engineering", "Business Strategy"]
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Adhi Ganesh K",
            "jobTitle": "Chief Operating Officer",
            "description": "Adhi Ganesh K is the COO and Co-Founder of NEO PERION, leading operations and ensuring seamless delivery of SaaS solutions.",
            "image": "https://www.neoperion.com/images/adhi.png",
            "url": "https://www.neoperion.com/about",
            "worksFor": {
              "@type": "Organization",
              "name": "NEO PERION",
              "url": "https://www.neoperion.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "knowsAbout": ["Operations Management", "SaaS", "Business Development", "Project Management"]
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Tamilselvan",
            "jobTitle": "Chief Technology Officer",
            "description": "Tamilselvan is the CTO and Co-Founder of NEO PERION, driving the technology vision and leading engineering teams in building cutting-edge SaaS products.",
            "image": "https://www.neoperion.com/images/tamilselvan.jpg",
            "url": "https://www.neoperion.com/about",
            "worksFor": {
              "@type": "Organization",
              "name": "NEO PERION",
              "url": "https://www.neoperion.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "knowsAbout": ["Software Architecture", "AI", "Cloud Computing", "Full Stack Development", "Technology Strategy"]
          },
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About NEO PERION",
            "description": "Learn about NEO PERION — the founders, mission, values, and leadership team building stable, scalable SaaS solutions.",
            "url": "https://www.neoperion.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "NEO PERION"
            }
          }
        ]}
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
          <h2 className="text-4xl font-bold mb-12 text-[#E5E7EB] text-center">Who we are</h2>
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
        <h2 className="text-4xl font-bold mb-16 text-[#E5E7EB] text-center" data-fade>What drives our work</h2>
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





      {/* 6. MEET THE FOUNDERS - SEO-optimized with Schema.org microdata */}
      <section className="px-8 lg:px-16 py-24 max-w-6xl mx-auto" itemScope itemType="https://schema.org/Organization">
        <meta itemProp="name" content="NEO PERION" />
        <meta itemProp="url" content="https://www.neoperion.com" />
        <h2 className="text-4xl font-bold mb-16 text-[#E5E7EB] text-center" data-fade>Meet the Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 justify-items-center" data-fade>

          {/* Vasantharaj S - CEO */}
          <article className="flex flex-col items-center gap-6" itemScope itemType="https://schema.org/Person" itemProp="founder">
            <h3 className="text-2xl font-semibold text-[#E5E7EB]" itemProp="name">Vasantharaj S</h3>
            <TiltedCard
              imageSrc="/images/founder.jpg"
              altText="Vasantharaj S - CEO and Founder of NEO PERION"
              captionText="Vasantharaj S"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
            <link itemProp="image" href="https://www.neoperion.com/images/founder.jpg" />
            <p className="text-xl text-[#9CA3AF] font-medium" itemProp="jobTitle">CEO & Founder</p>
            <meta itemProp="url" content="https://www.neoperion.com/about" />
            <span className="sr-only" itemProp="description">Vasantharaj S is the CEO and Founder of NEO PERION, a SaaS company based in Chennai, Tamil Nadu, India, specializing in Web Development, Mobile Apps, Data Analytics and AI Automation solutions.</span>
            <meta itemProp="worksFor" content="NEO PERION" />
          </article>

          {/* Adhi Ganesh K - COO */}
          <article className="flex flex-col items-center gap-6" itemScope itemType="https://schema.org/Person" itemProp="founder">
            <h3 className="text-2xl font-semibold text-[#E5E7EB]" itemProp="name">Adhi Ganesh K</h3>
            <TiltedCard
              imageSrc="/images/adhi.png"
              altText="Adhi Ganesh K - COO and Co-Founder of NEO PERION"
              captionText="Adhi Ganesh K"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
            <link itemProp="image" href="https://www.neoperion.com/images/adhi.png" />
            <p className="text-xl text-[#9CA3AF] font-medium" itemProp="jobTitle">COO & Co-Founder</p>
            <meta itemProp="url" content="https://www.neoperion.com/about" />
            <span className="sr-only" itemProp="description">Adhi Ganesh K is the COO and Co-Founder of NEO PERION, leading operations and delivery of SaaS solutions from Chennai, Tamil Nadu, India.</span>
            <meta itemProp="worksFor" content="NEO PERION" />
          </article>

          {/* Tamilselvan - CTO */}
          <article className="flex flex-col items-center gap-6" itemScope itemType="https://schema.org/Person" itemProp="founder">
            <h3 className="text-2xl font-semibold text-[#E5E7EB]" itemProp="name">Tamilselvan</h3>
            <TiltedCard
              imageSrc="/images/tamilselvan.jpg"
              altText="Tamilselvan - CTO and Co-Founder of NEO PERION"
              captionText="Tamilselvan"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
              objectPosition="top"
            />
            <link itemProp="image" href="https://www.neoperion.com/images/tamilselvan.jpg" />
            <p className="text-xl text-[#9CA3AF] font-medium" itemProp="jobTitle">CTO & Co-Founder</p>
            <meta itemProp="url" content="https://www.neoperion.com/about" />
            <span className="sr-only" itemProp="description">Tamilselvan is the CTO and Co-Founder of NEO PERION, driving the technology vision and leading engineering teams in building SaaS products from Chennai, Tamil Nadu, India.</span>
            <meta itemProp="worksFor" content="NEO PERION" />
          </article>

        </div>

        {/* Hidden SEO content for AI crawlers and search engines */}
        <div className="sr-only" aria-hidden="true">
          <h3>NEO PERION Leadership Team</h3>
          <p>NEO PERION was founded by Vasantharaj S (CEO), Adhi Ganesh K (COO), and Tamilselvan (CTO). Based in Chennai, Tamil Nadu, India, NEO PERION is a technology company specializing in SaaS services, web development, mobile app development, AI automation, and data analytics solutions.</p>
          <p>Vasantharaj S, also known as Vaanth Raj, is the Chief Executive Officer (CEO) and Founder of NEO PERION. He leads the company's vision and strategy.</p>
          <p>Adhi Ganesh K is the Chief Operating Officer (COO) and Co-Founder of NEO PERION. He oversees operations and ensures seamless delivery of solutions.</p>
          <p>Tamilselvan is the Chief Technology Officer (CTO) and Co-Founder of NEO PERION. He drives the technology roadmap and leads the engineering team.</p>
          <p>Contact NEO PERION at contact@neoperion.com. Visit https://www.neoperion.com for more information about our services.</p>
        </div>
      </section>

      {/* 7. VALUES */}
      <section className="px-8 lg:px-16 py-28 max-w-6xl mx-auto">
        <div className="text-center mb-20" data-fade>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#00d4ff] mb-4">What we stand for</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#E5E7EB]">Our values</h2>
        </div>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5" data-fade>
          {[
            { icon: Shield, num: '01', title: 'Stability', desc: 'We build systems that last — engineered for resilience, not quick fixes.', color: '#00d4ff' },
            { icon: Eye, num: '02', title: 'Transparency', desc: 'No hidden agendas. Clear communication at every stage of the process.', color: '#a855f7' },
            { icon: Clock, num: '03', title: 'Respect for time', desc: 'We value your time like our own — fast responses, realistic timelines.', color: '#10b981' },
          ].map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={i}
                className="value-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 cursor-default"
                style={{ '--accent': value.color } as React.CSSProperties}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] to-[#050816] rounded-2xl border border-[#1a1d2e] group-hover:border-[color:var(--accent)] transition-colors duration-500" style={{ opacity: 1 }} />

                {/* Glow on hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl" style={{ background: value.color }} />

                {/* Large background number */}
                <span className="absolute top-4 right-6 text-[80px] font-black leading-none text-white/[0.03] group-hover:text-white/[0.06] transition-all duration-700 select-none pointer-events-none">
                  {value.num}
                </span>

                <div className="relative z-10">
                  {/* Icon with colored ring */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500" style={{ background: `${value.color}10`, border: `1px solid ${value.color}25` }}>
                    <Icon size={24} style={{ color: value.color }} className="opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <h3 className="text-xl font-bold text-[#E5E7EB] mb-3 group-hover:text-white transition-colors duration-300">
                    {value.title}
                  </h3>

                  <p className="text-sm text-[#6B7280] leading-relaxed group-hover:text-[#9CA3AF] transition-colors duration-300">
                    {value.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom row — 2 wider cards, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto" data-fade>
          {[
            { icon: Lightbulb, num: '04', title: 'Long-term thinking', desc: 'Every decision is made with your future growth in mind. We design for scale, not just today.', color: '#f59e0b' },
            { icon: Fingerprint, num: '05', title: 'Ownership mindset', desc: 'We treat your product as our own — with care, pride, and full accountability.', color: '#ec4899' },
          ].map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={i}
                className="value-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 cursor-default"
                style={{ '--accent': value.color } as React.CSSProperties}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] to-[#050816] rounded-2xl border border-[#1a1d2e] group-hover:border-[color:var(--accent)] transition-colors duration-500" />

                {/* Glow on hover */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl" style={{ background: value.color }} />

                {/* Large background number */}
                <span className="absolute top-4 right-6 text-[80px] font-black leading-none text-white/[0.03] group-hover:text-white/[0.06] transition-all duration-700 select-none pointer-events-none">
                  {value.num}
                </span>

                <div className="relative z-10 flex items-start gap-6">
                  {/* Icon with colored ring */}
                  <div className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-500" style={{ background: `${value.color}10`, border: `1px solid ${value.color}25` }}>
                    <Icon size={24} style={{ color: value.color }} className="opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#E5E7EB] mb-3 group-hover:text-white transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed group-hover:text-[#9CA3AF] transition-colors duration-300">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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

import React from 'react';
import { Linkedin } from 'lucide-react';
import TiltedCard from '@/components/TiltedCard';

const FOUNDERS = [
  {
    name: 'Vasantharaj S',
    role: 'CEO & Founder',
    img: '/images/founder.jpg',
    pos: 'center' as const,
    linkedin: 'https://www.linkedin.com/in/vasantharaj-s/',
    schemaSameAs: 'https://www.linkedin.com/in/vasantharaj-s/',
  },
  {
    name: 'Adhi Ganesh K',
    role: 'COO & Co-Founder',
    img: '/images/adhi.png',
    pos: 'center' as const,
    linkedin: 'https://www.linkedin.com/in/adhi-ganesh/',
    schemaSameAs: 'https://www.linkedin.com/in/adhi-ganesh/',
  },
  {
    name: 'Tamilselvan',
    role: 'CTO & Co-Founder',
    img: '/images/tamilselvan.jpg',
    pos: 'top' as const,
    linkedin: 'https://www.linkedin.com/in/tamilselvanjk/',
    schemaSameAs: 'https://www.linkedin.com/in/tamilselvanjk/',
  },
];

export function AboutPeople() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-12 py-16 md:py-24 parchment-surface--light border-b border-manuscript-parchmentDeep"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Hidden structured data for GEO/SEO */}
      <meta itemProp="name" content="AINCURU LLP" />
      <meta itemProp="url" content="https://www.aincuru.com" />
      <link itemProp="sameAs" href="https://www.linkedin.com/company/aincuru/" />
      <link itemProp="sameAs" href="https://www.instagram.com/_aincuru" />
      <link itemProp="sameAs" href="https://x.com/aincuru" />
      <link itemProp="sameAs" href="https://www.facebook.com/share/1FCuj6vXfz/" />

      <div className="max-w-6xl mx-auto w-full box-border">

        {/* Section header & Narrative */}
        <div className="mb-12 md:mb-20 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-manuscript-copper mb-6">
              06 · THE PEOPLE
            </p>
            <h2 className="heading-manuscript text-4xl md:text-5xl leading-tight">
              Small team.<br/>
              <span className="italic text-manuscript-rustDeep">Serious responsibility.</span>
            </h2>
          </div>

          <div className="pt-2 lg:pt-8 font-manuscriptBody text-[16px] leading-[1.8] text-manuscript-inkSoft space-y-4 max-w-lg">
            <p>AINCURU is founder-led and engineering-driven.</p>
            <p>We believe the people making the decisions should stay close to the problems being solved.</p>
            <p>That means fewer layers between the idea and the people building it — and more ownership over the result.</p>
          </div>
        </div>

        {/* Founder cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mb-12">
          {FOUNDERS.map((founder, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center w-full group"
              itemScope
              itemType="https://schema.org/Person"
            >
              <meta itemProp="name" content={founder.name} />
              <meta itemProp="jobTitle" content={founder.role} />
              <meta itemProp="image" content={`https://www.aincuru.com${founder.img}`} />
              <link itemProp="sameAs" href={founder.schemaSameAs} />
              <link itemProp="worksFor" href="https://www.aincuru.com/company/about" />

              <div className="mb-6 w-full max-w-[280px]">
                <TiltedCard
                  imageSrc={founder.img}
                  altText={founder.name}
                  captionText={founder.name}
                  containerHeight="280px"
                  containerWidth="100%"
                  imageHeight="280px"
                  imageWidth="100%"
                  rotateAmplitude={10}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={false}
                  objectPosition={founder.pos}
                />
              </div>

              <h3 className="heading-manuscript text-xl" itemProp="name">{founder.name}</h3>
              <p className="text-manuscript-copper font-medium mt-1 text-sm tracking-wide" itemProp="jobTitle">
                {founder.role}
              </p>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-manuscript-inkMuted transition-colors hover:text-manuscript-copper"
                aria-label={`Connect with ${founder.name} on LinkedIn`}
              >
                <Linkedin size={13} />
                LinkedIn
              </a>
            </div>
          ))}
        </div>

        {/* Entity disambiguation note */}
        <p className="mx-auto mt-24 max-w-3xl rounded-md border border-manuscript-parchmentDeep bg-manuscript-parchmentWarm/60 p-5 text-[13px] leading-relaxed text-manuscript-inkMuted">
          <strong className="text-manuscript-inkSoft">Note:</strong> AINCURU LLP is an
          independent software company based in Tamil Nadu, India, and is not affiliated with
          Perion Network Ltd.
        </p>

      </div>
    </section>
  );
}

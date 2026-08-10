import * as React from "react";

// Real client logos (uploaded to public/images). Spaces in filenames are URL-encoded.
const LOGOS = [
  { src: "/images/lexizfy.png", alt: "Lexizfy" },
  { src: "/images/izhaiyam.png", alt: "Izhaiyam" },
  { src: "/images/krishna%20packers.png", alt: "Krishna Packers" },
  { src: "/images/holo%20mehnd.png", alt: "Holo Mehndi" },
  { src: "/images/images.png", alt: "Client" },
];

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12 md:gap-20 md:pr-20" aria-hidden={hidden}>
      {LOGOS.map((logo, i) => (
        <div key={`${logo.alt}-${i}`} className="flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300">
          <img
            src={logo.src}
            alt={hidden ? "" : logo.alt}
            loading="lazy"
            className="h-10 w-auto object-contain md:h-14"
          />
        </div>
      ))}
    </div>
  );
}

export const TrustedBy = () => {
  return (
    <section className="parchment-surface py-16 md:py-24 border-b border-manuscriptAlpha-ink-10">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        
        <div className="flex flex-col items-center justify-center space-y-2 mb-12">
          <p className="chapter-eyebrow text-manuscript-copper">FIELD NOTES</p>
          <h2 className="heading-manuscript text-3xl md:text-4xl text-center max-w-2xl">
            Built alongside ambitious teams.
          </h2>
        </div>

        <hr className="ink-rule w-full max-w-4xl mx-auto mb-10" />

        {/* Auto-scrolling logo marquee (left → right) */}
        <div className="np-marquee-group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
          <div className="np-marquee flex w-max items-center">
            <LogoRow />
            <LogoRow hidden />
          </div>
        </div>
        
        <hr className="ink-rule w-full max-w-4xl mx-auto mt-10 mb-8" />
        
        <div className="flex justify-center">
          <p className="font-manuscriptBody text-[11px] font-semibold tracking-[0.2em] uppercase text-manuscript-inkMuted">
            AINCURU · FIELD NOTE
          </p>
        </div>

      </div>
    </section>
  );
};

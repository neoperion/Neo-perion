import { Section } from "@/components/marketing/Section";

// Real client logos (uploaded to public/images). Spaces in filenames are URL-encoded.
const LOGOS = [
  { src: "/images/lexizfy.png", alt: "Lexizfy" },
  { src: "/images/izhaiyam.png", alt: "Izhaiyam" },
  { src: "/images/krishna%20packers.png", alt: "Krishna Packers" },
  { src: "/images/holo%20mehnd.png", alt: "Holo Mehndi" },
  { src: "/images/images.png", alt: "Client" },
  { src: "/images/WhatsApp%20Image%202026-06-22%20at%202.11.35%20PM.jpeg", alt: "Client" },
];

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-16 pr-16 md:gap-24 md:pr-24" aria-hidden={hidden}>
      {LOGOS.map((logo, i) => (
        <img
          key={`${logo.alt}-${i}`}
          src={logo.src}
          alt={hidden ? "" : logo.alt}
          loading="lazy"
          className="h-12 w-auto object-contain md:h-16"
        />
      ))}
    </div>
  );
}

export const TrustedBy = () => {
  return (
    <Section bg="paper" rhythm="supporting" divider>
      <p className="text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-muted2">
        Trusted by the teams we build with
      </p>

      {/* Auto-scrolling logo marquee (left → right) */}
      <div className="np-marquee-group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="np-marquee flex w-max items-center [animation-direction:reverse]">
          <LogoRow />
          <LogoRow hidden />
        </div>
      </div>
    </Section>
  );
};

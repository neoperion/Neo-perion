import { Section } from "@/components/marketing/Section";
import { LogoWall } from "@/components/marketing/LogoWall";
import { StatBand } from "@/components/marketing/StatBand";
import { Eyebrow } from "@/components/marketing/Eyebrow";
import { FounderRotator } from "./FounderRotator";

// Placeholder client logos — replace with real client SVGs (see public/images/ASSETS.md).
const LOGOS = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `/images/logos/logo-${n}.svg`,
  alt: `Client ${n}`,
}));

// PLACEHOLDER stats — replace with real, verifiable numbers before launch.
const STATS = [
  { value: "23", label: "Products shipped to production" },
  { value: "0", label: "Abandoned after launch" },
  { value: "8 yrs", label: "Average engineer seniority" },
];

export const WhoWeAre = () => {
  return (
    <Section bg="canvas" rhythm="supporting" divider>
      <LogoWall label="Trusted by teams building real products" logos={LOGOS} />

      <div className="mt-20 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col lg:col-span-5">
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(28px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.02em] text-ink">
            A senior team that stays past launch
          </h2>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-body">
            We&apos;re a small team of senior product engineers — no offshoring, no juniors learning
            on your budget. Just people who&apos;ve shipped real software and own the outcome.
          </p>
          <StatBand stats={STATS} className="mt-10 border-t border-hairline pt-8" />
        </div>

        <div className="lg:col-span-7">
          <FounderRotator />
        </div>
      </div>
    </Section>
  );
};

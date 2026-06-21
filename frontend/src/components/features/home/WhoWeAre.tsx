import { Section } from "@/components/marketing/Section";
import { LogoWall } from "@/components/marketing/LogoWall";
import { StatBand } from "@/components/marketing/StatBand";
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

      <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <p className="font-display text-[clamp(22px,3vw,30px)] font-medium leading-snug text-ink">
            We&apos;re a small team of senior product engineers who stay with you past launch. No
            offshoring, no juniors learning on your budget — just people who&apos;ve shipped real
            software and own the outcome.
          </p>
          <StatBand stats={STATS} />
        </div>

        <FounderRotator />
      </div>
    </Section>
  );
};

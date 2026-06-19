import { MobileShell } from '../Navigation/MobileShell';
import { MobileIndustriesHero } from './MobileIndustriesHero';
import { MobileIndustryCard } from './MobileIndustryCard';

export function MobileIndustries() {
  return (
    <MobileShell nav="bottom" showFooter>
      <MobileIndustriesHero />
      <MobileIndustryCard />
    </MobileShell>
  );
}

import { MobileShell } from '../Navigation/MobileShell';
import { MobileAboutHero } from './MobileAboutHero';
import { MobileFounderSection } from './MobileFounderSection';
import { MobileEngineeringPrinciples } from './MobileEngineeringPrinciples';
import { MobileAboutTimeline } from './MobileAboutTimeline';

export function MobileAbout() {
  return (
    <MobileShell nav="bottom" showFooter>
      <MobileAboutHero />
      <MobileAboutTimeline />
      <MobileFounderSection />
      <MobileEngineeringPrinciples />
    </MobileShell>
  );
}

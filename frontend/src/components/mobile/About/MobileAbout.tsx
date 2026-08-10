import { MobileShell } from '../Navigation/MobileShell';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutOrigin } from '@/components/about/AboutOrigin';
import { AboutTimeline } from '@/components/about/AboutTimeline';
import { AboutLessons } from '@/components/about/AboutLessons';
import { AboutMethod } from '@/components/about/AboutMethod';
import { AboutOfferings } from '@/components/about/AboutOfferings';
import { AboutPeople } from '@/components/about/AboutPeople';
import { AboutFuture } from '@/components/about/AboutFuture';
import { AboutFounderCTA } from '@/components/about/AboutFounderCTA';
import { HomeCTA } from '@/components/HomeCTA';

export function MobileAbout() {
  return (
    <MobileShell nav="bottom" showFooter>
      <div className="manuscript-root overflow-x-clip max-w-full w-full box-border">
        <AboutHero />
        <AboutOrigin />
        <AboutTimeline />
        <AboutLessons />
        <AboutMethod />
        <AboutOfferings />
        <AboutPeople />
        <AboutFuture />
        <AboutFounderCTA />
        <HomeCTA />
      </div>
    </MobileShell>
  );
}

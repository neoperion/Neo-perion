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
      <div className="manuscript-root font-sans overflow-x-clip max-w-full w-full box-border [&_h1]:font-sans [&_h2]:font-sans [&_h3]:font-sans [&_h4]:font-sans [&_p]:font-sans">
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

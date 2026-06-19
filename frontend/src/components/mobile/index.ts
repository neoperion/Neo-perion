// ─── Mobile Component Barrel — Phase A→E ────────────────────────
// All mobile-only UI primitives, navigation, home sections, services,
// about, blog, case studies, careers, forms, admin, and footer.
// Desktop UI lives in src/components/ui/ and src/components/* unchanged.

export * from './LiquidGlass';
export * from './Navigation';
export * from './Home';
export * from './Services';
export * from './Footer';

export { FoundersCards, MissionVisionMobile, CompanyTimeline } from './About/AboutMobile';
export type { Founder, TimelineEntry } from './About/AboutMobile';

export { BlogPostCard, BlogCategoryFilter, BlogReader } from './Blog/BlogMobile';
export type { BlogPostCardData, BlogReaderProps } from './Blog/BlogMobile';

export { CaseStudyCard, CaseStudyStory } from './CaseStudies/CaseStudyMobile';
export type { CaseStudyCardData, CaseStudyStoryProps } from './CaseStudies/CaseStudyMobile';

export { JobExpandCard, ApplicationSheet } from './Careers/CareersMobile';
export type { JobListingData } from './Careers/CareersMobile';

export { ConversationForm, NewsletterGlass } from './Forms/FormsMobile';
export type { ConversationFormProps, ConversationField, ConversationStepId } from './Forms/FormsMobile';

export { BottomTabBar, AdminTopBar, AdminDrawer, AdminStatCard, AdminTable, MobileAdminShell } from './Admin/AdminMobile';
export type { AdminTabItem, AdminStatCardProps, AdminTableRow } from './Admin/AdminMobile';

export { MobileGate } from './MobileGate';
export type { MobileGateProps } from './MobileGate';

export { MobileShell } from './Navigation/MobileShell';
export type { MobileShellProps } from './Navigation/MobileShell';

export { MobileHome } from './Home/MobileHome';

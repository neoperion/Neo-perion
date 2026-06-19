export const COOKIE_VERSION = (import.meta.env.VITE_COOKIE_VERSION as string | undefined) ?? '1.0';
export const CALENDLY_URL =
  (import.meta.env.VITE_CALENDLY_URL as string | undefined) ?? 'https://calendly.com/neoperion/free-call';
export const WHATSAPP_NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) ?? '919XXXXXXXXX';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const GA_MEASUREMENT_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) ?? '';
export const CLARITY_ID = (import.meta.env.VITE_CLARITY_ID as string | undefined) ?? '';

export const NAV_SERVICES = [
  { slug: 'ai-systems-automation', label: 'AI Systems' },
  { slug: 'enterprise-product-engineering', label: 'Product Engineering' },
  { slug: 'cloud-native-web-platforms', label: 'Web Platforms' },
  { slug: 'mobile-product-engineering', label: 'Mobile Apps' },
  { slug: 'intelligent-operations-automation', label: 'Operations Automation' },
  { slug: 'deep-ai-engineering', label: 'Deep AI' },
  { slug: 'startup-to-scale-engineering', label: 'Startup to Scale' },
] as const;

export const NAV_INDUSTRIES = [
  { slug: 'education', label: 'Education' },
  { slug: 'startups', label: 'Startups' },
  { slug: 'smb-enterprise', label: 'SMB & Enterprise' },
  { slug: 'healthcare', label: 'Healthcare' },
] as const;

export const LEAD_STATUSES = ['new', 'contacted', 'qualified', 'converted', 'rejected'] as const;
export const LEAD_CATEGORIES = ['startup', 'education', 'smb', 'healthcare', 'enterprise'] as const;

export const ADMIN_NAV_ITEMS = [
  { path: '/admin', label: 'Dashboard' },
  { path: '/admin/leads', label: 'Leads' },
  { path: '/admin/blogs', label: 'Blogs' },
  { path: '/admin/careers', label: 'Careers' },
  { path: '/admin/case-studies', label: 'Case Studies' },
  { path: '/admin/testimonials', label: 'Testimonials' },
  { path: '/admin/newsletter', label: 'Newsletter' },
  { path: '/admin/analytics', label: 'Analytics' },
  { path: '/admin/settings', label: 'Settings' },
] as const;

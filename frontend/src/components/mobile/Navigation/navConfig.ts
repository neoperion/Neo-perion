import {
  Brain, Sparkles, Cog, Blocks, Cloud, Smartphone, Rocket, Lightbulb,
  GraduationCap, HeartPulse, Building2, Briefcase, BookOpen, Newspaper, Cpu,
  FileText, TrendingUp, MessageSquare, PenTool, Target, ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

export interface NavLink {
  label: string; href: string; description?: string; icon?: LucideIcon;
}

export interface NavColumn {
  title: string; icon?: LucideIcon; description?: string; href?: string;
  items: NavLink[];
}

export interface NavCta {
  label: string; title?: string; buttonText: string; href: string; icon?: LucideIcon;
}

export interface NavBottomCta {
  title: string; description: string; buttonText: string; href: string;
}

export interface DesktopSection {
  key: 'services' | 'industries' | 'company';
  label: string;
  columns: NavColumn[];
  cta?: NavCta;
  bottomCta?: NavBottomCta;
}

export const desktopNavSections: DesktopSection[] = [
  {
    key: 'services',
    label: 'Services',
    columns: [
      {
        title: 'AI & Automation',
        items: [
          { label: 'AI Systems', href: '/services/ai-systems-automation', icon: Brain, description: 'RAG architectures and contextual AI integration.' },
          { label: 'Deep AI Engineering', href: '/services/deep-ai-engineering', icon: Sparkles, description: 'Custom fine-tuned models & neural networks.' },
          { label: 'Intelligent Operations', href: '/services/intelligent-operations-automation', icon: Cog, description: 'Business workflow automation and ROI scaling.' },
        ],
      },
      {
        title: 'Product Engineering',
        items: [
          { label: 'Enterprise Product', href: '/services/enterprise-product-engineering', icon: Blocks, description: 'End-to-end scalable product development.' },
          { label: 'Cloud-Native Web', href: '/services/cloud-native-web-platforms', icon: Cloud, description: 'High-performance, secure web applications.' },
          { label: 'Mobile Engineering', href: '/services/mobile-product-engineering', icon: Smartphone, description: 'Native & React Native mobile experiences.' },
        ],
      },
      {
        title: 'Strategic Consulting',
        items: [
          { label: 'Startup-to-Scale', href: '/services/startup-to-scale-engineering', icon: Rocket, description: 'Fractional CTO & technical due diligence prep.' },
          { label: 'All Services', href: '/services', icon: Lightbulb, description: 'View our complete catalog of capabilities.' },
        ],
      },
    ],
    cta: {
      label: 'BUILD WITH NEO PERION',
      title: 'Transform your vision into a scalable digital product powered by AI.',
      buttonText: 'Book Free Consultation',
      href: '/contact',
      icon: Rocket,
    },
  },
  {
    key: 'industries',
    label: 'Industries',
    columns: [
      {
        title: 'EDUCATION & EDTECH', icon: GraduationCap, href: '/industries/education',
        description: 'AI-powered learning platforms, LMS systems, student analytics and educational technology solutions.',
        items: [
          { label: 'LMS Platforms', href: '/industries/education' },
          { label: 'Student Analytics', href: '/industries/education' },
          { label: 'AI Learning Assistants', href: '/industries/education' },
          { label: 'Assessment Systems', href: '/industries/education' },
        ],
      },
      {
        title: 'STARTUPS & FOUNDERS', icon: Rocket, href: '/industries/startups',
        description: 'MVP development, SaaS platforms, startup engineering and technical consulting.',
        items: [
          { label: 'MVP Development', href: '/industries/startups' },
          { label: 'SaaS Platforms', href: '/industries/startups' },
          { label: 'Product Engineering', href: '/industries/startups' },
          { label: 'Startup Consulting', href: '/industries/startups' },
        ],
      },
      {
        title: 'SMBs & ENTERPRISE', icon: Building2, href: '/industries/smbs',
        description: 'Business automation, digital transformation and operational efficiency solutions.',
        items: [
          { label: 'Business Automation', href: '/industries/smbs' },
          { label: 'CRM Systems', href: '/industries/smbs' },
          { label: 'Analytics Dashboards', href: '/industries/smbs' },
          { label: 'ERP Solutions', href: '/industries/smbs' },
        ],
      },
      {
        title: 'HEALTHCARE', icon: HeartPulse, href: '/industries/healthcare',
        description: 'Healthcare software, patient management systems and AI-powered healthcare solutions.',
        items: [
          { label: 'Patient Platforms', href: '/industries/healthcare' },
          { label: 'Telemedicine', href: '/industries/healthcare' },
          { label: 'AI Diagnostics', href: '/industries/healthcare' },
          { label: 'Healthcare Analytics', href: '/industries/healthcare' },
        ],
      },
    ],
    bottomCta: {
      title: 'INDUSTRIES WE TRANSFORM',
      description: 'Helping startups, SMBs, healthcare providers and educational institutions build AI-powered digital products.',
      buttonText: 'Explore Industries',
      href: '/industries',
    },
  },
  {
    key: 'company',
    label: 'Company',
    columns: [
      {
        title: 'ABOUT NEO PERION',
        items: [
          { label: 'About Us', href: '/about', icon: Building2 },
          { label: "Founder's Letter", href: '/company/founder-letter', icon: PenTool },
          { label: 'Vision & Mission', href: '/about#vision', icon: Target },
          { label: 'Security', href: '/security', icon: ShieldCheck },
        ],
      },
      {
        title: 'SOCIAL PROOF',
        items: [
          { label: 'Case Studies', href: '/case-studies', icon: FileText },
          { label: 'Success Stories', href: '/success-stories', icon: TrendingUp },
          { label: 'Testimonials', href: '/testimonials', icon: MessageSquare },
        ],
      },
      {
        title: 'CAREERS',
        items: [
          { label: 'Join Our Team', href: '/careers', icon: Briefcase },
          { label: 'Internship Program', href: '/careers/internships', icon: GraduationCap },
          { label: 'Open Positions', href: '/careers#open-roles', icon: Briefcase },
        ],
      },
      {
        title: 'RESOURCES',
        items: [
          { label: 'Blog', href: '/blog', icon: BookOpen },
          { label: 'AI Newsletter', href: '/newsletter', icon: Newspaper },
          { label: 'Technology Insights', href: '/insights', icon: Cpu },
        ],
      },
    ],
    cta: {
      label: "LET'S BUILD TOGETHER",
      buttonText: 'Schedule a Call',
      href: '/contact',
    },
  },
];

export const mobileHomeLink: NavLink = {
  label: 'Home', href: '/',
  description: 'Build with Neo Perion.',
};

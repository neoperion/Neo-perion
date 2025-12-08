import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title = "NEO PERION - Smart SaaS Services | Web, Mobile, Data & AI Automation",
  description = "NEO PERION — Leading SaaS company transforming businesses with cutting-edge Web Development, Mobile Apps, Data Analytics & AI Automation solutions for growing teams.",
  keywords = "SaaS services, web development, mobile app development, AI automation, data analytics, business automation, NEO PERION, cloud solutions, digital transformation",
  ogImage = "https://www.neoperion.com/images/np-logo.png",
  url = "https://www.neoperion.com/",
  type = "website"
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

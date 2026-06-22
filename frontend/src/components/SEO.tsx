import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
  type?: string;
  jsonLd?: object | object[];
}

export const SEO = ({
  title = "NEO PERION - Smart SaaS Services | Web, Mobile, Data & AI Automation",
  description = "NEO PERION — Leading SaaS company transforming businesses with cutting-edge Web Development, Mobile Apps, Data Analytics & AI Automation solutions for growing teams.",
  keywords = "SaaS services, web development, mobile app development, AI automation, data analytics, business automation, NEO PERION, cloud solutions, digital transformation, Custom AI Chatbots, Conversational AI, LLM Integration",
  ogImage = "https://www.neoperion.com/images/np-logo.png",
  url = "https://www.neoperion.com/",
  type = "website",
  jsonLd
}: SEOProps) => {

  const siteName = "Neo Perion Solutions";
  const fullTitle = title.includes("NEO PERION") || title.includes("Neo Perion") ? title : `${title} | ${siteName}`;

  // Handle both array of schemas and single schema
  const jsonLdString = jsonLd
    ? JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd])
    : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `https://www.neoperion.com${ogImage}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `https://www.neoperion.com${ogImage}`} />

      {/* JSON-LD Structured Data */}
      {jsonLdString && (
        <script type="application/ld+json">{jsonLdString}</script>
      )}
    </Helmet>
  );
};

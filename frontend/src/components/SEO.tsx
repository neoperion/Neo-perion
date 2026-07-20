import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '@/lib/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
  type?: string;
  jsonLd?: object | object[];
}

const DEFAULT_TITLE = 'Neo Perion Solutions | AI Automation, Web & App Development';
const DEFAULT_DESCRIPTION =
  'Neo Perion Solutions develops AI-powered software, automation systems, web applications, and digital platforms that help organizations scale faster.';

export const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords,
  ogImage = `${SITE_URL}/images/np-logo.png`,
  url = `${SITE_URL}/`,
  type = "website",
  jsonLd
}: SEOProps) => {

  const siteName = "Neo Perion Solutions";
  const fullTitle = title.includes("Neo Perion") ? title : `${title} | ${siteName}`;

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
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`} />

      {/* JSON-LD Structured Data */}
      {jsonLdString && (
        <script type="application/ld+json">{jsonLdString}</script>
      )}
    </Helmet>
  );
};

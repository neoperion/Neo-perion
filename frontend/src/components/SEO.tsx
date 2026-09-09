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

const DEFAULT_TITLE = 'Aincuru | AI, Software & Digital Solutions';
const DEFAULT_DESCRIPTION =
  'Aincuru builds AI solutions, software, websites, automation systems, and digital products for modern businesses.';

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  ogImage = `${SITE_URL}/images/np-logo.png`,
  url = `${SITE_URL}/`,
  type = "website",
  jsonLd
}: SEOProps) => {

  const siteName = "Aincuru";
  
  // Format the title logically without keyword stuffing
  let fullTitle = DEFAULT_TITLE;
  if (title) {
    fullTitle = /aincuru/i.test(title) ? title : `${title} | Aincuru`;
  }

  // Handle both array of schemas and single schema safely
  let jsonLdString: string | null = null;
  if (jsonLd) {
    try {
      jsonLdString = JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd]);
    } catch (e) {
      console.error("Failed to stringify JSON-LD", e);
    }
  }

  const finalOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;
  const finalUrl = url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={finalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:site" content="@aincuru" />
      <meta name="twitter:creator" content="@aincuru" />

      {/* JSON-LD Structured Data */}
      {jsonLdString && (
        <script type="application/ld+json">{jsonLdString}</script>
      )}
    </Helmet>
  );
};


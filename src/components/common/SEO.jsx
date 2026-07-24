import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEO({
  title,
  description,
  keywords,
  ogImage = '/img/img-portfolio2.jpg',
  ogUrl = 'https://olabanjiidowu.vercel.app',
  canonicalUrl,
  structuredData
}) {
  const defaultTitle = 'Olabanji Idowu | Frontend Developer & React Engineer';
  const displayTitle = title ? `${title} | Olabanji Idowu` : defaultTitle;
  const displayDesc = description || 'Portfolio of Olabanji Idowu — Frontend Developer skilled in React, Tailwind CSS, JavaScript, and responsive design. Explore projects and contact details.';
  const displayKeywords = keywords || 'Frontend Developer, React Developer, JavaScript Developer, Portfolio Website, HTML CSS JS, Responsive Web Design';
  
  const absoluteOgImage = ogImage.startsWith('http') 
    ? ogImage 
    : `https://olabanjiidowu.vercel.app${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{displayTitle}</title>
      <meta name="description" content={displayDesc} />
      <meta name="keywords" content={displayKeywords} />
      <meta name="author" content="Olabanji Idowu" />
      <meta name="robots" content="index, follow" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#0f172a" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={displayDesc} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Olabanji Idowu Portfolio" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={displayDesc} />
      <meta name="twitter:image" content={absoluteOgImage} />

      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

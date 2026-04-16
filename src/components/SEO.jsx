import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name, type }) {
  const defaultTitle = 'Chitt Hirpara | Software Engineer & Developer Portfolio';
  const finalTitle = title ? `${title} | Chitt Hirpara` : defaultTitle;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{finalTitle}</title>
      <meta name='description' content={description} />
      
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
}

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  children?: React.ReactNode;
}

const SEO = ({ description = '', lang = 'en', title, children = null }: SEOProps) => {
  const { site } = useStaticQuery(graphql`
    query getSiteMeta {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const siteTitle = site.siteMetadata.title;

  return (
    <>
      <html lang={lang} />
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  );
};

export default SEO;
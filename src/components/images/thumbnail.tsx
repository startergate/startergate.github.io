import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Thumbnail = ({ src, alt = '', cover = false, ...props }) => {
  const data = useStaticQuery(graphql`
    query getThumbnailImages {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            publicURL
            childImageSharp {
              gatsbyImageData(width: 128, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);

  const match = React.useMemo(
    () => data.allFile.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  );

  if (!match) return null;
  if (cover || !match.node.childImageSharp)
    return <img src={match.node.publicURL} alt={alt} loading={'lazy'} {...props} />;
  return <GatsbyImage image={getImage(match.node)} alt={alt} {...props} />;
};

export default Thumbnail;
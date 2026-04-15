import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Thumbnail = ({ src, alt = '', ...props }) => {
  const data = useStaticQuery(graphql`
    query getThumbnailImages {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
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

  if (!match || !match.node.childImageSharp) return null;
  return <GatsbyImage image={getImage(match.node)} alt={alt} {...props} />;
};

export default Thumbnail;
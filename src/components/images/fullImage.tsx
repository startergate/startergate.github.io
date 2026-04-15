import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const FullImage = ({ src, alt = '', ...props }) => {
  const data = useStaticQuery(graphql`
    query getFullImageFiles {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            publicURL
            childImageSharp {
              gatsbyImageData
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

  return match.node.childImageSharp ? (
    <GatsbyImage
      image={getImage(match.node)}
      imgStyle={{ objectFit: 'contain', objectPosition: 'top left' }}
      alt={alt}
      {...props}
    />
  ) : (
    <img src={match.node.publicURL} loading={'lazy'} alt={alt} {...props} />
  );
};

export default FullImage;
import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';

const Image = ({ src, srcIfLightMode = null, alt = '', ...props }) => {
  const data = useStaticQuery(graphql`
    query getImageFiles {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(width: 512)
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

  const matchLightMode = React.useMemo(
    () =>
      srcIfLightMode
        ? data.allFile.edges.find(
            ({ node }) => srcIfLightMode === node.relativePath
          )
        : null,
    [data, srcIfLightMode]
  );

  if (!match || !match.node.childImageSharp) return null;

  const baseImage = getImage(match.node);

  const image =
    matchLightMode && matchLightMode.node.childImageSharp
      ? withArtDirection(baseImage, [
          {
            media: '(prefers-color-scheme: light)',
            image: getImage(matchLightMode.node),
          },
        ])
      : baseImage;

  return <GatsbyImage image={image} alt={alt} {...props} />;
};

export default Image;
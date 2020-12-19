import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ src, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 512) {
                ...GatsbyImageSharpFluid
              }
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

  if (match) {
    let matchLightMode;
    let sources = match.node.childImageSharp.fluid;

    if (props.srcIfLightMode) {
      matchLightMode = React.useMemo(
        () =>
          data.allFile.edges.find(
            ({ node }) => props.srcIfLightMode === node.relativePath
          ),
        [data, props.srcIfLightMode]
      );
      if (matchLightMode) {
        sources = [
          match.node.childImageSharp.fluid,
          {
            ...matchLightMode.node.childImageSharp.fluid,
            media: `(prefers-color-scheme: light)`,
          },
        ];
      }
    }

    return <Img fluid={sources} {...props} />;
  } else {
    return null;
  }
};

export default Image;

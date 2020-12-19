import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const OriginalImage = ({ src, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            publicURL
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
  return <img src={match.node.publicURL} loading={'lazy'} {...props} />;
};

export default OriginalImage;

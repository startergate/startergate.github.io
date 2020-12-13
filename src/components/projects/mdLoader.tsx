import * as React from "react";

import * as ReactMarkdown from "react-markdown";
import { graphql, useStaticQuery } from "gatsby";

const MarkdownLoader = ({path, ...props}) => {
  const data = useStaticQuery(graphql`
    query getAllMarkdown {
      allFile(filter: {extension: {eq: "md"}}) {
        edges {
          node {
            relativePath
            internal {
              content
            }
          }
        }
      }
    }
  `);

  const match = React.useMemo(
    () => data.allFile.edges.find(({ node }) => path === node.relativePath),
    [data, path]
  );

  return <ReactMarkdown {...props}>
    {match.node.internal.content}
  </ReactMarkdown>
}

export default MarkdownLoader;
import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const ProjectThumbnail = ({ src, ...props }) => {
    const data = useStaticQuery(graphql`
        query {
            allFile( filter: { internal: { mediaType: { regex: "images/" } } } ) {
                edges {
                    node {
                        relativePath
                        childImageSharp {
                            fluid(maxWidth: 64) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)

  const match = React.useMemo(() => (
    data.allFile.edges.find(({ node }) => src === node.relativePath)
  ), [ data, src ])

  return (
    <Img
      fluid={match.node.childImageSharp.fluid}
      {...props}
    />
  )
}

export default ProjectThumbnail;
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import * as React from "react";

const TypeScriptImage = () => {
    const data = useStaticQuery(graphql`
        query {
            ts: file(relativePath: { eq: "langs/typescript.png" }) {
                childImageSharp {
                    fluid(maxWidth: 50) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

  return <Img fluid={data.ts.childImageSharp.fluid} />
}

export default TypeScriptImage
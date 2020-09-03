import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const JavaScriptImage = () => {
    const data = useStaticQuery(graphql`
        query {
            js: file(relativePath: { eq: "langs/javascript.png" }) {
                childImageSharp {
                    fluid(maxWidth: 50) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

  return <Img fluid={data.js.childImageSharp.fluid} />
}

export default JavaScriptImage

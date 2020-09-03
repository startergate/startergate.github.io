import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PythonImage = () => {
    const data = useStaticQuery(graphql`
        query {
            python: file(relativePath: { eq: "langs/python.png" }) {
                childImageSharp {
                    fluid(maxWidth: 50) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

  return <Img fluid={data.python.childImageSharp.fluid} />
}

export default PythonImage

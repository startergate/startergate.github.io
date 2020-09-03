import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/images/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>모두 안ㄴ녕</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/projects/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/images/image"
import SEO from "../components/seo"
import {JavaScript, Python, TypeScript} from "../components/profiles/Language";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <h1>Introduction</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </section>
    <section>
      <h1>Languages</h1>
      <h2>Expert</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap"
      }}>
        <JavaScript />
        <TypeScript />
        <Python />
      </div>
    </section>
    <section>
      <h1>Project Highlights</h1>

      <Link to="/projects/">See More...</Link>
    </section>
  </Layout>
)

export default IndexPage

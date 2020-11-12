import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/images/image"
import SEO from "../components/seo"
import {JavaScript, Python, TypeScript} from "../components/profiles/Language";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section style={{ width: '100%', height: '100vh' }}>
      <h1>Learn, Find, Figure Out</h1>
      <p>STARTERGATE</p>
      <p>최호승</p>
      <p>백엔드 엔지니어</p>
      <p>게임 개발자</p>
      <p>3학년 고등학생 @ <a href="">광주소프트웨어마이스터고등학교</a></p>
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

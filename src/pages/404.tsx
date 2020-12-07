import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Image from "../components/images/image";

import './404.css';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section
      className="title not-found"
      id="not-found"
      style={{ width: '100%', height: '100vh' }}
    >
      <div>
        <div className="not-found">
          <strong className="not-found-character not-found-4">4</strong>
          <Image className="not-found-0" src={"pacman.png"} alt={"0"} />
          <strong className="not-found-4">4</strong>
        </div>
        <h1>NOT FOUND</h1>
        <p>this page does not exist lol</p>
        <a href="/">pls go to main page</a>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;

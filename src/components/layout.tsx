/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';
import Badge from './images/badge';
import Links from '../enums/links';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} Ho Seung Choi a.k.a. startergate, Built
        with
        {` `}
        <a className={'noLint'} href="https://www.gatsbyjs.org">
          <Badge
            className="footer-badge"
            src={'gatsby-icon.png'}
            style={{ display: `inline-block` }}
          />
        </a>
        ,{` `}
        Hosted on
        {` `}
        <a className={'noLint'} href="https://pages.github.com">
          <Badge
            className="footer-badge"
            src={Links.GitHub.src}
            style={{ display: `inline-block` }}
          />{' '}
          Pages
        </a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

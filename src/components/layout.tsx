/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { ArrowUp, Sun, Moon } from 'lucide-react';
import Header from './header';
import { useApp } from '../contexts/AppContext';
import './layout.css';
import Badge from './images/badge';
import Links from '../enums/links';
const Layout = ({ children, bottomActions = null }: { children: React.ReactNode; bottomActions?: React.ReactNode }) => {
  const { theme, toggleTheme } = useApp();
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
      <div className={'float-container'}>
        {bottomActions}
        <button
          className={'scroll-top-btn mobile-only'}
          onClick={toggleTheme}
          aria-label="테마 전환"
        >
          {theme === 'dark' ? (
            <Sun size={18} strokeWidth={2} />
          ) : (
            <Moon size={18} strokeWidth={2} />
          )}
        </button>
        <button
          className={'scroll-top-btn'}
          onClick={() =>
            typeof window !== 'undefined' &&
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
          aria-label="맨 위로"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </button>
      </div>
      <footer>
        <div>
          © {new Date().getFullYear()} startergate, Built with
          {` `}
          <a className={'noLint'} href={'https://www.gatsbyjs.org'}>
            <Badge
              className={'footer-badge'}
              src={'gatsby-icon.png'}
              style={{ display: `inline-block` }}
            />
          </a>
          ,{` `}
          Hosted on
          {` `}
          <a className={'noLint'} href={'https://pages.github.com'}>
            <Badge
              className={'footer-badge footer-badge-github'}
              src={Links.GitHub.src}
              style={{ display: `inline-block` }}
            />{' '}
            Pages
          </a>
          . Some code of this website is created with Claude. Every text inside this website is created without AI.
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  bottomActions: PropTypes.node,
};

export default Layout;

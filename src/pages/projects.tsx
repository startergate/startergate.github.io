import * as React from 'react';
import { useStaticQuery, graphql, PageProps, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Projects = (props: PageProps) => {
  const data = useStaticQuery(graphql`
    query {
      projectsJson {
        name
        description
        links
        startedAt
        finishedAt
      }
    }
  `);
  console.log(data.projectsJson);

  return (
    <Layout>
      <SEO title="Projects" />
      <h2>Projects</h2>
      <p>Welcome to page 2 ({props.path})</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Projects;

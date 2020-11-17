import * as React from 'react';
import { useStaticQuery, graphql, PageProps, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/projects/simple';

import './projects.css';

const Projects = (props: PageProps) => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          tags
          startedAt
          name
          finishedAt
          description
          id
        }
      }
    }
  `).allProjectsJson.nodes;

  return (
    <Layout {...props}>
      <SEO title="Projects" />
      <section className="subpage">
        <h1>Projects</h1>
        <div className="list">
          {data.map((value, index) => {
            return <Project data={value} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

import * as React from 'react';
import { useStaticQuery, graphql, PageProps, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/projects/simple';

import './projects.css';
import Filter from '../components/projects/filter';

const Projects = (props: PageProps) => {
  const data = useStaticQuery(graphql`
    query getAllProjects {
      allProjectsJson {
        nodes {
          id
          name
          description
          startedAt
          finishedAt
          tags
          links
          imgSrc
        }
      }
    }
  `).allProjectsJson.nodes;

  const handler = (selected) => {
    let ids = (selected.length > 0 ? data.filter(x => x.tags.filter(tag => selected.includes(tag)).length) : data).map(x => x.id);
    let elements = document.querySelectorAll('.project-card');
    elements.forEach(element => {
      element.classList.remove('hidden')
      if (!ids.includes(element.id)) {
        element.classList.add('hidden')
      }
    })
  }

  return (
    <Layout {...props}>
      <SEO title="Projects" />
      <section className="subpage">
        <h1><span>Projects</span></h1>
        <Filter filterHandler={handler} />
        <div className="list project-list">
          {data.map(value => (
            <Project data={value} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

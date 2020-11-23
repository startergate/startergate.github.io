import * as React from 'react';
import { useStaticQuery, graphql, PageProps, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/projects/simple';

import './projects.css';
import Filter from '../components/projects/filter';
import * as External from '../components/profiles/external';

const Projects = (props: PageProps) => {
  const data = useStaticQuery(graphql`
    query getProjectData {
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
      linksJson(type: { eq: "GitHub" }) {
        id
        type
        external_id
        link
        image {
          background
          src
        }
      }
    }
  `);

  const projects = data.allProjectsJson.nodes;
  const badgeData = data.linksJson;
  console.log(badgeData);

  const handler = (selected) => {
    let ids = (selected.length > 0
      ? projects.filter(
          (x) => x.tags.filter((tag) => selected.includes(tag)).length
        )
      : projects
    ).map((x) => x.id);
    let elements = document.querySelectorAll('.project-card');
    elements.forEach((element) => {
      element.classList.remove('hidden');
      if (!ids.includes(element.id)) {
        element.classList.add('hidden');
      }
    });
  };

  return (
    <Layout {...props}>
      <SEO title="Projects" />
      <section className="subpage">
        <h1>
          <span>Projects</span>
        </h1>
        <External.Small data={badgeData} />
        <Filter filterHandler={handler} />
        <div className="list project-list">
          {projects.map((value) => (
            <Project data={value} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

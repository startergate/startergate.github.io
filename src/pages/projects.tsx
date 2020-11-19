import * as React from 'react';
import { useStaticQuery, graphql, PageProps, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/projects/simple';

import './projects.css';

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

  let tags: any = new Set();

  const cards = data.map((value, index) => {
    value.tags.forEach((item) => tags.add(item));
    return <Project data={value} />;
  });

  tags = [...tags].sort();

  return (
    <Layout {...props}>
      <SEO title="Projects" />
      <section className="subpage">
        <h1>Projects</h1>
        <div className="project-filter">
          <span className="project-filter-display">필터 없음</span>
          <ul className="project-filter-selector">
            <li
              key="all"
              className="project-filter-choice"
            >
              필터 초기화
            </li>
            {tags.map((item) => {
              return (
                <li
                  key={item}
                  className="project-filter-choice"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="list">{cards}</div>
      </section>
    </Layout>
  );
};

export default Projects;

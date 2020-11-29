import * as React from 'react';
import { useStaticQuery, graphql, PageProps, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/projects/simple';

import './projects.css';
import Filter from '../components/projects/filter';
import * as External from '../components/profiles/external';
import Overlay from '../components/projects/overlay';

const Projects = (props: PageProps) => {
  const data = useStaticQuery(graphql`
    query getProjectData {
      allProjectsJson(
        sort: { fields: [isHighlighted, orderLevel, name], order: [DESC, ASC] }
      ) {
        nodes {
          id
          name
          description
          startedAt
          finishedAt
          status
          type
          tags
          links
          imgSrc
          contents {
            title
            text
          }
        }
      }
      tags: allProjectsJson {
        distinct(field: tags)
      }
      type: allProjectsJson {
        distinct(field: type)
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
  const types = data.type.distinct;
  const tags = data.tags.distinct;

  let selectedTypes = [];
  let selectedTags = [];

  const handler = () => {
    let temp =
      selectedTags.length > 0
        ? projects.filter(
            (x) => x.tags.filter((tag) => selectedTags.includes(tag)).length
          )
        : projects;
    temp = temp = (selectedTypes.length > 0
      ? temp.filter(
          (x) => x.type.filter((type) => selectedTypes.includes(type)).length
        )
      : temp
    ).map((x) => x.id);
    let elements = document.querySelectorAll('.project-card');
    elements.forEach((element) => {
      element.classList.remove('hidden');
      if (!temp.includes(element.id)) {
        element.classList.add('hidden');
      }
    });
  };

  const tagHandler = (selected) => {
    selectedTags = selected;
    handler();
  };

  const typeHandler = (selected) => {
    selectedTypes = selected;
    handler();
  };

  return (
    <Layout {...props}>
      <SEO title="Projects" />
      <section className="subpage">
        <div className="page-title">
          <h1>
            <span>Projects</span>
          </h1>
          <External.Small data={badgeData} />
        </div>
        <div className={'project-filters'}>
          <Filter
            filterHandler={tagHandler}
            data={tags}
            defaultTitle={'사용 기술'}
            id={'project-filter-tags'}
          />
          <Filter
            filterHandler={typeHandler}
            data={types}
            defaultTitle={'프로젝트 유형'}
            id={'project-filter-types'}
          />
        </div>
        <div className="list project-list">
          {projects.map((value) => (
            <Project data={value} />
          ))}
        </div>
      </section>
      <Overlay data={projects} />
    </Layout>
  );
};

export default Projects;

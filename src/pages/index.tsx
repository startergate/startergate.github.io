import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Language from '../components/profiles/language';
import * as External from '../components/profiles/external';
import Project from '../components/projects/simple';

import './index.css';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query getIndexData {
      allProjectsJson(filter: { isHighlighted: { eq: true } }, limit: 4) {
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
      allLanguagesJson {
        group(field: level) {
          nodes {
            level
            id
            name
            image {
              background
              src
            }
          }
          fieldValue
        }
      }
      allLinksJson {
        nodes {
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
    }
  `);

  const highlighted = data.allProjectsJson.nodes;
  const languages = data.allLanguagesJson.group;
  const externals = data.allLinksJson.nodes;

  const groupedLanguages: any = {};
  const labeledExternals: any = {};

  languages.forEach((value) => {
    groupedLanguages[value['fieldValue']] = value.nodes;
  });

  externals.forEach((value) => {
    labeledExternals[value['type']] = value;
  });

  return (
    <Layout>
      <SEO title="Home" />
      <section
        className="title"
        id="title"
        style={{ width: '100%', height: '100vh' }}
      >
        <div>
          <h1>
            <span>Learn, Find, Figure Out</span>
          </h1>
          <p className="title-name">STARTERGATE / 최호승</p>
          <p>백엔드 엔지니어</p>
          <p>게임 개발자</p>
          <p>
            3학년 고등학생 @{' '}
            <a href="https://gsm.gen.hs.kr">광주소프트웨어마이스터고등학교</a>
          </p>
        </div>
      </section>
      <section id="backend-dev">
        <h2>Backend Engineer</h2>
      </section>
      <section id="game-dev">
        <h2>Game Developer</h2>
      </section>
      <section id="project">
        <h2>Project Highlights</h2>
        <div className="list">
          {highlighted.map((value) => (
            <Project data={value} />
          ))}
        </div>
        <Link to="/projects/">See More...</Link>
      </section>
      <section id="link">
        <h2>Links</h2>
        {externals.map((value) => {
          return <External.Icon data={value} />;
        })}
      </section>
      <section id="cv-languages">
        <h2>Languages</h2>
        <External.Small data={labeledExternals.StackShare} />
        <div id="cv-languages-using">
          <h3>Using</h3>
          <div className="list">
            {groupedLanguages.using?.map((value) => (
              <Language data={value} />
            ))}
          </div>
        </div>
        <div id="cv-languages-learned">
          <h3>Learned / Used</h3>
          <div className="list">
            {groupedLanguages.learned?.map((value) => (
              <Language data={value} />
            ))}
          </div>
        </div>
        <div id="cv-languages-learning">
          <h3>Learning / Interested</h3>
          <div className="list">
            {groupedLanguages.learning?.map((value) => (
              <Language data={value} />
            ))}
          </div>
        </div>
      </section>
      <section id="cv">
        <h2>Curriculum Vitae</h2>
        <a href="/cv.pdf" download>
          Download CV as PDF
        </a>
      </section>
    </Layout>
  );
};

export default IndexPage;

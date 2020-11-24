import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Image from '../components/images/image';
import Language from '../components/profiles/language';
import * as External from '../components/profiles/external';
import Project from '../components/projects/simple';
import Overlay from '../components/projects/overlay';

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
        <External.Small data={labeledExternals.GitHub} />
        <div className="list">
          {highlighted.map((value) => (
            <Project data={value} />
          ))}
        </div>
        <Link to="/projects/">See More...</Link>
      </section>
      <section id="link">
        <h2>Links</h2>
        <div className="list">
          {externals.map((value) => {
            return <External.Icon data={value} />;
          })}
        </div>
      </section>
      <section id="cv-languages">
        <h2>Languages</h2>
        <External.Small data={labeledExternals.StackShare} />
        <div id="cv-languages-using">
          <h4>Using</h4>
          <div className="list">
            {groupedLanguages.using?.map((value) => (
              <Language data={value} />
            ))}
          </div>
        </div>
        <div id="cv-languages-learned">
          <h4>Learned / Used</h4>
          <div className="list">
            {groupedLanguages.learned?.map((value) => (
              <Language data={value} />
            ))}
          </div>
        </div>
        <div id="cv-languages-learning">
          <h4>Learning / Interested</h4>
          <div className="list">
            {groupedLanguages.learning?.map((value) => (
              <Language data={value} />
            ))}
          </div>
        </div>
      </section>
      <section id="cv">
        <h2>Curriculum Vitae</h2>
        <section id="cv-education">
          <h3>Education</h3>
          <div className="cv-item">
            <a href="https://gsm.gen.hs.kr" className="cv-item-title" title="광주소프트웨어마이스터고등학교"><h6><span className="lint">광주소프트웨어마이스터고등학교</span></h6></a>
            <span>광주광역시</span>
            <span>2018.03 ~ 2021.01</span>
            <br/>
            <span>소프트웨어개발과</span>
          </div>
        </section>
        <section id="cv-experiences">
          <h3>Experiences</h3>
          <div className="cv-item">
            <a href="https://www.peoplefund.co.kr" className="cv-item-title" title="피플펀드컴퍼니"><h6><span className="lint">피플펀드컴퍼니</span></h6></a>
            <span>서울특별시</span>
            <span>2020.01 ~ 2020.02</span>
            <br/>
            <span>백엔드 엔지니어 (현장실습)</span>
            <br/>
            <span>계정 인증 미들웨어 및 일부 기능 리팩토링</span>
          </div>
        </section>
        <section id="cv-activities">
          <h3>Activities</h3>
          <External.Small data={{
            "type": "GitHub",
            "link": "https://github.com/startergate/Conferences",
            "external_id": "Conferences",
            "image": {
              "src": "externals/github.png",
              "background": "#24292e"
            }
          }} />
          <div className="cv-item">
            <h6>글로벌 비즈쿨 CO-TDM 창업경진대회</h6>
            <span>2018.6</span>
            <span>최우수상</span>
            <br/>
            <span>E-Faucet: 스마트 수도꼭지</span>
          </div>
          <div className="cv-item">
            <h6>GSM 창의알고리즘 콘테스트</h6>
            <span>2018.4</span>
            <span>장려상</span>
            <br/>
            <span>M2C: Modular Multi Camera</span>
          </div>
          <div className="cv-item">
            <h6>GSM 팀프로젝트발표회</h6>
            <span>2020.9</span>
            <span>장려상</span>
            <br/>
            <span>M2C: Modular Multi Camera</span>
          </div>
          <div className="cv-item">
            <h6>정보처리기능사</h6>
            <span>2019.3</span>
            <span>한국산업인력공단</span>
          </div>
          <div className="cv-item">
            <h6>TOEIC</h6>
            <span>2018.8</span>
            <span>865점</span>
          </div>
        </section>
        <section id="cv-group-activities">
          <h3>Group Activities</h3>
          <div className="cv-item">
            <a href="https://github.com/BeanSil" className="cv-item-title" title="빈실"><h6><span className="lint">빈실</span></h6></a>
            <span>광주소프트웨어마이스터고등학교</span>
            <span>웹 개발 동아리</span>
            <br/>
            <span>동아리원</span><span>2018.3 ~ 2020.8</span>
            <br/>
            <span>부장</span><span>2020.1 ~ 2020.8</span>
            <br/>
            <span>프로젝트: DOTORI</span>
          </div>
          <div className="cv-item">
            <a href="https://github.com/tiny-beluga" className="cv-item-title" title="Tiny Beluga"><h6><span className="lint">Tiny Beluga</span></h6></a>
            <span>광주소프트웨어마이스터고등학교</span>
            <span>게임 개발 동아리</span>
            <br/>
            <span>동아리원, 2019.3 ~ </span>
            <br/>
            <span>부장, 2019.3 ~ </span>
            <br/>
            <span>프로젝트: Lost</span>
          </div>
        </section>
        <a href="/cv.pdf" download>
          Download CV as PDF
        </a>
      </section>
      <Overlay data={highlighted} />
    </Layout>
  );
};

export default IndexPage;

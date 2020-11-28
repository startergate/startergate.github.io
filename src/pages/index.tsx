import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
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
            <a href="https://gsm.gen.hs.kr" target="_blank">
              광주소프트웨어마이스터고등학교
            </a>
          </p>
        </div>
      </section>
      <section id="backend-dev">
        <h2>Backend Engineer</h2>
        <div className="section-main">
          <p className="section-punchline">
            백엔드 엔지니어입니다. 눈에 보이지 않는 걸 만듭니다.
          </p>
          <br />
          서버에서 돌아가는 프로그램을 만듭니다. 직접 해야할 때는 모바일 앱이나
          웹 앱도 직접 만듭니다.
          <br />
          컴퓨터에는 항상 관심이 많았습니다. 초등학교 때에는 컴퓨터 방과후를
          다녔고, 중학교 때에{' '}
          <a href="https://opentutorials.org/course/1" target="_blank">
            생활코딩
          </a>
          으로 코딩을 시작했습니다.
          <br />
          코딩에 관심이 많아져서 고등학교는 소프트웨어마이스터고로 진학했습니다.
          <br />
          항상 변화하며 새로운 것을 시도합니다. 새로운 것은 항상 더 나은 것이라
          생각합니다.
        </div>
        <div className="cv-item">
          <h5>
            <a
              href="http://gsm.gen.hs.kr/sub/page.php?page_code=info_06#department01"
              className="cv-item-title"
              title="광주소프트웨어마이스터고등학교 소프트웨어개발과"
              target="_blank"
            >
              <span className="lint">
                광주소프트웨어마이스터고등학교 소프트웨어개발과
              </span>
            </a>
          </h5>
          <span>HTTP, TCP 같은 웹 이론 및 HTML & CSS 학습</span>
          <br />
          <span>과목 산출물 프로젝트 진행</span>
          <br />
          <span>웹 개발 동아리 빈실 부장</span>
        </div>
        <div className="cv-item">
          <h5>Node.js</h5>
          <span>Node.js 8부터 시작</span>
          <br />
          <span>TypeScript와 함께 가장 많이 사용중</span>
          <br />
          <span>Express와 Koa 사용 중</span>
        </div>
        <div className="cv-item">
          <h5>Python</h5>
          <span>Django와 챗봇 개발을 위해 사용</span>
          <br />
          <span>알고리즘 문제 해결을 위해 사용</span>
          <br />
          <span>파이썬 백엔드 개발 현장실습 경험, 배포된 코드 작성 경험</span>
        </div>
        <div className="cv-item">
          <h5>빈실</h5>
          <span>학교 내부에서 사용되는 서비스를 개발하는 동아리</span>
          <br />
          <span>TypeScript, Node.js, Koa.js 사용</span>
          <br />
          <span>테스팅, 문서화, 스프린트 개발 경험</span>
        </div>
      </section>
      <section id="game-dev">
        <h2>Game Developer</h2>
        <div className="section-main">
          <p className="section-punchline">
            인디 게임 개발자입니다. 경험을 만듭니다.
          </p>
          <br />
          다양한 장르의 게임을 만듭니다. 플랫포머 게임을 출시해봤고, 여러
          프로젝트를 준비하고 있습니다.
          <br />
          대부분의 10대 남학생이 그렇듯, 게임을 좋아합니다. 초등학생 때는 넥슨
          게임을 해왔고, 중학교 이후로는 패키지 게임에 빠졌습니다.
          <br />
          여러 게임을 해보다 보니 직접 만들어보고 싶다는 생각이 들었습니다.
          그래서 고등학교 1학년에 유니티 방과후를 들었습니다.
          <br />
          방과후에서 배운 지식을 바탕으로 고2 때에 Tiny Beluga라는 동아리를
          만들고, 친구들과 함께 Lost라는 게임을 개발하고 출시했습니다.
          <br />
          여러 장르를 시도합니다. 처음으로 출시해본 게임은 2D 플랫포머였고, 좋은
          아이디어만 있다면 다양하게 만들어보고 있습니다.
        </div>
        <div className="cv-item">
          <h5>Unity</h5>
          <span>게임 개발 동아리 Tiny Beluga에서 사용 중</span>
          <br />
          <span>개발한 게임 Steam 출시 경험</span>
          <br />
          <span>Unity Teams 활용한 협업 경험</span>
        </div>
        <div className="cv-item">
          <h5>Unreal Engine</h5>
          <span>게임 프로토타입 개발에 사용 중</span>
          <br />
          <span>언리얼 엔진과 서버를 연결하여 통계 내주는 서비스 개발</span>
          <br />
          <span>열심히 공부 중...</span>
        </div>
        <div className="cv-item">
          <h5>Tiny Beluga</h5>
          <span>인디 게임 개발 동아리</span>
          <br />
          <span>Unity 사용한 2D 플랫포머 게임 개발 / 출시 경험</span>
          <br />
          <span>차기작 얼심히 구상중...</span>
        </div>
      </section>
      <section id="project">
        <div className="page-title">
          <h2>Project Highlights</h2>
          <External.Small data={labeledExternals.GitHub} />
        </div>
        <div className="list">
          {highlighted.map((value) => (
            <Project data={value} />
          ))}
        </div>
        <Link to="/projects/">See More...</Link>
      </section>
      <section id="cv-technologies">
        <h2>Technologies</h2>
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
        <h2>Résumé</h2>
        <section id="cv-education">
          <h3>Education</h3>
          <div className="cv-item">
            <h5>
              <a
                href="https://gsm.gen.hs.kr"
                className="cv-item-title"
                title="광주소프트웨어마이스터고등학교"
              >
                <span className="lint">광주소프트웨어마이스터고등학교</span>
              </a>
            </h5>
            <span>광주광역시</span>
            <span>2018.03 ~ 2021.01</span>
            <br />
            <span>소프트웨어개발과</span>
          </div>
        </section>
        <section id="cv-experiences">
          <h3>Experiences</h3>
          <div className="cv-item">
            <h5>
              <a
                href="https://www.peoplefund.co.kr"
                className="cv-item-title"
                title="피플펀드컴퍼니"
                target="_blank"
              >
                <span className="lint">피플펀드컴퍼니</span>
              </a>
            </h5>
            <span>서울특별시</span>
            <span>2020.01 ~ 2020.02</span>
            <br />
            <span>백엔드 엔지니어 (현장실습)</span>
            <br />
            <span>계정 인증 미들웨어 및 일부 기능 리팩토링</span>
          </div>
        </section>
        <section id="cv-activities">
          <div className="page-title">
            <h3>Activities</h3>
            <External.Small
              data={{
                type: 'GitHub',
                link: 'https://github.com/startergate/Conferences',
                external_id: 'Conferences',
                image: {
                  src: 'externals/github.png',
                  background: '#24292e',
                },
              }}
            />
          </div>
          <div className="cv-item">
            <h5>글로벌 비즈쿨 CO-TDM 창업경진대회</h5>
            <span>2018.6</span>
            <span>최우수상</span>
            <br />
            <span>E-Faucet: 스마트 수도꼭지</span>
          </div>
          <div className="cv-item">
            <h5>GSM 창의알고리즘 콘테스트</h5>
            <span>2018.4</span>
            <span>장려상</span>
            <br />
            <span>M2C: Modular Multi Camera</span>
          </div>
          <div className="cv-item">
            <h5>GSM 팀프로젝트발표회</h5>
            <span>2020.9</span>
            <span>장려상</span>
            <br />
            <span>Eliverd</span>
          </div>
          <div className="cv-item">
            <h5>정보처리기능사</h5>
            <span>2019.3</span>
            <span>한국산업인력공단</span>
          </div>
          <div className="cv-item">
            <h5>TOEIC</h5>
            <span>2018.8</span>
            <span>865점</span>
          </div>
        </section>
        <section id="cv-group-activities">
          <h3>Group Activities</h3>
          <div className="cv-item">
            <h5>
              <a
                href="https://github.com/BeanSil"
                className="cv-item-title"
                title="빈실"
              >
                <span className="lint">빈실</span>
              </a>
            </h5>
            <span>광주소프트웨어마이스터고등학교</span>
            <span>웹 개발 동아리</span>
            <br />
            <span>동아리원</span>
            <span>2018.3 ~ 2020.8</span>
            <br />
            <span>부장</span>
            <span>2020.1 ~ 2020.8</span>
            <br />
            <span>프로젝트: DOTORI</span>
          </div>
          <div className="cv-item">
            <h5>
              <a
                href="https://github.com/tiny-beluga"
                className="cv-item-title"
                title="Tiny Beluga"
              >
                <span className="lint">Tiny Beluga</span>
              </a>
            </h5>
            <span>광주소프트웨어마이스터고등학교</span>
            <span>게임 개발 동아리</span>
            <br />
            <span>동아리원</span>
            <span>2019.3 ~ </span>
            <br />
            <span>부장</span>
            <span>2019.3 ~ </span>
            <br />
            <span>프로젝트: Lost</span>
          </div>
        </section>
        <a href="/cv.pdf" download>
          Download CV as PDF
        </a>
      </section>
      <section id="link">
        <h2>Links</h2>
        <div className="list">
          {externals.map((value) => {
            return <External.Icon data={value} />;
          })}
        </div>
      </section>
      <Overlay data={highlighted} />
    </Layout>
  );
};

export default IndexPage;

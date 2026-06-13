import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Language from '../components/profiles/language';
import * as External from '../components/profiles/external';
import Project from '../components/projects/simple';
import Overlay from '../components/projects/overlay';
import OriginalImage from '../components/images/originalImg';
import { ChevronDown } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

import './index.css';

export const Head = () => <SEO title="Home" />;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query getIndexData {
      backendProjects: allProjectsJson(
        sort: [{ isHighlighted: DESC }, { orderLevel: ASC }, { name: ASC }]
        filter: { type: { nin: ["Game"] } }
        limit: 4
      ) {
        nodes {
          id
          name
          description
          collaborators {
            name
            roles
          }
          startedAt
          finishedAt
          status
          type
          tags
          images {
            src
            description
          }
          links {
            type
            link
            external_id
          }
          imgSrc
          imgSrcOnLightMode
          imageIsTitle
          owner {
            name
            link
          }
          contents {
            title
            image
            ref
            text
          }
        }
      }
      gameProjects: allProjectsJson(
        sort: [{ isHighlighted: DESC }, { orderLevel: ASC }, { name: ASC }]
        filter: { type: { in: ["Game"] } }
        limit: 4
      ) {
        nodes {
          id
          name
          description
          collaborators {
            name
            roles
          }
          startedAt
          finishedAt
          status
          type
          tags
          images {
            src
            description
          }
          links {
            type
            link
            external_id
          }
          imgSrc
          imgSrcOnLightMode
          imageIsTitle
          owner {
            name
            link
          }
          contents {
            title
            image
            ref
            text
          }
        }
      }
      backendLanguages: allLanguagesJson(
        filter: { type: { in: ["Backend", "All"] } }
      ) {
        group(field: { level: SELECT }) {
          nodes {
            level
            id
            name
            image {
              background
              src
              cover
            }
            type
          }
          fieldValue
        }
      }
      gameLanguages: allLanguagesJson(
        filter: { type: { in: ["Game", "All"] } }
      ) {
        group(field: { level: SELECT }) {
          nodes {
            level
            id
            name
            image {
              background
              src
              cover
            }
            type
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
        }
      }
    }
  `);

  const { mode, setMode, theme } = useApp();

  const [showScrollHint, setShowScrollHint] = React.useState(true);
  React.useEffect(() => {
    const onScroll = () => setShowScrollHint(window.scrollY < 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const backendProjects = data.backendProjects.nodes;
  const gameProjects = data.gameProjects.nodes;
  const languages = mode === 'backend' ? data.backendLanguages.group : data.gameLanguages.group;
  const externals = data.allLinksJson.nodes;
  const groupedLanguages: any = {};
  const labeledExternals: any = {};

  languages.forEach((value) => {
    groupedLanguages[value['fieldValue']] = value.nodes;
  });

  externals.forEach((value) => {
    labeledExternals[value['type']] = value;
  });

  const currentProjects = mode === 'backend' ? backendProjects : gameProjects;
  const allHighlighted = [...backendProjects, ...gameProjects];

  const modeActions = (
    <div className={'float-actions'}>
      <button
        className={`mode-float-btn${mode === 'backend' ? ' active' : ''}`}
        onClick={() => setMode('backend')}
        aria-label="Backend Engineer 모드"
      >
        💻
      </button>
      <button
        className={`mode-float-btn${mode === 'game' ? ' active' : ''}`}
        onClick={() => setMode('game')}
        aria-label="Game Developer 모드"
      >
        🎮
      </button>
    </div>
  );

  return (
    <Layout bottomActions={modeActions}>
      <section
        className={'title'}
        id={'title'}
        style={{ width: '100%', height: '100vh' }}
      >
        <div>
          <h1>
            <span className={'slogan'}>Construct</span><span className={'slogan slogan-bracket'}> [<span className={'slogan-gap'} />]</span>
          </h1>
          <p className={'title-name monospace'}>STARTERGATE / 최호승</p>
          <p className={'work'}>
            {mode === 'backend' ? '백엔드 엔지니어' : '게임 개발자'}
          </p>
          <p className={'monospace'}>
            <a href={'mailto://me@startergate.dev'}>me@startergate.dev</a>
          </p>
        </div>
        <div
          className={`scroll-hint${showScrollHint ? '' : ' fade-out'}`}
          onClick={() => document.querySelector('section:not(.title)')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
        >
          <ChevronDown size={24} strokeWidth={1.5} />
        </div>
      </section>

      {mode === 'backend' && (
        <section id={'backend-dev'}>
          <h2>Backend Engineer</h2>
          <div className={'section-main serif'}>
            <p className={'section-punchline'}>
              백엔드 엔지니어입니다. 눈에 보이지 않는 걸 만듭니다.
            </p>
            <br />
            서버에서 돌아가는 프로그램과 그와 연결되는 프로그램을 만듭니다.
          </div>
          <div className={'cv-item'}>
            <h5>경험</h5>
            <span className={'serif'}>
              MAU 75만명을 처리하는 백엔드 서버부터 일 500만건 규모의 크롤링
              시스템, 4대 규모의 데이터베이스 클러스터 운영, 이를 운영하는
              클라우드와 온프레미스 여러곳에 분포된 인프라와 사내 네트워크 구축
              및 관리까지 다양한 업무를 경험했습니다.
            </span>
            <br />
            <br />
            <span className={'serif'}>
              학생 시절부터 개발 공부를 시작하여 약 9년의 개발 경험, 5년 3개월의
              현업 경력이 있습니다. 백엔드 개발부터 그와 연관된 프론트, 인프라,
              CI/CD도 개발한 경험이 있고, 프로젝트의 전체적인 아키텍처를 설계한
              경험도 여럿 있습니다.
            </span>
            <br />
            <br />
            <span className={'serif'}>
              서비스를 운영하며 비용 절감, 크레딧 활용, 특정 서비스의 필요 등의
              목적을 충족시키기 위해 아마존 웹 서비스, Google Cloud Platform,
              네이버 클라우드 플랫폼 등의 다양한 클라우드 서비스를 혼합하여
              서비스 구현 및 운영하였으며, 이로 인해 발생하는 비용이나 제한
              사항들을 경험했습니다.
            </span>
            <br />
            <br />
            <span className={'serif'}>
              페칭에서 서비스를 개발 및 운영하며 동료들은 물론, 베스핀글로벌과
              같은 MSP사부터, 스마트로, 포트원, 네이버 쇼핑과 같은 파트너사,
              페칭 파트너센터에 입접한 고객사, 과제 진행을 위한 공공기관까지
              여러 종류의 외부 기관과 소통 및 서비스 도입, API 연동 등의 다양한
              외부 협업을 경험했습니다.
            </span>
          </div>
          <div className={'cv-item'}>
            <h5>기술 스택</h5>
            <span className={'serif'}>
              TypeScript 기반으로 Node.js를 사용해서 개발하고 있습니다.
              현업에서는 5년 3개월간 근무한 페칭에서 백엔드부터 프론트, 크롤러,
              배치 프로그램 등 다양한 부분에 사용했습니다. 서버 프레임워크로는
              Nest.js를 사용했으며, 이외에도 Express.js와 Koa.js로 프로젝트를
              진행한 경험이 있습니다. 이전에는 피플펀드컴퍼니에서 1개월간
              근무하며 실무에서 Python을 사용한 경험이 있으며, Django 웹서버를
              개발했습니다.
            </span>
            <br />
            <br />
            <span className={'serif'}>
              데이터베이스는 MySQL 기반의 것을 주로 사용하고 있습니다. SQL
              쿼리를 직접 짜는 것은 물론 TypeORM을 통해서 사용한 프로젝트도
              있습니다. AWS 상에서 읽기 레플리카를 추가한 클러스터를 현업에서
              운영해본 경험이 있으며, 이를 AWS Aurora MySQL로 마이그레이션한 후
              운영한 경험이 있습니다. 이외에도 DynamoDB, Redis를 현업에서 캐싱
              등의 용도로 사용했습니다. 또한 RabbitMQ를 안정적인 시스템 운영 및
              태스크 분산 등의 목적으로 직접 서버를 구축하여 AWS SQS와 조합하여
              프로덕션 환경에서 운영했습니다.
            </span>
            <br />
            <br />
            <span className={'serif'}>
              AWS를 주력으로 사용하고 있으며, GCP, 네이버 클라우드 플랫폼도
              현업에서 사용했습니다. Elastic Cloud와 Grafana Cloud 와 같은
              클라우드 기반의 외부 서비스와도 AWS VPC Endpoint와 같은 서비스를
              통해 비용 효율적으로 연동하여 운영했습니다.
            </span>
            <br />
            <br />
            <span className={'serif'}>
              GitHub Action을 통한 CI/CD를 구축하여 프로덕션 환경에서
              사용하였으며, AWS SDK를 통한 배포 로직을 구현 및 운영했습니다.
              배포된 서비스의 안정적인 운영을 위해서 Sentry, Grafana와 자체 구현
              서비스를 통한 클라우드와 온프레미스 모니터링 시스템을 구현하여
              Slack과 연동하여 운영했습니다.
            </span>
          </div>
        </section>
      )}

      {mode === 'game' && (
        <section id={'game-dev'}>
          <h2>Game Developer</h2>
          <div className={'section-main serif'}>
            <p className={'section-punchline'}>
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
            여러 장르를 시도합니다. 처음으로 출시해본 게임은 2D 플랫포머였고,
            좋은 아이디어만 있다면 다양하게 만들어보고 있습니다.
          </div>
          <div className={'cv-item'}>
            <h5>Unity</h5>
            <span className={'serif'}>
              게임 개발 동아리 Tiny Beluga에서 사용 중
            </span>
            <br />
            <span className={'serif'}>개발한 게임 Steam 출시 경험</span>
            <br />
            <span className={'serif'}>Unity Teams 활용한 협업 경험</span>
          </div>
          <div className={'cv-item'}>
            <h5>Unreal Engine</h5>
            <span className={'serif'}>게임 프로토타입 개발에 사용 중</span>
            <br />
            <span className={'serif'}>
              언리얼 엔진과 서버를 연결하여 통계 내주는 서비스 개발
            </span>
            <br />
            <span className={'serif'}>열심히 공부 중...</span>
          </div>
          <div className={'cv-item'}>
            <h5>Tiny Beluga</h5>
            <span className={'serif'}>인디 게임 개발 동아리</span>
            <br />
            <span className={'serif'}>
              Unity 사용한 2D 플랫포머 게임 개발 / 출시 경험
            </span>
            <br />
            <span className={'serif'}>차기작 열심히 구상 중...</span>
          </div>
        </section>
      )}

      <section id={'project'}>
        <div className={'page-title'}>
          <h2>Project Highlights</h2>
          <External.Small data={labeledExternals.GitHub} />
        </div>
        <div className={'list'}>
          {currentProjects.map((value, index) => (
            <Project data={value} key={index} />
          ))}
        </div>
        <Link to={'/projects/'}>See More...</Link>
      </section>

      <section id={'cv-technologies'}>
        <div className={'page-title'}>
          <h2>Technologies</h2>
          <External.Small data={labeledExternals.StackShare} />
        </div>
        <div id={'cv-languages-using'}>
          <h4>Using</h4>
          <div className={'list'}>
            {groupedLanguages.using?.map((value, index) => (
              <Language data={value} key={index} />
            ))}
          </div>
        </div>
        <div id={'cv-languages-learned'}>
          <h4>Learned / Used</h4>
          <div className={'list'}>
            {groupedLanguages.learned?.map((value, index) => (
              <Language data={value} key={index} />
            ))}
          </div>
        </div>
        <div id={'cv-languages-learning'}>
          <h4>Learning / Interested</h4>
          <div className={'list'}>
            {groupedLanguages.learning?.map((value, index) => (
              <Language data={value} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section id={'cv'}>
        <h2>Résumé</h2>
        <section id={'cv-experiences'}>
          <h3>Experiences</h3>
          <div className={'cv-item'}>
            <h5>
              <a
                href={'https://fetching.co.kr'}
                className={'cv-item-title noLint'}
                title={'FETCHING'}
                target={'_blank'}
              >
                <span style={{ paddingTop: 8 }}>
                  <picture>
                    <OriginalImage
                      src={'teams/fetching.svg'}
                      alt={'FETCHING'}
                      style={{
                        height: '22px',
                        background: 'white',
                      }}
                    />
                  </picture>
                </span>
                <picture>
                  <OriginalImage
                    src={'teams/fetching-old.jpg'}
                    alt={'FETCHING'}
                    style={{
                      background: 'white',
                    }}
                  />
                </picture>
              </a>
            </h5>
            <span className={'serif'}>서울특별시 성동구</span>
            <span className={'line-through serif'}>서울특별시 강남구</span>
            <span className={'line-through serif'}>경기도 성남시</span>
            <br />
            <span className={'serif'}>2020.12 ~ 2026.03 (5년 3개월)</span>
            <br />
            <span className={'serif'}>백엔드 엔지니어</span>
            <br />
            <br />
            <span className={'serif'}>
              MAU 75만명을 처리하는 백엔드 서버, 일 500만건 규모의 크롤링
              시스템, 주문 및 커머스 컨텐츠 관리부터 회계 시스템을 포함한 다양한
              기능의 어드민과 이를 운영하는 인프라와 사내 네트워크 관리까지
              다양한 업무를 경험했습니다.
            </span>
            <span className={'serif'}>
              사내 어드민, 커머스, 상품 수집 시스템 등 회사의 모든 프로덕트
              개발에 참여하였고, 몇몇 프로젝트는 초기부터 담당하여 전체적인
              아키텍처까지 직접 설계하고 구축했습니다.
            </span>
            <br />
            <br />
            <span className={'serif'}>
              개발한 프로덕트의 운영에도 모두 참여했으며, 비용이 제한된 환경에서
              효율적이고 안정적으로 데이터베이스를 운영하고, 자동 빌드 및 AWS
              클라우드 환경과 온프레미스 환경에 자동 배포하는 등의 CI/CD를 직접
              구축했습니다.
            </span>
          </div>
          <div className={'cv-item'}>
            <h5>
              <a
                href={'https://www.pfct.co.kr/'}
                className={'cv-item-title noLint'}
                title={'피플펀드컴퍼니'}
                target={'_blank'}
              >
                <OriginalImage
                  src={
                    theme === 'dark'
                      ? 'teams/peoplefund_white.png'
                      : 'teams/peoplefund.png'
                  }
                  alt={'피플펀드컴퍼니'}
                />
                <span className={'text-xs'}>(현. 피에프씨테크놀로지스)</span>
              </a>
            </h5>
            <span className={'serif'}>서울특별시 강남구</span>
            <br />
            <span className={'serif'}>2020.01 ~ 2020.02 (1개월)</span>
            <br />
            <span className={'serif'}>백엔드 엔지니어 (현장실습)</span>
            <br />
            <br />
            <span className={'serif'}>
              고등학교 2학년 겨울방학에 현장실습으로 1개월간 근무했습니다. 계정 인증 미들웨어를 개선했고 및 일부 기능 리팩토링을 진행했습니다.
            </span>
          </div>
        </section>
        <section id={'cv-education'}>
          <h3>Education</h3>
          <div className={'cv-item'}>
            <h5>
              <a
                href={'http://gsm.gen.hs.kr'}
                className={'cv-item-title noLint'}
                title={'광주소프트웨어마이스터고등학교'}
                target={'_blank'}
              >
                <OriginalImage
                  src={theme === 'dark' ? 'teams/gsm_white.webp' : 'teams/gsm.webp'}
                  alt={'광주소프트웨어마이스터고등학교'}
                  style={{ height: '64px' }}
                />
              </a>
            </h5>
            <span className={'serif'}>광주광역시</span>
            <span className={'serif'}>2018.03 ~ 2021.01</span>
            <br />
            <span className={'serif'}>
              <a
                href={
                  'http://gsm.gen.hs.kr/sub/page.php?page_code=info_06#department01'
                }
                title={'소프트웨어개발과'}
                target={'_blank'}
              >
                소프트웨어개발과
              </a>
            </span>
          </div>
        </section>
        <section id={'cv-activities'}>
          <div className={'page-title'}>
            <h3>Activities</h3>
            <External.Small
              data={{
                type: 'GitHub',
                link: 'https://github.com/startergate/Conferences',
                external_id: 'Conferences',
              }}
            />
          </div>
          <div className={'cv-item'}>
            <h5>글로벌 비즈쿨 CO-TDM 창업경진대회</h5>
            <span className={'serif'}>2018.6</span>
            <span className={'serif'}>최우수상</span>
            <br />
            <span className={'serif'}>E-Faucet: 스마트 수도꼭지</span>
          </div>
          <div className={'cv-item'}>
            <h5>GSM 창의알고리즘 콘테스트</h5>
            <span className={'serif'}>2018.4</span>
            <span className={'serif'}>장려상</span>
            <br />
            <span className={'serif'}>M2C: Modular Multi Camera</span>
          </div>
          <div className={'cv-item'}>
            <h5>GSM 소프트웨어 개발 경진 콘테스트</h5>
            <span className={'serif'}>2019</span>
            <span className={'serif'}>장려상</span>
            <br />
            <span className={'serif'}>
              <a href={'/project/The Intersection'}>The Intersection</a>
            </span>
          </div>
          <div className={'cv-item'}>
            <h5>GSM 팀프로젝트발표회</h5>
            <span className={'serif'}>2020.9</span>
            <span className={'serif'}>장려상</span>
            <br />
            <span className={'serif'}>
              <a href={'/project/Eliverd'}>Eliverd</a>
            </span>
          </div>
          <div className={'cv-item'}>
            <h5>GSM 전공 동아리 해커톤 대회</h5>
            <span className={'serif'}>2020.9</span>
            <span className={'serif'}>장려상</span>
            <br />
            <span className={'serif'}>
              <a href={'/project/GSM Pay'}>GSM Pay</a>
            </span>
          </div>
          <div className={'cv-item'}>
            <h5>정보처리기능사</h5>
            <span className={'serif'}>2019.3</span>
            <span className={'serif'}>한국산업인력공단</span>
          </div>
          <div className={'cv-item'}>
            <h5>TOEIC</h5>
            <span className={'serif'}>2018.8</span>
            <span className={'serif'}>865점</span>
          </div>
        </section>
        <section id={'cv-group-activities'}>
          <h3>Group Activities</h3>
          <div className={'cv-item'}>
            <h5>
              <a
                href={'https://github.com/BeanSil'}
                className={'cv-item-title'}
                title={'빈실'}
              >
                <span className={'lint'}>빈실</span>
              </a>
            </h5>
            <span className={'serif'}>광주소프트웨어마이스터고등학교</span>
            <span className={'serif'}>웹 개발 동아리</span>
            <br />
            <span className={'serif'}>동아리원</span>
            <span className={'serif'}>2018.3 ~ 2020.8</span>
            <br />
            <span className={'serif'}>부장</span>
            <span className={'serif'}>2020.1 ~ 2020.8</span>
            <br />
            <span className={'serif'}>
              프로젝트: <a href={'/project/DOTORI'}>DOTORI</a>,{' '}
              <a href={'/project/GSM Pay'}>GSM Pay</a>
            </span>
          </div>
          <div className={'cv-item'}>
            <h5>
              <a
                href={'https://github.com/tiny-beluga'}
                className={'cv-item-title'}
                title={'Tiny Beluga'}
              >
                <span className={'lint'}>Tiny Beluga</span>
              </a>
            </h5>
            <span className={'serif'}>광주소프트웨어마이스터고등학교</span>
            <span className={'serif'}>게임 개발 동아리</span>
            <br />
            <span className={'serif'}>동아리원</span>
            <span className={'serif'}>2019.3 ~ </span>
            <br />
            <span className={'serif'}>부장</span>
            <span className={'serif'}>2019.3 ~ </span>
            <br />
            <span className={'serif'}>
              프로젝트: <a href={'/project/Lost'}>Lost</a>
            </span>
          </div>
        </section>
        <External.Small
          data={{
            type: 'Download',
            link: '/cv.pdf',
            external_id: 'Download CV as PDF',
          }}
          download
        />
      </section>
      <section id={'link'}>
        <h2>Links</h2>
        <div className={'list'}>
          {externals.map((value, index) => {
            return <External.Icon data={value} key={index} />;
          })}
        </div>
      </section>
      <Overlay data={allHighlighted} />
    </Layout>
  );
};

export default IndexPage;
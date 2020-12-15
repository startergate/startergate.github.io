import * as React from 'react';

import LanguageColor from '../../enums/langs';
import getKoreanDateString from '../../util/getKoreanDateString';

import Image from '../images/image';
import FullImage from '../images/fullImage';
import * as External from '../profiles/external';

import LanguageBadge from './projectLanguage';
import Contributor from './contributor';
import MarkdownLoader from './mdLoader';

import './overlay.css';
import './detail.css';

const ProjectDetail = ({ data }) => {
  return (
    <div className="overlay-item project-detail" id={'overlay-' + data.id}>
      <div className="project-detail-title">
        <Image className="project-detail-icon" src={data.imgSrc} />
        <h2 className="project-detail-name">{data.name}</h2>
        <div className="project-detail-description">{data.description}</div>
        <div className={'project-detail-contributors'}>
          {data.collaborators?.map((person) => (
            <Contributor data={person} />
          ))}
        </div>
        <div className="project-card-tags">
          {data.tags.map((value) => (
            <LanguageBadge tag={value} />
          ))}
        </div>
        <div className={'project-detail-time'}>
          <div className={'project-detail-progression'}>
            <div className={'progress-bar'}>
              <div
                className={'progress'}
                style={{
                  backgroundColor: LanguageColor[data.tags[0]],
                  width: data.finishedAt
                    ? `100%`
                    : data.status === `Planning`
                    ? '0%'
                    : '50%',
                }}
              >
                <svg
                  width={'24px'}
                  className={'progress-bar-icon'}
                  viewBox={'0 0 31.9 28.000643'}
                >
                  <g transform={'translate(-4.8,-5.9)'}>
                    <path d="m33.5 22.5c-1.9 0.1-6.7-0.1-6.7-0.1s-8.2 11.6-9.5 11.5c-1.2-0.1-2.6-0.4-2.6-0.4s6-11.4 4.5-11.3-8.1-0.2-8.1-0.2-3.7 4.6-4.1 4.5c-0.4 0-2.2-0.2-2.2-0.2s2.1-5.2 2.1-6.4v-0.1c0-1.2-2.1-6.4-2.1-6.4s1.7-0.2 2.2-0.2c0.4 0 4.2 4.5 4.2 4.5s6.6-0.3 8.1-0.2-4.5-11.3-4.5-11.3 1.2-0.2 2.5-0.3c1.3 0.1 9.6 11.7 9.6 11.7s4.8-0.1 6.7-0.1c1.9 0.1 3.1 2.5 3.1 2.5-0.1 0.2-1.3 2.5-3.2 2.5z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <span className={`project-detail-time-start`}>
            {getKoreanDateString(new Date(data.startedAt))}
          </span>
          <span className={`project-detail-time-elapsed`}>
            {data.finishedAt
              ? `${
                  (new Date(data.finishedAt).getTime() -
                    new Date(data.startedAt).getTime()) /
                  86400000
                }일`
              : data.status === 'Planning'
              ? '계획 중'
              : '개발 중'}
          </span>
          <span className={`project-detail-time-end`}>
            {data.finishedAt
              ? getKoreanDateString(new Date(data.finishedAt))
              : ''}
          </span>
        </div>
        <span
          className={'project-detail-exit'}
          onClick={() => {
            const overlay = document.querySelector('.project-overlay');
            overlay.dispatchEvent(
              new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
              })
            );
          }}
        >
          <svg viewBox="0 0 12 12" version="1.1">
            <line x1="1" y1="11" x2="11" y2="1" strokeWidth="1" />
            <line x1="1" y1="1" x2="11" y2="11" strokeWidth="1" />
          </svg>
        </span>
      </div>
      {data.images ? (
        <div className={"project-detail-content"}>
          <div className={'project-detail-images'}>
            {data.images?.map(({ src, description }) => (
              <FullImage className={'project-detail-image'} src={src} title={description} />
            ))}
          </div>
        </div>
      ) : null}
      {data.contents ? (
        <div className="project-detail-content">
          {data.contents?.map(({ title, image, ref, text }) => (
            <div className="project-detail-content-item">
              <h5>{title}</h5>
              <FullImage src={image} />
              {ref ? <MarkdownLoader path={ref} /> : text}
            </div>
          ))}
        </div>
      ) : null}
      <div className="project-detail-links">
        {data.links.map((link) => (
          <External.Small data={link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;

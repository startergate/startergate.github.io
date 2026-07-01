import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Badge from '../images/badge';
import Thumbnail from '../images/thumbnail';

import Links from '../../enums/links';

import './badge.css';
import './external.css';

const Icon = ({ data }) => {
  return (
    <a
      className={'badge-external noLint'}
      href={data.link}
      title={data.type}
      target={'_blank'}
    >
      <span
        className={'badge badge-external-icon'}
        style={{
          backgroundColor: Links[data.type].background || '#FFFFFF',
        }}
      >
        <Thumbnail
          className={'badge-image badge-external-icon-image'}
          src={Links[data.type].src}
        />
      </span>
      <span className={'badge-external-text'}>
        <h6>
          <span className={'lint'}>{data.type}</span>
        </h6>
        <span className={'lint'}>{data.external_id}</span>
      </span>
    </a>
  );
};

const Small = ({ data, ...props }) => (
  <a
    className={'badge badge-external-small noLintAbsolute'}
    style={{
      backgroundColor: Links[data.type]?.background || '#FFFFFF',
    }}
    href={data.link}
    title={data.type}
    target={'_blank'}
    {...props}
  >
    <Badge className={'badge-external-small-image'} src={Links[data.type].src} />
    <span
      className={'badge-external-small-id'}
      style={{
        color: Links[data.type]?.background ? '#FFFFFF' : '#000000',
      }}
    >
      {data.external_id}
    </span>
  </a>
);

interface DownloadOption {
  label: string;
  link: string;
  filename: string;
}

interface DownloadDropdownProps {
  options: DownloadOption[];
}

const DownloadDropdown = ({ options }: DownloadDropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={'download-dropdown'} ref={ref}>
      <button
        className={'badge badge-external-small badge-external-small--button noLintAbsolute'}
        style={{ backgroundColor: Links['Download'].background }}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <Badge className={'badge-external-small-image'} src={Links['Download'].src} />
        <span className={'badge-external-small-id'}>Download CV</span>
      </button>
      {open && (
        <ul className={'download-dropdown-menu'}>
          {options.map(opt => (
            <li key={opt.link}>
              <a
                href={opt.link}
                download={opt.filename}
                onClick={() => setOpen(false)}
              >
                {opt.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Small, Icon, DownloadDropdown };

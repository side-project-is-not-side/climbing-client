import * as React from 'react';

/* eslint-disable react/prop-types */
const SvgLogoNaver = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}
    style={props.style ?? {}}
    {...props}
  >
    <g clipPath="url(#logo_naver_svg__a)">
      <path fill="#03C75A" d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12" />
      <path
        fill={props.color ?? '#fff'}
        d="m13.56 12.309-3.246-4.652H7.623v8.686h2.817v-4.651l3.246 4.65h2.691V7.658H13.56z"
      />
    </g>
    <defs>
      <clipPath id="logo_naver_svg__a">
        <path fill={props.color ?? '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoNaver;

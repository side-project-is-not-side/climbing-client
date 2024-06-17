import * as React from 'react';

/* eslint-disable react/prop-types */
const SvgLoudSpeaker = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}
    style={props.style ?? {}}
    {...props}
  >
    <g clipPath="url(#loud-speaker_svg__a)">
      <path
        fill={props.color ?? '#fff'}
        fillRule="evenodd"
        d="M19 4.741V8a3 3 0 1 1 0 6v3c0 1.648-1.881 2.589-3.2 1.6l-2.06-1.546A8.66 8.66 0 0 0 10 15.446v2.844a2.71 2.71 0 0 1-5.316.744l-1.57-5.496a4.7 4.7 0 0 1 3.326-7.73l3.018-.168a9.34 9.34 0 0 0 4.19-1.259l2.344-1.368C17.326 2.236 19 3.197 19 4.741M5.634 15.078l.973 3.407A.71.71 0 0 0 8 18.29v-3.01l-1.56-.087a4.7 4.7 0 0 1-.806-.115M17 4.741 14.655 6.11A11.34 11.34 0 0 1 10 7.604v5.819c1.787.246 3.488.943 4.94 2.031L17 17zM8 7.724l-1.45.08a2.7 2.7 0 0 0-.17 5.377l.17.015 1.45.08zM19 10v2a1 1 0 0 0 .117-1.993z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="loud-speaker_svg__a">
        <path fill={props.color ?? '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLoudSpeaker;

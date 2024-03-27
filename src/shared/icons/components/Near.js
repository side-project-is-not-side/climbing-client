import * as React from 'react';

/* eslint-disable react/prop-types */
const SvgNear = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}
    style={props.style ?? {}}
    {...props}
  >
    <mask
      id="near_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#near_svg__a)">
      <path
        fill={props.color ?? '#fff'}
        d="m12.9 21-2.85-7.05L3 11.1V9.7L21 3l-6.7 18zm.65-3.7L17.6 6.4 6.7 10.45l4.9 1.95z"
      />
    </g>
  </svg>
);
export default SvgNear;

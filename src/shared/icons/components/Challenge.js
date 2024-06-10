import * as React from 'react';

/* eslint-disable react/prop-types */
const SvgChallenge = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    width={props.width ?? 24}
    height={props.height ?? 24}
    style={props.style ?? {}}
    {...props}
  >
    <mask
      id="challenge_svg__a"
      width={24}
      height={25}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 .817h24v24H0z" />
    </mask>
    <g mask="url(#challenge_svg__a)">
      <path
        fill={props.color ?? '#fff'}
        d="M6 23.817v-8.225l-3.25-5.275 4.625-7.5h9.25l4.625 7.5L18 15.592v8.225l-6-2zm2-2.775 4-1.325 4 1.325v-3.225H8zm.5-16.225-3.4 5.5 3.4 5.5h7l3.4-5.5-3.4-5.5zm2.45 9.575L7.4 10.867l1.425-1.425 2.125 2.125 4.225-4.25 1.425 1.4z"
      />
    </g>
  </svg>
);
export default SvgChallenge;

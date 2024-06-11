import * as React from 'react';

/* eslint-disable react/prop-types */
const SvgMarkerCurrent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 30 30"
    width={props.width ?? 24}
    height={props.height ?? 24}
    style={props.style ?? {}}
    {...props}
  >
    <g filter="url(#marker-current_svg__a)">
      <circle cx={15} cy={15} r={10} fill={props.color ?? '#fff'} />
    </g>
    <circle cx={15} cy={15} r={7} fill="#F54" />
    <defs>
      <filter
        id="marker-current_svg__a"
        width={30}
        height={30}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset />
        <feGaussianBlur stdDeviation={2.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1043_631" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1043_631" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgMarkerCurrent;

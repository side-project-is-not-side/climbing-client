import * as React from 'react';

/* eslint-disable react/prop-types */
const SvgMarkerSelected = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 51 47"
    width={props.width ?? 24}
    height={props.height ?? 24}
    style={props.style ?? {}}
    {...props}
  >
    <g clipPath="url(#marker-selected_svg__a)" filter="url(#marker-selected_svg__b)">
      <mask
        id="marker-selected_svg__c"
        width={32}
        height={28}
        x={9}
        y={5}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill={props.color ?? '#fff'} d="M41 5H9v28h32z" />
      </mask>
      <g mask="url(#marker-selected_svg__c)">
        <path
          fill="#F54"
          d="m27.9 7.903 11.707 20.31C40.836 30.344 39.291 33 36.822 33H13.406c-2.468 0-4.014-2.656-2.786-4.787l11.708-20.31c1.235-2.14 4.337-2.14 5.571 0"
        />
        <path
          fill={props.color ?? '#fff'}
          d="M15.491 27.219c.44 0 .797-.356.797-.794a.795.795 0 0 0-.797-.793.795.795 0 0 0-.797.793c0 .438.357.794.797.794M21.64 17.356c.44 0 .798-.355.798-.793a.795.795 0 0 0-.797-.794.795.795 0 0 0-.797.794c0 .438.356.793.797.793M23.007 12.255c.44 0 .797-.355.797-.794a.795.795 0 0 0-.797-.793.795.795 0 0 0-.797.793c0 .439.357.794.797.794M35.99 30.506c.44 0 .796-.355.796-.793a.795.795 0 0 0-.797-.794.795.795 0 0 0-.797.794c0 .438.357.793.797.793"
        />
      </g>
    </g>
    <defs>
      <clipPath id="marker-selected_svg__a">
        <path fill={props.color ?? '#fff'} d="M9 5h32v28H9z" />
      </clipPath>
      <filter
        id="marker-selected_svg__b"
        width={52}
        height={48}
        x={-1}
        y={-1}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_368_1041" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_368_1041" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgMarkerSelected;

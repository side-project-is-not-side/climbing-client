import * as React from 'react';

/* eslint-disable react/prop-types */
const SvgLogoKakao = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}
    style={props.style ?? {}}
    {...props}
  >
    <g clipPath="url(#logo_kakao_svg__a)">
      <path
        fill="#FFE812"
        d="M24 22.125C24 23.161 23.16 24 22.125 24H1.875A1.875 1.875 0 0 1 0 22.125V1.875C0 .839.84 0 1.875 0h20.25C23.161 0 24 .84 24 1.875z"
      />
      <path
        fill="#000"
        d="M12 3.375c-5.385 0-9.75 3.442-9.75 7.688 0 2.744 1.825 5.153 4.57 6.513-.15.515-.96 3.314-.992 3.533 0 0-.02.165.088.228.107.064.232.015.232.015.307-.043 3.558-2.326 4.12-2.723q.844.12 1.732.121c5.385 0 9.75-3.442 9.75-7.687 0-4.246-4.365-7.688-9.75-7.688"
      />
    </g>
    <defs>
      <clipPath id="logo_kakao_svg__a">
        <path fill={props.color ?? '#fff'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoKakao;

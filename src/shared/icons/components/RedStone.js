import * as React from 'react';

/* eslint-disable react/prop-types */
const SvgRedStone = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 15"
    width={props.width ?? 24}
    height={props.height ?? 24}
    style={props.style ?? {}}
    {...props}
  >
    <path
      fill="#F54"
      d="M1.738 3.326c-.296 1.01-.208 2.091-.373 3.131C1.034 8.539-.303 10.656.512 12.6c.615 1.468 2.342 2.233 3.93 2.14s3.051-.88 4.365-1.779c.454-.31.913-.642 1.45-.759.894-.193 1.799.25 2.713.27 1.59.032 3.05-1.442 3-3.032-.038-1.214-.826-2.292-1.772-3.053s-2.06-1.28-3.083-1.934a13.5 13.5 0 0 1-2.752-2.325C7.827 1.535 7.385.676 6.592.398 4.672-.28 2.256 1.555 1.738 3.325"
    />
    <circle cx={5.101} cy={3.921} r={0.548} fill="#000" />
    <path fill="#000" d="M8.094 8.432a.927.927 0 1 1-1.855 0 .927.927 0 0 1 1.855 0" />
  </svg>
);
export default SvgRedStone;

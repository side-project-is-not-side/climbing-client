import * as React from 'react';

/* eslint-disable react/prop-types */
const SvgLocation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    width={props.width ?? 24}
    height={props.height ?? 24}
    style={props.style ?? {}}
    {...props}
  >
    <mask
      id="location_svg__a"
      width={20}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#location_svg__a)">
      <path
        fill="#8B8D8E"
        d="M10.004 10q.621 0 1.059-.442.437-.443.437-1.062 0-.621-.442-1.059A1.46 1.46 0 0 0 9.996 7q-.621 0-1.059.442A1.46 1.46 0 0 0 8.5 8.504q0 .621.442 1.059.443.437 1.062.437M10 16.02q2.48-2.228 3.74-4.103T15 8.563q0-2.188-1.427-3.626T10 3.5 6.427 4.938Q5 6.375 5 8.563q0 1.479 1.26 3.354T10 16.02M10 18q-3.27-2.73-4.885-5.074T3.5 8.563q0-2.792 1.854-4.678Q7.208 2 9.99 2q2.78 0 4.645 1.885T16.5 8.563q0 2.02-1.604 4.354T10 18"
      />
    </g>
  </svg>
);
export default SvgLocation;

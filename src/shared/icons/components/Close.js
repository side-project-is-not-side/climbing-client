import * as React from 'react';

/* eslint-disable react/prop-types */
const SvgClose = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    width={props.width ?? 24}
    height={props.height ?? 24}
    style={props.style ?? {}}
    {...props}
  >
    <path
      fill={props.color ?? '#fff'}
      d="M5.2 16 4 14.8 8.8 10 4 5.2 5.2 4 10 8.8 14.8 4 16 5.2 11.2 10l4.8 4.8-1.2 1.2-4.8-4.8z"
    />
  </svg>
);
export default SvgClose;

import * as React from 'react';

/* eslint-disable react/prop-types */
const SvgArrowBack = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 7 12"
    width={props.width ?? 24}
    height={props.height ?? 24}
    style={props.style ?? {}}
    {...props}
  >
    <path fill={props.color ?? '#fff'} d="M5.899.167.066 6l5.833 5.833 1.035-1.035L2.137 6l4.797-4.798z" />
  </svg>
);
export default SvgArrowBack;

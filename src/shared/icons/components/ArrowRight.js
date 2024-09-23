import * as React from 'react';

/* eslint-disable react/prop-types */
const SvgArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}
    style={props.style ?? {}}
    {...props}
  >
    <path fill={props.color ?? '#fff'} d="m9.121 19 7-7-7-7L7.88 6.242 13.636 12 7.88 17.758z" />
  </svg>
);
export default SvgArrowRight;

import * as React from 'react';

/* eslint-disable react/prop-types */
const SvgDropdownArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    width={props.width ?? 24}
    height={props.height ?? 24}
    style={props.style ?? {}}
    {...props}
  >
    <path stroke={props.color ?? '#fff'} d="m15 8-5 4-5-4" />
  </svg>
);
export default SvgDropdownArrow;

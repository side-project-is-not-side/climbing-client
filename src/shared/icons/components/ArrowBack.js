import * as React from 'react';

/* eslint-disable react/prop-types */
const SvgArrowBack = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    width={props.width ?? 24}
    height={props.height ?? 24}
    style={props.style ?? {}}
    {...props}
  >
    <path fill={props.color ?? '#fff'} d="M12.399 4.167 6.566 10l5.833 5.833 1.035-1.035L8.637 10l4.797-4.798z" />
  </svg>
);
export default SvgArrowBack;

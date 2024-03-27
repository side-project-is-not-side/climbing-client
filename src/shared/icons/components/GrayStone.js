import * as React from 'react';

/* eslint-disable react/prop-types */
const SvgGrayStone = (props) => (
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
      fill="#8B8D8E"
      d="M1.017 7.196c.175 1.871 2.058 3.09 2.804 4.815.553 1.277.454 2.77 1.061 4.021 1.068 2.2 4.227 2.86 6.317 1.592.718-.437 1.343-1.056 2.147-1.303 1.193-.367 2.51.17 3.723-.128 1.582-.39 2.52-2.138 2.524-3.766.006-1.629-.7-3.166-1.392-4.64C17.191 5.633 16 3.3 13.803 2.386c-2.428-1.011-4.912.25-7.346.56-2.325.299-5.728 1.166-5.44 4.25"
    />
    <circle cx={6.467} cy={6.765} r={0.677} fill="#222427" />
    <circle cx={15.317} cy={9.472} r={0.677} fill="#222427" />
    <circle cx={10.632} cy={9.473} r={1.406} fill="#000" />
  </svg>
);
export default SvgGrayStone;

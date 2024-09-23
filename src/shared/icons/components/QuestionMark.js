import * as React from 'react';

/* eslint-disable react/prop-types */
const SvgQuestionMark = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={props.width ?? 24}
    height={props.height ?? 24}
    style={props.style ?? {}}
    {...props}
  >
    <path
      fill="#8B8D8E"
      d="M7.62 10.348C7.344 8.259 9.468 7.49 9.468 6.063c0-.72-.444-1.296-1.296-1.296-.6 0-1.128.288-1.548.768L6 4.96c.552-.636 1.32-1.104 2.292-1.104 1.356 0 2.244.828 2.244 2.136 0 1.764-2.16 2.472-1.944 4.357zm.516 2.807c-.432 0-.792-.335-.792-.827 0-.505.36-.852.792-.852.444 0 .804.347.804.851 0 .492-.36.829-.804.829"
    />
    <path
      fill="#8B8D8E"
      fillRule="evenodd"
      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgQuestionMark;

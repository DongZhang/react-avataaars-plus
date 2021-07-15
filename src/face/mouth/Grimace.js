import React from 'react';

// Utils
import { uniqueId } from 'lodash';

const Grimace = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');

  return (
    <g transform="translate(2, 52)">
      <defs>
        <rect id={path1} x="24" y="9" width="60" height="22" rx="11"></rect>
      </defs>
      <g
        id="mouth-grimace"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="grimace-outer"
          fillOpacity="0.599999964"
          fill="#000000"
          x="22"
          y="7"
          width="64"
          height="26"
          rx="13"
        ></rect>
        <mask id={mask1} fill="white">
          <use xlinkHref={`#${path1}`}></use>
        </mask>
        <use id="mouth" fill="#FFFFFF" xlinkHref={`#${path1}`}></use>
        <path
          d="M36,6 L35.9993333,17.999 L44.9993333,17.999 L45,6 L49,6 L48.9993333,17.999 L57.9993333,17.999 L58,6 L62,6 L61.9993333,17.999 L70.9993333,17.999 L71,6 L75,6 L74.9993333,17.999 L83.8666667,18 L83.8666667,22 L74.9993333,21.999 L75,34 L71,34 L70.9993333,21.999 L61.9993333,21.999 L62,34 L58,34 L57.9993333,21.999 L48.9993333,21.999 L49,34 L45,34 L44.9993333,21.999 L35.9993333,21.999 L36,34 L32,34 L31.9993333,21.999 L24,22 L24,18 L31.9993333,17.999 L32,6 L36,6 Z"
          id="grimace-teeth"
          fill="#E6E6E6"
          mask={`url(#${mask1})`}
        ></path>
      </g>
    </g>
  );
};

export default Grimace;

import React from 'react';

// Utils
import { uniqueId } from 'lodash';

const Squint = () => {
  const path1 = uniqueId('react-path-');
  const path2 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');
  const mask2 = uniqueId('react-mask-');

  return (
    <g>
      {' '}
      <defs>
        <path
          d="M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z"
          id={path1}
        ></path>
        <path
          d="M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z"
          id={path2}
        ></path>
      </defs>
      <g id="eyes-squint">
        <g id="eye-left" transform="translate(16.000000, 13.000000)">
          <mask id={mask1} fill="white">
            <use xlinkHref={`#${path1}`}></use>
          </mask>
          <use id="eyeball-left" fill="#FFFFFF" xlinkHref={`#${path1}`}></use>
          <circle
            fillOpacity="0.7"
            fill="#000000"
            mask={`url(#${mask1})`}
            cx="14"
            cy="10"
            r="6"
          ></circle>
        </g>
        <g id="eye-right" transform="translate(68.000000, 13.000000)">
          <mask id={mask2} fill="white">
            <use xlinkHref={`#${path2}`}></use>
          </mask>
          <use id="eyeball-right" fill="#FFFFFF" xlinkHref={`#${path2}`}></use>
          <circle
            fillOpacity="0.7"
            fill="#000000"
            mask={`url(#${mask2})`}
            cx="14"
            cy="10"
            r="6"
          ></circle>
        </g>
      </g>
    </g>
  );
};

export default Squint;

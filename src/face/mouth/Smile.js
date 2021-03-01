import React from 'react';

// Utils
import { uniqueId } from 'lodash';

const Smile = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');

  return (
    <g transform="translate(2, 52)">
      <defs>
        <path
          d="M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z"
          id={path1}
        ></path>
      </defs>
      <g
        id="mouth-smile"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <mask id={mask1} fill="white">
          <use xlinkHref={`#${path1}`}></use>
        </mask>
        <use
          id="mouth"
          fillOpacity="0.699999988"
          fill="#000000"
          xlinkHref={`#${path1}`}
        ></use>
        <path
          d="M44,2 L65,2 C67.7614237,2 70,4.23857625 70,7 L70,13 C70,15.7614237 67.7614237,18 65,18 L44,18 C41.2385763,18 39,15.7614237 39,13 L39,7 C39,4.23857625 41.2385763,2 44,2 Z"
          id="teeth"
          fill="#FFFFFF"
          mask={`url(#${mask1})`}
        ></path>
        <g id="tongue" mask={`url(#${mask1})`} fill="#FF4F6D">
          <g transform="translate(38.000000, 24.000000)">
            <circle cx="11" cy="11" r="11"></circle>
            <circle cx="21" cy="11" r="11"></circle>
          </g>
        </g>
      </g>
    </g>
  );
};

export default Smile;

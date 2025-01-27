import React from 'react';

// Utils
import { uniqueId } from 'lodash';

const Scream = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');

  return (
    <g transform="translate(2, 52)">
      <defs>
        <path
          d="M34.0082051,15.1361102 C35.1280248,29.123916 38.2345159,40.9925405 53.9961505,40.9999965 C69.757785,41.0074525 72.9169073,29.0566179 73.9942614,15.0063928 C74.0809675,13.8756222 73.1738581,12.9999965 72.0369872,12.9999965 C65.3505138,12.9999965 62.6703194,14.9936002 53.9894323,14.9999965 C45.3085452,15.0063928 40.7567994,12.9999965 36.0924943,12.9999965 C34.9490269,12.9999965 33.8961688,13.7366502 34.0082051,15.1361102 Z"
          id={path1}
        ></path>
      </defs>
      <g
        id="mouth-scream"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <mask id={mask1} fill="white">
          <use
            xlinkHref={`#${path1}`}
            transform="translate(54.000000, 26.999998) scale(1, -1) translate(-54.000000, -26.999998)"
          ></use>
        </mask>
        <use
          id="mouth"
          fillOpacity="0.7"
          fill="#000000"
          xlinkHref={`#${path1}`}
          transform="translate(54.000000, 26.999998) scale(1, -1) translate(-54.000000, -26.999998)"
        ></use>
        <path
          d="M44,2 L65,2 C67.7614237,2 70,4.23857625 70,7 L70,13 C70,15.7614237 67.7614237,18 65,18 L44,18 C41.2385763,18 39,15.7614237 39,13 L39,7 C39,4.23857625 41.2385763,2 44,2 Z"
          id="teeth"
          fill="#FFFFFF"
          mask={`url(#${mask1})`}
        ></path>
        <g id="tongue" mask={`url(#${mask1})`} fill="#FF4F6D">
          <g transform="translate(38, 32)">
            <circle id="tongue1" cx="11" cy="11" r="11"></circle>
            <circle id="tongue2" cx="21" cy="11" r="11"></circle>
          </g>
        </g>
      </g>
    </g>
  );
};

export default Scream;

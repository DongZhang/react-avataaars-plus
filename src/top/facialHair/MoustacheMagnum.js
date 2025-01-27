import React from 'react';

// Utils
import { uniqueId } from 'lodash';

// Components
import FacialHairColor from './FacialHairColor';

const MoustacheMagnum = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');

  return (
    <g>
      <defs>
        <path
          d="M64.7214121,63.4643353 C71.8381194,62.1698595 81.796173,63.6461901 84.1074639,67.092174 L83.998,66.939 L84.010445,66.9215199 C86.5309935,63.5977488 96.2765075,62.1914341 103.274279,63.4643353 C112.927938,65.2207224 117.019147,75.7669804 115.780485,77.6791014 C115.01945,78.8536016 113.345913,78.4824974 111.594575,78.0748078 L111.136489,77.9686163 C110.448358,77.8110609 109.759428,77.6679956 109.119711,77.6298353 C104.118941,77.3322546 94.948229,81.5102869 86.0463327,76.6891498 C85.2347477,76.2495714 84.5386341,75.6083797 83.9975585,74.8390687 C83.4573866,75.6083797 82.7612729,76.2495714 81.949688,76.6891498 C73.0477917,81.5102869 63.8767499,77.3322546 58.8763101,77.6298353 C58.236593,77.6679956 57.5476629,77.8110609 56.859532,77.9686163 L56.4014452,78.0748078 C54.6501074,78.4824974 52.9765709,78.8536016 52.2155358,77.6791014 C50.9768736,75.7669804 55.0680827,65.2207224 64.7214121,63.4643353 Z"
          id={path1}
        ></path>
      </defs>
      <g
        id="facial-hair-beard-light"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(48, 72)"
      >
        <mask id={mask1} fill="white">
          <use xlinkHref={`#${path1}`}></use>
        </mask>
        <use id="facial-hair" xlinkHref={`#${path1}`}></use>
        <FacialHairColor maskId={mask1} />
      </g>
    </g>
  );
};

export default MoustacheMagnum;

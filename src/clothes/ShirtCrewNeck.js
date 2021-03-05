import React from 'react';

// Utils
import { uniqueId } from 'lodash';

// Components
import ClothesColor from './ClothesColor';

const ShirtCrewNeck = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');
  return (
    <g>
      <defs>
        <path
          d="M67,1.34762511 C67,13.2107177 81.9984609,22.8276544 100.5,22.8276544 C119.001539,22.8276544 134,13.2107177 134,1.34762511 C134,0.994756918 133.98673,0.64387605 133.960492,0.295176488 C170.936371,3.3248899 200,34.2942196 200,72.0517235 L200,81 L0,81 L0,72.0517235 C1.22537513e-14,33.952169 29.5925972,2.76433598 67.0465686,0.219447423 C67.0151943,0.594730017 67,0.970039821 67,1.34762511 Z"
          id={path1}
        ></path>
      </defs>
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        id="clothes-shirt-crew-neck"
        transform="translate(32, 199)"
      >
        <g id="shirt">
          <mask id={mask1} fill="white">
            <use xlinkHref={`#${path1}`}></use>
          </mask>
          <ClothesColor maskId={mask1} />
          <g
            id="shadow"
            opacity="0.6"
            mask={`url(#${mask1})`}
            fill="#000000"
            fillOpacity="0.16"
          >
            <g transform="translate(60.000000, -25.000000)">
              <ellipse
                cx="40.5"
                cy="27.8476251"
                rx="39.6351047"
                ry="26.9138272"
              ></ellipse>
            </g>
          </g>
        </g>
      </g>
    </g>
  );
};

export default ShirtCrewNeck;

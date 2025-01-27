import React from 'react';

// Utils
import { uniqueId } from 'lodash';

const WinterHat03 = () => {
  const path1 = uniqueId('react-path-');
  const path2 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');
  const filter1 = uniqueId('react-filter-');

  return (
    <g>
      <defs>
        <path
          d="M66,0 C102.450793,-6.69590214e-15 132,29.5492065 132,66 L132,71 L132,71 L0,71 L0,66 C-4.46393476e-15,29.5492065 29.5492065,6.69590214e-15 66,0 Z"
          id={path1}
        ></path>
        <path
          d="M67.2845981,61.4514245 C83.2297066,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871591,49.8165424 198.731559,61.4496271 C200.786178,62.9566691 202,65.3523287 202,67.9003936 L202,98.3697692 C201.999998,100.578907 200.209138,102.369767 198,102.369767 C197.244438,102.369767 196.504327,102.155772 195.86535,101.752557 C179.223259,91.2508523 158.53625,86 133.804323,86 C108.883259,86 87.6403936,91.3314713 70.075727,101.994414 C68.1873197,103.140807 65.7271281,102.539284 64.5807363,100.650876 C64.2008721,100.02514 64,99.3071624 64,98.5751498 L64,67.914014 C63.999995,65.3588919 65.2205111,62.957477 67.2845981,61.4514245 Z"
          id={path2}
        ></path>
        <filter
          x="-0.7%"
          y="-1.7%"
          width="101.4%"
          height="106.8%"
          filterUnits="objectBoundingBox"
          id={filter1}
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowOffsetOuter1"
          ></feColorMatrix>
        </filter>
      </defs>
      <g
        id="winter-hat-03"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="hat" transform="translate(67.000000, 12.000000)">
          <circle id="puff" fill="#F4F4F4" cx="66" cy="8" r="20"></circle>
          <mask id={mask1} fill="white">
            <use xlinkHref={`#${path1}`}></use>
          </mask>
          <use id="hat-mask" fill="#D8D8D8" xlinkHref={`#${path1}`}></use>
          <g id="group" mask={`url(#${mask1})`}>
            <g transform="translate(-3.771429, -12.000000)" id="hat-color">
              <rect
                id="color"
                fill="#FF5C5C"
                x="0"
                y="0"
                width="140.485714"
                height="191"
              ></rect>
            </g>
          </g>
        </g>
        <g id="hat-front">
          <use
            fill="black"
            fillOpacity="1"
            filter={`url(#${filter1})`}
            xlinkHref={`#${path2}`}
          ></use>
          <use fill="#F4F4F4" fillRule="evenodd" xlinkHref={`#${path2}`}></use>
        </g>
      </g>
    </g>
  );
};

export default WinterHat03;

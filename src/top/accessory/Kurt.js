import React from 'react';

// Utils
import { uniqueId } from 'lodash';

const Kurt = () => {
  const filter1 = uniqueId('react-filter-');

  return (
    <g>
      <defs>
        <filter
          x="-3.0%"
          y="-8.0%"
          width="106.1%"
          height="116.0%"
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
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0"
            type="matrix"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          ></feColorMatrix>
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <g
        id="accessory"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(66, 87)"
      >
        <g id="accessory-kurt" filter={`url(#${filter1})`}>
          <path
            d="M66,11.1111111 C54.9625586,11.1111111 53.3705645,2.0266011 30.6705882,0.740740741 C7.98552275,-0.283199952 0.815225204,6.4494855 0.776470588,11.1111111 C0.813236892,15.4042795 -0.352293566,26.5612661 14.3647059,39.6296296 C29.1367705,55.1420807 44.2704162,49.8818301 49.6941176,44.8148148 C55.1352081,42.4731118 61.3403442,21.4596351 66,21.4814815 C70.6596558,21.5033279 76.8647919,42.4731118 82.3058824,44.8148148 C87.7295838,49.8818301 102.86323,55.1420807 117.635294,39.6296296 C132.352294,26.5612661 131.186763,15.4042795 131.223529,11.1111111 C131.184775,6.4494855 124.014477,-0.283199952 101.329412,0.740740741 C78.6294355,2.0266011 77.0374414,11.1111111 66,11.1111111 Z"
            id="kurt-frame"
            fill="#F4F4F4"
          ></path>
          <path
            d="M55.1294118,21.4814815 C55.5103632,13.8233491 42.2156493,5.64243259 27.9529412,5.92592593 C13.6973442,6.22450879 11.8417942,15.3786982 11.6470588,18.8888889 C11.2982286,27.0220633 20.014463,45.3037598 36.1058824,44.8148148 C52.1972736,44.305848 54.9092435,26.5344305 55.1294118,21.4814815 Z"
            id="kurt-left"
            fill="#2F383B"
          ></path>
          <path
            d="M120.352941,21.4814815 C120.733893,13.8233491 107.439179,5.64243259 93.1764706,5.92592593 C78.9208736,6.22450879 77.0653236,15.3786982 76.8705882,18.8888889 C76.521758,27.0220633 85.2379924,45.3037598 101.329412,44.8148148 C117.420803,44.305848 120.132773,26.5344305 120.352941,21.4814815 Z"
            id="kurt-right"
            fill="#2F383B"
            transform="translate(98.611765, 25.370370) scale(-1, 1) translate(-98.611765, -25.370370) "
          ></path>
        </g>
      </g>
    </g>
  );
};

export default Kurt;

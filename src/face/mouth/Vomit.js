import React from 'react';

// Utils
import { uniqueId } from 'lodash';

const Vomit = () => {
  const path1 = uniqueId('react-path-');
  const path2 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');
  const filter1 = uniqueId('react-filter');

  return (
    <g transform="translate(2, 52)">
      <defs>
        <path
          d="M34.0082051,12.6020819 C35.1280248,23.0929366 38.2345159,31.9944054 53.9961505,31.9999965 C69.757785,32.0055894 72.9169073,23.0424631 73.9942614,12.5047938 C74.0809675,11.6567158 73.1738581,10.9999965 72.0369872,10.9999965 C65.3505138,10.9999965 62.6703194,12.4951994 53.9894323,12.4999965 C45.3085452,12.5047938 40.7567994,10.9999965 36.0924943,10.9999965 C34.9490269,10.9999965 33.8961688,11.5524868 34.0082051,12.6020819 Z"
          id={path1}
        ></path>
        <path
          d="M66,25 C69.3137085,25 72,27.6862915 72,31 L72,36 C72,39.3137085 69.3137085,42 66,42 C62.6862915,42 60,39.3137085 60,36 L59.9170737,36.0001915 C59.4410745,33.1623839 56.9730632,31 54,31 C51.0269368,31 48.5589255,33.1623839 48.0829263,36.0001915 L48,36 L48,38 C48,41.3137085 45.3137085,44 42,44 C38.6862915,44 36,41.3137085 36,38 L36,31 C36,27.6862915 38.6862915,25 42,25 L66,25 Z"
          id={path2}
        ></path>
        <filter
          x="-1.4%"
          y="-2.6%"
          width="102.8%"
          height="105.3%"
          filterUnits="objectBoundingBox"
          id={filter1}
        >
          <feOffset
            dx="0"
            dy="-1"
            in="SourceAlpha"
            result="shadowOffsetInner1"
          ></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>
      </defs>
      <g
        id="mouth-concerned"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <mask id={mask1} fill="white">
          <use
            xlinkHref={`#${path1}`}
            transform="translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000)"
          ></use>
        </mask>
        <use
          id="mouth"
          fillOpacity="0.7"
          fill="#000000"
          transform="translate(54.000000, 21.499998) scale(1, -1) translate(-54.000000, -21.499998) "
          xlinkHref={`#${path1}`}
        ></use>
        <path
          d="M44,2 L65,2 C67.7614237,2 70,4.23857625 70,7 L70,13 C70,15.7614237 67.7614237,18 65,18 L44,18 C41.2385763,18 39,15.7614237 39,13 L39,7 C39,4.23857625 41.2385763,2 44,2 Z"
          id="teeth"
          fill="#FFFFFF"
          mask={`url(#${mask1})`}
          transform="translate(0, -3)"
        ></path>
        <g id="vomit-stuff">
          <use fill="#88C553" fillRule="evenodd" xlinkHref={`#${path2}`}></use>
          <use
            fill="black"
            fillOpacity="1"
            filter={`url(#${filter1})`}
            xlinkHref={`#${path2}`}
          ></use>
        </g>
      </g>
    </g>
  );
};

export default Vomit;

import React from 'react';

// Utils
import { uniqueId } from 'lodash';

// Components
import ClothesColor from './ClothesColor';

const Overall = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');
  return (
    <g>
      <defs>
        <path
          d="M196.000348,38.6320038 L196,110 L68,110 L67.999672,38.6319925 C75.8495147,34.0910485 84.6362412,30.9895697 93.9989132,29.6884945 L93.999,73.9993435 L170,73.9993435 L170.001087,29.6884945 C179.363767,30.9895707 188.1505,34.0910536 196.000348,38.6320038 Z"
          id={path1}
        ></path>
      </defs>
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        id="clothes-overall"
        transform="translate(0, 170)"
      >
        <g id="shirt">
          <mask id={mask1} fill="white">
            <use xlinkHref={`#${path1}`}></use>
          </mask>
          <ClothesColor maskId={mask1} />

          <circle
            id="button-left"
            fill="#F4F4F4"
            cx="81"
            cy="83"
            r="5"
          ></circle>
          <circle
            id="button-right"
            fill="#F4F4F4"
            cx="183"
            cy="83"
            r="5"
          ></circle>
        </g>
      </g>
    </g>
  );
};

export default Overall;

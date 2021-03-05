import React from 'react';

// Utils
import { uniqueId } from 'lodash';

// Components
import ClothesColor from './ClothesColor';

const ShirtVNeck = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');
  return (
    <g>
      <defs>
        <path
          d="M232,101.051724 L232,110 L32,110 L32,101.051724 C32,65.1384292 58.2938256,35.3663869 92.6806879,29.9363855 C93.5844961,35.0070695 96.1171239,39.8245023 100.236125,43.5389794 L100.236125,43.5389794 L129.321203,69.7676333 C130.843316,71.1402598 133.156684,71.1402598 134.678797,69.7676333 L134.678797,69.7676333 L163.763875,43.5389794 C164.189462,43.1551884 164.601167,42.7562772 164.998197,42.3430127 C168.413626,38.7879269 170.516642,34.4534098 171.319249,29.9385703 C205.706684,35.3669637 232,65.1387771 232,101.051724 Z"
          id={path1}
        ></path>
      </defs>
      <g
        id="clothes-shirt-v-neck"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(0, 170)"
      >
        <mask id={mask1} fill="white">
          <use xlinkHref={`#${path1}`}></use>
        </mask>
        <ClothesColor maskId={mask1} />
      </g>
    </g>
  );
};

export default ShirtVNeck;

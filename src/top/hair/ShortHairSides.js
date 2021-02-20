import React from 'react';

// Utils
import { uniqueId } from 'lodash';

// Components
import HairColor from './HairColor';

const ShortHairSides = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');

  return (
    <g>
      <defs>
        <path
          d="M11,3 C10.2278848,5.46095128 9.93927126,8.59293547 9.78593089,11.8009864 L9.75394043,12.5148969 C9.43344119,20.1381397 9.72806392,27.9411523 6,28 C0.923687084,28.0709555 0,26.9937684 0,23 C0,17.3439836 4.0408529,6.77808536 8,2 C9.17612094,-0.170695788 11.6189856,-1.43187215 11,3 Z M115,3 C114.381014,-1.43187215 116.823879,-0.170695788 118,2 C121.959147,6.77808536 126,17.3439836 126,23 C126,26.9937684 125.076313,28.0709555 120,28 C116.271936,27.9411523 116.566559,20.1381397 116.24606,12.5148969 L116.214069,11.8009864 C116.060729,8.59293547 115.772115,5.46095128 115,3 Z"
          id={path1}
        ></path>
      </defs>
      <g
        id="hair"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(69, 74)"
      >
        <mask id={mask1} fill="white">
          <use xlinkHref={`#${path1}`}></use>
        </mask>
        <use id="short-hair-sides" xlinkHref={`#${path1}`}></use>

        <HairColor maskId={mask1} />
      </g>
    </g>
  );
};

export default ShortHairSides;

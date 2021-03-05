import React from 'react';

// Utils
import { uniqueId } from 'lodash';

// Components
import ClothesColor from './ClothesColor';
import Graphics from './Graphics';

const GraphicShirt = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');
  return (
    <g>
      <defs>
        <path
          d="M99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4019929 165.871751,30.3232102 165.624342,29.2694852 C202.75978,32.1370674 232,63.1796858 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8342194 61.7761079,31.571298 99.3946469,29.196636 C99.1341902,30.2738104 99,31.3768477 99,32.5 Z"
          id={path1}
        ></path>
      </defs>
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        id="clothes-graphic-shirt"
        transform="translate(0, 170)"
      >
        <g id="shirt">
          <mask id={mask1} fill="white">
            <use xlinkHref={`#${path1}`}></use>
          </mask>
          <ClothesColor maskId={mask1} />
        </g>
        <Graphics mask={`url(#${mask1})`} />
      </g>
    </g>
  );
};

export default GraphicShirt;

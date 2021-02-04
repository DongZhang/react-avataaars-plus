import React from 'react';

// Utils
import { uniqueId } from 'lodash';

// Components
import Colors from './Colors';

const ShirtScoopNeck = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');
  return (
    <g>
      <defs>
        <path
          d='M83,36.3476251 C83,52.6289957 105.161905,65.8276544 132.5,65.8276544 C159.838095,65.8276544 182,52.6289957 182,36.3476251 C182,34.9853134 181.844841,33.6445843 181.544472,32.3313638 C210.784239,41.4879251 232,68.792221 232,101.051724 L232,110 L32,110 L32,101.051724 C32,68.3970853 53.7386736,40.8197864 83.5337207,32.0021267 C83.1821692,33.4207025 83,34.871494 83,36.3476251 Z'
          id={path1}
        ></path>
      </defs>
      <g
        id='Symbols'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'
      >
        <mask id={mask1} fill='white'>
          <use xlinkHref={`#${path1}`}></use>
        </mask>
        {/* <use id='Clothes' fill='#E6E6E6' xlinkHref={`#${path1}`}></use> */}
        <g transform='translate(0, 170)'>
          <Colors maskId={mask1} />
        </g>
      </g>
    </g>
  );
};

export default ShirtScoopNeck;

import React from 'react';

// Utils
import { uniqueId } from 'lodash';

// Components
import Skin from './skin';
import Clothes from './clothes';
import Face from './face';
import Top from './top';
// import Accessory from './accessory';

export const Avatar = ({ avatarStyle, style }) => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');
  return (
    <svg width={264} height={280}>
      <defs>
        <path
          d='M264,0 L264,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L160,199 L156,199 L156.001014,180.610469 C173.531251,172.282329 186.048207,155.114429 187.791415,134.867236 C193.568906,134.002616 198,129.018777 198,123 L198,123 L198,110 C198,104.05429 193.675838,99.1185422 188.000809,98.1660527 L188,92 C188,61.072054 162.927946,36 132,36 C101.072054,36 76,61.072054 76,92 L76,92 L76.0001873,98.1658855 C70.3246685,99.1179645 66,104.053942 66,110 L66,110 L66,123 C66,129.018777 70.4310943,134.002616 76.2090181,134.867253 C77.9518263,155.114813 90.4692242,172.28298 107.999984,180.610943 L108,199 L104,199 C64.633143,199 32.6454629,230.594012 32.0096459,269.809348 L32,271 L32,280 L0,280 L0,0 L264,0 Z'
          id={path1}
        ></path>
      </defs>

      {/* <g
        id='Symbols'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'
      >
        <g id='template-for-hairstyles'>
          <mask id={mask1} fill='white'>
            <use xlinkHref={`#${path1}`}></use>
          </mask>
          <g id='Mask-Hair'></g>
          <polygon
            id='Long-Hair'
            fill='#944F23'
            mask={`url(#${mask1})`}
            points='0 0 264 0 264 280 0 280'
          ></polygon>
        </g>
      </g> */}
      <Skin />
      <Clothes />
      <Face />
      <Top>
        {/* <Accessory /> */}
      </Top>
    </svg>
  );
};

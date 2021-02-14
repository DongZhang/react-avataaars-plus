import React from 'react';

// Utils
import { uniqueId } from 'lodash';

// Components
import SkinColor from './SkinColor';

const Skin = ({ skinColor }) => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');

  return (
    <g>
      <defs>
        <path
          d='M100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156.000809,62.1660527 C161.675838,63.1185422 166,68.05429 166,74 L166,88 C166,94.0524166 161.519235,99.0582945 155.693975,99.8813638 C153.627928,119.686472 141.237929,136.421678 124.001014,144.610469 L124,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L76,163 L75.9999836,144.610943 C58.7625487,136.422324 46.3721119,119.686854 44.3051107,99.8809698 C38.480765,99.0582945 34,94.0524166 34,88 L34,74 C34,68.053942 38.3246685,63.1179645 44.0001873,62.1658855 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 Z'
          id={path1}
        ></path>
      </defs>
      <g id='skin' transform='translate(32, 36)'>
        <mask id={mask1} fill='white'>
          <use xlinkHref={`#${path1}`}></use>
        </mask>
        <use fill='#D0C6AC' xlinkHref={`#${path1}`}></use>
        <SkinColor maskId={`url(#${mask1})`} selectedOption={skinColor} />
        <path
          d='M44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,94 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 Z'
          id='neck-shadow'
          fillOpacity='0.1'
          fill='#000000'
          mask={`url(#${mask1})`}
        ></path>
      </g>
    </g>
  );
};

export default Skin;

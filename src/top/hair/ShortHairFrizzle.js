import React from 'react';

// Utils
import { uniqueId } from 'lodash';

// Components
import HairColor from './HairColor';

const ShortHairFrizzle = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');

  return (
    <g>
      <defs>
        <path
          d="M90.9102919,55.3613196 L175.085702,55.3613196 C193.333279,44.8338001 196.759397,26.1510357 183.849606,9.92600089 C180.635746,5.88682054 175.085702,21.6755614 158.028596,22.6504878 C140.97149,23.6254143 142.608865,16.3498661 124.45759,19.0739248 C106.306316,21.7979835 108.311575,36.37843 96.4671989,39.8768239 C88.5709482,42.2090865 86.7186458,47.370585 90.9102919,55.3613196 Z"
          id={path1}
        ></path>
      </defs>
      <g id="hair" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <mask id={mask1} fill="white">
          <use xlinkHref={`#${path1}`}></use>
        </mask>
        <use id="short-hair-frizzle" xlinkHref={`#${path1}`}></use>

        <HairColor maskId={mask1} />
      </g>
    </g>
  );
};

export default ShortHairFrizzle;

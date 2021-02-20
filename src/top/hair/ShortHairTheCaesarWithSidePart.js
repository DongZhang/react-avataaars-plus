import React from 'react';

// Utils
import { uniqueId } from 'lodash';

// Components
import HairColor from './HairColor';

const ShortHairTheCaesarWithSidePart = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');

  return (
    <g>
      <defs>
        <path
          d="M58,1 C115,0.274362825 115.719178,53.7019177 115,64 C114.653144,65.488448 113.327244,65.2226722 113,64 C113.46274,62.445722 109.704055,35.2480719 100,28 C98.2407597,26.7763806 92.7529656,25.6102528 85.359342,24.7391156 L89,16 L82.01872,24.3785401 C76.7567371,23.8593992 70.7685305,23.4861087 64.5908213,23.3286028 L63.4553072,23.3021405 C63.0761755,23.2941376 62.6964577,23.2869579 62.3162766,23.2806174 L61.1744663,23.2641294 C60.2220042,23.252514 59.267414,23.2462436 58.3126144,23.245568 L58.3126144,23.245568 L57.1543747,23.2474507 C38.2389253,23.3220751 19.5458575,25.5337195 16,28 C6.29594493,35.2480719 2.53726005,62.445722 3,64 C2.67275588,65.2226722 1.34685629,65.488448 1,64 C0.280821545,53.7019177 1,1.72563718 58,1 Z"
          id={path1}
        ></path>
      </defs>
      <g
        id="hair"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(74, 34)"
      >
        <mask id={mask1} fill="white">
          <use xlinkHref={`#${path1}`}></use>
        </mask>
        <use id="short-hair-the-caesar-with-side-part" xlinkHref={`#${path1}`}></use>

        <HairColor maskId={mask1} />
      </g>
    </g>
  );
};

export default ShortHairTheCaesarWithSidePart;

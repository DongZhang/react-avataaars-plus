import React from 'react';

// Utils
import { uniqueId } from 'lodash';

// Components
import FacialHairColor from './FacialHairColor';

const MoustacheFancy = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');

  return (
    <g>
      <defs>
        <path
          d="M105.612044,67.1316942 C111.386129,69.3374281 116.495271,75.5829845 125.36175,72.8283797 C125.730639,72.7136458 126.091098,73.0449523 125.980498,73.408662 C124.607113,77.9183313 116.972736,81.0068878 114.378714,81.1080652 C103.039714,81.5495987 93.9060174,72.8306951 84.0009784,72.1615262 C74.0951698,72.8301081 64.9612417,81.5496135 53.6221945,81.1080652 C51.0278347,81.0068878 43.3937943,77.9183313 42.0204089,73.408662 C41.9094725,73.0449523 42.2699314,72.7136458 42.6388201,72.8283797 C48.5498063,74.6647829 52.7908649,72.5011145 56.6723014,70.2010732 L57.2244874,69.8719854 C58.9662255,68.8295785 60.6471366,67.7969155 62.3885276,67.1316942 C67.5783507,65.1488567 77.2089224,65.7112779 84.0008729,69.2973744 C90.7925576,65.7112249 100.422466,65.1489502 105.612044,67.1316942 Z"
          id={path1}
        ></path>
      </defs>
      <g
        id="facial-hair-moustache-fancy"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(48, 72)"
      >
        <mask id={mask1} fill="white">
          <use xlinkHref={`#${path1}`}></use>
        </mask>
        <use id="facial-hair" xlinkHref={`#${path1}`}></use>
        <FacialHairColor maskId={mask1} />
      </g>
    </g>
  );
};

export default MoustacheFancy;

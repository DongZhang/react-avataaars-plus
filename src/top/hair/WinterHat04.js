import React from 'react';

// Utils
import { uniqueId } from 'lodash';

const WinterHat04 = () => {
  const path1 = uniqueId('react-path-');
  const path2 = uniqueId('react-path-');
  const path3 = uniqueId('react-path-');
  const path4 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');
  const mask2 = uniqueId('react-mask-');
  const mask3 = uniqueId('react-mask-');
  const filter1 = uniqueId('react-filter-');

  return (
    <g>
      <defs>
        <path
          d="M73,-7.10542736e-15 C85.7219537,-9.44241233e-15 97.5342942,3.89451668 107.309847,10.5563754 C117.203155,4.65354893 125.906598,2.84119251 133.419297,5.12029235 C137.342181,13.7864707 136.088687,24.8654742 129.658817,38.3573029 C132.459583,45.3577133 134,52.9989648 134,61 L134,69 L2,69 L2,61 C2,52.9746294 3.54980175,45.3112343 6.36644521,38.2927749 C-0.0371877014,24.830427 -1.28052214,13.7727611 2.63615554,5.12029235 C10.1413088,2.84348155 18.8348158,4.64991255 28.7166765,10.5395853 C38.486587,3.88763544 50.2892906,-4.77050791e-15 63,-7.10542736e-15 L73,-7.10542736e-15 Z"
          id={path1}
        ></path>
        <path
          d="M107.677442,10.3390625 C117.419381,4.60911733 125.999999,2.86952727 133.419297,5.12029235 C137.342181,13.7864707 136.088687,24.8654742 129.658817,38.3573029 C125.120783,27.0107832 117.273218,17.3462285 107.309847,10.5563754 Z M28.7166765,10.5395853 L28.5059632,10.6823903 C18.6487145,17.4527497 10.8806015,27.044485 6.36644521,38.2927749 C-0.0371877014,24.830427 -1.28052214,13.7727611 2.63615554,5.12029235 C10.1413088,2.84348155 18.8348158,4.64991255 28.7166765,10.5395853 Z"
          id={path2}
        ></path>
        <path
          d="M21.8611602,15.9589276 L21.211192,16.562208 C17.0135267,20.5111528 13.3754262,25.0481848 10.4284992,30.0416954 C7.50362993,21.9329304 7.00274925,16.3216092 8.92709323,13.2081228 C11.5781533,12.0616266 15.8895089,12.9785616 21.8611602,15.9589276 Z M114.219025,15.8345763 C119.948776,13.0381328 124.104348,12.1980946 126.68574,13.3144617 C128.572237,16.3667136 128.127967,21.819514 125.352931,29.6728628 C122.278019,24.5465243 118.471615,19.9084275 114.077772,15.9038065 Z"
          id={path3}
        ></path>
        <path
          d="M67.2845981,61.4514245 C83.2297066,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871591,49.8165424 198.731559,61.4496271 C200.786178,62.9566691 202,65.3523287 202,67.9003936 L202,98.3697692 C201.999998,100.578907 200.209138,102.369767 198,102.369767 C197.244438,102.369767 196.504327,102.155772 195.86535,101.752557 C179.223259,91.2508523 158.53625,86 133.804323,86 C108.883259,86 87.6403936,91.3314713 70.075727,101.994414 C68.1873197,103.140807 65.7271281,102.539284 64.5807363,100.650876 C64.2008721,100.02514 64,99.3071624 64,98.5751498 L64,67.914014 C63.999995,65.3588919 65.2205111,62.957477 67.2845981,61.4514245 Z"
          id={path4}
        ></path>
        <filter
          x="-0.7%"
          y="-1.7%"
          width="101.4%"
          height="106.8%"
          filterUnits="objectBoundingBox"
          id={filter1}
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowOffsetOuter1"
          ></feColorMatrix>
        </filter>
      </defs>
      <g
        id="winter-hat-04"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(-1, 0)"
      >
        <g id="hat" transform="translate(65.000000, 4.000000)">
          <mask id={mask1} fill="white">
            <use xlinkHref={`#${path1}`}></use>
          </mask>
          <use id="hat-mask" fill="#D8D8D8" xlinkHref={`#${path1}`}></use>
          <g id="group" mask={`url(#${mask1})`}>
            <g transform="translate(-22.000000, -4.000000)" id="hat-color">
              <rect
                id="color"
                fill="#FF5C5C"
                x="0"
                y="0"
                width="180.485714"
                height="191"
              ></rect>
            </g>
          </g>
          <mask id={mask2} fill="white">
            <use xlinkHref={`#${path2}`}></use>
          </mask>
          <use
            id="shadow"
            fillOpacity="0.24"
            fill="#000000"
            xlinkHref={`#${path2}`}
          ></use>
          <mask id={mask3} fill="white">
            <use xlinkHref={`#${path3}`}></use>
          </mask>
          <use
            id="light"
            fillOpacity="0.300000012"
            fill="#FFFFFF"
            xlinkHref={`#${path3}`}
          ></use>
        </g>
        <g id="hat-front">
          <use
            fill="black"
            fillOpacity="1"
            filter="url(#filter-8)"
            xlinkHref={`#${path4}`}
          ></use>
          <use fill="#F4F4F4" fillRule="evenodd" xlinkHref={`#${path4}`}></use>
        </g>
      </g>
    </g>
  );
};

export default WinterHat04;

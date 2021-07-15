import React from 'react';

// Utils
import { uniqueId } from 'lodash';

// Components
import ClothesColor from './ClothesColor';

const BlazerShirt = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');
  return (
    <g>
      <defs>
        <path
          d="M67,1.34762511 C67,13.2107177 81.9984609,22.8276544 100.5,22.8276544 C119.001539,22.8276544 134,13.2107177 134,1.34762511 C134,0.994756918 133.98673,0.64387605 133.960492,0.295176488 C170.936371,3.3248899 200,34.2942196 200,72.0517235 L200,81 L0,81 L0,72.0517235 C1.22537513e-14,33.952169 29.5925972,2.76433598 67.0465686,0.219447423 C67.0151943,0.594730017 67,0.970039821 67,1.34762511 Z"
          id={path1}
        ></path>
      </defs>
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        id="clothes-blazer-shirt"
        transform="translate(0, 170)"
      >
        <g id="shirt" transform="translate(32, 29)">
          <mask id={mask1} fill="white">
            <use xlinkHref={`#${path1}`}></use>
          </mask>
          <ClothesColor maskId={mask1} />
          <g
            id="shadow"
            opacity="0.6"
            mask={`url(#${mask1})`}
            fill="#000000"
            fillOpacity="0.16"
          >
            <g transform="translate(60, -25)">
              <ellipse
                cx="40.5"
                cy="27.8476251"
                rx="39.6351047"
                ry="26.9138272"
              ></ellipse>
            </g>
          </g>
        </g>
        <g id="blazer" transform="translate(32, 27)">
          <path
            d="M64,40.5 C64,55.7092257 65.9608691,69.9209213 69.3620096,82.0011822 L0,82 L0,73.0517235 C1.24427061e-14,34.3646678 30.512279,2.80413671 68.7847355,1.12223161 C65.7400343,12.7307619 64,26.1727873 64,40.5 Z M200,73.0517235 L200,82 L131.63799,82.0011822 C135.039131,69.9209213 137,55.7092257 137,40.5 C137,26.194165 135.265154,12.7708778 132.228695,1.1737534 C170.025091,3.36299447 200,34.7068514 200,73.0517235 Z"
            id="blazer-body"
            fill="#3A4C5A"
          ></path>
          <path
            d="M149,58 L158.555853,50.83311 C159.998897,49.7508275 161.987779,49.7682725 163.411616,50.8757011 L170,56 L170,56 L149,58 Z"
            id="pocket-hanky"
            fill="#E6E6E6"
          ></path>
          <path
            d="M69,0 C65,19.3333333 66.6666667,46.6666667 74,82 L58,82 L44,46 L50,37 L44,31 L63,1 C65.027659,0.369238637 67.027659,0.0359053037 69,0 Z"
            id="wing-left"
            fill="#2F4351"
          ></path>
          <path
            d="M151,0 C147,19.3333333 148.666667,46.6666667 156,82 L140,82 L126,46 L132,37 L126,31 L145,1 C147.027659,0.369238637 149.027659,0.0359053037 151,0 Z"
            id="wing-right"
            fill="#2F4351"
            transform="translate(141.000000, 41.000000) scale(-1, 1) translate(-141.000000, -41.000000) "
          ></path>
        </g>
      </g>
    </g>
  );
};

export default BlazerShirt;

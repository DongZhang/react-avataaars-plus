import React from 'react';

// Utils
import { uniqueId } from 'lodash';

// Components
import ClothesColor from './ClothesColor';

const BlazerSweater = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');
  return (
    <g>
      <defs>
        <path
          d="M160,29.0517235 C199.764502,29.0517235 232,61.2872215 232,101.051724 L232,110 L32,110 L32,101.051724 C32,61.2872215 64.235498,29.0517235 104,29.0517235 L105.192363,29.0520252 C105.065349,30.0355191 105,31.0365551 105,32.0517235 C105,45.8588423 117.088312,57.0517235 132,57.0517235 C146.911688,57.0517235 159,45.8588423 159,32.0517235 C159,31.0365551 158.934651,30.0355191 158.807637,29.0520252 L160,29.0517235 Z"
          id={path1}
        ></path>
      </defs>
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        id="clothes-blazer-sweater"
        transform="translate(0, 170)"
      >
        <g id="shirt">
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
            <g transform="translate(60.000000, -25.000000)">
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
        <path
          d="M156.000381,21.539265 C162.772478,26.1362012 167,32.6564553 167,39.8878801 C167,47.2887654 162.572022,53.9447584 155.520121,58.5564834 L149.579,53.8760062 L145,54.207887 L146,51.0567821 L145.92205,50.9956082 C152.022413,47.8531513 156,42.7004148 156,36.8768102 Z M118.07795,50.9956082 L118,51.0567821 L119,54.207887 L114.42,53.8760062 L108.479879,58.5564834 C101.560638,54.0315136 97.1675258,47.5384654 97.004689,40.3047544 L97,39.8878801 C97,32.6560965 101.227942,26.1355541 108.000627,21.5385807 L108,36.8768102 C108,42.7004148 111.977587,47.8531513 118.07795,50.9956082 Z"
          id="Collar"
          fill="#F2F2F2"
        ></path>
      </g>
    </g>
  );
};

export default BlazerSweater;

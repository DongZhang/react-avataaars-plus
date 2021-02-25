import React from 'react';

// Utils
import { uniqueId } from 'lodash';

// Components
import HairColor from './HairColor';

const LongHairShavedSides = () => {
  const path1 = uniqueId('react-path-');
  const path2 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');
  const mask2 = uniqueId('react-mask-');

  return (
    <g>
      <defs>
        <path
          d="M264,5.68434189e-14 L264,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L160,199 L156,199 L156.001014,180.610469 C173.531251,172.282329 186.048207,155.114429 187.791415,134.867236 C193.568906,134.002616 198,129.018777 198,123 L198,123 L198,110 C198,104.05429 193.675838,99.1185422 188.000809,98.1660527 L188,92 C188,61.072054 162.927946,36 132,36 C101.072054,36 76,61.072054 76,92 L76,92 L76.0001873,98.1658855 C70.3246685,99.1179645 66,104.053942 66,110 L66,110 L66,123 C66,129.018777 70.4310943,134.002616 76.2090181,134.867253 C77.9518263,155.114813 90.4692242,172.28298 107.999984,180.610943 L108,199 L104,199 C64.633143,199 32.6454629,230.594012 32.0096459,269.809348 L32,271 L32,280 L0,280 L0,5.68434189e-14 L264,5.68434189e-14 Z"
          id={path1}
        ></path>
        <rect id={path2} x="0" y="0" width="112" height="150" rx="56"></rect>
      </defs>
      <g id="hair" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <mask id={mask1} fill="white">
          <use xlinkHref={`#${path1}`}></use>
        </mask>
        <use id="long-hair-shaved-sides" xlinkHref={`#${path1}`}></use>

        <path
          d="M116.179148,40 L146,40 C171.405098,40 192,60.5949015 192,86 L192,154.108712 C192,180.650314 210.758775,204.349179 222.609956,226.05167 C234.461138,247.754161 215.254522,268.242596 195.770735,276.769484 C190.902336,278.900091 185.645645,280 180.331438,280 L135.26309,280 C78.9108161,280 70.2166412,216.309596 67.6972794,146.504423 L70.2166412,84.1431398 C71.212998,59.4805095 91.4964003,40 116.179148,40 Z"
          id="hair"
          fill="#CCB55A"
          mask={`url(#${mask1})`}
        ></path>

        <mask id={mask2} fill="white">
          <use xlinkHref={`#${path2}`}></use>
        </mask>
        <path
          d="M81.028596,-12.3495122 C98.0857017,-13.3244386 103.635746,-29.1131795 106.849606,-25.0739991 C119.588959,-9.06317121 116.420897,9.34091954 98.8006752,19.9401189 C107.026483,29.4833357 112,41.9108543 112,55.5 L112,61.5 C112,45.7600106 105.327507,31.5784655 94.6568175,21.6296626 C63.9191706,32.676513 38.0151684,32.8023625 16.9431293,22.0093093 C6.50566995,31.9355188 -1.90334372e-15,45.9580191 0,61.5 L0,61.5 L0,55.5 C-1.66646865e-15,41.8922508 4.98714363,29.4493114 13.2333846,19.899228 C9.3994279,16.8629639 8.25811203,8.18757666 19.4671989,4.87682391 C24.6642211,3.34181435 27.1948569,-0.326755745 29.9317702,-4.19116635 L30.3152929,-4.73146246 C33.7200085,-9.51186081 37.6410848,-14.4528598 47.4575903,-15.9260752 C56.2202746,-17.241138 60.3710976,-16.2257336 64.2397864,-14.9331738 L64.7910045,-14.7468587 C65.0661214,-14.6529802 65.3408508,-14.5581865 65.6167705,-14.4632258 L66.1706646,-14.2733037 C69.6946346,-13.0718628 73.5783659,-11.9236822 81.028596,-12.3495122 Z"
          id="shadow"
          fillOpacity="0.16"
          fill="#000000"
          mask={`url(#${mask2})`}
          transform="translate(76, 36)"
        ></path>
        {/* //Todo: add hair color */}
        {/* <HairColor maskId={mask1} /> */}
        <path
          d="M90.8779151,52.3613196 C113.02785,65.2272934 140.816672,65.2272934 174.244382,52.3613196 C188.77455,44.5891967 199.330608,29.0424257 182.951044,8.96303524 C180.782417,6.30455678 172.244382,15.6755614 155.351199,16.6504878 C138.458015,17.6254143 142.079654,13.3498661 124.102817,16.0739248 C106.12598,18.7979835 108.111968,33.37843 96.3814191,36.8768239 C84.6508698,40.3752178 86.5778198,49.8635735 90.8779151,52.3613196 Z"
          id="top"
          fill="#E0C863"
        ></path>
      </g>
    </g>
  );
};

export default LongHairShavedSides;

import React from 'react';

// Utils
import { uniqueId } from 'lodash';

// Components
import HairColor from './HairColor';

const LongHairBigHair = () => {
  const path1 = uniqueId('react-path-');
  const path2 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');
  const mask2 = uniqueId('react-mask-');

  return (
    <g>
      <defs>
        <path
          d="M117.002651,0 L117.002651,0.0159928999 C160.088708,0.768171773 190.165705,9.53932757 201.802634,46 C211.483048,76.7366359 204.584646,87.0104665 202.401112,101.069862 L202.378687,101.215474 C202.00656,103.65262 201.777778,106.205596 201.802634,109 C201.633621,128.588232 232.060804,125.971596 233.002628,155 C233.282701,183.560973 211.465525,186.255758 211.831204,198 C212.148057,209.888161 255.433856,245.046931 217.006906,266.996046 L217,258 C217,218.235498 184.764502,186 145,186 L145,186 L141,186 L141.001014,167.610469 C158.531251,159.282329 171.048207,142.114429 172.791415,121.867236 C178.568906,121.002616 183,116.018777 183,110 L183,110 L183,97 C183,96.4302017 182.960287,95.8696789 182.883477,95.3210486 C161.36033,83.7348438 142.885587,67.1399901 130.841699,48.2962859 C112.765999,73.923903 76.5293398,78.5343793 51.2225812,94.6809365 C51.0768189,95.4329873 51,96.2075227 51,97 L51,97 L51,110 C51,116.018777 55.4310943,121.002616 61.2090181,121.867253 C62.9518263,142.114813 75.4692242,159.28298 92.9999836,167.610943 L93,186 L89,186 C49.633143,186 17.6454629,217.594012 17.0096459,256.809348 L17,258 L17,267 L16.0083934,267.001755 C-22.4360617,245.053029 20.8572172,209.889192 21.1740982,198 C21.5397764,186.255758 -0.277399696,183.560973 0.00267373922,155 C0.764126177,131.530908 20.7987285,128.746643 28.355249,118.189208 L28.3497263,118.186658 L28.3975364,118.129862 C30.1623699,115.641932 31.2347801,112.721764 31.2026676,109 C31.3716806,89.9992744 19.8139454,82.1607482 31.2026676,46 C42.8395963,9.53932757 72.9165934,0.768171773 116.002651,0.0159928999 L116.002651,0.0159928999 L116.002651,0 C116.16951,0 116.336177,0.0049705256 116.502651,0.0076322645 C116.669125,0.0049705256 116.835791,0 117.002651,0 L117.002651,0 Z"
          id={path1}
        ></path>
        <path
          d="M117.002651,0 L117.002651,0.0159928999 C160.088708,0.768171773 190.165705,9.53932757 201.802634,46 C211.483048,76.7366359 204.584646,87.0104665 202.401112,101.069862 L202.378687,101.215474 C202.00656,103.65262 201.777778,106.205596 201.802634,109 C201.633621,128.588232 232.060804,125.971596 233.002628,155 C233.282701,183.560973 211.465525,186.255758 211.831204,198 C212.148057,209.888161 255.433856,245.046931 217.006906,266.996046 L217,258 C217,218.235498 184.764502,186 145,186 L145,186 L141,186 L141,140 L93,140 L93,186 L89,186 C49.633143,186 17.6454629,217.594012 17.0096459,256.809348 L17,258 L17,267 L16.0083934,267.001755 C-22.4360617,245.053029 20.8572172,209.889192 21.1740982,198 C21.5397764,186.255758 -0.277399696,183.560973 0.00267373922,155 C0.764126177,131.530908 20.7987285,128.746643 28.355249,118.189208 L28.3497263,118.186658 L28.3975364,118.129862 C30.1623699,115.641932 31.2347801,112.721764 31.2026676,109 C31.3716806,89.9992744 19.8139454,82.1607482 31.2026676,46 C42.8395963,9.53932757 72.9165934,0.768171773 116.002651,0.0159928999 L116.002651,0.0159928999 L116.002651,0 C116.16951,0 116.336177,0.0049705256 116.502651,0.0076322645 C116.669125,0.0049705256 116.835791,0 117.002651,0 L117.002651,0 Z"
          id={path2}
        ></path>
      </defs>

      <g
        id="hair"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(15, 13)"
      >
        <mask id={mask1} fill="white">
          <use xlinkHref={`#${path1}`}></use>
        </mask>
        <use id="long-hair-big-hair" xlinkHref={`#${path1}`}></use>

        <HairColor maskId={mask1} />
        <g id="shadow">
          {/* transform="translate(15, 13)" */}
          <mask id={mask2} fill="white">
            <use xlinkHref={`#${path2}`}></use>
          </mask>
          <path
            d="M31.2026676,109 C31.2224875,111.297079 30.8215528,113.2888 30.0967544,115.062004 C29.7199161,115.53995 29.3237418,116.054328 28.9222889,116.579617 L28.5929588,117.011336 L28.5929588,117.011336 L28.263128,117.444936 L28.263128,117.444936 L27.9346515,117.87743 C26.1351557,120.247629 24.481281,122.432065 24.3618393,122.19381 C26.2345006,119.810609 27.3747977,117.011661 27.3409475,113.436088 C27.517612,95.334874 15.4366324,87.8674306 27.3409475,53.4185647 C28.0073955,51.5154687 29.09961,49.7166428 30.570936,48.0220868 C20.2478142,82.4618663 31.3684775,90.3593731 31.2026676,109 Z M202.433497,48.0210859 C203.905262,49.7159345 204.997775,51.515094 205.664354,53.4185647 C213.790504,76.9341254 210.740152,87.8770698 208.041583,98.2121726 L207.840029,98.9863525 C207.739763,99.3730596 207.640396,99.7593326 207.542538,100.145802 L207.349011,100.919191 C206.93484,102.596246 206.556595,104.284895 206.263744,106.036479 C205.964379,106.841192 206.195125,107.789747 205.880216,108.603009 C175.207016,98.1454461 147.589972,78.5596292 131.494917,55.6119279 C120.392674,69.949674 102.743443,77.3810063 84.7082466,84.1899632 L82.4042592,85.056295 L82.4042592,85.056295 L80.0989267,85.9187702 L80.0989267,85.9187702 L77.7950977,86.780294 C61.1162394,93.0255825 44.7800189,99.424712 33.6608634,110.949437 C34.0538957,110.401193 34.4250251,109.88902 34.7584999,109.446288 C45.350206,95.3843997 62.2192916,88.1076043 79.4715769,81.0195881 L81.6756238,80.1152522 C100.419996,72.4284731 119.320243,64.6334681 130.845581,48.302359 C146.243536,72.3904102 172.664446,92.9495135 202.009146,103.926748 C202.310417,103.073073 202.089664,102.077381 202.376063,101.232679 C204.466543,87.5136961 211.105377,77.4727342 202.632704,48.7219504 Z"
            id="shadow-mask"
            fillOpacity="0.16"
            fill="#000000"
            mask={`url(#${mask2})`}
          ></path>

          <path
            d="M50.7584999,122.446288 C73.2940449,92.527377 124.24688,93.3241416 146.845581,61.302359 C162.243536,85.3904102 188.664446,105.949514 218.009146,116.926748 C218.310417,116.073073 218.089664,115.077381 218.376063,114.232679 C220.531197,100.089398 227.520377,89.8551619 217.802634,59 C206.165705,22.5393276 176.088708,13.7681718 133.002651,13.0159929 C132.336177,13.0049705 132.16951,13.0024268 132.002651,13 C88.9165934,13.7681718 58.8395963,22.5393276 47.2026676,59 C35.8139454,95.1607482 47.3716806,102.999274 47.2026676,122 C47.2350518,125.753256 46.1441426,128.691293 44.3525888,131.192923 C44.5361111,131.59459 48.5061717,125.436551 50.7584999,122.446288 Z"
            id="light"
            fillOpacity="0.1"
            fill="#FFFFFF"
            transform="translate(-16, -13)"
          ></path>
        </g>
      </g>
    </g>
  );
};

export default LongHairBigHair;

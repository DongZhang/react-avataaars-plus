import React from 'react';

// Utils
import { uniqueId } from 'lodash';

// Components
import HairColor from './HairColor';

const ShaggyMullet = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');

  return (
    <g>
      <defs>
        <path
          d="M81.3139331,151.591294 C86.6469247,164.342684 96.5611,174.701567 108.998986,180.610469 L109.000498,189.610276 C106.639234,190.401998 104.095411,191.063242 101.273548,191.569729 C92.2609618,193.18734 66.9485528,188.041497 55.8287461,179.588187 C54.9804404,178.942941 55.4105393,177.670743 56.4993303,177.596328 C68.2421528,176.792949 74.2106831,165.300379 79.0058562,156.190972 C79.7177834,154.838538 80.404519,153.474084 81.0706626,152.100303 Z M175.125712,166.895604 C175.840743,169.13621 176.874235,171.230121 178.55519,172.685954 C180.17619,174.090053 183.068114,173.745469 185.098621,173.802748 C186.770693,173.850632 188.444623,173.856087 190.114529,173.783655 C190.95366,173.747287 191.327571,174.79771 190.648775,175.281705 C190.518773,175.374442 190.388771,175.462634 190.25846,175.543856 C189.20761,176.198779 188.11838,176.802787 187.008721,177.356184 C184.485135,178.614206 181.821334,179.600077 179.02722,180.090436 C177.110999,180.426483 175.211641,180.489655 173.373193,180.266583 C173.858789,180.986758 174.419512,181.642311 175.071506,182.207788 C176.801481,183.708407 179.887821,183.340135 182.054832,183.401352 C183.839313,183.452528 185.625776,183.458358 187.407944,183.380946 C188.303488,183.342078 188.702535,184.464709 187.978106,184.981974 C187.839364,185.081086 187.700623,185.175341 187.561551,185.262145 C186.440057,185.962089 185.2776,186.607617 184.093342,187.199055 C181.400104,188.543555 178.557223,189.597195 175.57527,190.121262 C170.075488,191.087126 164.705859,189.943766 160.380755,186.413279 C159.163245,185.419467 158.026681,184.286937 156.999075,183.051889 L157.000016,180.610943 C163.870522,177.347119 169.971003,172.725487 174.954684,167.092821 Z M101.441738,25.5998777 C121.403017,20.3995724 135.651446,29.4743102 136.862131,30.2568033 C138.299428,31.1854765 138.85043,30.796545 140.483286,30.4052984 C146.829392,28.8846292 153.741035,28.1960616 160.187893,29.4782789 C166.528383,30.7396605 172.606255,34.0244119 177.74696,37.856181 C187.273882,44.9574883 195.508524,56.4379129 195.90592,68.6796644 C196.081329,74.1868816 195.28885,79.9070851 194.184533,85.2955724 C193.189889,90.1482867 189.869671,93.9714569 188.837367,98.7289227 C186.543239,90.9361007 180.566605,86.1012548 174.148391,81.6588274 L173.290297,81.068604 C173.14694,80.9705459 173.003436,80.8726253 172.859821,80.774814 L171.997078,80.189033 L171.997078,80.189033 L170.701685,79.3123249 C170.270166,79.0200593 169.839245,78.7275106 169.409882,78.4339187 L168.553519,77.8451188 C165.565512,75.7778742 162.685237,73.6346813 160.242068,71.1548033 C162.238626,74.9478777 165.29094,78.1026546 167.294435,81.8328914 C158.047309,76.1675881 149.087576,67.953725 145.262273,57.5379012 C144.554691,62.9359795 142.545911,67.9275978 139.15401,72.2035294 C136.142657,76.0002417 131.572444,80.0744315 126.858864,81.5445 C129.286511,76.0372828 131.361358,70.327001 133.266412,64.6190342 C132.319794,65.8472759 130.345502,68.9483385 128.343376,72.1784629 L127.821108,73.0228852 C125.734771,76.4031126 123.712794,79.7587655 122.891185,81.1086057 C121.234875,83.8298033 119.37772,86.426318 117.383805,88.9120401 C116.450603,90.0751967 115.455298,91.1993278 114.453055,92.302954 C113.869349,92.9458816 113.274082,93.578226 112.665931,94.1980029 C112.555148,94.3107899 112.069596,94.8405621 111.751974,95.1632341 L111.647728,95.2675027 C111.424883,95.4859888 111.359228,95.5142246 111.753871,95.0036468 C109.537639,97.8062025 106.276221,99.9826977 103.44325,102.112561 C100.59079,104.256976 97.4833088,106.08125 94.2522818,107.589351 C87.0932166,110.931649 79.7402436,112.148383 71.9327267,110.752066 L72.147048,110.788105 L72.3284821,110.800693 C73.5480643,110.828501 75.5398586,109.975832 76.6941053,109.626246 L76.8887739,109.570058 C78.6980301,109.07761 80.3625987,108.452872 82.0017312,107.546357 C85.2753717,105.735312 88.3514706,103.576015 91.1778346,101.127995 C88.4707222,102.280238 86.2726593,104.461694 83.513684,105.671152 C81.2270908,106.673576 78.9669245,107.196782 76.4817987,107.437218 C71.0203357,107.966046 64.4865987,106.716901 59.7607964,103.849523 C54.2686121,100.517478 51.2186099,94.7989286 49.7717335,88.7129442 C48.0913088,81.6460323 49.1355043,73.6726057 53.0992189,67.6388757 C53.2336661,69.781637 57.5349852,70.703365 61.0154166,70.1662691 C70.6728211,68.675365 76.4180436,32.1184491 101.441738,25.5998777 Z"
          id={path1}
        ></path>
      </defs>
      <g
        id="hair"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(-1, 0)"
      >
        <mask id={mask1} fill="white">
          <use xlinkHref={`#${path1}`}></use>
        </mask>
        <use id="short-hair-frizzle" xlinkHref={`#${path1}`}></use>

        <HairColor maskId={mask1} />
      </g>
    </g>
  );
};

export default ShaggyMullet;

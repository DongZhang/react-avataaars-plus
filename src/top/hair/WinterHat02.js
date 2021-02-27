import React from 'react';

// Utils
import { uniqueId } from 'lodash';

const WinterHat02 = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');

  return (
    <g>
      <defs>
        <path
          d="M32.4485915,77.5347425 C26.3649028,77.5347425 22.6330986,80.4596103 22.6330986,86.5347425 L22.6330986,165.988782 C22.6330986,196.446757 0,196.404852 0,176.910255 L0,103.04488 C0,68.8032255 17.2273451,21 72,21 L73.6319364,21.0142796 C127.115479,21.9547084 144,69.1456421 144,103.04488 L144,103.04488 L144,176.910255 C144,196.404852 121.366901,196.446757 121.366901,165.988782 L121.366901,165.988782 L121.366901,86.5347425 C121.366901,80.4596103 117.635097,77.5347425 111.551408,77.5347425 L111.551408,77.5347425 L32.4485915,77.5347425 Z"
          id={path1}
        ></path>
      </defs>
      <g
        id="winter-hat-02"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(61, 0)"
      >
        <g id="string-left" transform="translate(0, 176)" fill="#F4F4F4">
          <circle id="puff" cx="9" cy="65" r="9"></circle>
          <rect x="8" y="0" width="2" height="58"></rect>
        </g>
        <g id="string-right" transform="translate(126, 168)" fill="#F4F4F4">
          <circle id="puff" cx="9" cy="65" r="9"></circle>
          <rect x="8" y="0" width="2" height="58"></rect>
        </g>
        <circle id="puff" fill="#F4F4F4" cx="72" cy="20" r="20"></circle>
        <mask id={mask1} fill="white">
          <use xlinkHref={`#${path1}`}></use>
        </mask>
        <use id="combined-shape" fill="#F4F4F4" xlinkHref={`#${path1}`}></use>
        <g id="group" mask={`url(#${mask1}`}>
          <g transform="translate(-2, 19)" id="hat-color">
            <rect
              id="color"
              fill="#65C9FF"
              x="0"
              y="0"
              width="149"
              height="172"
            ></rect>
          </g>
        </g>
        <rect
          id="color-dark"
          fillOpacity="0.2"
          fill="#000000"
          mask={`url(#${mask1}`}
          x="-1"
          y="21"
          width="146"
          height="46"
        ></rect>
        <g
          id="light-triangles"
          mask={`url(#${mask1}`}
          fill="#FFFFFF"
          fillOpacity="0.5"
        >
          <g transform="translate(29, 32)" id="triangle1">
            <polygon
              transform="translate(12, 9) rotate(180) translate(-12.5, -9) "
              points="12.5 0 25 18 0 18"
            ></polygon>
            <polygon
              transform="translate(43.5, 9) rotate(180) translate(-43.5, -9) "
              points="43.5 0 56 18 31 18"
            ></polygon>
            <polygon
              transform="translate(74.5, 9) rotate(180) translate(-74.5, -9) "
              points="74.5 0 87 18 62 18"
            ></polygon>
          </g>
        </g>
        <g
          id="dark-triangles"
          mask={`url(#${mask1}`}
          fill="#000000"
          fillOpacity="0.5"
        >
          <g transform="translate(13, 41)" id="triangle2">
            <polygon points="12.5 0 25 18 0 18"></polygon>
            <polygon points="43.5 0 56 18 31 18"></polygon>
            <polygon points="74.5 0 87 18 62 18"></polygon>
            <polygon points="105.5 0 118 18 93 18"></polygon>
          </g>
        </g>
      </g>
    </g>
  );
};

export default WinterHat02;

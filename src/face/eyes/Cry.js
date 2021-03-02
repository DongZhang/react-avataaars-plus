import React from 'react';

const Cry = () => (
  <g id="eyes-cry">
    <circle
      id="eye-left"
      fillOpacity="0.6"
      fill="#000000"
      cx="30"
      cy="22"
      r="6"
    ></circle>
    <path
      d="M25,27 C25,27 19,34.2706667 19,38.2706667 C19,41.5846667 21.686,44.2706667 25,44.2706667 C28.314,44.2706667 31,41.5846667 31,38.2706667 C31,34.2706667 25,27 25,27 Z"
      id="drop"
      fill="#92D9FF"
      fillRule="nonzero"
    ></path>
    <circle
      id="eye-right"
      fillOpacity="0.6"
      fill="#000000"
      cx="82"
      cy="22"
      r="6"
    ></circle>
  </g>
);

export default Cry;

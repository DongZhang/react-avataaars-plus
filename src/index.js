import React from 'react';

// Utils
import { uniqueId, get } from 'lodash';

// Components
import PieceComponent from './piece';
import Skin from './skin';
import Clothes from './clothes';
import Face from './face';
import Top from './top';
import Handheld from './handheld';
import BackgroundColor from './background/BackgroundColor';
import AvatarContext from './context/AvatarContext';

const AvatarComponent = ({ style, avatarConfig = {} }) => {
  const path1 = uniqueId('react-path-');
  const path2 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');
  const mask2 = uniqueId('react-mask-');
  const circled = avatarConfig.avatarStyle
    ? avatarConfig.avatarStyle.toLowerCase() === 'circle'
    : true;
  const solid = get(avatarConfig, 'avatarStyle', '').toLowerCase() === 'solid';
  return (
    <AvatarContext.Provider value={{ ...avatarConfig }}>
      <svg width={280} height={280} style={style} viewBox="0 0 264 280">
        <defs>
          <circle id={path1} cx="120" cy="120" r="120"></circle>
          <path
            d="M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z"
            id={path2}
          />
        </defs>
        {solid && (
          <g id="solid-background" transform="translate(-8, 0)">
            <BackgroundColor />
          </g>
        )}
        {circled && [
          <g id="circle" transform="translate(12, 40)" key="circle">
            <mask id={mask1} fill="white">
              <use xlinkHref={`#${path1}`}></use>
            </mask>
            <use
              id="circle-gackground"
              fill="white"
              xlinkHref={`#${path1}`}
            ></use>
            <BackgroundColor maskId={mask1} />
          </g>,
          <mask id={mask2} fill="white" key="white">
            <use xlinkHref={`#${path2}`} transform="translate(0, -0)" />
          </mask>,
        ]}
        <g mask={`url(#${mask2})`} id="avatar">
          <Skin />
          <Clothes />
          <Face />
          <Top />
          <Handheld />
        </g>
      </svg>
    </AvatarContext.Provider>
  );
};

export const Piece = (props) => <PieceComponent {...props} />;

export const Avatar = ({ style, avatarConfig }) => (
  <AvatarComponent style={style} avatarConfig={avatarConfig} />
);

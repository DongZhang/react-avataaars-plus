import React, { useContext } from 'react';

// Context
import { AvatarContext } from '../index';

// Constants
import { DEFAULT_AVATAR_CONFIG } from '../index';

const toCamelCase = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};

const ComponentSelector = ({ componentsMap, maskId, optionKey }) => {
  const avatarConfig = useContext(AvatarContext);
  let selectedOption = toCamelCase(avatarConfig[optionKey]);
  if (!selectedOption || !componentsMap.hasOwnProperty(selectedOption)) {
    console.error(`${selectedOption} is not a valid ${optionKey} option`);
    selectedOption = DEFAULT_AVATAR_CONFIG[optionKey];
  }

  const Component = componentsMap[selectedOption];

  return <Component maskId={maskId} />;
};

export default ComponentSelector;
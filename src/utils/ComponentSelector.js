import React, { useContext } from 'react';

// Context
import AvatarContext from '../context/AvatarContext';

// Constants
import { DEFAULT_AVATAR_CONFIG } from '../constant/default';

const toCamelCase = (str) => {
  if (!str) {
    return str;
  }
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};

const ComponentSelector = ({ componentsMap, maskId, optionKey }) => {
  const avatarConfig = useContext(AvatarContext);
  let selectedOption;
  if (!avatarConfig[optionKey]) {
    selectedOption = DEFAULT_AVATAR_CONFIG[optionKey] || null;
  }
  selectedOption = toCamelCase(avatarConfig[optionKey]);

  if (!selectedOption) {
    selectedOption = DEFAULT_AVATAR_CONFIG[optionKey];
  } else if (!componentsMap.hasOwnProperty(selectedOption)) {
    console.error(`${selectedOption} is not a valid ${optionKey} option`);

    selectedOption = DEFAULT_AVATAR_CONFIG[optionKey];
  }

  const Component = componentsMap[selectedOption];

  return Component ? <Component maskId={maskId} /> : null;
};

export default ComponentSelector;

import React from 'react';

// Components
import ComponentSelector from '../utils/ComponentSelector';
import Hoodie from './Hoodie';
import ShirtScoopNeck from './ShirtScoopNeck';

const componentsMap = {
  hoodie: Hoodie,
  shirtScoopNeck: ShirtScoopNeck,
};

const Clothes = () => (
  <ComponentSelector componentsMap={componentsMap} optionKey="clothesType" />
);

export default Clothes;

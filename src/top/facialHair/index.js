import React from 'react';

// Components
import ComponentSelector from '../../utils/ComponentSelector';
import BeardLight from './BeardLight';
import BeardMagestic from './BeardMagestic';
import BeardMedium from './BeardMedium';
import MoustacheFancy from './MoustacheFancy';
import MoustacheMagnum from './MoustacheMagnum';

const componentsMap = {
  beardLight: BeardLight,
  beardMagestic: BeardMagestic,
  beardMedium: BeardMedium,
  moustacheFancy: MoustacheFancy,
  moustacheMagnum: MoustacheMagnum,
};

const FacialHair = () => (
  <ComponentSelector componentsMap={componentsMap} optionKey="facialHairType" />
);

export default FacialHair;

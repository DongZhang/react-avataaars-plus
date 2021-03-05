import React from 'react';

// Components
import ComponentSelector from '../utils/ComponentSelector';
import Hoodie from './Hoodie';
import ShirtScoopNeck from './ShirtScoopNeck';
import BlazerShirt from './BlazerShirt';
import BlazerSweater from './BlazerSweater';
import Sweater from './Sweater';
import GraphicShirt from './GraphicShirt';
import Overall from './Overall';
import ShirtCrewNeck from './ShirtCrewNeck';
import ShirtVNeck from './ShirtVNeck';

const componentsMap = {
  blazerShirt: BlazerShirt,
  hoodie: Hoodie,
  shirtScoopNeck: ShirtScoopNeck,
  blazerSweater: BlazerSweater,
  sweater: Sweater,
  graphicShirt: GraphicShirt,
  overall: Overall,
  shirtCrewNeck: ShirtCrewNeck,
  shirtVNeck: ShirtVNeck,
};

const Clothes = () => (
  <ComponentSelector componentsMap={componentsMap} optionKey="clothesType" />
);

export default Clothes;

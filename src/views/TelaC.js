import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default props => {
  console.warn(props.route.params ? props.route.params : 0);
  return <TextoCentral corFundo="#9932cd">TelaC</TextoCentral>;
};

import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default props => {
  return (
    <TextoCentral corFundo="#9932cd">
      TelaC-{props.route.params ? props.route.params : 0}
    </TextoCentral>
  );
};

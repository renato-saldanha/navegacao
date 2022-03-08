/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Button} from 'react-native';
import TextoCentral from '../components/TextoCentral';

export default props => {
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Button
          title="Abre Drawer"
          onPress={() => {
            props.navigation.openDrawer();
            setTimeout(() => {
              props.navigation.closeDrawer();
            }, 3000);
          }}
        />
      </View>
      <TextoCentral corFundo="#33fa72" corTexto="#000">
        TelaD-{props.route.params ? props.route.params : 0}
      </TextoCentral>
    </View>
  );
};

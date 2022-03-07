/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, View} from 'react-native';

export default props => (
  <View style={{flex: 1}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      {props.voltar ? (
        <Button
          title="Voltar"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      ) : (
        false
      )}
      {props.avancar ? (
        <Button
          title="Avançar"
          onPress={() => {
            props.navigation.push(props.avancar, {
              numero: parseInt(Math.random() * 100),
            });
            // props.navigation.navigate(props.avancar); navigate só navega entre as telas, caso a mesmo foi chamada novamente e estiver na pilha, não acontece nada
          }}
        />
      ) : (
        false
      )}
    </View>
    <View style={{flex: 1}}>{props.children}</View>
  </View>
);

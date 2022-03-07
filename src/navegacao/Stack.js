/* eslint-disable no-shadow */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, Text} from 'react-native';

import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';

const Stack = createNativeStackNavigator();

export default props => {
  return (
    <Stack.Navigator
      initialRouteName="TelaA"
      screenOptions={{headerShown: false}}>

      <Stack.Screen name="TelaA" options={{title: 'Infos. Iniciais'}}>
        {props => (
          <PassoStack {...props} avancar="TelaB">
            <TelaA />
          </PassoStack>
        )}
      </Stack.Screen>

      <Stack.Screen name="TelaB" options={{title: 'Infos. B'}}>
        {props => (
          <PassoStack {...props} avancar="TelaC" voltar>
            <TelaB />
          </PassoStack>
        )}
      </Stack.Screen>

      <Stack.Screen name="TelaC" options={{title: 'Infos. C'}}>
        {props => (
          <PassoStack {...props} avancar="TelaC" voltar>
            <TelaC {...props} />
          </PassoStack>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

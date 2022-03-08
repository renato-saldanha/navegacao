/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import TelaD from '../views/TelaD';
import {Button, View} from 'react-native';

const Drawer = createDrawerNavigator();

export default props => (
  <Drawer.Navigator
    screenOptions={{
      tabBarActiveTintColorolor: 'red',
      tabBarInactiveTintColor: 'blue',
      tabBarLabelStyle: {fontSize: 30},
    }}
    initialRouteName="TelaD">
    <Drawer.Screen name="TelaA" component={TelaA} />
    <Drawer.Screen name="TelaB" component={TelaB} />
    <Drawer.Screen name="TelaC" component={TelaC} />
    <Drawer.Screen name="TelaD" component={TelaD} />
  </Drawer.Navigator>
);

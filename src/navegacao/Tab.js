/* eslint-disable no-shadow */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const Tab = createBottomTabNavigator();

export default props => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        switch (route.name) {
          case 'TelaA':
            iconName = focused ? 'alarm' : 'alarm-outline';
            break;
          case 'TelaB':
            iconName = focused
              ? 'american-football'
              : 'american-football-outline';
            break;
          case 'TelaC':
            iconName = focused ? 'apps' : 'apps-outline';
            break;
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarShowLabel: false,
      tabBarActiveTintColorolor: 'red',
      tabBarInactiveTintColor: 'blue',
      tabBarLabelStyle: {fontSize: 20},
    })}
    initialRouteName="TelaB">
    <Tab.Screen name="TelaA" component={TelaA} />
    <Tab.Screen name="TelaB" component={TelaB} />
    <Tab.Screen name="TelaC" component={TelaC} />
  </Tab.Navigator>
);

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../pages/Main';
import User from '../pages/User';
import { BottomBarNavigatorParamList } from './types';

const BottomBarNavigator = () => {
  const Tab = createBottomTabNavigator<BottomBarNavigatorParamList>();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
};
export default BottomBarNavigator;

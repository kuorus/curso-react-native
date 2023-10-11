import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomBarNavigation from './BottomBarNavigation';
import { NavigationContainer } from '@react-navigation/native';
import Inbox from '../pages/Inbox';
import { RootNavigatorParamList } from './types';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootNavigatorParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Inbox'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomBar" component={BottomBarNavigation} />
        <Stack.Screen name="Inbox" component={Inbox} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;

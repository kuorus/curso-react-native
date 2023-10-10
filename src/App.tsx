import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import Main from './pages/Main';
import User from './pages/User';

function App(): Element {
  const isDarkMode = useColorScheme() === 'dark';

  const Stack = createNativeStackNavigator();

  const initialNavigation = [
    { name: 'Main', component: Main },
    { name: 'User', component: User },
  ];

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          {initialNavigation.map(item => (
            <Stack.Screen
              key={item.name}
              name={item.name}
              component={item.component}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

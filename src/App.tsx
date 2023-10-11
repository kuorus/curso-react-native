import React, { ReactNode } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import RootNavigator from './navigators/RootNavigator';
// @ts-ignore
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';

function App(): ReactNode {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        { __DEV__ && <FlipperAsyncStorage /> }
      <RootNavigator />
    </>
  );
}

export default App;

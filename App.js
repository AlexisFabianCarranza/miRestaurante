/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import AppNavigator from './Navigator';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';

const myTheme = {
  ...DefaultTheme,
  roundness: 10
}

const App = () => {
  return (
    <PaperProvider theme={myTheme}>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;

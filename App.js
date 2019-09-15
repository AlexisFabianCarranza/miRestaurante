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
import { MessageBar } from 'react-native-messages';
import { Provider as StoreProvider} from 'react-redux';
import store from './store';

const myTheme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6100',
    accent: '#3A22FF'
  }
}

const App = () => {
  return (
    <PaperProvider theme={myTheme}>
      <StoreProvider store={store}>
        <AppNavigator />
      </StoreProvider>
      <MessageBar/>
    </PaperProvider>
  );
};

export default App;

/*
 * @Date: 2019-11-18 00:32:02
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-26 18:45:37
 * @content: I
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {AppRegistry} from 'react-native';
import App from './pages/app';
import {name as appName} from './app.json';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import RNBootSplash from 'react-native-bootsplash';

import {Provider as StoreProvider} from 'react-redux';
import store from './store/reducer';

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ddd',
    accent: '#377',
  },
};

const Apps = () => {
  useEffect(() => {
    RNBootSplash.hide({duration: 250});
    console.disableYellowBox = true;
  }, []);
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </StoreProvider>
  );
};

AppRegistry.registerComponent(appName, () => Apps);

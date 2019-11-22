/*
 * @Date: 2019-11-18 00:32:02
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-22 02:35:16
 * @content: I
 */
/**
 * @format
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import RNBootSplash from 'react-native-bootsplash';

const theme = {
  ...DefaultTheme,
  roundness: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#377',
  },
};

const Apps = () => {
  useEffect(() => {
    RNBootSplash.hide({duration: 250});
    console.disableYellowBox = true;
  }, []);
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => Apps);

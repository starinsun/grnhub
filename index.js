/*
 * @Date: 2019-11-18 00:32:02
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-24 00:30:26
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
import store from './store/store';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true, // 你可以在构造函数这里就写好sync的方法 // 或是在任何时候，直接对storage.sync进行赋值修改 // 或是写到另一个文件里，这里require引入
  // sync: require('你可以另外写一个文件专门处理sync'),
});

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
    global.storage = storage;
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

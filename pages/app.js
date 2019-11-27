/*
 * @Date: 2019-11-18 20:23:31
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-27 18:19:15
 * @content: I
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './home';
import Detail from '../components/Detail';
import {NavigationNativeContainer} from '@react-navigation/native';
import WebView from '../components/WebView';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationNativeContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="detail"
          component={Detail}
          options={{title: '详情'}}
        />
        <Stack.Screen
          name="webview"
          component={WebView}
          options={{title: '网页'}}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};

export default App;

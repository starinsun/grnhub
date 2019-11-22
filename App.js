/*
 * @Date: 2019-11-18 00:32:02
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-22 03:22:35
 * @content: I
 */
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationNativeContainer} from '@react-navigation/native';

import AntdIcons from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

import React from 'react';
import Favor from './pages/favor';
import Home from './pages/home';
import Trend from './pages/trend';
import Mine from './pages/mine';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationNativeContainer>
        <Tab.Navigator activeColor="#f0edf6">
          <Tab.Screen
            name="home"
            component={Home}
            options={{
              tabBarLabel: '主页',
              tabBarColor: '#00efef',
              tabBarIcon: ({color}) => (
                <AntdIcons name="home" color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="favor"
            component={Favor}
            options={{
              tabBarLabel: '喜欢',
              tabBarColor: '#f479a3',
              tabBarIcon: ({color}) => {
                return (
                  <MaterialCommunityIcons
                    name="heart-multiple"
                    color={color}
                    size={20}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="trend"
            component={Trend}
            options={{
              tabBarLabel: '趋势',
              tabBarColor: '#ff4400',
              tabBarIcon: ({color}) => (
                <AntdIcons name="rocket1" color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="mine"
            component={Mine}
            options={{
              tabBarLabel: '我的',
              tabBarColor: '#a4e2a6',
              tabBarIcon: ({color}) => (
                <FontAwesome5Icons name="baby" color={color} size={20} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationNativeContainer>
    </>
  );
};

export default App;

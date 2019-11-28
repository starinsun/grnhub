/*
 * @Date: 2019-11-18 00:32:02
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-28 03:07:04
 * @content: I
 */
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import AntdIcons from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

import React from 'react';
import Favor from './favor';
import Trend from './trend';
import Search from './search';
import List from '../components/List';

const Tab = createMaterialBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator activeColor="#f0edf6" initialRouteName="trend">
      <Tab.Screen
        name="list"
        component={List}
        options={{
          tabBarLabel: '主页',
          tabBarColor: '#00efef',
          tabBarIcon: ({color}) => (
            <AntdIcons name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="trend"
        component={Trend}
        options={{
          tabBarLabel: '趋势',
          tabBarColor: '#ff6400',
          tabBarIcon: ({color}) => (
            <AntdIcons name="rocket1" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarLabel: '搜索',
          tabBarColor: '#a4f326',
          tabBarIcon: ({color}) => (
            <FontAwesome5Icons name="search" color={color} size={20} />
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
    </Tab.Navigator>
  );
};

export default Home;

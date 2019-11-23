/*
 * @Date: 2019-11-18 00:32:02
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-23 23:35:33
 * @content: I
 */
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import AntdIcons from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

import React from 'react';
import Favor from './favor';
import Trend from './trend';
import Mine from './mine';
import List from '../components/List';

const Tab = createMaterialBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator activeColor="#f0edf6">
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
  );
};

export default Home;

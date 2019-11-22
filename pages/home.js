/*
 * @Date: 2019-11-18 20:23:31
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-22 03:47:34
 * @content: I
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import List from '../components/List';
import Detail from '../components/Detail';

const Home = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="list">
      <Stack.Screen name="list" component={List} options={{title: '主页'}} />
      <Stack.Screen
        name="detail"
        component={Detail}
        options={{title: '详情'}}
      />
    </Stack.Navigator>
  );
};

export default Home;

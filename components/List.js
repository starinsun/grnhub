/*
 * @Date: 2019-11-22 03:39:50
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-22 21:39:39
 * @content: I
 */
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

const List = () => {
  const Tab = createMaterialTopTabNavigator();
  const [list, setList] = useState(['JS', 'TS', 'html', 'css', 'all']);
  return (
    <Tab.Navigator>
      {list.map(item => {
        return <Tab.Screen name={item} component={Right} />;
      })}
    </Tab.Navigator>
  );
};

const Left = () => {
  const nav = useNavigation();
  return (
    <View style={{alignItems: 'flex-start'}}>
      <Text>Home</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => {
          nav.navigate('detail');
        }}>
        Press ME
      </Button>
    </View>
  );
};

const Right = () => {
  const route = useRoute();
  return (
    <View>
      <Text>Home {route.name}</Text>
    </View>
  );
};

export default List;

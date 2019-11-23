/*
 * @Date: 2019-11-22 03:39:50
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-22 22:23:47
 * @content: I
 */
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ListContent from './ListContent';

const List = () => {
  const Tab = createMaterialTopTabNavigator();
  const [list, setList] = useState(['JS', 'TS', 'html', 'css', 'all']);
  return (
    <Tab.Navigator
      lazy="true"
      lazyPlaceholder={() => (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#821',
        style: {backgroundColor: '#00efef'},
      }}>
      {list.map(item => {
        return <Tab.Screen name={item} component={ListContent} />;
      })}
    </Tab.Navigator>
  );
};

export default List;

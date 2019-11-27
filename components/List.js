/*
 * @Date: 2019-11-22 03:39:50
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-27 01:58:04
 * @content: I
 */
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ListContent from './ListContent';
import {ActivityIndicator} from 'react-native-paper';

const List = () => {
  const Tab = createMaterialTopTabNavigator();
  const [list, setList] = useState(['typescript', 'javascript', 'html', 'css']);

  return (
    <Tab.Navigator
      lazy="true"
      lazyPlaceholder={() => (
        <View>
          <ActivityIndicator color="#00efef" size="large" />
        </View>
      )}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#812111',
        style: {backgroundColor: '#00efef'},
        scrollEnabled: true,
      }}>
      {list.map(item => {
        return <Tab.Screen name={item} component={ListContent} />;
      })}
    </Tab.Navigator>
  );
};

export default List;

/*
 * @Date: 2019-11-22 03:39:50
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-28 03:05:33
 * @content: I
 */
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ListContent from './ListContent';
import {ActivityIndicator, Appbar} from 'react-native-paper';
import {useRoute} from '@react-navigation/core';

const List = () => {
  const Tab = createMaterialTopTabNavigator();
  const [list, setList] = useState([
    'typescript',
    'javascript',
    'python',
    'html',
    'css',
  ]);
  const route = useRoute();
  console.log(route.state);

  return (
    <>
      <Appbar style={{borderRadius: 10}}>
        <Appbar.Action icon="home" color="#00efef" size={33} />
        <Appbar.Content
          title="GRNHUB BY ESWANG"
          titleStyle={{
            textShadowColor: '#00efef',
            textShadowRadius: 1,
            textShadowOffset: {width: 1, height: 1},
          }}
          subtitleStyle={{fontSize: 12, fontStyle: 'italic'}}
        />
        <Appbar.Action icon="git" color="#00efef" size={30} />
      </Appbar>

      <Tab.Navigator
        lazy="true"
        lazyPlaceholder={() => (
          <View>
            <ActivityIndicator color="#00efef" size="large" />
          </View>
        )}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#000',
          style: {backgroundColor: '#00efef'},
          scrollEnabled: true,
        }}
        order>
        {list.map((item, index) => {
          return <Tab.Screen name={item} component={ListContent} key={index} />;
        })}
      </Tab.Navigator>
    </>
  );
};

export default List;

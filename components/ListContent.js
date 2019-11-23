/*
 * @Date: 2019-11-21 21:34:48
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-22 22:21:00
 * @content: I
 */
import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/core';

const ListContent = () => {
  const nav = useNavigation();
  const route = useRoute();
  console.log(route);
  return (
    <View>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => {
          nav.navigate('detail');
        }}>
        {route.name}
      </Button>
    </View>
  );
};

export default ListContent;

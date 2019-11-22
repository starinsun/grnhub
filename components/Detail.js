/*
 * @Date: 2019-11-21 21:34:48
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-22 20:17:51
 * @content: I
 */
import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const Detail = () => {
  const nav = useNavigation();
  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

export default Detail;

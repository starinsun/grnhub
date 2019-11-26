/*
 * @Date: 2019-11-20 21:21:28
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-26 18:46:23
 * @content: I
 */
import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Button} from 'react-native-paper';
// import {useSelector, useDispatch} from 'react-redux';

const Favor = () => {
  const nav = useNavigation();
  // const dispatch = useDispatch();
  return (
    <View style={{alignItems: 'center'}}>
      <Button
        onPress={() => {
          nav.goBack();
        }}>
        Back
      </Button>
      <Button
        onPress={() => {
          nav.navigate('detail');
        }}>
        去detail
      </Button>
    </View>
  );
};

export default Favor;

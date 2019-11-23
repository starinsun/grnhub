/*
 * @Date: 2019-11-20 21:21:28
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-23 23:20:30
 * @content: I
 */
import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import countDispatch from '../store/dispatch';

const Mine = () => {
  const nav = useNavigation();
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <View style={{alignItems: 'center'}}>
      <Button
        onPress={() => {
          nav.goBack();
        }}>
        Back
      </Button>
      <Text>{count}</Text>
      <Button
        onPress={() => {
          dispatch(countDispatch.countUp);
        }}>
        add
      </Button>
      <Button>reduce</Button>
      <Button>reset</Button>
      <Button
        onPress={() => {
          nav.navigate('detail');
        }}>
        去detail
      </Button>
    </View>
  );
};

export default Mine;

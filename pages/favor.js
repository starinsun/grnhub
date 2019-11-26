/*
 * @Date: 2019-11-20 21:21:28
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-25 23:31:14
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
  storage.load({key: 'count'}).then(res => {
    console.log(res.name);
  });
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

      {/* <View>
        <Button
          onPress={() => {
            storage.clearMap();
          }}>
          Clear
        </Button>
      </View> */}
    </View>
  );
};

export default Favor;

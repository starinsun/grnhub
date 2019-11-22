/*
 * @Date: 2019-11-20 21:21:28
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-22 02:02:08
 * @content: I
 */
import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Button} from 'react-native-paper';
import {useRoute} from '@react-navigation/core';

const Mine = () => {
  const nav = useNavigation();
  const route = useRoute();
  return (
    <View>
      <Button
        onPress={() => {
          nav.goBack();
        }}>
        Back
      </Button>
    </View>
  );
};

export default Mine;

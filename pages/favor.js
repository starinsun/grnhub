/*
 * @Date: 2019-11-18 19:16:17
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-22 01:49:55
 * @content: I
 */
import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Button} from 'react-native-paper';
import {useRoute} from '@react-navigation/core';

const Favor = () => {
  const nav = useNavigation();
  const route = useRoute();
  return (
    <View>
      <Text>About {route.params ? route.params.id : 1}</Text>
      <Button
        onPress={() => {
          nav.goBack();
        }}>
        Back
      </Button>
    </View>
  );
};

export default Favor;

/*
 * @Date: 2019-11-25 23:46:20
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-27 18:27:11
 * @content: I
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNavigation, useRoute} from '@react-navigation/core';

const MyWeb = () => {
  const route = useRoute();
  console.log(route);
  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: route.params.url}} />
    </View>
  );
};

export default MyWeb;

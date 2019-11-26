/*
 * @Date: 2019-11-19 02:36:12
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-26 02:22:19
 * @content: I
 */
import React, {useState} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import MyFlatList from '../components/Flatlist';
import Repo from '../components/Repo';

const Trend = () => {
  return (
    <View>
      <Repo />
    </View>
  );
};

export default Trend;

/*
 * @Date: 2019-11-28 03:14:52
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-28 03:30:29
 * @content: I
 */
import React from 'react';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';

export default NoData = () => {
  return (
    <View>
      <IconButton
        color="#a4f326"
        icon="database-search"
        size={100}
        style={{
          width: 100,
          height: 100,
          position: 'absolute',
          top: 220,
          left: '50%',
          marginTop: -50,
          marginLeft: -50,
        }}></IconButton>
    </View>
  );
};

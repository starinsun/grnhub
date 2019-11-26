/*
 * @Date: 2019-11-24 15:01:12
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-26 01:53:32
 * @content: I
 */
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Repo from './Repo';

const MyFlatl = ({data, color}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <Repo data={item} color={color} />}
        onRefresh={() => {}}
        refreshing={false}
        ItemSeparatorComponent={() => (
          <View
            style={{height: 2, backgroundColor: color, marginHorizontal: 15}}
          />
        )}
      />
    </View>
  );
};

export default MyFlatl;

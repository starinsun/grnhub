/*
 * @Date: 2019-11-24 15:01:12
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-27 23:57:40
 * @content: I
 */
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Repo from './Repo';
import RepoT from './RepoT';

const MyFlatl = ({data, color, trend}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return trend ? (
            <RepoT data={item} color={color} />
          ) : (
            <Repo data={item} color={color} />
          );
        }}
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

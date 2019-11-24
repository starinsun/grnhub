/*
 * @Date: 2019-11-19 02:36:12
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-24 17:34:26
 * @content: I
 */
import React, {useState} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';

const Trend = () => {
  const [data, setData] = useState([
    {key: 'a'},
    {key: 'b'},
    {key: 'c'},
    {key: 'd'},
    {key: 'e'},
    {key: 'f'},
    {key: 'g'},
    {key: 'h'},
    {key: 'j'},
    {key: 'k'},
    {key: 'u'},
    {key: 'i'},
    {key: 'o'},
  ]);
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              height: 100,
              alignItems: 'center',
              padding: 5,
              borderRadius: 2,
            }}>
            <Text>{item.key}</Text>
          </View>
        )}
        onRefresh={() => {
          let newData = data.reverse();
          setData([...newData]);
        }}
        refreshing={false}
        initialNumToRender={8}
        ListHeaderComponent={() => <Text>Head</Text>}
        ItemSeparatorComponent={() => (
          <View
            style={{height: 2, backgroundColor: '#ccc', marginHorizontal: 15}}
          />
        )}
        ListFooterComponent={() => (
          <View>
            <ActivityIndicator size={'large'} animating={true} />
          </View>
        )}
        onEndReachedThreshold={0.1}
        onEndReached={() =>
          setData(
            ...data,
            {key: 'g'},
            {key: 'h'},
            {key: 'j'},
            {key: 'k'},
            {key: 'u'},
            {key: 'i'},
          )
        }
      />
    </View>
  );
};

export default Trend;

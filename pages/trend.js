/*
 * @Date: 2019-11-19 02:36:12
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-22 02:01:31
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
      <Text>Profile</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              height: 100,
              alignItems: 'center',
              backgroundColor: '#7812c6',
              margin: 5,
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
        // ListFooterComponent={() => (
        //   <View>
        //     <ActivityIndicator size={'large'} animating={true} />
        //   </View>
        // )}
        // extraData={data => data.reverse()}
      />
    </View>
  );
};

export default Trend;

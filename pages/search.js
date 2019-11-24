/*
 * @Date: 2019-11-20 21:21:28
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-24 16:05:05
 * @content: I
 */
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {ActivityIndicator} from 'react-native-paper';
import {Searchbar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import axios from 'axios';
import HeightEqualExample from '../components/Flatlist';

const Search = () => {
  const nav = useNavigation();
  const count = useSelector(state => state.count);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [load, setLoad] = useState(false);

  const getData = async () => {
    setLoad(true);
    let res = await axios.get(
      `https://api.github.com/search/repositories?q=${search}&page=1&per_page=10`,
    );
    setLoad(false);
    setData(res.data.items);
    // storage.save({key: 'count', data: {name: search}});
  };

  return (
    <View>
      <Searchbar
        placeholder="搜索"
        onChangeText={e => setSearch(e)}
        onIconPress={getData}
        icon="map-search-outline"
        iconColor="#a4f326"
        value={search}
      />
      <Text>{count}</Text>
      {load ? (
        <ActivityIndicator size="large" color="#a4f326" />
      ) : (
        data.map(item => <Text>{item.full_name}</Text>)
      )}
      <HeightEqualExample />
    </View>
  );
};

export default Search;

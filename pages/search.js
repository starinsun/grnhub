/*
 * @Date: 2019-11-20 21:21:28
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-26 18:47:49
 * @content: I
 */
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {ActivityIndicator, Searchbar} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {getSearchDataByThunk} from '../store/action';

import MyFlat from '../components/Flatlist';

const Search = () => {
  const nav = useNavigation();
  const data = useSelector(state => state.searchData);
  const [search, setSearch] = useState('');
  const [load, setLoad] = useState(false);

  const dispatch = useDispatch();
  const getSearchData = value => {
    const action = getSearchDataByThunk(value);
    dispatch(action);
  };

  return (
    <View>
      <Searchbar
        placeholder="搜索"
        onChangeText={e => setSearch(e)}
        onIconPress={() => getSearchData(search)}
        icon="map-search-outline"
        iconColor="#a4f326"
        value={search}
      />
      {load ? (
        <ActivityIndicator size="large" color="#a4f326" />
      ) : (
        <MyFlat data={data} color={'#a4f326'} />
      )}
      {/* <ActivityIndicator size="large" color="#a4f326" /> */}
    </View>
  );
};

export default Search;

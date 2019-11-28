/*
 * @Date: 2019-11-21 21:34:48
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-28 02:23:33
 * @content: I
 */
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import MyFlatl from './Flatlist';
import {getTypeDataByThunk} from '../store/action';

const ListContent = () => {
  const nav = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  console.log(route);
  useEffect(() => {
    const action = getTypeDataByThunk(route.name);
    dispatch(action);
  }, []);
  const data = useSelector(state => state.typeData);
  return (
    <View>
      <MyFlatl data={data} color={'#00efef'} trend={true} />
    </View>
  );
};

export default ListContent;

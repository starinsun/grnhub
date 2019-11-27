/*
 * @Date: 2019-11-19 02:36:12
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-28 00:50:32
 * @content: I
 */
import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Appbar} from 'react-native-paper';
import {getTrendDataByThunk} from '../store/action';
import MyFlatl from '../components/Flatlist';

const Trend = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getTrendDataByThunk();
    dispatch(action);
  }, []);
  const data = useSelector(state => state.trendData);
  return (
    <View>
      <Appbar style={{borderRadius: 10}}>
        <Appbar.Action icon="rocket" color="#ff6400" size={33} />
        <Appbar.Content
          title="What awesome today"
          subtitle="趋势总榜！"
          titleStyle={{
            textShadowColor: '#C0C0C0',
            textShadowRadius: 2,
            textShadowOffset: {width: 2, height: 2},
          }}
          subtitleStyle={{fontSize: 12, fontStyle: 'italic'}}
        />
        <Appbar.Action icon="blogger" color="#ff6400" size={30} />
      </Appbar>
      <MyFlatl data={data.slice(0, 23)} color={'#ff6400'} trend={true} />
    </View>
  );
};

export default Trend;

/*
 * @Date: 2019-11-19 02:36:12
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-28 03:09:45
 * @content: I
 */
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Appbar, ActivityIndicator} from 'react-native-paper';
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
            textShadowColor: '#ff6400',
            textShadowRadius: 1,
            textShadowOffset: {width: 1, height: 1},
          }}
          subtitleStyle={{fontSize: 12, fontStyle: 'italic'}}
        />
        <Appbar.Action icon="blogger" color="#ff6400" size={30} />
      </Appbar>
      {data[0] ? (
        <MyFlatl data={data.slice(0, 23)} color={'#ff6400'} trend={true} />
      ) : (
        <ActivityIndicator color={'#ff6400'} size="big" />
      )}
    </View>
  );
};

export default Trend;

/*
 * @Date: 2019-11-21 21:34:48
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-27 02:52:56
 * @content: I
 */
import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, IconButton} from 'react-native-paper';

const Detail = () => {
  const data = {
    author: 'google',
    name: 'gvisor',
    avatar: 'https://github.com/google.png',
    url: 'https://github.com/google/gvisor',
    description: 'Container Runtime Sandbox, this is what you like',
    language: 'Go',
    stars: 3320,
    forks: 118,
    currentPeriodStars: 1624,
    builtBy: [
      {
        href: 'https://github.com/viatsko',
        avatar: 'https://avatars0.githubusercontent.com/u/376065',
        username: 'viatsko',
      },
    ],
  };
  return (
    <View
      style={{
        justifyContent: 'space-around',
        margin: 20,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Avatar.Image
          size={100}
          source={{uri: data.avatar}}
          style={{rotation: 20}}
        />
        <View>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 'bold',
              textShadowColor: '#C0C0C0',
              textShadowRadius: 2,
              textShadowOffset: {width: 2, height: 2},
            }}>
            {data.name}
          </Text>
          <Text style={{fontSize: 25, fontWeight: '500', fontStyle: 'italic'}}>
            作者： {data.author}
          </Text>
        </View>
      </View>
      <View style={{margin: 20}}>
        <Text style={{fontSize: 20}}>简介： {data.description}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconButton icon="star" size={35}></IconButton>
          <Text>{data.stars}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconButton icon="source-fork" size={30}></IconButton>
          <Text>{data.forks}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconButton icon="star-face" size={35}></IconButton>
          <Text>{data.currentPeriodStars}</Text>
        </View>
      </View>
      <View></View>
      <View></View>
    </View>
  );
};

export default Detail;

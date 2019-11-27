/*
 * @Date: 2019-11-26 01:53:01
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-27 19:05:50
 * @content: I
 */
import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, Title, IconButton} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/core';

const Repo = ({data, color}) => {
  const nav = useNavigation();
  const {full_name, description, watchers, forks} = data;
  const avatar_url = data.owner.avatar_url;
  const language = data.language
    ? `language-${data.language.toLowerCase()}`
    : 'javascript';
  let author = full_name.match(/(.*)\/(.*)/)[2];
  let name = full_name.match(/(.*)\/(.*)/)[1];

  const ChangeColor = async () => {
    try {
      await AsyncStorage.setItem(
        JSON.stringify(full_name),
        JSON.stringify(data),
      );
    } catch (e) {
      console.log(e);
    }
  };

  const naviToDetail = () => {
    nav.navigate('detail', {
      data: {
        author,
        name,
        forks,
        description,
        language: data.language,
        avatar: avatar_url,
        url: data.html_url,
        currentPeriodStars: '暂无',
        stars: watchers,
      },
    });
  };
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 5,
      }}>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 10,
        }}>
        <Avatar.Image size={60} source={{uri: avatar_url}} />
        <IconButton icon={language} size={45} color={color}></IconButton>
      </View>
      <View
        style={{
          flex: 5,
          marginHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <Title onPress={naviToDetail}>{full_name}</Title>
        <Text>{description}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconButton icon="star" size={20}></IconButton>
            <Text>{watchers}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconButton icon="source-fork" size={20}></IconButton>
            <Text>{forks}</Text>
          </View>
          <IconButton icon="heart" size={25} onPress={ChangeColor}></IconButton>
        </View>
      </View>
    </View>
  );
};

export default Repo;

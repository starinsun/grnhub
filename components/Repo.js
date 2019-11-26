/*
 * @Date: 2019-11-26 01:53:01
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-26 03:23:47
 * @content: I
 */
import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, Title, IconButton} from 'react-native-paper';

const Repo = () => {
  const data = {
    full_name: 'react',
    language: 'JavaScript',
    watchers: 12323,
    forks: 22800,
    description: '21312dhiahbuadwis',
    avatar_url: 'https://avatars1.githubusercontent.com/u/6128107?v=4',
  };
  const language = `language-${data.language.toLowerCase()}`;
  console.log(language);
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 130,
        padding: 5,
      }}>
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
        <Avatar.Image size={70} source={{uri: data.avatar_url}} />
      </View>
      <View
        style={{
          flex: 5,
          marginHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <Title>{data.full_name}</Title>
        <Text>{data.description}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconButton icon="star"></IconButton>
            <Text>{data.watchers}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconButton icon="source-fork"></IconButton>
            <Text>{data.forks}</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1.2, justifyContent: 'center'}}>
        <IconButton icon={language} size={30}></IconButton>
        <IconButton icon="heart" size={30}></IconButton>
      </View>
    </View>
  );
};

export default Repo;

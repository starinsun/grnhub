/*
 * @Date: 2019-11-26 01:53:01
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-26 18:44:27
 * @content: I
 */
import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, Title, IconButton} from 'react-native-paper';

const Repo = ({data, color}) => {
  const {full_name, description, watchers, forks} = data;
  const avatar_url = data.owner.avatar_url;
  const language = data.language
    ? `language-${data.language.toLowerCase()}`
    : 'javascript';
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
        <Title>{full_name}</Title>
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
          <IconButton icon="heart" size={25}></IconButton>
        </View>
      </View>
    </View>
  );
};

export default Repo;

/*
 * @Date: 2019-11-26 01:53:01
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-26 04:03:04
 * @content: I
 */
import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, Title, IconButton} from 'react-native-paper';

const Repo = ({data}) => {
  const {full_name, description, watchers, forks} = data;
  const avatar_url = data.owner.avatar_url;
  const language = data.language
    ? `language-${data.language.toLowerCase()}`
    : 'javascript';
  console.log(language);
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        // height: 150,
        padding: 5,
      }}>
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
        <Avatar.Image size={70} source={{uri: avatar_url}} />
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
            justifyContent: 'flex-start',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconButton icon="star"></IconButton>
            <Text>{watchers}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconButton icon="source-fork"></IconButton>
            <Text>{forks}</Text>
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

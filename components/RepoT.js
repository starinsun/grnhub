/*
 * @Date: 2019-11-26 01:53:01
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-28 00:56:15
 * @content: I
 */
import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, Title, IconButton, Subheading} from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';

const RepoT = ({data, color}) => {
  const nav = useNavigation();
  const {
    author,
    name,
    avatar,
    currentPeriodStars,
    stars,
    description,
    language,
  } = data;
  const languages = language
    ? `language-${language.toLowerCase()}`
    : 'javascript';

  const naviToDetail = () => {
    nav.navigate('detail', {
      data: data,
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
          flex: 5,
          marginHorizontal: 15,
          justifyContent: 'space-between',
        }}>
        <Title onPress={naviToDetail}>{name}</Title>
        <Subheading onPress={naviToDetail}>作者或机构: {author}</Subheading>
        <Text onPress={naviToDetail}>{description}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconButton icon="star" size={20}></IconButton>
            <Text>{stars}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconButton icon="star-face" size={20}></IconButton>
            <Text>{currentPeriodStars}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 10,
        }}>
        <Avatar.Image size={60} source={{uri: avatar}} />
        <IconButton icon={languages} size={45} color={color}></IconButton>
      </View>
    </View>
  );
};

export default RepoT;

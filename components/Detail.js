/*
 * @Date: 2019-11-21 21:34:48
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-27 19:15:18
 * @content: I
 */
import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, IconButton, Button} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/core';

const Detail = () => {
  const nav = useNavigation();
  const route = useRoute();
  console.log(route);
  const {
    author,
    avatar,
    currentPeriodStars,
    description,
    forks,
    language,
    name,
    stars,
    url,
  } = route.params.data;
  const languages = language
    ? `language-${language.toLowerCase()}`
    : 'javascript';
  return (
    <View
      style={{
        justifyContent: 'space-around',
        margin: 10,
        padding: 10,
        backgroundColor: '#c0ebd7',
        borderColor: '#eee',
        borderWidth: 2,
        borderRadius: 10,
        flex: 1,
        overflow: 'hidden',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <Avatar.Image size={90} source={{uri: avatar}} style={{rotation: 20}} />
        <View>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              textShadowColor: '#C0C0C0',
              textShadowRadius: 2,
              textShadowOffset: {width: 2, height: 2},
            }}>
            {name}
          </Text>
          <Text style={{fontSize: 25, fontWeight: '500', fontStyle: 'italic'}}>
            作者： {author}
          </Text>
        </View>
      </View>
      <View style={{margin: 10}}>
        <Text style={{fontSize: 20}}>简介： {description}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconButton icon="star" size={35}></IconButton>
          <Text>{stars}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconButton icon="source-fork" size={30}></IconButton>
          <Text>{forks}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconButton icon="star-face" size={35}></IconButton>
          <Text>{currentPeriodStars}</Text>
        </View>
      </View>
      <View
        style={{
          margin: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontStyle: 'italic', marginBottom: 10}}>
          去源网址:{' '}
        </Text>
        <Button
          icon="run-fast"
          mode="contained"
          onPress={() => {
            nav.navigate('webview', {url: url});
          }}>
          冲丫~
        </Button>
      </View>
      <View
        style={{
          margin: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontStyle: 'italic'}}>主语言:</Text>
        <IconButton icon={languages} size={50}></IconButton>
      </View>
    </View>
  );
};

export default Detail;

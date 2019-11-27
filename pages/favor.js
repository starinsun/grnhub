/*
 * @Date: 2019-11-20 21:21:28
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-27 02:30:54
 * @content: I
 */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Button, Appbar, Dialog, Portal, Paragraph} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import MyFlatl from '../components/Flatlist';

const Favor = () => {
  useEffect(() => {
    getData();
  }, []);
  const nav = useNavigation();
  const getData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const value = await AsyncStorage.multiGet(keys);
      console.log(value);
      let data = [];
      value.map(item => {
        data.push(JSON.parse(item[1]));
      });
      setValue(data);
    } catch (e) {
      console.log(e);
    }
  };
  const [value, setValue] = useState([]);

  const ClearData = async () => {
    // 要加提醒
    try {
      await AsyncStorage.clear();
      JSON.s;
    } catch (e) {
      console.log(e);
    }
  };
  const [visible, setVisible] = useState(false);
  const _showDialog = () => setVisible(true);
  const _hideDialog = () => setVisible(false);

  return (
    <View>
      <Appbar style={{borderRadius: 10}}>
        <Appbar.Action
          icon="delete-circle"
          color="#f479a3"
          size={30}
          onPress={_showDialog}
        />
        <Appbar.Content
          title="My Favorite"
          subtitle="我喜欢的"
          titleStyle={{
            textShadowColor: '#C0C0C0',
            textShadowRadius: 2,
            textShadowOffset: {width: 2, height: 2},
          }}
          subtitleStyle={{fontSize: 12, fontStyle: 'italic'}}
        />
        <Appbar.Action
          icon="refresh"
          color="#f479a3"
          size={30}
          onPress={getData}
        />
      </Appbar>
      <Portal>
        <Dialog visible={visible} onDismiss={_hideDialog}>
          <Dialog.Title>警告</Dialog.Title>
          <Dialog.Content>
            <Paragraph>所有的收藏项都会被删除，确定继续操作吗~</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={_hideDialog}
              color="#f479a3"
              icon="cursor-default-click-outline">
              取消
            </Button>
            <Button onPress={ClearData} color="#222" icon="delete-circle">
              继续
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <MyFlatl data={value} color="#f479a3" />
    </View>
  );
};

export default Favor;

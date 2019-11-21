import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Button} from 'react-native-paper';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationNativeContainer} from '@react-navigation/native';

const Home = () => {
  const topTab = createMaterialTopTabNavigator();
  return (
    <topTab.Navigator initialRouteName="left">
      <topTab.Screen
        name="left"
        component={left}
        options={{tabBarLabel: 'Home'}}
      />
      <topTab.Screen
        name="right"
        component={right}
        options={{tabBarLabel: 'updates'}}
      />
    </topTab.Navigator>
  );
};

const left = () => {
  const nav = useNavigation();
  return (
    <View style={{alignItems: 'flex-start'}}>
      <Text>Home</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => {
          nav.navigate('About', {id: 2});
        }}>
        Press ME
      </Button>
    </View>
  );
};

const right = () => {
  return (
    <View>
      <Text>Home 2</Text>
    </View>
  );
};

export default Home;

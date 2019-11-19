import {useFocusEffect} from '@react-navigation/core';
import {View, Button, Text} from 'react-native';
import React, {useCallback, useEffect} from 'react';

const Home = ({navigation}) => {
  useFocusEffect(
    useCallback(() => {
      console.log('focused');
      return () => {
        console.log('out');
      };
    }, []),
  );

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title='Go to About'
        onPress={() =>
          navigation.navigate('About', {
            id: 3,
          })
        }
      />
      {/* <Button title='Open 抽屉' onPress={() => navigation.openDrawer()} /> */}
    </View>
  );
};

export default Home;

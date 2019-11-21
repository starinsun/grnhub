import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Button} from 'react-native-paper';
import {useRoute} from '@react-navigation/core';

const Who = () => {
  const nav = useNavigation();
  const route = useRoute();
  return (
    <View>
      <Button
        onPress={() => {
          nav.goBack();
        }}>
        Back
      </Button>
    </View>
  );
};

export default Who;

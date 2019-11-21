import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Button} from 'react-native-paper';
import {useRoute} from '@react-navigation/core';

const About = () => {
  const nav = useNavigation();
  const route = useRoute();
  return (
    <View>
      <Text>About {route.params ? route.params.id : 1}</Text>
      <Button
        onPress={() => {
          nav.goBack();
        }}>
        Back
      </Button>
    </View>
  );
};

export default About;

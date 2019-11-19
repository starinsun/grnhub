import React from 'react';
import {View, Text, Button} from 'react-native';

const About = ({route, navigation}) => {
  console.log(route.params);
  const {id} = route.params ?? {id: 1};
  return (
    <View style={{alignItems: 'flex-start'}}>
      <Text>Hello world</Text>
      <Text>{id}</Text>
      <Button
        title='Update title'
        onPress={() => navigation.setOptions({title: 'title updated'})}
      />
    </View>
  );
};

export default About;

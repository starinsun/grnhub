import {Image, Text, View} from 'react-native';
import React from 'react';

export default Logo = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        style={{width: 50, height: 50}}
        source={{
          uri:
            'https://res.cloudinary.com/practicaldev/image/fetch/c_scale,fl_progressive,q_auto,w_180/f_auto/https://thepracticaldev.s3.amazonaws.com/uploads/badge/badge_image/26/react-sticker.png',
        }}
      />
      <Text style={{fontSize: 28, fontStyle: 'italic', marginLeft: 10}}>
        React
      </Text>
    </View>
  );
};

import React, {useState} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';

const Profile = () => {
  const [data, setData] = useState([
    {key: 'a'},
    {key: 'b'},
    {key: 'c'},
    {key: 'd'},
    {key: 'e'},
    {key: 'f'},
    {key: 'g'},
    {key: 'h'},
    {key: 'j'},
    {key: 'k'},
    {key: 'u'},
    {key: 'i'},
    {key: 'o'},
  ]);
  return (
    <View>
      <Text>Profile</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              height: 100,
              alignItems: 'center',
              backgroundColor: '#7812c6',
              margin: 5,
            }}>
            <Text>{item.key}</Text>
          </View>
        )}
        onRefresh={() => {
          let newData = data.reverse();
          setData([...newData]);
        }}
        refreshing={false}
        // ListFooterComponent={() => (
        //   <View>
        //     <ActivityIndicator size={'large'} animating={true} />
        //   </View>
        // )}
        // extraData={data => data.reverse()}
      />
    </View>
  );
};

export default Profile;

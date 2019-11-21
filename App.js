import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign';

import {NavigationNativeContainer} from '@react-navigation/native';
import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';
import Who from './components/Who';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationNativeContainer>
      <Tab.Navigator activeColor="#f0edf6">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#70f3ff',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarLabel: 'About',
            tabBarColor: '#f47983',
            tabBarIcon: ({color}) => {
              return (
                <MaterialCommunityIcons
                  name="creditcard"
                  color={color}
                  size={20}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#48c0a3',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="chrome" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="who"
          component={Who}
          options={{
            tabBarLabel: 'who',
            tabBarColor: '#b0a4e3',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="mail" color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationNativeContainer>
  );
};

export default App;

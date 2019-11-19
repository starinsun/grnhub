import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import About from './components/About';
import Home from './components/Home';

import Logo from './utils/Logo';
import {Button} from 'react-native';

// Stack 导航
const Stack = createStackNavigator();

const App = () => (
  <NavigationNativeContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#61DAF6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '700',
          fontStyle: 'italic',
        },
      }}>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerTitle: props => <Logo {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('this is a button')}
              title='Info'
              color='#61F6AD'
            />
          ),
        }}
      />
      <Stack.Screen
        name='About'
        component={About}
        options={({route}) => ({
          title: `About id:${route.params.id}`,
        })}
      />
    </Stack.Navigator>
  </NavigationNativeContainer>
);

// Botton Tab 导航
// const Tab = createBottomTabNavigator();

// const App = () => {
//   return (
//     <NavigationNativeContainer>
//       <Tab.Navigator

//       >
//         <Tab.Screen name='Home' component={Home} />
//         <Tab.Screen name='About' component={About} />
//       </Tab.Navigator>
//     </NavigationNativeContainer>
//   );
// };

// // 抽屉导航
// const Drawer = createDrawerNavigator();

// const App = () => {
//   return (
//     <NavigationNativeContainer>
//       <Drawer.Navigator initialRouteName='Home'>
//         <Drawer.Screen name='Home' component={Home} />
//         <Drawer.Screen name='About' component={About} />
//       </Drawer.Navigator>
//     </NavigationNativeContainer>
//   );
// };

export default App;

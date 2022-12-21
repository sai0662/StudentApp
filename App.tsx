/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import Profile from './src/Screens/Profile';
import EditProfile from './src/Screens/editProfile';
import Event from './src/Screens/event';
import StudentProfile from './src/Screens/studentProfile';
import CounselorProfile from './src/Screens/counselorProfile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/homeScreen';
import TopTabNavigator from './src/Components';
import EditCounselorProfile from './src/Screens/editCounselorProfile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <EditCounselorProfile />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       options={{headerShown: false}}
    //       name="Home"
    //       component={HomeScreen}
    //     />
    //     <Stack.Screen
    //       options={{headerShown: false}}
    //       name="Profile"
    //       component={StudentProfile}
    //     />
    //     <Stack.Screen
    //       options={{headerShown: false}}
    //       name="Event"
    //       component={Event}
    //     />
    //     <Stack.Screen
    //       options={{headerShown: false}}
    //       name="TopTabs"
    //       component={TopTabNavigator}
    //     />
    //     <Stack.Screen
    //       options={{headerShown: false}}
    //       name="EditProfile"
    //       component={EditProfile}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;

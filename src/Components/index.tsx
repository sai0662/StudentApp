/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CounselorProfile from '../Screens/counselorProfile';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Reviews from '../Screens/review';

const Tab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'rgba(117, 81, 253, 0.1)',
          height: hp(10),
          marginTop: hp(-1),
          width: wp('100%'),
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#7551FD',
        },
      }}>
      <Tab.Screen
        name="Profile"
        component={CounselorProfile}
        options={{
          tabBarLabel: () => (
            <Text
              style={{
                color: '#7551FD',
                opacity: 100,
                fontSize: hp(2),
                marginTop: hp(3),
                fontWeight: '500',
              }}>
              My Profile
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Reviews"
        component={Reviews}
        options={{
          tabBarLabel: () => (
            <Text
              style={{
                color: 'black',
                fontSize: hp(2),
                marginTop: hp(3),
                fontWeight: '500',
              }}>
              My Reviews
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;

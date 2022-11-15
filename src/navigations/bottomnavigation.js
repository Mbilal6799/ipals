import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, Dimensions, StyleSheet} from 'react-native';
import {color, MentorColor} from '../config/color';
import {Mentor} from '../screens/MentorScreens';
import {screens} from '../screens';
const Tab = createBottomTabNavigator();
function MybottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="MentorDashboardScreen"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: color.black,
        tabBarInactiveTintColor: 'transparent',
        headerShown: false,
        tabBarActiveBackgroundColor: color.boxColor,
        tabBarInactiveBackgroundColor: 'red',
        tabBarHideOnKeyboard: true,
        swipeEnabled: true,
        animationEnabled: true,
        tabBarStyle: {
          height: hp('9'),
          //   paddingBottom: hp('0'),
          //   bottom: Platform.OS == 'ios' ? hp('4') : hp('2'),
          //   width: wp('90'),
          //   alignSelf: 'center',
          //   borderRadius: Platform.OS == 'android' ? 10 : 20,
          //   overflow: 'hidden',
        },
      })}>
      <Tab.Screen
        name="MentorServices"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={color == '#ffff' ? 'home' : 'home-outline'}
              color={'white'}
              size={hp('3')}
            />
          ),
          title: 'Services',
          tabBarLabelStyle: {
            fontSize: 15,
            marginBottom: hp('1'),
            color: 'white',
            // ...globalStyles.globalTextStyles3,
          },
        }}
        component={Mentor.MentorServices}
      />
      <Tab.Screen
        name="MentorDashboardScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={color == '#ffff' ? 'person' : 'person-outline'}
              color={'white'}
              size={hp('3')}
            />
          ),
          title: 'Home',
          tabBarLabelStyle: {
            fontSize: 15,
            marginBottom: hp('1'),
            color: 'white',
            // ...globalStyles.globalTextStyles3,
          },
        }}
        component={Mentor.MentorDashboardScreen}
      />

      <Tab.Screen
        name="MentorMessages"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={color == '#ffff' ? 'home' : 'home-outline'}
              color={'white'}
              size={hp('3')}
            />
          ),
          title: 'Messages',
          tabBarLabelStyle: {
            fontSize: 15,
            marginBottom: hp('1'),
            color: 'white',
            // ...globalStyles.globalTextStyles3,
          },
        }}
        component={Mentor.MentorMessages}
      />
    </Tab.Navigator>
  );
}
export default MybottomTabs;

const styles = StyleSheet.create({
  cartCircle: {
    backgroundColor: color.textSecondaryColor,
    position: 'absolute',
    bottom: hp('-2'),
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.18,
    height: Dimensions.get('screen').width * 0.18,
    alignContent: 'center',
    justifyContent: 'center',
  },
  cartInsideCircle: {
    backgroundColor: color.textSecondaryColor,
    position: 'absolute',
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.15,
    height: Dimensions.get('screen').width * 0.15,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: hp('1.5'),
    backgroundColor: color.badgeColor,
  },
});

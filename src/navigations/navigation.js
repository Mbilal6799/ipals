import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../screens';
import {Tutor} from '../screens/TutorScreens';
import {Tutee} from '../screens/TuteeScreen';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();

export default function StackNavigatior() {
  const {userData} = useSelector(state => state.userData);
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_left',
          headerShown: false,
        }}>
        {userData?.user_type == 'student' ? (
          // && token != '' && token != null
          <>
            <Stack.Screen
              name="TuteeDashboardScreen"
              component={Tutee.TuteeDashboardScreen}
            />
            <Stack.Screen
              name="SeacrhFilterScreen"
              component={Tutee.SeacrhFilterScreen}
            />
            <Stack.Screen
              name="SettingScreen"
              component={Tutor.SettingScreen}
            />

            {/* <Stack.Screen
              name="SubjectDetailScreen"
              component={Tutee.SubjectDetailScreen}
            /> */}
          </>
        ) : userData?.user_type == 'teacher' ? (
          // && token != '' && token != null
          <>
            <Stack.Screen
              name="DashboardScreen"
              component={Tutor.DashboardScreen}
            />
            <Stack.Screen
              name="SettingScreen"
              component={Tutor.SettingScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="LoginScreen" component={screens.LoginScreen} />
            <Stack.Screen
              name="SubjectDetailScreen"
              component={Tutee.SubjectDetailScreen}
            />
            <Stack.Screen
              name="OnboardScreen"
              component={screens.OnboardScreen}
            />
            <Stack.Screen
              name="CreateAccount"
              component={screens.CreateAccount}
            />
          </>
        )}
        {/* <Stack.Screen name="LoginScreen" component={screens.LoginScreen} />
        <Stack.Screen name="OnboardScreen" component={screens.OnboardScreen} />
        <Stack.Screen name="CreateAccount" component={screens.CreateAccount} /> */}
        <Stack.Screen name="ProfileScreen" component={Tutor.ProfileScreen} />
        {/* <Stack.Screen name="SettingScreen" component={Tutor.SettingScreen} /> */}
        <Stack.Screen
          name="TeacherFilterScreen"
          component={Tutee.TeacherFilterScreen}
        />
        <Stack.Screen name="MessageScreen" component={Tutor.MessageScreen} />
        <Stack.Screen
          name="TeacherDetailScreen"
          component={Tutor.TeacherDetailScreen}
        />
        <Stack.Screen name="Home" component={screens.Home} />
        <Stack.Screen name="Category" component={screens.Category} />
      </Stack.Navigator>
    </>
  );
}

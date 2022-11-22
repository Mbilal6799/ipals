import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color, colorTutor_, MentorColor} from '../../config/color';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SearchbarHeader} from '../SearchBarHeaderComp/SearchbarHeader';
import {styles} from './styles';
import {CircleImageComp} from '../CircleImageComp/CircleImageComp';
import {TextComp} from '../TextComponent';

export const ManteeFlatlistcomponent = props => {
  const {user} = props?.data?.category ?? props?.data;
  const data = [
    {
      id: 0,
      image: require('../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 1,
      image: require('../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 2,
      image: require('../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 3,
      image: require('../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 4,
      image: require('../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 5,
      image: require('../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
    {
      id: 6,
      image: require('../../image/profile.jpg'),
      name: 'Sarah Martin',
      clock: '9:00PM - 10:00PM',
      subject: 'English',
      timing: '1 hour',
    },
  ];
  const renderitem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.flatlistmain}
        onPress={() => {
          props.click(item);
        }}>
        <View style={styles.flupperView}>
          {/* <Image
            source={require('../../image/image.jpg')}
            style={styles.flimagecrop}
          /> */}
          {item?.profileImageLink && (
            <Image
              style={styles.flimagecrop}
              source={{uri: item?.profileImageLink}}
            />
          )}
          <View style={{width: wp('30')}}>
            <Text
              style={{fontSize: hp('1.8'), fontWeight: 'bold', color: 'gray'}}>
              {item?.f_name + ' ' + item?.l_name}
            </Text>
            <Text style={{fontSize: hp('1.5'), color: 'gray'}}>
              {item?.language}
            </Text>
          </View>
        </View>

        <View style={styles.subMainView}>
          <View
            style={[
              styles.subView,
              {
                backgroundColor:
                  item?.category.length > 0
                    ? colorTutor_.ipallightGreen
                    : colorTutor_.ipallightGreen,
              },
            ]}>
            <TextComp
              text={
                item?.category.length > 0
                  ? item?.category[0]?.title
                  : 'No Subject'
              }
              style={{fontSize: hp('1.3'), color: 'white'}}
            />
          </View>
        </View>

        <View style={styles.bottomView}>
          <View style={styles.bottombutton}>
            <Text style={styles.price}>
              $
              {Number(item?.amount).toFixed() === null
                ? 'Free'
                : Number(item?.amount).toFixed()}
            </Text>
          </View>
          <View style={styles.verticaldivider}></View>

          <MaterialCommunityIcons
            name="email"
            size={hp('4')}
            color={colorTutor_.lightGreen}
          />
          <View style={styles.verticaldivider}></View>
          <EvilIcons
            name="heart"
            size={hp('4')}
            color={MentorColor.MentorThemeFirst}
            style={{marginTop: hp('0.5')}}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={props?.data}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{marginLeft: wp('4')}}
      renderItem={renderitem}
    />
  );
};

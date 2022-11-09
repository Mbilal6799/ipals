import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextComponent,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {styles} from './style';
import {globalStyles} from '../../../config/globalStyles';
import {HeaderComponent} from '../../../components/HeaderComponent/HeaderComponent';
import {color, colorTutor_} from '../../../config/color';
import {ButtonIconComp} from '../../../components/ButtonIconComp/ButtonIconComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ClassesDetailView} from '../../../components/ClassesDetailView/ClassesDetailView';
import {TextComp} from '../../../components/TextComponent';
import {PendingReqComp} from '../../../components/PendingReqComp/PendingReqComp';
import HorizontalDividerComp from '../../../components/HorizontalDividerComp/HorizontalDividerComp';
import InformationTextView from '../../../components/InformationTextView/InformationTextView';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import PickerComponent from '../../../components/PickerComponent/PickerComponent';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment/moment';
import {CircleImageComp} from '../../../components/CircleImageComp/CircleImageComp';
import {ThreeViewComp} from '../../../components/ThreeViewComp/ThreeViewComp';
import {TuteeHomeComp} from '../../../components/TuteeHomeComp/TuteeHomeComp';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {TuteeHomeFlatListComp} from '../../../components/TuteeHomeFlatListComp/TuteeHomeFlatListComp';

const TuteeDashboardScreen = () => {
  const date = new Date();
  // var d = new Date(); // for now
  // d.getHours(); // => 9
  // d.getMinutes(); // =>  30
  // d.getSeconds(); // => 51
  // console.log(d.getHours())
  // setHour(d.getHours);
  var time = new Date();
  var getTime = time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const [timezone, setTimeZone] = useState(getTime);
  const time1 = date.setDate(date.getDate() + 1);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isDate, setIsDate] = useState(false);
  const [isDate2, setIsDate2] = useState(false);
  const [startDate, setStartDate] = useState(time);
  const [endDate, setEndDate] = useState(null);

  const upadateStartDate = e => {
    let d = new Date(e?.nativeEvent?.timestamp);

    setIsDate(false);
    setStartDate(d);
    console.log(44, d, time);

    setEndDate(d);
  };
  const upadateEndDate = e => {
    let d = new Date(e?.nativeEvent?.timestamp);
    setIsDate2(false);

    setEndDate(d);
  };
  const [list, setList] = useState([
    {
      id: 0,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
    {
      id: 1,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
    {
      id: 2,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
    {
      id: 3,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
    {
      id: 4,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
    {
      id: 5,
      name: 'Freddy Mercury',
      image: require('../../../image/profile.jpg'),
    },
  ]);
  const [message, setMessage] = useState([
    {
      id: 0,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 1,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 2,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 3,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 4,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 5,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
  ]);
  const subject = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];
  const [tutors, setTutors] = useState([
    {
      id: 0,
      firstText: 'Sarah Welson',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
      subject: subject,
    },
    {
      id: 1,
      firstText: 'Sarah Welson',
      image: require('../../../image/profile.jpg'),
      subject: subject,
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 2,
      firstText: 'Sarah Welson',
      subject: subject,
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 3,
      firstText: 'Sarah Welson',
      subject: subject,
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 4,
      firstText: 'Sarah Welson',
      subject: subject,
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 5,
      firstText: 'Sarah Welson',
      subject: subject,
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 6,
      firstText: 'Sarah Welson',
      subject: subject,
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 7,
      firstText: 'Sarah Welson',
      subject: subject,
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 8,
      firstText: 'Sarah Welson',
      subject: subject,
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 9,
      firstText: 'Sarah Welson',
      subject: subject,
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 10,
      firstText: 'Sarah Welson',
      subject: subject,
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
  ]);
  const pickerRef = useRef('English');

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const DropDownView = () => {
    return (
      <View style={styles.inputView}>
        <Text
          style={{
            paddingHorizontal: wp('2'),
            color: colorTutor_.TxtColor,
            fontSize: hp('2'),
          }}>
          From
        </Text>
        {console.log(startDate)}
        {isDate == true && Platform.OS == 'android' ? (
          <DateTimePicker
            testID="startDatePicker"
            value={startDate}
            mode={'time'}
            is24Hour={false}
            display="default"
            themeVariant="light"
            style={styles.datePicker}
            onChange={e => {
              upadateStartDate(e);
            }}
            onTouchCancel={() => {
              console.log(276), setIsDate(false);
            }}
          />
        ) : Platform.OS == 'android' ? (
          <TouchableOpacity
            onPress={() => setIsDate(true)}
            style={styles.dateContainer}>
            <Text style={styles.dateText}>
              {moment(startDate).format('LT')}
            </Text>
          </TouchableOpacity>
        ) : (
          <DateTimePicker
            testID="startDatePicker"
            mode={'time'}
            value={startDate}
            minimumDate={startDate}
            is24Hour={false}
            display="default"
            themeVariant="light"
            style={styles.datePicker}
            onChange={e => {
              upadateStartDate(e);
            }}
            onTouchCancel={() => {
              console.log(276), setIsDate(false);
            }}
          />
        )}
        <Text
          style={{
            paddingHorizontal: wp('2'),
            color: colorTutor_.TxtColor,
            fontSize: hp('2'),
          }}>
          To
        </Text>
        {endDate != null && isDate2 == true && Platform.OS == 'android' ? (
          <>
            <DateTimePicker
              testID="endDatePicker"
              value={endDate}
              mode={'time'}
              minimumDate={startDate}
              is24Hour={false}
              display="default"
              style={styles.datePicker}
              themeVariant="light"
              onChange={e => {
                upadateEndDate(e);
                // console.log(143, startDate), setIsDate(false);
              }}
              onTouchCancel={() => {
                console.log(276), setIsDate2(false);
              }}
            />
          </>
        ) : endDate != null && Platform.OS == 'ios' ? (
          <DateTimePicker
            testID="endDatePicker"
            mode={'time'}
            value={endDate}
            minimumDate={endDate}
            is24Hour={false}
            display="default"
            style={styles.datePicker}
            themeVariant="light"
            onChange={e => {
              upadateEndDate(e);
              // console.log(143, startDate), setIsDate(false);
            }}
            onTouchCancel={() => {
              console.log(276), setIsDate(false);
            }}
          />
        ) : endDate != null && isDate2 == false && Platform.OS == 'android' ? (
          <TouchableOpacity
            onPress={() => setIsDate2(true)}
            style={styles.dateContainer}>
            <Text style={styles.dateText}>{moment(endDate).format('LT')}</Text>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              backgroundColor: '#E0E0E0',
              height: hp('4.5'),
              width: wp('33'),
              borderRadius: 8,
            }}
          />
        )}
      </View>
    );
  };

  const [topNavigator, setTopNavigator] = useState([
    'HOME',
    'MY CLASSES',
    'MESSAGES',
  ]);
  const [index, setIndex] = useState(0);
  const checkIndexStatus = value => {
    setIndex(value);
    console.log(1444, value);
  };

  return (
    <View
      style={{
        backgroundColor: colorTutor_.ipalBlue,
        flex: 1,
      }}>
      <HeaderComponent
      bellOnPress={()=>console.log('bell')}
        navigatorName={topNavigator}
        search={true}
        checkIndexStatus={checkIndexStatus}
      />
      {/* <FilterScreen /> */}

      {index == 0 &&
        (list?.length > 0 ? (
          <TuteeHomeFlatListComp data={tutors} />
        ) : (
          // <FlatList
          //   data={tutors}
          //   keyExtractor={(item, index) => index.toString()}
          //   numColumns={2}
          //   contentContainerStyle={{
          //     width: wp('95'),
          //     alignSelf: 'center',
          //     paddingBottom: hp('15'),
          //   }}
          //   renderItem={({item}) => {
          //     return <TuteeHomeComp data={item} />;
          //   }}
          // />
          <View>
            <View style={styles.classDashBoard}>
              <TextComp text="My Classes" />
              <HorizontalDividerComp color={colorTutor_.blue} />
            </View>
            <InformationTextView text={'You don’t have Classes '} />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: hp('4'),
              }}>
              <ButtonIconComp
                style={{width: wp('90'), height: hp('7')}}
                TextStyle={{fontSize: hp('2.6')}}
                onPress={() => console.log('Create Class')}
                text="Create Class"
                size={hp('5.5')}
                name={'add'}
              />
            </View>
            <View style={{...styles.classDashBoard, marginTop: hp('6')}}>
              <TextComp text="Pending Requests" />
              <HorizontalDividerComp width={'53'} color={colorTutor_.blue} />
            </View>
            <InformationTextView text={'You don’t have pending requests.'} />
          </View>
        ))}

      {index == 1 &&
        (list?.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}>
            <View style={styles.classDashBoard}>
              <TextComp text={'My Classes'} />
              <ButtonIconComp
                onPress={() => console.log('All Classes')}
                text="View all classes"
                size={hp('3.5')}
                name={'arrow-forward'}
              />
            </View>
            <View>
              {list.length > 0 &&
                list.map(Item => {
                  return (
                    <ClassesDetailView text={Item?.name} image={Item?.image} />
                  );
                })}
            </View>
            <View style={styles.classDashBoard}>
              <TextComp text={'Pending Requests'} />
              <ButtonIconComp
                onPress={() => console.log('All Classes')}
                text="View all classes"
                size={hp('3.5')}
                name={'arrow-forward'}
              />
            </View>
            <View>
              {list.map(Item => {
                return <PendingReqComp text={Item?.name} image={Item?.image} />;
              })}
            </View>
          </ScrollView>
        ) : (
          <View>
            <View style={styles.classDashBoard}>
              <TextComp text="My Classes" />
              <HorizontalDividerComp color={colorTutor_.blue} />
            </View>
            <InformationTextView text={'You don’t have Classes '} />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: hp('4'),
              }}>
              <ButtonIconComp
                style={{width: wp('90'), height: hp('7')}}
                TextStyle={{fontSize: hp('2.6')}}
                onPress={() => console.log('Create Class')}
                text="Create Class"
                size={hp('5.5')}
                name={'add'}
              />
            </View>
            <View style={{...styles.classDashBoard, marginTop: hp('6')}}>
              <TextComp text="Pending Requests" />
              <HorizontalDividerComp width={'53'} color={colorTutor_.blue} />
            </View>
            <InformationTextView text={'You don’t have pending requests.'} />
          </View>
        ))}
      {index == 2 && (
        <ScrollView contentContainerStyle={styles.container}>
          {message.length > 0 &&
            message.map(res => {
              return (
                <ThreeViewComp
                  data={res}
                  viewStyle={{marginTop: hp('2'), alignSelf: 'center'}}
                />
              );
            })}
        </ScrollView>
      )}

      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => console.log('dont have you acc')}>
          <Text style={globalStyles.globalModuletutor}>Term of use</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('dont have you acc')}>
          <Text style={globalStyles.globalModuletutor}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const NotificationScreen = () => {
  const [message, setMessage] = useState([
    {
      id: 0,
      firstText: 'Nadia Salvester',
      image: require('../../../image/profile.jpg'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 1,
      image: require('../../../image/vedioCall.png'),
      firstText: 'Nadia Salvester',
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 2,
      firstText: 'Nadia Salvester',
      image: require('../../../image/accept.png'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
    {
      id: 3,
      firstText: 'Nadia Salvester',
      image: require('../../../image/cancelIcon.png'),
      secondText: "Hi, we aren't ready to start our class today...",
    },
  ]);
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      {message.length > 0 &&
        message.map(res => {
          return (
            <ThreeViewComp
              imageStyles={{
                width: Dimensions.get('window').width * 0.12,
                height: Dimensions.get('window').width * 0.12,
              }}
              viewStyle={{
                alignSelf: 'center',
                marginBottom: hp('1'),
                marginTop: hp('1'),
              }}
              data={res}
              changeIcon={
                <FontAwesome5
                  name="trash"
                  color={colorTutor_.ipallightGreen}
                  size={hp('2.5')}
                />
              }
            />
          );
        })}
    </ScrollView>
  );
};
export const FilterScreen = () => {
  const [tutorValue, setTutorValue] = useState({
    CountryData: {},
    CityData: {},
    StateData: {},
    ZipCodeData: {},
  });
  const h = {
    CountryData: 'CountryData',
    CityData: 'CityData',
    StateData: 'StateData',
    ZipCodeData: 'ZipCodeData',
  };
  const getTutorValue = (value, State) => {
    console.log(113, State, value);
    setTutorValue(pre => ({
      ...tutorValue,
      [State]: value,
    }));
  };
  const [pickerState, setPickerState] = useState({
    CountryData: [
      {
        id: 0,
        label: 'Aus',
        value: 'Aus',
        type: 'CountryData',
      },
      {
        id: 1,
        label: 'Eng',
        value: 'Aus',
        type: 'CountryData',
      },
    ],
    CityData: [
      {
        id: 0,
        label: 'Malbourne',
        value: 'Malbourne',
        type: 'CityData',
      },
      {
        id: 1,
        label: 'NewYork',
        value: 'NewYork',
        type: 'CityData',
      },
    ],
    StateData: [
      {
        id: 0,
        label: 'Malbourne',
        value: 'Malbourne',
        type: 'StateData',
      },
      {
        id: 1,
        label: 'NewYork',
        value: 'NewYork',
        type: 'StateData',
      },
    ],
    ZipCodeData: [
      {
        id: 0,
        label: '075245',
        value: '075245',
        type: 'ZipCodeData',
      },
      {
        id: 1,
        label: '35689',
        value: '35689',
        type: 'ZipCodeData',
      },
    ],
  });
  const {CityData, CountryData, StateData, ZipCodeData} = pickerState;
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <TextComp
        text="Search"
        style={{marginLeft: wp('3'), marginTop: hp('2')}}
      />
      <LoginInputComp
        style={{alignSelf: 'center', marginBottom: hp('2'), width: wp('95')}}
        placeholder="Search for tutors"
      />
      <View style={styles.twoPickerView}>
        <PickerComponent
          style={{width: wp('45'), marginRigh: wp('2')}}
          text={'Country'}
          data={CountryData}
          setSelectedValue={(val, state) => getTutorValue(val, state)}
          h={h.CountryData}
          selectedValue={tutorValue.CountryData}
        />
        <PickerComponent
          style={{width: wp('45'), marginRigh: wp('2')}}
          text={'City'}
          data={CityData}
          setSelectedValue={(val, state) => getTutorValue(val, state)}
          h={h.CityData}
          selectedValue={tutorValue.CityData}
        />
      </View>

      <View style={styles.twoPickerView}>
        <PickerComponent
          style={{width: wp('45'), marginRigh: wp('2')}}
          text={'State'}
          data={StateData}
          setSelectedValue={(val, state) => getTutorValue(val, state)}
          h={h.StateData}
          selectedValue={tutorValue.StateData}
        />
        <PickerComponent
          style={{width: wp('45'), marginRigh: wp('2')}}
          text={'Zip Code'}
          data={ZipCodeData}
          setSelectedValue={(val, state) => getTutorValue(val, state)}
          h={h.ZipCodeData}
          selectedValue={tutorValue.ZipCodeData}
        />
      </View>
      <ButtonThemeComp
        onPress={() => console.log('jbjfb')}
        style={{alignSelf: 'center', marginTop: hp('2')}}
        text="Search"
      />
    </ScrollView>
  );
};
export default TuteeDashboardScreen;

import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
import {useDispatch, useSelector} from 'react-redux';
import HorizontalDividerComp from '../../../components/HorizontalDividerComp/HorizontalDividerComp';
import InformationTextView from '../../../components/InformationTextView/InformationTextView';
import {TextComp} from '../../../components/TextComponent';
import {TuteeHomeFlatListComp} from '../../../components/TuteeHomeFlatListComp/TuteeHomeFlatListComp';
import {colorTutor_} from '../../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {HeaderComponent} from '../../../components/HeaderComponent/HeaderComponent';
import {ButtonIconComp} from '../../../components/ButtonIconComp/ButtonIconComp';
import {GetTeachreClasses} from '../../../config/Urls';
import axios from 'react-native-axios';
import {styles} from './styles';
import {errorMessage} from '../../../config/NotificationMessage';
import {errorHandler} from '../../../config/helperFunction';
import {BackHeaderComponent} from '../../../components/BackHeaderComponent/BackHeaderComponent';

const TeacherFilterScreen = ({route, navigation}) => {
  const item = route.params.item;
  const {userData, token} = useSelector(state => state.userData);
  const dispatch = useDispatch();
  const [allStates, setAllStates] = useState({
    acceptClassState: [],
    pendingClassState: [],
    GetTeacherState: [],
    messagesState: [],
    courcesState: [],
  });
  const [allLoading, setAllLoading] = useState({
    acceptLoading: false,
    pendingLoading: true,
    messageLoading: false,
    GetTeacherLoading: false,
    courcesLoading: false,
    createClassLoading: false,
  });
  const {GetTeacherLoading} = allLoading;
  const {GetTeacherState} = allStates;
  const updateState = data => {
    getApiData;
    setAllStates(prev => ({...prev, ...data}));
  };
  const updateLoadingState = data => {
    setAllLoading(prev => ({...prev, ...data}));
  };

  const getApiData = (url, state, loading) => {
    updateLoadingState({[loading]: true});

    axios
      .get(url, {
        params: {
          full_name: item.name,
          country_id: item.countryId,
          city_id: item.cityId,
          state_id: item.stateId,
          zip_code: item.zipCode,
          course_id: item.course_id,
        },
        headers: {Authorization: `Bearer ${token}`},
      })

      .then(function (response) {
        updateState({[state]: response.data.data});
        updateLoadingState({[loading]: false});
      })
      .catch(function (error) {
        updateLoadingState({[loading]: false});
        errorMessage(errorHandler(error));
      });
  };
  const [topNavigator, setTopNavigator] = useState([
    'HOME',
    'MY CLASSES',
    'MESSAGES',
  ]);
  const navigateTeacher = item => {
    navigation.navigate('TeacherDetailScreen', item);
  };

  useEffect(() => {
    getApiData(GetTeachreClasses, 'GetTeacherState', 'GetTeacherLoading');
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: colorTutor_.ipalBlue}}>
      <BackHeaderComponent heading={'Filter Teacher'} />
      <ScrollView contentContainerStyle={{flex: 1}}>
        {GetTeacherLoading ? (
          <SkypeIndicator
            color={'white'}
            size={hp('4')}
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          />
        ) : GetTeacherState?.length > 0 ? (
          <TuteeHomeFlatListComp
            navigate={navigateTeacher}
            data={GetTeacherState}
          />
        ) : (
          <View>
            <View style={styles.classDashBoard}>
              <TextComp text="Search Teacher" />
              <HorizontalDividerComp color={colorTutor_.blue} />
            </View>
            <InformationTextView text={'Teacher Not Found'} />
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default TeacherFilterScreen;

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  RefreshControl,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {TextMoneyBold, TextNormalSemiBold} from 'common/Text/TextFont';
import Images from 'common/Images/Images';
import {empty_logo, heightDevice, widthDevice} from 'assets/constans';
import LinearGradient from 'react-native-linear-gradient';
import PatientItem from './PatientItem';
import HeaderTab from './HeaderTab';
import {NAVIGATION_PACKAGE_DETAILS} from 'navigation/routes';
import {useDispatch, useSelector} from 'react-redux';
import {listPatientAction, resetListPatient} from 'store/actions';
import {listPatientSelector, statusListPatientSelector} from 'store/selectors';
import Status from 'common/Status/Status';
import Skeleton from './Skeleton';
import Colors from 'theme/Colors';
import {asyncStorage} from '../../store';
import {OneSignal} from 'react-native-onesignal';

const MyPatient = ({navigation}) => {
  const [tabActive, setTabActive] = useState(-1);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const listPatient = useSelector(state => listPatientSelector(state));

  const statusListPatient = useSelector(state =>
    statusListPatientSelector(state),
  );
  useEffect(() => {
    const navigationListener = navigation.addListener('focus', () => {
      setTabActive(2);
    });
    return navigationListener;
  }, [navigation]);
  const fetchPatientData = () => {
    if (tabActive !== -1) {
      dispatch(
        listPatientAction({
          page: 1,
          size: 10,
          status: tabActive,
        }),
      );
    }
  };
  useEffect(() => {
    if (statusListPatient === Status.SUCCESS) {
      dispatch(resetListPatient());
    }
  }, [statusListPatient]);
  useEffect(() => {
    if (refreshing) {
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
    }
  }, [refreshing]);
  const handleSelectPatient = item => {
    if (tabActive !== 2 || !item) {
      return;
    }
    navigation.navigate(NAVIGATION_PACKAGE_DETAILS, {
      packageDetail: item,
    });
  };
  const renderDoctorItem = ({item, index}) => {
    if (refreshing) {
      return <Skeleton item={item} />;
    }
    return (
      <PatientItem
        item={item}
        selectItem={() => handleSelectPatient(item)}
        tabActive={tabActive}
      />
    );
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchPatientData();
  }, []);
  useEffect(() => {
    setRefreshing(true);
    fetchPatientData();
  }, [tabActive]);

  const sendOneSignal = async () => {
    const tempUser = await asyncStorage.getUser();
    // const id = await OneSignal.User.pushSubscription.getPushSubscriptionId();
    console.log('IDDDDDDDDD:::::::::::::::::::', tempUser);
    if (tempUser == null) {
      return;
    }

    OneSignal.login(tempUser?.id.toString());

    let dataOneSignal = {
      cid: tempUser?.id,
      name: tempUser?.first_name + ' ' + tempUser?.last_name,
    };
    // console.log('dataOneSignalLLLLLLLLLL::::::::::', dataOneSignal);
    OneSignal.User.addTags(dataOneSignal);
  };

  useEffect(() => {
    sendOneSignal();
  }, []);

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containerSafeArea}
        refreshControl={
          <RefreshControl
            progressBackgroundColor={Colors.buttonBackground}
            colors={['white']}
            progressViewOffset={heightDevice / 2.3}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <LinearGradient
          colors={['#2643B3', '#546DE0']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={{height: heightDevice * (117 / 844), width: widthDevice}}>
          <View style={styles.wrapperTitle}>
            <TextMoneyBold style={styles.titleText}>Khách hàng</TextMoneyBold>
          </View>
        </LinearGradient>
        <View style={styles.container}>
          <View style={styles.wrapperMydoctor}>
            <HeaderTab
              isSelected={tabActive}
              requesting={listPatient.length}
              onPressTab={val => setTabActive(val)}
            />
            {listPatient && (
              <FlatList
                scrollEnabled={false}
                data={listPatient}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingTop: 5}}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                renderItem={renderDoctorItem}
              />
            )}
            {(!listPatient || listPatient.length === 0) && !refreshing && (
              <View style={styles.containerEmpty}>
                <Images
                  resizeMode="contain"
                  style={styles.imageEmpty}
                  source={empty_logo}
                />
                <TextNormalSemiBold style={styles.emptyDoctorText}>
                  Thêm thông tin bệnh nhân có thể giúp bạn liên hệ với họ dễ
                  dàng hơn
                </TextNormalSemiBold>
                {/* <CustomButton
                  label={'Thêm bệnh nhân'}
                  styledButton={styles.addDoctorBtn}
                /> */}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPatient;

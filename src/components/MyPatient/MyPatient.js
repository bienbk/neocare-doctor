import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  RefreshControl,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {TextMoneyBold, TextNormalSemiBold} from '../../common/Text/TextFont';
import Images from '../../common/Images/Images';
import {empty_logo, heightDevice, widthDevice} from '../../assets/constans';
import LinearGradient from 'react-native-linear-gradient';
import PatientItem from './PatientItem';
import HeaderTab from './HeaderTab';
import {NAVIGATION_PACKAGE_DETAILS} from '../../navigation/routes';
import {useDispatch, useSelector} from 'react-redux';
import {
  listPatientAction,
  resetListPatient,
} from '../../store/patients/patientAction';
import {
  listPatientSelector,
  statusListPatientSelector,
} from '../../store/patients/patientSelector';
import Status from '../../common/Status/Status';
import Skeleton from './Skeleton';
import Colors from '../../theme/Colors';

const MyPatient = ({navigation}) => {
  const [tabActive, setTabActive] = useState(2);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const listPatient = useSelector(state => listPatientSelector(state));

  const statusListPatient = useSelector(state =>
    statusListPatientSelector(state),
  );
  useEffect(() => {
    const navigationListener = navigation.addListener('focus', () => {
      fetchPatientData();
    });
    return navigationListener;
  }, [navigation]);
  const fetchPatientData = () => {
    dispatch(
      listPatientAction({
        page: 1,
        size: 10,
        status: tabActive,
      }),
    );
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
            <TextMoneyBold style={styles.titleText}> Bệnh nhân</TextMoneyBold>
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

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
// import {
//   NAVIGATION_CONNECTION,
//   NAVIGATION_DOCTOR_DETAIL,
// } from '../../navigation/routes';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../common/CustomButton/CustomButton';
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

const MyPatient = ({navigation}) => {
  const [tabActive, setTabActive] = useState(2);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const listPatient = useSelector(state => listPatientSelector(state));
  const statusListPatient = useSelector(state =>
    statusListPatientSelector(state),
  );
  useEffect(() => {
    fetchPatientData();
  }, []);
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
    if (
      statusListPatient === Status.SUCCESS ||
      statusListPatient === Status.ERROR
    ) {
      setRefreshing(false);
      dispatch(resetListPatient());
    }
  }, [statusListPatient]);
  const handleSelectPatient = item => {
    if (tabActive !== 2 || !item) {
      return;
    }
    navigation.navigate(NAVIGATION_PACKAGE_DETAILS, {
      packageDetail: item,
    });
  };
  const renderDoctorItem = ({item, index}) => {
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
    fetchPatientData();
  }, [tabActive]);
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containerSafeArea}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <LinearGradient
          colors={['#6D86F9', '#AFB9FF']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={{height: heightDevice * (117 / 844), width: widthDevice}}>
          <View style={styles.wrapperTitle}>
            <TextMoneyBold style={styles.titleText}> Bệnh nhân</TextMoneyBold>
            {/* {listPatient && (
              <TouchableOpacity onPress={() => setOpenOption(1)}>
                <Icons
                  type={'Feather'}
                  name={'plus-circle'}
                  size={25}
                  style={styles.iconPlus}
                  color={'white'}
                />
              </TouchableOpacity>
            )} */}
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
                contentContainerStyle={{paddingTop: 10}}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                renderItem={renderDoctorItem}
              />
            )}
            {(!listPatient || listPatient.length === 0) && (
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
      {/* <MyModal
        visible={openOption > 0}
        onPressOutSide={() => setOpenOption(-1)}>
        <View style={styles.removeModal}>
          <TouchableOpacity
            onPress={() => {
              setOpenOption(-1);
              navigation.navigate(NAVIGATION_CONNECTION, {type: 1});
            }}
            style={styles.optionButton}>
            <TextSemiBold style={{color: Colors.blue.blue40}}>
              Nhập mã thủ công
            </TextSemiBold>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setOpenOption(-1);
              navigation.navigate(NAVIGATION_CONNECTION, {type: 2});
            }}
            style={styles.optionButton}>
            <TextSemiBold style={{color: Colors.blue.blue40}}>
              Quét mã QR
            </TextSemiBold>
          </TouchableOpacity>
        </View>
      </MyModal> */}
    </SafeAreaView>
  );
};

export default MyPatient;

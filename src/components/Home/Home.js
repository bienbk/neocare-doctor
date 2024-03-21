import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  RefreshControl,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {TextNormalSemiBold} from 'common/Text/TextFont';
import Images from 'common/Images/Images';
import {empty_logo} from 'assets/constans';
import PatientItem from './PatientItem';
import HeaderTab from './HeaderTab';
import {NAVIGATION_PACKAGE_DETAILS} from 'navigation/routes';
import {useDispatch, useSelector} from 'react-redux';
import {listPatientAction, resetListPatient} from 'store/actions';
import {listPatientSelector, statusListPatientSelector} from 'store/selectors';
import Status from 'common/Status/Status';
import Skeleton from './Skeleton';
import Colors from 'theme/Colors';

const Home = ({navigation}) => {
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
    if (refreshing || statusListPatient === Status.LOADING) {
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }
  }, [refreshing, statusListPatient]);
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
    setRefreshing(true);
    fetchPatientData();
  }, [tabActive]);
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <HeaderTab
        isSelected={tabActive}
        requesting={listPatient.length}
        onPressTab={val => setTabActive(val)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containerListPatient}
        refreshControl={
          <RefreshControl
            progressBackgroundColor={Colors.buttonBackground}
            colors={['white']}
            // progressViewOffset={heightDevice / 2.3}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        {!refreshing && listPatient && (
          <FlatList
            scrollEnabled={false}
            data={listPatient}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => `${item.name}-${index}`}
            renderItem={renderDoctorItem}
          />
        )}
        {refreshing &&
          [...Array(4).keys()].map(i => <Skeleton item={listPatient[0]} />)}
        {(!listPatient || listPatient.length === 0) && !refreshing && (
          <View style={styles.containerEmpty}>
            <Images
              resizeMode="contain"
              style={styles.imageEmpty}
              source={empty_logo}
            />
            <TextNormalSemiBold style={styles.emptyDoctorText}>
              Thêm thông tin bệnh nhân có thể giúp bạn liên hệ với họ dễ dàng
              hơn
            </TextNormalSemiBold>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

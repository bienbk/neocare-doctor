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
import {
  NAVIGATION_PACKAGE_DETAILS,
  NAVIGATION_MY_PATIENT,
} from 'navigation/routes';
import {useDispatch, useSelector} from 'react-redux';
import {
  listPatientAction,
  resetListPatient,
  listEmergencyAction,
  listRequestedAction,
  resetListEmergency,
  resetListRequested,
} from 'store/actions';
import {
  listPatientSelector,
  statusListPatientSelector,
  listEmergencySelector,
  statusListEmergency,
  listRequestedSelector,
  statusListRequested,
} from 'store/selectors';
import Status from 'common/Status/Status';
import Skeleton from './Skeleton';
import Colors from 'theme/Colors';

import {asyncStorage} from 'store';
import {OneSignal} from 'react-native-onesignal';

const Home = ({navigation}) => {
  const [tabActive, setTabActive] = useState(-1);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const listPatient = useSelector(state => listPatientSelector(state));
  const listEmergency = useSelector(state => listEmergencySelector(state));
  const statusEmergency = useSelector(state => statusListEmergency(state));
  const listRequested = useSelector(state => listRequestedSelector(state));
  const statusRequested = useSelector(state => statusListRequested(state));
  const statusListPatient = useSelector(state =>
    statusListPatientSelector(state),
  );
  const sendOneSignal = async () => {
    const tempUser = await asyncStorage.getUser();
    if (!tempUser) {
      return;
    }
    OneSignal.login(tempUser?.id.toString());
    let dataOneSignal = {
      cid: tempUser?.id.toString(),
      name: tempUser?.first_name + ' ' + tempUser?.last_name,
    };
    OneSignal.User.addTags(dataOneSignal);
  };

  useEffect(() => {
    sendOneSignal();
  }, []);
  useEffect(() => {
    const navigationListener = navigation.addListener('focus', () => {
      setTabActive(0);
    });
    return navigationListener;
  }, [navigation]);
  const fetchPatientData = () => {
    if (tabActive === 2) {
      dispatch(
        listPatientAction({
          page: 1,
          size: 10,
          status: tabActive,
        }),
      );
    }
    if (tabActive === 0) {
      dispatch(
        listEmergencyAction({
          category: 1,
          read: false,
          page: 1,
          size: 100,
        }),
      );
    }
    if (tabActive === 1) {
      dispatch(
        listRequestedAction({
          category: 2,
          read: false,
          page: 1,
          size: 100,
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
    console.log('press item::', item);
    if (!item) {
      return;
    }
    tabActive === 2 &&
      navigation.navigate(NAVIGATION_PACKAGE_DETAILS, {
        packageDetail: {
          ...item.patient,
          order_id: item.order_id,
          package_items: item?.package_item_orders[0],
        },
      });
    tabActive !== 2 &&
      navigation.navigate(NAVIGATION_MY_PATIENT, {
        patient: item,
      });
  };
  const renderPatientItem = ({item, index}) => {
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
    if (statusEmergency === Status.SUCCESS) {
      dispatch(resetListEmergency());
    }
  }, [statusEmergency]);
  useEffect(() => {
    if (statusRequested === Status.SUCCESS) {
      dispatch(resetListRequested());
    }
  }, [statusRequested]);
  useEffect(() => {
    setRefreshing(true);
    if (tabActive !== -1) {
      fetchPatientData();
    }
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
            data={
              tabActive === 0
                ? listEmergency
                : tabActive === 1
                ? listRequested
                : listPatient
            }
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => `${item.name}-${index}`}
            renderItem={renderPatientItem}
          />
        )}
        {refreshing &&
          [...Array(4).keys()].map(i => <Skeleton item={listPatient[0]} />)}
        {listPatient.length === 0 &&
          listEmergency.length === 0 &&
          listRequested.length === 0 &&
          !refreshing && (
            <View style={styles.containerEmpty}>
              <Images
                resizeMode="contain"
                style={styles.imageEmpty}
                source={empty_logo}
              />
              <TextNormalSemiBold style={styles.emptyDoctorText}>
                Thông tin bệnh nhân có thể giúp bạn liên hệ với họ dễ dàng hơn
              </TextNormalSemiBold>
            </View>
          )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

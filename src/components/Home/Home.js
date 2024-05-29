import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  RefreshControl,
  ScrollView,
} from 'react-native';
import styles from './styles';
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
  getUserInfoAction,
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
import {getStatusGetUserInfo} from 'store/user/userSelector';

const Home = ({navigation}) => {
  const [tabActive, setTabActive] = useState(0);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const listPatient = useSelector(state => listPatientSelector(state));
  const listEmergency = useSelector(state => listEmergencySelector(state));
  const statusEmergency = useSelector(state => statusListEmergency(state));
  const listRequested = useSelector(state => listRequestedSelector(state));
  const statusRequested = useSelector(state => statusListRequested(state));
  const statusGetUserInfo = useSelector(state => getStatusGetUserInfo(state));
  const statusListPatient = useSelector(state =>
    statusListPatientSelector(state),
  );
  const sendOneSignal = async () => {
    const tempUser = await asyncStorage.getUser();
    if (!tempUser) {
      return;
    }
    console.log('come here', tempUser);
    OneSignal.login(tempUser?.id.toString());
    let dataOneSignal = {
      cid: tempUser?.id.toString(),
      name: tempUser?.last_name + ' ' + tempUser?.first_name,
    };
    OneSignal.User.addTags(dataOneSignal);
  };

  useEffect(() => {
    if (statusGetUserInfo === Status.SUCCESS) {
      sendOneSignal();
    }
  }, [statusGetUserInfo]);
  useEffect(() => {
    dispatch(getUserInfoAction());
    const navigationListener = navigation.addListener('focus', () => {
      setRefreshing(true);
    });
    return navigationListener;
  }, [navigation]);
  const fetchPatientData = () => {
    dispatch(
      listPatientAction({
        page: 1,
        size: 10,
        status: 2,
      }),
    );
    dispatch(
      listEmergencyAction({
        category: 1,
        read: false,
        page: 1,
        size: 100,
      }),
    );

    dispatch(
      listRequestedAction({
        category: 2,
        read: false,
        page: 1,
        size: 100,
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
      fetchPatientData();
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }
  }, [refreshing]);
  const handleSelectPatient = item => {
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

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <HeaderTab
        isSelected={tabActive}
        requested={listRequested.length}
        emergency={listEmergency.length}
        order={listPatient.length}
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
            contentContainerStyle={{marginBottom: 10}}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => `${item.name}-${index}`}
            renderItem={renderPatientItem}
          />
        )}
        {refreshing && (
          <View style={{flex: 1, marginTop: 10}}>
            {[...Array(4).keys()].map(i => (
              <Skeleton key={i} item={listPatient[0]} />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

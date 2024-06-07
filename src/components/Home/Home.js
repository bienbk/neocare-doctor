/* eslint-disable curly */
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
  resetListAllPatient,
  resetListEmergency,
  resetListRequested,
  listAllPatient,
} from 'store/actions';
import {
  listPatientSelector,
  statusListPatientSelector,
  listEmergencySelector,
  statusListEmergency,
  listRequestedSelector,
  statusAllPatientSelector,
  allPatientSelector,
  statusListRequested,
  statusListTag,
  tagSelector,
} from 'store/selectors';
import Status from 'common/Status/Status';
import Skeleton from './Skeleton';
import Colors from 'theme/Colors';

import {asyncStorage} from 'store';
import {OneSignal} from 'react-native-onesignal';
import {getStatusGetUserInfo} from 'store/user/userSelector';
import EmptyPage from 'common/EmptyPage/EmptyPage';
import {getTagAction} from 'store/patients/patientAction';

const Home = ({navigation}) => {
  const [tabActive, setTabActive] = useState(3);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(true);
  const listPatient = useSelector(state => listPatientSelector(state));
  const listEmergency = useSelector(state => listEmergencySelector(state));
  const statusEmergency = useSelector(state => statusListEmergency(state));
  const listRequested = useSelector(state => listRequestedSelector(state));
  const statusRequested = useSelector(state => statusListRequested(state));
  const statusGetUserInfo = useSelector(state => getStatusGetUserInfo(state));
  const statusListPatient = useSelector(state =>
    statusListPatientSelector(state),
  );
  const allPatient = useSelector(state => allPatientSelector(state));
  const statusAllPatient = useSelector(state =>
    statusAllPatientSelector(state),
  );
  const tags = useSelector(state => tagSelector(state));
  const statusListTags = useSelector(state => statusListTag(state));
  const sendOneSignal = async () => {
    const tempUser = await asyncStorage.getUser();
    if (!tempUser) {
      return;
    }
    OneSignal.login(tempUser?.id.toString());
    let dataOneSignal = {
      cid: tempUser?.id.toString(),
      name: tempUser?.last_name + ' ' + tempUser?.first_name,
    };
    OneSignal.User.addTags(dataOneSignal);
  };
  const fetchPatientData = () => {
    dispatch(
      listAllPatient({
        size: 100,
        page: 1,
        status: 0,
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
    dispatch(
      listPatientAction({
        page: 1,
        size: 10,
        status: 2,
      }),
    );
    dispatch(getTagAction());
  };

  useEffect(() => {
    statusListPatient === Status.SUCCESS && dispatch(resetListPatient());
    statusEmergency === Status.SUCCESS && dispatch(resetListEmergency());
    statusRequested === Status.SUCCESS && dispatch(resetListRequested());
    statusAllPatient === Status.SUCCESS && dispatch(resetListAllPatient());
  }, [statusListPatient, statusEmergency, statusRequested, statusAllPatient]);
  useEffect(() => {
    sendOneSignal();
  }, []);
  useEffect(() => {
    if (refreshing) {
      fetchPatientData();
      setTimeout(() => {
        setRefreshing(false);
      }, 1500);
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
        patient: tabActive === 3 ? {...item} : {...item, ...item?.patient},
        tags: tags,
      });
  };
  const renderPatientItem = ({item, _}) => {
    return (
      <PatientItem
        item={item}
        tags={tags}
        selectItem={val => handleSelectPatient(val)}
        tabActive={tabActive}
      />
    );
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  }, []);

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <HeaderTab
        isSelected={tabActive}
        requested={listRequested.length}
        emergency={listEmergency.length}
        order={listPatient.length}
        allPatient={allPatient.length}
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
        {!refreshing && (
          <FlatList
            scrollEnabled={false}
            data={
              tabActive === 0
                ? listEmergency
                : tabActive === 1
                ? listRequested
                : tabActive === 2
                ? listPatient
                : allPatient
            }
            contentContainerStyle={{marginBottom: 10}}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => `${item.name}-${index}`}
            renderItem={renderPatientItem}
          />
        )}
        {((tabActive === 0 && !listEmergency.length) ||
          (tabActive === 1 && !listRequested.length) ||
          (tabActive === 3 && !allPatient.length) ||
          (tabActive === 2 && !listPatient.length)) &&
          !refreshing && <EmptyPage />}
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

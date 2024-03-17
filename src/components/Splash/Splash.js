import React, {useEffect, useRef, useState} from 'react';
import {Platform, View, SafeAreaView, Text} from 'react-native';
import styles from './styles';

// import {useDispatch} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';
import {statusUpdateUserSelector, getStatusGetUserInfo} from 'store/selectors';
import {TextHighLightBold} from '../../common/Text/TextFont';
import {NAVIGATION_LOGIN, NAVIGATION_MAIN} from '../../navigation/routes';
import {getUserInfoAction} from '../../store/user/userAction';
import {asyncStorage} from '../../store';
import SuperTokens from 'supertokens-react-native';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();
  const statusUpdateUser = useSelector(state =>
    statusUpdateUserSelector(state),
  );
  const statusGetUserInfo = useSelector(state => getStatusGetUserInfo(state));
  useEffect(() => {
    dispatch(getUserInfoAction());
    // checkUser();
  }, []);

  useEffect(() => {
    checAuthentication();
  }, [statusUpdateUser, statusGetUserInfo]);
  async function doesSessionExist() {
    if (await SuperTokens.doesSessionExist()) {
      return true;
    } else {
      return false;
    }
  }
  const checAuthentication = async () => {
    const hasToken = await doesSessionExist();
    const user = (await asyncStorage.getUser()) || {id: -1};
    console.log('user async storeage:::@@@@@@@@@@@@@@@@@@', user);
    if (hasToken) {
      navigation && navigation.navigate(NAVIGATION_MAIN);
    } else {
      setTimeout(() => {
        navigation && navigation.navigate(NAVIGATION_LOGIN);
      }, 500);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <TextHighLightBold>WELCOME TO NEOCARE DOCTOR</TextHighLightBold>
      </View>
    </SafeAreaView>
  );
};
export default Splash;

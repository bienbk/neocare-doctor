import React, {useEffect, useRef, useState} from 'react';
import {Platform, View, SafeAreaView, Text} from 'react-native';
import styles from './styles';

// import {useDispatch} from 'react-redux';
import {TextHighLightBold} from '../../common/Text/TextFont';
import {NAVIGATION_LOGIN, NAVIGATION_MAIN} from '../../navigation/routes';
import {asyncStorage} from '../../store';

const Splash = ({navigation}) => {
  // const dispatch = useDispatch();
  useEffect(() => {
    checAuthentication();
  }, []);
  async function doesSessionExist() {
    if (await SuperTokens.doesSessionExist()) {
      return true;
    } else {
      return false;
    }
  }
  const checAuthentication = async () => {
    const hasToken = await doesSessionExist();
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

import React, {useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getStatusGetUserInfo} from 'store/selectors';
import {TextHighLightBold} from 'common/Text/TextFont';
import {NAVIGATION_LOGIN, NAVIGATION_MAIN} from 'navigation/routes';
import {getUserInfoAction} from 'store/user/userAction';
import SuperTokens from 'supertokens-react-native';
import {CommonActions} from '@react-navigation/native';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();
  const statusGetUserInfo = useSelector(state => getStatusGetUserInfo(state));
  useEffect(() => {
    dispatch(getUserInfoAction());
  }, []);

  useEffect(() => {
    checAuthentication();
  }, [statusGetUserInfo]);
  const doesSessionExist = async () => {
    const result = await SuperTokens.doesSessionExist();
    return result;
  };
  const checAuthentication = async () => {
    const hasToken = await doesSessionExist();
    hasToken &&
      navigation &&
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: NAVIGATION_MAIN}],
        }),
      );
    !hasToken &&
      navigation &&
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: NAVIGATION_LOGIN}],
        }),
      );
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

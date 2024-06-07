import React, {useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getStatusGetUserInfo} from 'store/selectors';
import {NAVIGATION_LOGIN, NAVIGATION_MAIN} from 'navigation/routes';
import {getUserInfoAction} from 'store/user/userAction';
import SuperTokens from 'supertokens-react-native';
import {CommonActions} from '@react-navigation/native';
import Colors from 'theme/Colors';
import Svg from 'common/Svg/Svg';

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
    setTimeout(() => {
      hasToken &&
        navigation &&
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: NAVIGATION_MAIN}],
          }),
        );
      !hasToken && navigation && navigation.navigate(NAVIGATION_LOGIN);
    }, 1000);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Svg name={'brand_name'} size={220} />
        <View style={styles.decorator}>
          <Svg name={'icon_splash'} size={300} color={Colors.main} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Splash;

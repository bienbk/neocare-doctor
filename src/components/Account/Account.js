import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Animated,
  TouchableOpacity,
} from 'react-native';

import {NAVIGATION_LOGIN} from 'navigation/routes';
import styles from './styles';
import Feature from 'common/Feature/Feature';
import Avatar from './Avatar';
import Colors from 'theme/Colors';
import {heightDevice, LIST_OPTION} from 'assets/constans';
import {
  TextMoneyBold,
  TextNormal,
  TextSemiBold,
  TextSmallMedium,
} from 'common/Text/TextFont';
import {TextNormalSemiBold} from '../../common/Text/TextFont';
import Images from '../../common/Images/Images';
import {qr_code} from '../../assets/constans';
import {asyncStorage} from 'store';
import {CommonActions} from '@react-navigation/native';
import SuperTokens from 'supertokens-react-native';
import {NAVIGATION_VERIFY_CODE} from '../../navigation/routes';
import {useDispatch, useSelector} from 'react-redux';
import {sendPhone} from '../../store/auth/authAction';
import {isStatusSendPhone} from '../../store/auth/authSelector';
import Status from '../../common/Status/Status';

const IMAGE_HEIGHT = heightDevice * 0.336;

const Account = ({navigation}) => {
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({id: -1, username: ''});
  const positionY = useRef(new Animated.Value(0)).current;
  const statusSendPhone = useSelector(state => isStatusSendPhone(state));
  const imageAnimation = {
    transform: [
      // {
      //   translateY: positionY.interpolate({
      //     inputRange: [0, IMAGE_HEIGHT],
      //     outputRange: [0, -IMAGE_HEIGHT / 3],
      //     extrapolate: 'clamp',
      //   }),
      // },
      {
        scaleY: positionY.interpolate({
          inputRange: [0, IMAGE_HEIGHT],
          outputRange: [1, 0.5],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const opacityHeader = positionY.interpolate({
    inputRange: [IMAGE_HEIGHT * 0.3, IMAGE_HEIGHT * 0.5],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const handleLogOut = async () => {
    await asyncStorage.clearStorage();
    await SuperTokens.signOut();
    setTimeout(() => {
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: NAVIGATION_LOGIN}],
          }),
        );
      }, 50);
    }, 100);
  };
  const renderFeature = list =>
    list.map((item, index) => (
      <Feature
        key={item.name}
        name={item.name}
        icon={item.icon}
        logOut={handleLogOut}
        index={index}
        lastIndex={index === list.length - 1}
        navigation={navigation}
        link={item.link}
      />
    ));
  const renderFooter = () => (
    <View>
      <View>
        <TextSmallMedium
          style={{color: Colors.gray.gray60, alignSelf: 'center'}}>
          Phiên bản 1.0 build 2445
        </TextSmallMedium>
      </View>
      <TextNormal
        onPress={() => deleteAccount()}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          textDecorationLine: 'underline',
        }}>
        Xóa tài khoản
      </TextNormal>
    </View>
  );

  const getUserStorage = async () => {
    const userStore = (await asyncStorage.getUser()) || {id: -1};
    setUser(userStore);
  };
  // console.log('USEEEE NAMEEEEE:', user);

  useEffect(() => {
    getUserStorage();
  }, []);

  const deleteAccount = async () => {
    const tempUser = await asyncStorage.getUser();
    if (!tempUser) {
      return;
    }
    dispatch(sendPhone(tempUser?.phone || tempUser?.phoneNumber));
  };

  const confirmOtp = async () => {
    const tempUser = await asyncStorage.getUser();
    if (!tempUser) {
      return;
    }
    navigation.navigate(NAVIGATION_VERIFY_CODE, {
      phone: tempUser?.phone
        ? tempUser?.phone.replace(/^\+84/, '')
        : tempUser?.phoneNumber
        ? tempUser?.phoneNumber.replace(/^\+84/, '')
        : null,
      screen: 'account',
    });
  };

  useEffect(() => {
    if (statusSendPhone === Status.SUCCESS) {
      confirmOtp();
    }
  }, [statusSendPhone]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[styles.wrapperAnimationHeader, {opacity: opacityHeader}]}>
        <View style={styles.wrapperHeaderTitle}>
          <TextMoneyBold numberOfLines={2} style={styles.textHeader}>
            {'Settings'}
          </TextMoneyBold>
        </View>
      </Animated.View>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: positionY}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={styles.containerContent}>
        <Animated.View style={[styles.wrapperHeader, imageAnimation]}>
          <Avatar />
        </Animated.View>
        <View style={styles.wrapperPackage}>
          <View>
            <TextNormalSemiBold>Mã giới thiệu</TextNormalSemiBold>
            <TextMoneyBold>{user?.qr_code}</TextMoneyBold>
          </View>
          <Images source={qr_code} style={styles.imageCode} />
        </View>
        <FlatList
          data={LIST_OPTION}
          scrollEnabled={false}
          style={styles.flatlistContainer}
          keyExtractor={(_, id) => id.toString()}
          contentContainerStyle={styles.containerFlatOption}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={renderFooter}
          renderItem={({item}) => {
            return (
              <View>
                <TextSemiBold style={styles.cardTitleFeature}>
                  {item.title}
                </TextSemiBold>
                <View style={styles.cardFeature}>
                  {renderFeature(item.items)}
                </View>
              </View>
            );
          }}
        />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Account;

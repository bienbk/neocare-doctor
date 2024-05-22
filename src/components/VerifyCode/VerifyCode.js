import {React, useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import CodeInput from './CodeInput';
import {confirmOtp, reSendPhone, confirmOtpReset} from 'store/actions';
import {
  isStatusConfirmOtp,
  getDeviceId,
  getPreAuthSessionId,
} from 'store/selectors';
import {TextNormal} from 'common/Text/TextFont';
import {asyncStorage} from 'store/index';
import strings from 'localization/Localization';
import {NAVIGATION_LOGIN, NAVIGATION_MAIN} from 'navigation/routes';
import {CommonActions} from '@react-navigation/native';
import {deleteAccountReset, getDeleteAccount} from 'store/user/userAction';
import SuperTokens from 'supertokens-react-native';
import {isStatusDeleteAccount} from 'store/user/userSelector';
import Status from 'common/Status/Status';
import {isErrorConfirm} from 'store/auth/authSelector';

const VerifyCode = ({navigation, route}) => {
  const {phone, screen} = route.params;
  const MAX_CODE_LENGTH = 6;
  const dispatch = useDispatch();
  const [code, setCode] = useState('');
  const [pinReady, setPinReady] = useState(false);
  const statusConfirmOtp = useSelector(state => isStatusConfirmOtp(state));
  const errorMessOtp = useSelector(state => isErrorConfirm(state));
  const [disableSendAgainButton, setDisableSendAgainButton] = useState(false);
  const [timer, setTimer] = useState(60);
  // const [resendTime, setResendTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000);
  }, []);

  const statusDeleteAccount = useSelector(state =>
    isStatusDeleteAccount(state),
  );
  const deviceId = useSelector(state => getDeviceId(state));
  const preAuthSessionId = useSelector(state => getPreAuthSessionId(state));
  const handleSendCodeAgain = async () => {
    setDisableSendAgainButton(true);
    dispatch(
      reSendPhone({deviceId: deviceId, preAuthSessionId: preAuthSessionId}),
    );
  };
  useEffect(() => {
    if (disableSendAgainButton === true) {
      if (timer > 0) {
        setTimeout(() => {
          setDisableSendAgainButton(false);
        }, timer * 1000);
      }
    }
  }, [disableSendAgainButton]);

  useEffect(() => {
    if (pinReady) {
      // dispatch(confirmOtp(code, deviceId.current, pushToken.current));
      dispatch(confirmOtp(code, deviceId, preAuthSessionId));
      // navigation.navigate(NAVIGATION_MAIN);
    }
  }, [pinReady]);

  useEffect(() => {
    if (statusConfirmOtp === Status.SUCCESS) {
      dispatch(confirmOtpReset());
      if (screen === 'account') {
        deleteAccount();
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: NAVIGATION_MAIN}],
          }),
        );
      }
    }
  }, [statusConfirmOtp]);

  //Delete the account
  const deleteAccount = () => {
    dispatch(getDeleteAccount());
  };

  const handleLogOut = async () => {
    await asyncStorage.clearStorage();
    await SuperTokens.signOut();
    dispatch(deleteAccountReset());
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

  useEffect(() => {
    if (statusDeleteAccount === Status.SUCCESS) {
      handleLogOut();
    }
  }, [statusDeleteAccount]);

  return (
    <SafeAreaView style={styles.safeView}>
      <Pressable style={styles.safeView} onPress={Keyboard.dismiss}>
        <View style={[styles.container]}>
          {/* Title */}
          <View style={styles.wrapperTitle}>
            <TextNormal style={styles.textIntro1}>
              {'Chào mừng bạn đến với'}
            </TextNormal>
            <TextNormal style={styles.textIntro}>{'NEO CARE'}</TextNormal>
            {/* <TextSemiBold>aa:{BASE_PATH_CAFE}</TextSemiBold> */}
            <View style={styles.wrapperSubtitle}>
              <TextNormal style={styles.subtitle}>
                {strings.verifyScreen.title}
              </TextNormal>
              <TextNormal style={styles.textReceive}>
                {'+84' + phone}
              </TextNormal>
            </View>
          </View>
          {/* Input section */}
          <View style={styles.wrapperInput}>
            <CodeInput
              setPinReady={setPinReady}
              code={code}
              setCode={setCode}
              maxLength={MAX_CODE_LENGTH}
              navigation={navigation}
            />
          </View>
          {pinReady ? (
            <View style={styles.wrapperSubtitle}>
              {statusConfirmOtp === Status.LOADING && (
                <TextNormal style={styles.subtitle}>
                  Đang xác minh...
                </TextNormal>
              )}
              {statusConfirmOtp === Status.ERROR && (
                <TextNormal style={styles.errorOtp}>{errorMessOtp}</TextNormal>
              )}
            </View>
          ) : (
            <View>
              {timer > 0 ? (
                <View style={styles.textShowTimer}>
                  <TextNormal style={styles.questionSendback}>
                    Bạn không nhận được mã? Gửi lại mã sau
                  </TextNormal>
                  <TextNormal style={styles.textReceive}>
                    {timer <= 59
                      ? timer <= 9
                        ? `00:0${timer}`
                        : `00:${timer}`
                      : `0${parseInt(timer / 60, 10)}:${
                          timer % 60 > 9 ? timer % 60 : '0' + (timer % 60)
                        } `}
                  </TextNormal>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={handleSendCodeAgain}
                  disabled={disableSendAgainButton || timer > 0}>
                  <TextNormal style={styles.textSend}>
                    {strings.verifyScreen.sendBack}
                  </TextNormal>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default VerifyCode;

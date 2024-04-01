import {NAVIGATION_ACCESS_LOCATION} from 'navigation/routes';
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
import Status from 'common/Status/Status';
import {TextNormal} from 'common/Text/TextFont';
import {asyncStorage} from 'store/index';
import strings from 'localization/Localization';
import {NAVIGATION_MAIN} from '../../navigation/routes';
import {CommonActions} from '@react-navigation/native';

const VerifyCode = ({navigation, route}) => {
  const {phone, type} = route.params;
  const MAX_CODE_LENGTH = 6;
  const dispatch = useDispatch();
  const [code, setCode] = useState('');
  const [pinReady, setPinReady] = useState(false);
  const statusConfirmOtp = useSelector(state => isStatusConfirmOtp(state));
  const [disableSendAgainButton, setDisableSendAgainButton] = useState(false);
  const [timer, setTimer] = useState(60);
  const [resendTime, setResendTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000);
  }, []);

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
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: NAVIGATION_MAIN}],
        }),
      );
    }
  }, [statusConfirmOtp]);

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
              <TextNormal style={styles.subtitle}>Đang xác minh...</TextNormal>
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

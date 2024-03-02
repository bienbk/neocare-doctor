import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useRef, useState} from 'react';

import {
  View,
  Pressable,
  TouchableOpacity,
  Keyboard,
  TextInput,
} from 'react-native';
import styles from './styles';
import {TextNormal, TextSemiBold} from '../../common/Text/TextFont';
import SeparatorLine from '../../common/SeparatorLine/SeparatorLine';
import Svg from 'common/Svg/Svg';
import Colors from 'theme/Colors';
import {heightDevice} from 'assets/constans';
import Images from '../../common/Images/Images';
import {icon_vietnam} from '../../assets/constans';
import {NAVIGATION_VERIFY_CODE} from '../../navigation/routes';

const Login = ({navigation}) => {
  const refInput = useRef(null);
  const [phone, setPhone] = useState('');

  const handleSubmitPhone = () => {
    if (!phone) {
      return 0;
    }
    navigation.navigate(NAVIGATION_VERIFY_CODE, {
      phone: phone.replace(/^0/, ''),
    });
  };
  return (
    <SafeAreaView style={styles.safeView}>
      <Pressable style={styles.safeView} onPress={Keyboard.dismiss}>
        <View style={[styles.container]}>
          <View>
            <View
              style={{
                paddingBottom: 30,
                paddingTop: 70,
                paddingHorizontal: 10,
              }}>
              <TextNormal style={styles.textIntro1}>
                {'Chào mừng bạn đến với'}
              </TextNormal>
              <TextNormal style={styles.textIntro}>{'NEO CARE'}</TextNormal>
              {/* <TextSemiBold>aa:{BASE_PATH_CAFE}</TextSemiBold> */}
              <TextNormal style={[styles.textHello]}>
                {'Nhập số điện thoại để tiếp tục đăng nhập'}
              </TextNormal>
            </View>
            <View style={{paddingBottom: 10, alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => refInput.current.focus()}
                style={styles.containerButtonInputPhone}>
                <View style={styles.viewImageVietnam}>
                  {/* <Images source={icon_vietnam} style={styles.imageVietNam} /> */}
                  <Svg name={'viet'} size={22} style={styles.imageVietNam} />
                </View>
                <TextNormal style={styles.codeCountry}>(+84)</TextNormal>
                <TextInput
                  ref={refInput}
                  placeholder="000 000 000"
                  placeholderTextColor={Colors.textGrayColor}
                  style={styles.styleTextInput}
                  keyboardType="number-pad"
                  returnKeyLabel={'Done'}
                  returnKeyType={'done'}
                  onChangeText={text => setPhone(text)}
                />
              </TouchableOpacity>
              <TextNormal style={styles.errorMessage}>
                {'Số điện thoại không hợp lệ'}
              </TextNormal>
            </View>
          </View>
          <View style={[styles.viewButtonSubmitPhone]}>
            <View style={styles.policyWrapper}>
              <TouchableOpacity
                // onPress={handleCheckBoxPolicy}
                style={styles.checkboxSection}>
                {/* <CheckBox
                  boxType={'square'}
                  lineWidth={2}
                  style={styles.styleCheckbox}
                  onTintColor={Colors.buttonTextColor}
                  onFillColor={Colors.buttonTextColor}
                  tintColors={{true: Colors.buttonTextColor, false: 'gray'}}
                  onCheckColor={Colors.whiteColor}
                  width={20}
                  value={confirmPolicy}
                  onChange={
                    Platform.OS === 'android' ? handleCheckBoxPolicy : () => {}
                  }
                /> */}
                <View style={{flexDirection: 'row'}}>
                  <TextNormal>{'Tôi đồng ý với điều khoản và '}</TextNormal>
                  <TextNormal style={styles.linkText1}>
                    {'chính sách bảo mật'}
                  </TextNormal>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => handleSubmitPhone()}
              style={[styles.buttonSubmitPhone]}>
              <TextSemiBold style={styles.textConfirm}>
                {'Tiếp tục'}
              </TextSemiBold>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log()}>
              <TextNormal style={styles.linkText}>
                {'Liên hệ hotline'}
              </TextNormal>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Login;

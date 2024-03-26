import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icons from 'common/Icons/Icons';
import Colors from 'theme/Colors';
import {TextSemiBold} from 'common/Text/TextFont';
import {widthDevice} from 'assets/constans';
import styles from './styles';
import {NAVIGATION_HOME} from 'navigation/routes';

const HeaderPatient = ({navigation}) => {
  return (
    <View style={styles.wrapperHeader}>
      <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION_HOME)}>
        <Icons
          type={'Ionicons'}
          name={'arrow-back'}
          size={20}
          color={Colors.gray.gray30}
        />
      </TouchableOpacity>
      <TextSemiBold style={{textAlign: 'center', width: widthDevice - 70}}>
        Hồ sơ bệnh nhân
      </TextSemiBold>
    </View>
  );
};

export default HeaderPatient;

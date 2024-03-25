import React from 'react';
import {TextSmallTwelve, TextNormal} from 'common/Text/TextFont';
import {View} from 'react-native';
import styles from './styles';
import {STATUS_COLORS, STATUS} from 'assets/constans';
import Colors from '../../theme/Colors';

const BloodPressureParameter = ({parameter}) => {
  return (
    <View style={styles.wrapperParameterItem}>
      <View style={styles.lineBetween}>
        <TextNormal style={styles.weightBold}>Huyết Áp</TextNormal>
        <View style={styles.wrapperCholesterol}>
          <TextNormal style={styles.textParameter}>
            {`${parameter?.index_sys}`}
            <TextSmallTwelve style={styles.textGray}>
              {` ${parameter.unit_sys_name}`}
            </TextSmallTwelve>
          </TextNormal>
          <TextNormal style={styles.textParameter}>
            {`${parameter?.index_dia}`}
            <TextSmallTwelve style={styles.textGray}>
              {` ${parameter.unit_dia_name}`}
            </TextSmallTwelve>
          </TextNormal>
          <TextNormal style={styles.textParameter}>
            {`${parameter?.index_pulse}`}
            <TextSmallTwelve style={styles.textGray}>
              {` ${parameter.unit_pulse_name}`}
            </TextSmallTwelve>
          </TextNormal>
        </View>
      </View>
    </View>
  );
};

export default BloodPressureParameter;

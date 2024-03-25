import React from 'react';
import {View} from 'react-native';
import {TextNormal, TextSmallTwelve} from 'common/Text/TextFont';
import styles from './styles';
import {STATUS_COLORS, STATUS} from '../../assets/constans';
const CholesterolParameter = ({parameter}) => (
  <View style={styles.wrapperParameterItem}>
    <View style={styles.lineBetween}>
      <TextNormal style={styles.weightBold}>Cholesterol</TextNormal>
      <TextNormal style={styles.textParameter}>
        {`${parameter?.total}`}
        <TextSmallTwelve style={styles.textGray}>
          {` ${parameter.unit_name}`}
        </TextSmallTwelve>
      </TextNormal>
    </View>
  </View>
);

export default CholesterolParameter;

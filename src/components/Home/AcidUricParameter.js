import React from 'react';
import {TextSmallTwelve, TextNormal} from 'common/Text/TextFont';
import {View} from 'react-native';
import styles from './styles';

const AcidUricParameter = ({parameter}) => {
  return (
    <View style={styles.wrapperParameterItem}>
      <View style={styles.lineBetween}>
        <TextNormal style={styles.weightBold}>Acid Uric</TextNormal>
        <TextSmallTwelve style={styles.textParameter}>
          {parameter?.index}
          <TextSmallTwelve style={styles.textGray}>
            {` ${parameter.unit_name}`}
          </TextSmallTwelve>
        </TextSmallTwelve>
      </View>
    </View>
  );
};

export default AcidUricParameter;

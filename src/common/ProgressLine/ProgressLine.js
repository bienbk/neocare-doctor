import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icons from '../Icons/Icons';
import {TextNormal} from '../Text/TextFont';
import Colors from '../../theme/Colors';
import {widthDevice} from '../../assets/constans';
import LinearGradient from 'react-native-linear-gradient';
import Svg from '../Svg/Svg';

const ProgressLine = ({isDetailDoctor}) => {
  return (
    <View style={styles.wrapperTimeSection}>
      {!isDetailDoctor && (
        <View style={styles.wrapperTitleTime}>
          <Svg name={'icon_checked'} size={16} />
          <TextNormal style={styles.textTitleTime}>
            Gói chăm sóc sức khoẻ 6 tháng
          </TextNormal>
          <TextNormal style={{textAlign: 'right', flex: 1, fontWeight: 'bold'}}>
            150 ngày
          </TextNormal>
        </View>
      )}
      <View style={styles.wrapperTimeline}>
        {/* <View
          style={
            isDetailDoctor ? styles.wrapperTimeLeft : styles.wrapperTimeLeftRed
          }
        /> */}
        <LinearGradient
          colors={['#94A6FF', '#EE8FA7']}
          style={[styles.wrapperTimeLeft, {width: `${(250 / 365) * 100}%`}]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
        />
      </View>
    </View>
  );
};

export default ProgressLine;
const styles = StyleSheet.create({
  wrapperTimeSection: {
    paddingVertical: 5,
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  wrapperTitleTime: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  wrapperTimeline: {
    backgroundColor: Colors.gray.gray95,
    width: '100%',
    height: 10,
    borderRadius: 20,
  },
  textTitleTime: {paddingHorizontal: 2},
  wrapperTimeLeftRed: {
    backgroundColor: Colors.blue.blue50,
    height: 10,
    borderRadius: 20,
  },
  wrapperTimeLeft: {
    // backgroundColor: Colors.pink.pink60,
    width: `${(250 / 365) * 100}%`,
    height: 10,
    borderRadius: 20,
  },
});

import React from 'react';
import {View} from 'react-native';
import Svg from 'common/Svg/Svg';
import {TextNormalSemiBold, TextSmallEleven} from 'common/Text/TextFont';
import ProgressCircle from 'react-native-progress-circle';
import styles from './styles';

const PackageInfo = ({currentPackge}) => {
  // console.log('current package::::', currentPackge);
  return (
    <View style={styles.containerPackageInfo}>
      <View style={styles.wrapperPackageName}>
        <Svg name={'icon_gift'} size={40} color={'black'} />
        <TextNormalSemiBold numberOfLines={3} style={styles.packageNameText}>
          {currentPackge.name}
        </TextNormalSemiBold>
      </View>
      <View style={styles.wrapperProgresCircle}>
        <ProgressCircle
          percent={10}
          radius={25}
          borderWidth={3}
          color="black"
          shadowColor="#999"
          bgColor="#fff">
          <TextNormalSemiBold style={styles.leftDayText}>
            {currentPackge.name.match(/\d+/)[0]}
            <TextSmallEleven style={styles.subtitleProgress}>
              {currentPackge.name.match(/\d+/)[0] <= 12 ? '\ntháng' : '\nngày'}
            </TextSmallEleven>
          </TextNormalSemiBold>
        </ProgressCircle>
        <ProgressCircle
          percent={1}
          radius={25}
          borderWidth={3}
          color="black"
          shadowColor="#999"
          bgColor="#fff">
          <TextNormalSemiBold style={styles.leftDayText}>
            {'0'}
            <TextSmallEleven style={styles.subtitleProgress}>
              {'\nlần'}
            </TextSmallEleven>
          </TextNormalSemiBold>
        </ProgressCircle>
      </View>
    </View>
  );
};

export default PackageInfo;

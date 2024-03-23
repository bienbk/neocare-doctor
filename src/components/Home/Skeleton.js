import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './styles';
import {TextSemiBold} from 'common/Text/TextFont';

const Skeleton = () => {
  return (
    <SkeletonPlaceholder style={[styles.wrapperDoctorItem]} borderRadius={4}>
      <View style={[styles.wrapperProfileDoctor, {alignItems: 'center'}]}>
        <View style={styles.imageDoctor} />
        <View style={[styles.wrapperProfileContent, {flex: 1}]}>
          <TextSemiBold
            style={[
              styles.textDoctorName,
              {flex: 1, marginVertical: 5, paddingVertical: 2},
            ]}>
            {''}
          </TextSemiBold>
          <TextSemiBold
            style={[
              styles.textDoctorName,
              {flex: 1, marginVertical: 5, paddingVertical: 2},
            ]}>
            {''}
          </TextSemiBold>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};
export default Skeleton;

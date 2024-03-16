import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './styles';
import {TextSemiBold} from '../../common/Text/TextFont';

const Skeleton = ({item}) => {
  return (
    <SkeletonPlaceholder style={[styles.wrapperDoctorItem]} borderRadius={4}>
      <View style={[styles.wrapperProfileDoctor, {alignItems: 'center'}]}>
        <View style={styles.imageDoctor} />
        <View style={[styles.wrapperProfileContent, {flex: 1}]}>
          <TextSemiBold style={styles.textDoctorName}>
            {item?.last_name + ' ' + item?.first_name}
          </TextSemiBold>
          <TextSemiBold style={styles.textDoctorName}>
            {item?.last_name + ' ' + item?.first_name}
          </TextSemiBold>
          <TextSemiBold style={styles.textDoctorName}>
            {item?.last_name + ' ' + item?.first_name}
          </TextSemiBold>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};
export default Skeleton;

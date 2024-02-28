import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  TextNormal,
  TextSemiBold,
  TextSmallTwelve,
} from '../../common/Text/TextFont';
import Images from '../../common/Images/Images';
import styles from './styles';
import {avatar, doctor_avatar} from '../../assets/constans';
import ProgressLine from '../../common/ProgressLine/ProgressLine';

const PatientItem = ({item, selectItem, tabActive}) => {
  return (
    <TouchableOpacity onPress={selectItem} style={[styles.wrapperDoctorItem]}>
      <View
        style={[
          styles.wrapperProfileDoctor,
          item.isConnect && styles.wrapperActiveProfileDoctor,
        ]}>
        <Images
          resizeMode="contain"
          style={styles.imageDoctor}
          source={avatar}
        />
        <View style={styles.wrapperProfileContent}>
          <TextSemiBold style={styles.textDoctorName}>{item.name}</TextSemiBold>
          {tabActive !== 3 ? (
            <View>
              <TextSmallTwelve
                style={
                  styles.subtitleText
                }>{`${item.gender} | ${item.year}`}</TextSmallTwelve>
              <TextSmallTwelve style={styles.diseaseText}>
                {item.disease}
              </TextSmallTwelve>
            </View>
          ) : (
            <TextNormal style={styles.requestingText}>
              {'Gói chăm sóc đặc biệt 6 tháng'}
            </TextNormal>
          )}
        </View>
      </View>
      {item && item.isConnect && tabActive !== 3 && (
        <ProgressLine isDetailDoctor={false} />
      )}
      {/* {item && item.isConnect && <ProgressLine isDetailDoctor={false} />} */}
    </TouchableOpacity>
  );
};

export default PatientItem;

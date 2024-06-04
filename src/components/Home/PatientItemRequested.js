import React from 'react';
import {TextSemiBold, TextSmallTwelve} from 'common/Text/TextFont';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Images from 'common/Images/Images';

const PatientItemRequested = ({
  currentPatient,
  avatar,
  selectItem,
  timeSince,
}) => {
  console.log('rrrr:::', currentPatient);
  return (
    <TouchableOpacity onPress={selectItem} style={[styles.wrapperDoctorItem]}>
      <View style={[styles.wrapperProfileDoctor]}>
        <Images
          resizeMode="contain"
          style={styles.imageDoctor}
          source={avatar}
        />
        <View style={styles.wrapperProfileContent}>
          <TextSemiBold style={styles.textPatientName}>
            {currentPatient?.last_name + ' ' + currentPatient?.first_name}
          </TextSemiBold>
          <View>
            <TextSmallTwelve style={styles.subtitleText}>{`${
              currentPatient?.gender === 1 ? 'Nam' : 'Nữ'
            } ${
              currentPatient?.birthday
                ? ' | ' + new Date(currentPatient?.birthday).getFullYear()
                : ''
            }`}</TextSmallTwelve>
          </View>
        </View>
        <TextSmallTwelve style={[styles.subtitleText, {marginTop: 3}]}>
          {timeSince}
        </TextSmallTwelve>
      </View>
    </TouchableOpacity>
  );
};

export default PatientItemRequested;

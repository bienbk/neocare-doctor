import React from 'react';
import {TextSemiBold, TextSmallTwelve} from 'common/Text/TextFont';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Svg from 'common/Svg/Svg';

const PatientItemRequested = ({currentPatient, selectItem, timeSince}) => {
  return (
    <TouchableOpacity onPress={selectItem} style={[styles.wrapperDoctorItem]}>
      <View style={[styles.wrapperProfileDoctor]}>
        <Svg name={'avatar_default'} size={40} />
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

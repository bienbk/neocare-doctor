import React from 'react';
import {TextSemiBold, TextSmallTwelve} from 'common/Text/TextFont';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Svg from 'common/Svg/Svg';
const PatientItemEmergency = ({
  selectItem,
  currentPatient,
  STATUS_COLORS,
  max_status,
  timeSince,
  renderParameter,
  STATUS,
}) => {
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
            } | ${
              currentPatient?.birthday
                ? new Date(currentPatient?.birthday).getFullYear()
                : '1999'
            }`}</TextSmallTwelve>
          </View>
        </View>
        <View>
          <View
            style={[
              styles.statusPatient,
              {backgroundColor: STATUS_COLORS[max_status]},
            ]}>
            <TextSmallTwelve style={styles.textStatus}>
              {STATUS[max_status]}
            </TextSmallTwelve>
          </View>
          <TextSmallTwelve style={styles.subtitleText}>
            {timeSince}
          </TextSmallTwelve>
        </View>
      </View>
      <View style={styles.wrapperParameterList}>{renderParameter()}</View>
    </TouchableOpacity>
  );
};

export default PatientItemEmergency;

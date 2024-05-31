import React from 'react';
import styles from './styles';
import Images from 'common/Images/Images';
import {TouchableOpacity, View} from 'react-native';
import {TextNormal, TextSemiBold, TextSmallTwelve} from 'common/Text/TextFont';

const PatientItemAll = ({selectItem, avatar, currentPatient}) => {
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
            <TextSmallTwelve style={styles.subtitleText}>
              {currentPatient?.phone}
            </TextSmallTwelve>
          </View>
          <View style={{flexDirection: 'row'}}>
            {['Tim mạch', 'Tiểu đường', 'Huyết áp'].map(i => (
              <View key={i} style={styles.tagLabel}>
                <TextNormal>{i}</TextNormal>
              </View>
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PatientItemAll;

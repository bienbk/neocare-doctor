import React, {useEffect, useState} from 'react';
import styles from './styles';
import Images from 'common/Images/Images';
import {TouchableOpacity, View} from 'react-native';
import {TextNormal, TextSemiBold, TextSmallTwelve} from 'common/Text/TextFont';
import {mFomatter} from '../../assets/constans';

const PatientItemAll = ({selectItem, avatar, currentPatient, tags}) => {
  const [showTag, setShowTag] = useState({val: false, items: []});
  const [birthday, setBirthday] = useState('');
  useEffect(() => {
    if (tags && tags.length > 0) {
      tags.map(a => {
        if (a.customerId === currentPatient.id) {
          setShowTag({val: true, items: a.tags});
        }
      });
    }
  }, [tags]);
  useEffect(() => {
    console.log('currentPatient::', currentPatient);
    if (
      currentPatient &&
      currentPatient?.birthday &&
      typeof currentPatient?.birthday !== 'string'
    ) {
      const {seconds} = currentPatient?.birthday;
      const tempYear = mFomatter.unix(seconds).format('YYYY');
      setBirthday(tempYear);
    }
  }, [currentPatient]);
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
          {birthday && birthday.length > 0 && (
            <View>
              <TextSmallTwelve style={styles.subtitleText}>{`${
                currentPatient?.gender === 1
                  ? 'Nam'
                  : currentPatient?.gender === 0
                  ? 'Nữ'
                  : ''
              } ${birthday ? ' | ' + birthday : ''}`}</TextSmallTwelve>
            </View>
          )}
          {showTag.val === true && (
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {showTag.items.map(i => (
                <View key={i.name} style={styles.tagLabel}>
                  <TextNormal>{i.name || ''}</TextNormal>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PatientItemAll;

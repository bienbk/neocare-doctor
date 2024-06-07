import React, {useEffect, useState} from 'react';
import styles from './styles';
import {TouchableOpacity, View} from 'react-native';
import {TextNormal, TextSemiBold, TextSmallTwelve} from 'common/Text/TextFont';
import {mFomatter} from 'assets/constans';
import Svg from 'common/Svg/Svg';
import Images from '../../common/Images/Images';

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
    if (
      currentPatient &&
      currentPatient?.birthday &&
      typeof currentPatient?.birthday !== 'string'
    ) {
      const {seconds} = currentPatient?.birthday;
      const tempYear = mFomatter.unix(seconds).format('YYYY');
      setBirthday(tempYear);
      console.log(currentPatient);
    }
  }, [currentPatient]);
  return (
    <TouchableOpacity onPress={selectItem} style={[styles.wrapperDoctorItem]}>
      <View style={[styles.wrapperProfileDoctor]}>
        {avatar && avatar.length > 0 ? (
          <Images
            source={{uri: currentPatient?.avatar}}
            style={{height: 40, width: 40, borderRadius: 20}}
          />
        ) : (
          <Svg name={'avatar_default'} size={40} />
        )}
        <View style={styles.wrapperProfileContent}>
          <TextSemiBold style={styles.textPatientName}>
            {currentPatient?.last_name + ' ' + currentPatient?.first_name}
          </TextSemiBold>
          <View>
            <TextSmallTwelve style={styles.subtitleText}>
              {currentPatient?.phone
                ? currentPatient?.phone.replace('+84', '0')
                : ''}
            </TextSmallTwelve>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextSmallTwelve style={styles.subtitleText}>
              {currentPatient?.gender === 1
                ? 'Nam'
                : currentPatient?.gender === 0
                ? 'Nữ'
                : ''}
            </TextSmallTwelve>
            {birthday && birthday.length > 0 && (
              <TextSmallTwelve>{birthday}</TextSmallTwelve>
            )}
            {currentPatient.birthday && currentPatient.birthday.length > 0 && (
              <TextSmallTwelve style={styles.subtitleText}>
                {new Date(currentPatient.birthday).getFullYear()
                  ? ' | ' + new Date(currentPatient.birthday).getFullYear()
                  : ''}
              </TextSmallTwelve>
            )}
          </View>
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

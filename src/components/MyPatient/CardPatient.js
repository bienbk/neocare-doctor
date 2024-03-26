import React from 'react';
import styles from './styles';
import {avatar, patient_card} from 'assets/constans';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import Images from 'common/Images/Images';
import {TextNormal, TextSemiBold, TextSmallTwelve} from 'common/Text/TextFont';
import Colors from 'theme/Colors';
import Icons from 'common/Icons/Icons';

const CardPatient = ({currentPatient}) => {
  return (
    <ImageBackground
      source={patient_card}
      imageStyle={styles.borderRadius16}
      style={styles.containerCard}>
      <View style={[styles.wrapperProfilePatient]}>
        <Images
          resizeMode="contain"
          style={styles.imageDoctor}
          source={avatar}
        />
        {currentPatient && currentPatient?.patient && (
          <View style={styles.wrapperProfileContent}>
            <TextSemiBold style={styles.textPatientName}>
              {currentPatient.patient.first_name +
                ' ' +
                currentPatient.patient.last_name}
            </TextSemiBold>
            <View style={{paddingVertical: 2}}>
              <TextSmallTwelve style={styles.subtitleText}>{`${
                currentPatient?.patient.gender === 1 ? 'Nam' : 'Nữ'
              } | ${
                currentPatient.patient.birthday
                  ? currentPatient.patient.birthday
                      .substring(0, 11)
                      .split('-')[0]
                  : '1999'
              }`}</TextSmallTwelve>
            </View>
            <TextNormal style={styles.subtitleText}>
              {currentPatient?.patient?.phone.replaceAll(' ', '')}
            </TextNormal>
            <View style={styles.groupPatient}>
              <TextNormal
                style={{color: Colors.whiteColor, fontWeight: 'bold'}}>
                {'Tim mạch'}
              </TextNormal>
            </View>
          </View>
        )}
        <TouchableOpacity style={styles.phoneIcon}>
          <Icons
            type={'FontAwesome'}
            name={'phone'}
            color={'white'}
            size={22}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default CardPatient;

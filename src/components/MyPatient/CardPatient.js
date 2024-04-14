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
        {currentPatient && (
          <View style={styles.wrapperProfileContent}>
            <TextSemiBold style={styles.textPatientName}>
              {currentPatient.last_name + ' ' + currentPatient.first_name}
            </TextSemiBold>
            <View style={styles.wrapperGender}>
              <TextSmallTwelve style={styles.subtitleText}>{`${
                currentPatient?.gender === 1 ? 'Nam' : 'Nữ'
              }`}</TextSmallTwelve>
              <View style={styles.verticalLine} />
              <TextSmallTwelve>
                {`${
                  currentPatient.birthday
                    ? currentPatient.birthday.substring(0, 11).split('-')[0]
                    : '1999'
                }`}
              </TextSmallTwelve>
            </View>
            <TextNormal style={styles.subtitleText}>
              {currentPatient.phone
                ? currentPatient.phone.replaceAll(' ', '')
                : ''}
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

import React from 'react';
import styles from './styles';
import {patient_card} from 'assets/constans';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import Images from 'common/Images/Images';
import {TextNormal, TextSemiBold, TextSmallTwelve} from 'common/Text/TextFont';
import Colors from 'theme/Colors';
import Icons from 'common/Icons/Icons';
import Svg from 'common/Svg/Svg';

const CardPatient = ({currentPatient, listTag}) => {
  return (
    <ImageBackground
      source={patient_card}
      imageStyle={styles.borderRadius16}
      resizeMode={'stretch'}
      style={styles.containerCard}>
      <View style={[styles.wrapperProfilePatient]}>
        {currentPatient?.avatar && currentPatient?.avatar.length > 0 ? (
          <Images
            source={{uri: currentPatient?.avatar}}
            style={{height: 60, width: 60, borderRadius: 8}}
          />
        ) : (
          <Svg name={'avatar_default'} size={60} />
        )}
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
              <TextSmallTwelve style={styles.subtitleText}>
                {new Date(currentPatient.birthday).getFullYear() || ''}
              </TextSmallTwelve>
            </View>
            <TextNormal style={styles.subtitleText}>
              {currentPatient.phone
                ? currentPatient.phone.replaceAll('+84', '0')
                : ''}
            </TextNormal>

            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {listTag &&
                listTag.length > 0 &&
                listTag.map(a => {
                  return (
                    <View key={a.name} style={styles.groupPatient}>
                      <TextNormal
                        style={{color: Colors.whiteColor, fontWeight: 'bold'}}>
                        {a.name}
                      </TextNormal>
                    </View>
                  );
                })}
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

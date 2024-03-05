import React, {useEffect, useState} from 'react';
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
  const {doctor_of_patient} = item;

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
          <TextSemiBold style={styles.textDoctorName}>
            {item.last_name + ' ' + item.first_name}
          </TextSemiBold>
          {tabActive !== 2 && (
            <View>
              <TextSmallTwelve style={styles.subtitleText}>{`${
                item.gender ? 'Nam' : 'Nữ'
              } | ${
                item.birthday
                  ? item.birthday.substring(0, 11).split('-')[0]
                  : '1999'
              }`}</TextSmallTwelve>
              <TextSmallTwelve style={styles.diseaseText}>
                {item.phone}
              </TextSmallTwelve>
            </View>
          )}
          {tabActive === 2 &&
            doctor_of_patient.length > 0 &&
            doctor_of_patient[0]?.package_items &&
            doctor_of_patient[0]?.package_items
              .filter(i => i.product_status === 2)
              .map(pack => (
                <TextNormal style={styles.requestingText}>
                  {pack.name}
                </TextNormal>
              ))}
        </View>
      </View>
      {doctor_of_patient &&
        tabActive === 1 &&
        doctor_of_patient.length > 0 &&
        doctor_of_patient[0]?.package_items &&
        doctor_of_patient[0]?.package_items.map(line => {
          return (
            <ProgressLine key={line.id} line={line} isDetailDoctor={false} />
          );
        })}
    </TouchableOpacity>
  );
};

export default PatientItem;

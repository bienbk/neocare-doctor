import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {TextNormal, TextSemiBold, TextSmallTwelve} from 'common/Text/TextFont';
import Images from 'common/Images/Images';
import styles from './styles';
import {avatar, doctor_avatar} from 'assets/constans';
import ProgressLine from 'common/ProgressLine/ProgressLine';
const data = [
  {
    name: 'Huyết áp',
    blood_pressure: {
      sys: 110,
      cys: 90,
      pul: 110,
      unit_sys: 'mmHg',
      unit_cys: 'mmHg',
      unit_pul: 'bpm',
    },
  },
  {
    name: 'Đường huyết',
    blood_pressure: {
      sys: 110,
      cys: 120,
      pul: 80,
      unit_sys: 'mmHg',
      unit_cys: 'mmHg',
      unit_pul: 'bpm',
    },
  },
];
const PatientItem = ({item, selectItem, tabActive}) => {
  const {doctor_of_patient} = item;
  const renderParameter = type =>
    data.map(item => (
      <View
        key={item?.name}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 4,
        }}>
        <TextNormal>{item.name} </TextNormal>
        {type === 1 ? (
          <View style={{flexDirection: 'row'}}>
            <TextNormal style={styles.textParameter}>
              {`${item?.blood_pressure.cys}`}
              <TextSmallTwelve style={styles.textGray}>
                {item.blood_pressure.unit_cys}
              </TextSmallTwelve>
            </TextNormal>
            <TextNormal style={styles.textParameter}>
              {`${item?.blood_pressure.sys}`}
              <TextSmallTwelve style={styles.textGray}>
                {item.blood_pressure.unit_sys}
              </TextSmallTwelve>
            </TextNormal>
            <TextNormal style={styles.textParameter}>
              {`${item?.blood_pressure.pul}`}
              <TextSmallTwelve style={styles.textGray}>
                {item.blood_pressure.unit_pul}
              </TextSmallTwelve>
            </TextNormal>
          </View>
        ) : (
          <View style={styles.statusPatient}>
            <TextSmallTwelve style={{fontWeight: 'bold', color: 'white'}}>
              {'Hơi cao'}
            </TextSmallTwelve>
          </View>
        )}
      </View>
    ));
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
          <TextSemiBold style={styles.textPatientName}>
            {item.last_name + ' ' + item.first_name}
          </TextSemiBold>
          {tabActive !== 2 && (
            <View>
              <TextSmallTwelve style={styles.subtitleText}>{`${
                item.gender === 1 ? 'Nam' : 'Nữ'
              } | ${
                item.birthday
                  ? item.birthday.substring(0, 11).split('-')[0]
                  : '1999'
              }`}</TextSmallTwelve>
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
        {tabActive === 1 && (
          <View style={styles.statusPatient}>
            <TextSmallTwelve style={{fontWeight: 'bold', color: 'white'}}>
              {'Hơi cao'}
            </TextSmallTwelve>
          </View>
        )}
      </View>
      {tabActive !== 2 && (
        <View style={styles.wrapperParameterList}>
          {renderParameter(tabActive)}
        </View>
      )}
      {/* {doctor_of_patient &&
        tabActive === 1 &&
        doctor_of_patient.length > 0 &&
        doctor_of_patient[0]?.package_items &&
        doctor_of_patient[0]?.package_items.map(line => {
          return (
            <ProgressLine key={line.id} line={line} isDetailDoctor={false} />
          );
        })} */}
    </TouchableOpacity>
  );
};

export default PatientItem;

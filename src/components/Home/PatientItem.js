import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {TextNormal, TextSemiBold, TextSmallTwelve} from 'common/Text/TextFont';
import Images from 'common/Images/Images';
import {STATUS_COLORS, STATUS, avatar, formatMoney} from 'assets/constans';
import styles from './styles';
import CholesterolParameter from './CholesterolParameter';
import BloodPressureParameter from './BloodPressureParameter';
import Hba1cParameter from './Hba1cParameter';
import AcidUricParameter from './AcidUricParameter';
const BLP = 'Blood Pressure';
const CHOL = 'Cholesterol';
const HBA1C = 'HbA1cLabTest';
const ACU = 'Acid Uric';
const PatientItem = ({item, selectItem, tabActive}) => {
  const [currentPatient, setCurrentPatient] = useState({});
  const {items, patient, doctor_of_patient} = item;
  useEffect(() => {
    if (patient) {
      setCurrentPatient(patient);
    } else {
      setCurrentPatient(item);
    }
  }, [tabActive]);
  const max_status = items ? Math.max(...Array.from(items, i => i.status)) : 0;
  const renderParameter = type =>
    items.map(parameter => (
      <View key={parameter?.name}>
        {parameter?.name === HBA1C && <Hba1cParameter parameter={parameter} />}
        {parameter?.name === ACU && <AcidUricParameter parameter={parameter} />}
        {parameter?.name === CHOL && (
          <CholesterolParameter parameter={parameter} />
        )}
        {parameter?.name === BLP && (
          <BloodPressureParameter parameter={parameter} />
        )}
      </View>
    ));
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
            {currentPatient.first_name + ' ' + currentPatient.last_name}
          </TextSemiBold>
          {tabActive !== 2 && (
            <View>
              <TextSmallTwelve style={styles.subtitleText}>{`${
                currentPatient.gender === 1 ? 'Nam' : 'Nữ'
              } | ${
                currentPatient.birthday
                  ? currentPatient.birthday.substring(0, 11).split('-')[0]
                  : '1999'
              }`}</TextSmallTwelve>
            </View>
          )}
          {tabActive === 2 &&
            doctor_of_patient.length > 0 &&
            doctor_of_patient[0]?.package_items &&
            doctor_of_patient[0]?.package_items
              // .filter(i => i.product_status === 2)
              .map(pack => (
                <View>
                  <TextNormal style={styles.requestingText}>
                    {pack.name}
                  </TextNormal>
                  <TextNormal style={styles.priceText}>
                    {formatMoney(pack?.price) + ' vnd'}
                  </TextNormal>
                </View>
              ))}
        </View>
        {tabActive !== 2 && (
          <View
            style={[
              styles.statusPatient,
              {backgroundColor: STATUS_COLORS[max_status]},
            ]}>
            <TextSmallTwelve style={styles.textStatus}>
              {STATUS[max_status]}
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

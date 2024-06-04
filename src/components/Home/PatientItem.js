import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {STATUS_COLORS, STATUS, avatar, mFomatter} from 'assets/constans';
import CholesterolParameter from './CholesterolParameter';
import BloodPressureParameter from './BloodPressureParameter';
import Hba1cParameter from './Hba1cParameter';
import AcidUricParameter from './AcidUricParameter';
import BloodGlucoseParameter from './BloodGlucoseParameter';
import PatientItemRequested from './PatientItemRequested';
import PatientItemEmergency from './PatientItemEmergency';
import PatientItemOrder from './PatientItemOrder';
import PatientItemAll from './PatientItemAll';

const BLP = 'Blood Pressure';
const CHOL = 'Cholesterol';
const HBA1C = 'HbA1cLabTest';
const ACU = 'Acid Uric';
const BLG = 'Blood Glucose';
const TAB_EMERGENCY = 0,
  TAB_SERVICE = 1,
  TAB_ORDER = 2,
  TAB_ALL = 3;
// 0-EMERGENCY::::: 1-SERVICE:::::2-PACKAGE ::::: 3-Alll
const PatientItem = ({item = null, selectItem, tabActive, tags}) => {
  const [currentPatient, setCurrentPatient] = useState(-1);
  const [params, setParams] = useState([]);
  const [timeSince, setTimeSince] = useState('');
  useEffect(() => {
    const {items, patient} = item;
    setParams(items && items.length > 0 ? items : []);

    item !== null &&
      setCurrentPatient({
        ...patient.patient,
        ...patient,
        ...items,
        ...item,
        order_id: tabActive === TAB_ORDER ? item.order_id : -1,
        package_item:
          tabActive === TAB_ORDER ? item?.package_item_orders[0] : {},
      });
  }, [item]);
  useEffect(() => {
    if (currentPatient !== -1) {
      console.log('current patient::', currentPatient);
      checkTimeRequest();
    }
  }, [currentPatient]);
  const checkTimeRequest = () => {
    let time = '';
    if (
      typeof currentPatient.created_at !== 'string' &&
      currentPatient.created_at
    ) {
      const {seconds, nanos} = currentPatient?.created_at;
      const converted = mFomatter
        .unix(seconds)
        .add(nanos / 1000000, 'milliseconds');
      time = mFomatter(converted).fromNow();
    } else if (
      typeof currentPatient.created_at === 'string' &&
      currentPatient.created_at
    ) {
      time = mFomatter(currentPatient?.created_at).fromNow();
    }
    setTimeSince(time);
  };
  const max_status = params
    ? Math.max(...Array.from(params, i => i.status))
    : 0;
  const renderParameter = () =>
    params.map(parameter => (
      <View key={parameter?.name}>
        {parameter?.name === HBA1C && <Hba1cParameter parameter={parameter} />}
        {parameter?.name === ACU && <AcidUricParameter parameter={parameter} />}
        {parameter?.name === CHOL && (
          <CholesterolParameter parameter={parameter} />
        )}
        {parameter?.name === BLP && (
          <BloodPressureParameter parameter={parameter} />
        )}
        {parameter?.name === BLG && (
          <BloodGlucoseParameter parameter={parameter} />
        )}
      </View>
    ));
  return (
    <View>
      {tabActive === TAB_SERVICE && (
        <PatientItemRequested
          currentPatient={currentPatient}
          selectItem={selectItem}
          avatar={avatar}
          timeSince={timeSince}
        />
      )}
      {tabActive === TAB_EMERGENCY && (
        <PatientItemEmergency
          currentPatient={currentPatient}
          STATUS={STATUS}
          STATUS_COLORS={STATUS_COLORS}
          max_status={max_status}
          renderParameter={renderParameter}
          selectItem={selectItem}
          timeSince={timeSince}
          avatar={avatar}
        />
      )}
      {tabActive === TAB_ORDER && (
        <PatientItemOrder
          currentPatient={currentPatient}
          selectItem={selectItem}
          timeSince={timeSince}
          avatar={avatar}
        />
      )}
      {tabActive === TAB_ALL && (
        <PatientItemAll
          currentPatient={currentPatient}
          selectItem={selectItem}
          avatar={avatar}
          tags={tags}
        />
      )}
    </View>
  );
};

export default PatientItem;

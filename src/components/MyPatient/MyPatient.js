import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {HOME_DATA} from 'assets/constans';
import TabOptions from './TabOptions';
import HeaderPatient from './HeaderPatient';
import CardPatient from './CardPatient';
import DiseaseItem from './DiseaseItem';
import {useDispatch, useSelector} from 'react-redux';
import {patientDetailSelector, statusGetPatientDetail} from 'store/selectors';
import {getPatientDetailAction, resetGetPatientDetail} from 'store/actions';
import Status from 'common/Status/Status';

const MyPatient = ({navigation, route}) => {
  const dispatch = useDispatch();
  const currentPatient = useSelector(state => patientDetailSelector(state));
  const statusGetPatient = useSelector(state => statusGetPatientDetail(state));
  const [listParameter, setListParams] = useState([]);
  const [tabActive, setTabActive] = useState(1);
  useEffect(() => {
    initializePatient();
  }, []);
  const initializePatient = () => {
    const {patient} = route?.params;
    dispatch(
      getPatientDetailAction({
        patient_id: patient?.patient.id,
        page: 1,
        size: 100,
      }),
    );
  };
  useEffect(() => {
    if (statusGetPatient === Status.SUCCESS) {
      mapParameter();
      dispatch(resetGetPatientDetail());
    }
  }, [statusGetPatient]);
  const mapParameter = () => {
    const tempMap = new Map(
      HOME_DATA.map(i => {
        return [i.code, i];
      }),
    );
    currentPatient.parameters.map(p => {
      if (tempMap.has(p.name)) {
        const mapItem = tempMap.get(p.name);
        if (p.name === 'Blood Pressure') {
          mapItem.value = `${p.index_sys}/${p.index_dia}`;
          mapItem.subVal = p.index_pulse;
        } else if (p.name === 'Cholesterol') {
          mapItem.value = p.total;
        } else if (p.name === 'Blood Glucose') {
          mapItem.value = p.index;
          mapItem.eating_status = p.eating_status;
        } else {
          mapItem.value = p.index;
        }
        mapItem.created_at = p.date;
        mapItem.status = p.status;
        mapItem.unit = p.unit_name;
        tempMap.set(p.name, mapItem);
      }
    });
    setListParams(Array.from(tempMap.values()).filter(i => i.status !== ''));
  };
  const renderCardItem = ({item, index}) => (
    <DiseaseItem
      name={item?.name}
      status={item?.status}
      created_at={item.created_at}
      value={item.value}
      unit={item.unit}
      item={item}
      label={item.label}
      subValue={item.subVal}
      index={index}
    />
  );
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      {/* HEADER */}
      <HeaderPatient navigation={navigation} />
      {/* CARD INFORMATION */}
      {currentPatient && <CardPatient currentPatient={currentPatient} />}
      {/* TAB OPTIONS */}
      <TabOptions isSelected={tabActive} onPressTab={v => setTabActive(v)} />
      {/* PARAMETER OF PATIENT */}
      <ScrollView style={styles.wrapperListCard}>
        <FlatList
          data={listParameter}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={i => i.name}
          renderItem={renderCardItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPatient;

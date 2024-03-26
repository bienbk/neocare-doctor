import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {HOME_DATA} from 'assets/constans';
import TabOptions from './TabOptions';
import HeaderPatient from './HeaderPatient';
import CardPatient from './CardPatient';
import DiseaseItem from './DiseaseItem';

const MyPatient = ({navigation, route}) => {
  const [currentPatient, setCurrentPatient] = useState(-1);
  const [tabActive, setTabActive] = useState(1);
  useEffect(() => {
    const {patient} = route?.params;
    setCurrentPatient(patient);
  }, []);
  const renderCardItem = ({item, index}) => (
    <DiseaseItem
      name={item?.name}
      status={item?.status}
      created_at={item.created_at}
      value={item.value}
      unit={item.unit}
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
      {currentPatient && currentPatient?.patient && (
        <CardPatient currentPatient={currentPatient} />
      )}
      <TabOptions isSelected={tabActive} onPressTab={v => setTabActive(v)} />
      <ScrollView style={styles.wrapperListCard}>
        <FlatList
          data={HOME_DATA}
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

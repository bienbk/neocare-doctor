import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {HOME_DATA} from 'assets/constans';
import TabOptions from './TabOptions';
import HeaderPatient from './HeaderPatient';
import CardPatient from './CardPatient';
import DiseaseItem from './DiseaseItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  patientDetailSelector,
  statusGetPatientDetail,
  serviceOfPatientSelector,
  statusConfirmServiceSelector,
  statusListServiceSelector,
} from 'store/selectors';
import {
  getPatientDetailAction,
  resetGetPatientDetail,
  listServiceAction,
  confirmPatientService,
  resetConfirmService,
} from 'store/actions';
import Status from 'common/Status/Status';
import ServiceHistory from './ServiceHistory';
import ConfirmationModal from '../../common/ConfirmationModal/ConfirmationModal';

const MyPatient = ({navigation, route}) => {
  const dispatch = useDispatch();
  const currentPatient = useSelector(state => patientDetailSelector(state));
  const statusGetPatient = useSelector(state => statusGetPatientDetail(state));
  const [listParameter, setListParams] = useState([]);
  const [currentPackge, setCurrentPackage] = useState({});
  const [tabActive, setTabActive] = useState(1);
  const [modal, showModal] = useState(0);
  const statusServiceOfPatient = useSelector(state =>
    statusListServiceSelector(state),
  );
  const statusUpdateService = useSelector(state =>
    statusConfirmServiceSelector(state),
  );
  const listService = useSelector(state => serviceOfPatientSelector(state));
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
    dispatch(
      listServiceAction({
        patientId: patient?.patient.id,
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
  useEffect(() => {
    if (statusUpdateService === Status.SUCCESS) {
      showModal(1);
    }
  }, [statusUpdateService]);
  useEffect(() => {
    if (statusServiceOfPatient === Status.SUCCESS && listService.length) {
      setCurrentPackage(listService[0].package_item);
    }
  }, [statusServiceOfPatient]);
  const handlerUpdateSerivce = item => {
    dispatch(confirmPatientService({status: 8, id: item.id}));
  };
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
  const handleConfirmModal = () => {
    showModal(0);
    dispatch(resetConfirmService());
  };
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
        {tabActive === 1 && (
          <FlatList
            data={listParameter}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={i => i.name}
            renderItem={renderCardItem}
          />
        )}
        {tabActive === 2 && (
          <ServiceHistory
            currentPackge={currentPackge}
            listService={listService}
            confirmService={service => handlerUpdateSerivce(service)}
          />
        )}
      </ScrollView>
      <ConfirmationModal
        isOpen={modal === 1}
        isConfriming={true}
        textButtonConfrim={'Đóng'}
        textContent={
          statusUpdateService === Status.SUCCESS
            ? ' Xác nhận yêu cầu tư vấn thành công'
            : ' Xác nhận yêu cầu tư vấn thất bại.  Vui lòng thử lại sau!'
        }
        title={'Thông báo'}
        onCancel={handleConfirmModal}
        onConfirm={handleConfirmModal}
      />
    </SafeAreaView>
  );
};

export default MyPatient;

/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, View, TouchableOpacity} from 'react-native';

import {widthDevice} from 'assets/constans';
import {StyleSheet} from 'react-native';
import Colors from 'theme/Colors';
import {TextNormal} from 'common/Text/TextFont';
import Icons from 'common/Icons/Icons';
import {NAVIGATION_HOME} from 'navigation/routes';
import strings from 'localization/Localization';
import ConfirmationModal from 'common/ConfirmationModal/ConfirmationModal';
import {useDispatch, useSelector} from 'react-redux';
import {statusConfirmOrderSelector, statusInforSelector} from 'store/selectors';
import {confirmOrderAction, resetConfrimOrder} from 'store/actions';
import Status from 'common/Status/Status';
import GeneralPackage from './GeneralPackage';
import GroupDiseases from './GroupDiseases';
import StoreSelection from './StoreSelection';
import ConfirmPackage from './ConfirmPackage';
import {setupOrderInfo} from 'store/orders/orderAction';
import {resetOrderInfor} from '../../store/orders/orderAction';
const STEP = ['Nhóm bệnh', 'Chỉ số', 'Nhà thuốc', 'Hoàn tất'];
const INDEX = [
  {id: 1, name: 'Huyết áp', checked: false},
  {id: 2, name: 'Đường huyết', checked: false},
  {id: 3, name: 'Cholesterols', checked: false},
  {id: 4, name: 'Acid Uric', checked: false},
  {id: 5, name: 'HbA1c', checked: false},
  {id: 6, name: 'Số đo cơ thể', checked: false},
];
const DISEASES = [
  {id: 1, name: 'Bệnh Alzheimer và mất trí nhớ', checked: false},
  {id: 2, name: 'Tiểu đường', checked: false},
  {id: 3, name: 'Hen suyễn', checked: false},
  {id: 4, name: 'Viêm khớp', checked: false},
  {id: 5, name: 'Ung thư', checked: false},
  {id: 6, name: 'Bệnh tắc nghẽn phổi mãn tính COPD', checked: false},
  {id: 7, name: 'Bệnh Crohn', checked: false},
];
const SUB_0 = 'Bệnh nhân đang có các bệnh mạn tính nào sau đây không?';
const SUB_1 = 'Chọn các chỉ số cần thiết để hỗ trợ cho quá trình tư vấn';

const PackageDetails = ({navigation, route}) => {
  const statusConfirm = useSelector(state => statusConfirmOrderSelector(state));
  const statusSetupInfor = useSelector(state => statusInforSelector(state));
  const dispatch = useDispatch();
  const isDenied = useRef(null);
  const [step, setStep] = useState(-1);
  const [currentPackage, setCurrentPackage] = useState(0);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const {packageDetail} = route ? route?.params : {};
    setCurrentPackage(packageDetail);
  }, []);
  const renderStep = () =>
    STEP.map((item, index) => (
      <View key={item} style={styles.wrapperStepItem}>
        <View style={styles.wrapperIcon}>
          <Icons
            type={'MaterialIcons'}
            name={step > index ? 'check-circle' : 'radio-button-on'}
            color={
              step > index
                ? Colors.main
                : step === index
                ? Colors.primary
                : 'gray'
            }
            size={20}
          />
          <TextNormal
            style={[
              styles.textStep,
              {
                fontWeight: index === step ? 'bold' : '600',
                color:
                  step > index
                    ? 'black'
                    : index === step
                    ? Colors.primary
                    : Colors.gray.gray70,
              },
            ]}>
            {item}
          </TextNormal>
        </View>

        {index <= 2 && <View style={styles.dashedLine} />}
      </View>
    ));
  const handleStep = val => {
    if (step === 0 && val) {
      setCurrentPackage({
        ...currentPackage,
        group: val,
      });
    }
    if (step === 1 && val) {
      setCurrentPackage({
        ...currentPackage,
        parameters: val,
      });
    }
    if (step === 2 && val) {
      setCurrentPackage({
        ...currentPackage,
        store: val,
      });
    }
    setStep(prev => (prev += 1));
  };
  useEffect(() => {
    if (
      statusConfirm === Status.ERROR ||
      (statusConfirm === Status.SUCCESS && step === -1)
    ) {
      !isDenied.current && setStep(prev => (prev += 1));
      dispatch(resetConfrimOrder());
      isDenied.current && navigation && navigation.navigate(NAVIGATION_HOME);
    }
  }, [statusConfirm]);
  const handleBack = () => {
    step === -1 && navigation.navigate(NAVIGATION_HOME);
    step !== -1 && setStep(prev => (prev -= 1));
  };
  const onSuccess = () => {
    dispatch(resetOrderInfor());
    navigation && navigation.navigate(NAVIGATION_HOME);
  };
  const handleConfirmOrder = type => {
    // type 1:CONFIRM ---- 2: DENIED
    if (currentPackage?.order_id) {
      isDenied.current = type === 2 ? true : false;
      dispatch(
        confirmOrderAction({
          order_id: currentPackage?.order_id,
          order_status: type === 1 ? 6 : 3,
        }),
      );
    }
  };
  const handleSaveInfo = () => {
    // console.log('currentPackage to save:::', currentPackage);
    const query = {
      customerId: currentPackage?.patient?.id,
      createdAt: new Date(),
      tags: currentPackage?.parameters,
      hospitals: currentPackage?.store,
      orderId: currentPackage?.order_id,
      package: currentPackage?.package_items,
    };
    dispatch(setupOrderInfo(query));
  };
  useEffect(() => {
    if (
      statusSetupInfor === Status.SUCCESS ||
      statusSetupInfor === Status.ERROR
    ) {
      setModal(true);
    }
  }, [statusSetupInfor]);

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <View style={styles.wrapperHeader}>
        <TouchableOpacity style={styles.backIcon} onPress={handleBack}>
          <Icons
            type={'Ionicons'}
            name={'arrow-back'}
            color={'black'}
            size={26}
          />
        </TouchableOpacity>
        <TextNormal style={styles.titleText}>
          {step < 3 ? 'Thiết lập hồ sơ' : 'Xác nhận mua gói'}
        </TextNormal>
        {step >= 0 && (
          <View style={{paddingTop: 10, flexDirection: 'row'}}>
            {renderStep()}
          </View>
        )}
      </View>
      {step === -1 && currentPackage !== 0 && (
        <GeneralPackage
          currentPackage={currentPackage}
          handleDenyPackage={() => handleConfirmOrder(2)}
          nextStep={() => handleConfirmOrder(1)}
        />
      )}
      {(step === 0 || step === 1) && (
        <GroupDiseases
          title={step === 0 ? 'Tình trạng sức khoẻ' : 'Chỉ số sức khoẻ'}
          subTitle={step === 0 ? SUB_0 : SUB_1}
          data={step === 0 ? DISEASES : INDEX}
          nextStep={val => handleStep(val)}
        />
      )}
      {step === 2 && (
        <StoreSelection
          title={'Nhà thuốc gợi ý'}
          subTitle={'Nhà thuốc được chọn sẽ được gợi ý đến bệnh nhân'}
          data={DISEASES}
          nextStep={v => handleStep(v)}
        />
      )}
      {step === 3 && (
        <ConfirmPackage
          currentPackage={currentPackage}
          nextStep={() => handleSaveInfo()}
        />
      )}
      <ConfirmationModal
        isConfriming={true}
        isOpen={modal}
        onConfirm={onSuccess}
        title={'Xác nhận thành công'}
        textButtonConfrim={strings.common.close}>
        {currentPackage && (
          <TextNormal style={{paddingHorizontal: 20, textAlign: 'center'}}>
            {`Bệnh nhân ${currentPackage?.patient.last_name} ${currentPackage?.patient.first_name} vừa được xác nhận mua gói thành công.`}
          </TextNormal>
        )}
        <TextNormal style={{paddingHorizontal: 20, textAlign: 'center'}}>
          {'Gói sẽ có hiệu lực từ ngày hôm nay.'}
        </TextNormal>
      </ConfirmationModal>
    </SafeAreaView>
  );
};

export default PackageDetails;

const styles = StyleSheet.create({
  wrapperHeader: {
    backgroundColor: Colors.whiteColor,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthDevice,
  },
  backIcon: {position: 'absolute', top: 15, left: 20},
  titleText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    padding: 5,
  },
  dashedLine: {
    width: widthDevice * 0.15,
    borderColor: Colors.gray.gray90,
    borderBottomWidth: 0.8,
    height: 12,
    borderStyle: 'dashed',
  },
  containerSafeArea: {
    flex: 1,
  },
  wrapperIcon: {alignItems: 'center', width: 30},
  textStep: {
    fontSize: 11,
    width: widthDevice * 0.17,
    textAlign: 'center',
  },
  wrapperStepItem: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

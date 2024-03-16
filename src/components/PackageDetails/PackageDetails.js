import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, TouchableOpacity} from 'react-native';

import {heightDevice, widthDevice} from 'assets/constans';
import {StyleSheet} from 'react-native';
import Colors from 'theme/Colors';
import {
  TextNormal,
  TextNormalSemiBold,
  TextSemiBold,
} from '../../common/Text/TextFont';
import Icons from '../../common/Icons/Icons';
import {NAVIGATION_MY_PATIENT} from '../../navigation/routes';

import CustomButton from '../../common/CustomButton/CustomButton';
import strings from '../../localization/Localization';
import ConfirmationModal from '../../common/ConfirmationModal/ConfirmationModal';
import {formatMoney} from '../../assets/constans';
import {useDispatch, useSelector} from 'react-redux';
import {statusConfirmOrderSelector} from '../../store/orders/orderSelector';
import {
  confirmOrderAction,
  resetConfrimOrder,
} from '../../store/orders/orderAction';
import Status from '../../common/Status/Status';

const PackageDetails = ({navigation, route}) => {
  const [currentPackge, setCurrentPackge] = useState(null);
  const [patientSending, setPatientSending] = useState({});
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const statusConfirmOrder = useSelector(state =>
    statusConfirmOrderSelector(state),
  );
  useEffect(() => {
    const {packageDetail} = route ? route?.params : {};
    if (
      packageDetail &&
      packageDetail?.doctor_of_patient[0] &&
      packageDetail?.doctor_of_patient[0]?.package_items &&
      packageDetail?.doctor_of_patient[0]?.package_items[0]
    ) {
      setPatientSending(packageDetail);
      setCurrentPackge(packageDetail?.doctor_of_patient[0]?.package_items[0]);
    }
  }, []);
  const handleConfirmOrder = val => {
    if (currentPackge && currentPackge?.order_id) {
      dispatch(
        confirmOrderAction({
          order_id: (currentPackge?.order_id).toString(),
          order_status: val,
        }),
      );
    }
  };
  const onSuccess = () => {
    dispatch(resetConfrimOrder());
    navigation && navigation.navigate(NAVIGATION_MY_PATIENT);
  };
  useEffect(() => {
    if (statusConfirmOrder === Status.SUCCESS) {
      setModal(true);
    }
  }, [statusConfirmOrder]);
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate(NAVIGATION_MY_PATIENT)}
          style={styles.closeIcon}>
          <Icons
            type={'Feather'}
            name={'arrow-left'}
            size={20}
            color={'black'}
          />
        </TouchableOpacity>
        <View style={{marginTop: heightDevice * 0.06, alignItems: 'center'}}>
          {currentPackge && (
            <TextSemiBold style={styles.titleText}>
              {currentPackge?.name || ''}
            </TextSemiBold>
          )}
          <View style={styles.wrapperPatientInfo}>
            <View style={styles.contentLine}>
              <TextNormal style={{color: Colors.gray.gray60}}>
                Tên bệnh nhân
              </TextNormal>
              {patientSending && (
                <TextNormal style={styles.nameText}>
                  {patientSending.first_name + ' ' + patientSending.last_name}
                </TextNormal>
              )}
            </View>
            <View style={styles.contentLine}>
              <TextNormal style={{color: Colors.gray.gray60}}>
                Ngày sinh
              </TextNormal>
              {patientSending && (
                <TextNormal>{patientSending?.birthday}</TextNormal>
              )}
            </View>
          </View>
          <View style={styles.wrapperContentCard}>
            <View style={styles.contentLine}>
              <TextNormal style={{color: Colors.gray.gray60}}>
                Hiệu lực từ
              </TextNormal>
              <TextNormal>Ngày yêu cầu được xác nhận</TextNormal>
            </View>
            <View style={styles.contentLine}>
              <TextNormal style={{color: Colors.gray.gray60}}>
                Thời hạn gói
              </TextNormal>
              {currentPackge && (
                <TextNormal>{`${
                  currentPackge?.name.match(/\d+/)[0]
                } tháng`}</TextNormal>
              )}
            </View>
            <View style={styles.contentLine}>
              <TextNormal style={{color: Colors.gray.gray60}}>
                Thanh toán
              </TextNormal>
              <TextNormal>Tiền mặt</TextNormal>
            </View>
            <View style={styles.wrapperPaymentLine}>
              <TextNormalSemiBold>Tổng</TextNormalSemiBold>
              {currentPackge && (
                <TextNormal style={{fontWeight: 'bold', fontSize: 17}}>
                  {`${formatMoney(currentPackge?.price)} đ`}
                </TextNormal>
              )}
            </View>
          </View>
        </View>
        <View style={styles.wrapperButtonSection}>
          <CustomButton
            onPress={() => handleConfirmOrder(3)}
            label={'Huỷ yêu cầu'}
            styledLabel={styles.labelCancelBtn}
            styledButton={styles.buttonCancel}
          />
          <CustomButton
            onPress={() => handleConfirmOrder(1)}
            label={'Xác nhận'}
            styledButton={styles.buttonConfirm}
          />
        </View>
      </View>
      <ConfirmationModal
        isConfriming={true}
        isOpen={modal}
        onConfirm={onSuccess}
        title={'Xác nhận thành công'}
        textButtonConfrim={strings.common.close}>
        {patientSending && (
          <TextNormal style={{paddingHorizontal: 20, textAlign: 'center'}}>
            {`Bệnh nhân ${patientSending.first_name} ${patientSending.last_name} vừa được xác nhận mua gói thành công.`}
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
  containerSafeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.backgroundColor,
  },
  labelCancelBtn: {
    color: Colors.buttonBackground,
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonConfirm: {
    width: widthDevice * 0.44,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: Colors.buttonBackground,
  },
  nameText: {
    fontWeight: 'bold',
  },
  wrapperButtonSection: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: widthDevice,
  },
  titleText: {paddingBottom: 15, fontSize: 20, fontWeight: 'bold'},
  closeIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 5,
    zIndex: 999,
  },
  buttonCancel: {
    width: widthDevice * 0.45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    paddingHorizontal: 5,
    borderColor: Colors.buttonBackground,
  },
  warningText: {
    paddingVertical: 5,
    color: '#762E44',
    // fontStyle: 'italic',
    // backgroundColor: Colors.red.red95,
    // marginTop: 5,
    borderRadius: 10,
  },
  contentLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  },
  wrapperContentCard: {
    padding: 15,
    // elevation: 3,
    // marginHorizontal: 10,
    backgroundColor: Colors.whiteColor,
    borderRadius: 20,
    width: widthDevice - 20,
    marginTop: 10,
  },
  wrapperPatientInfo: {
    padding: 15,
    // elevation: 3,
    // marginHorizontal: 10,
    backgroundColor: Colors.whiteColor,
    borderRadius: 20,
    width: widthDevice - 20,
    marginTop: 10,
  },
  wrapperPaymentLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
    borderTopColor: Colors.gray.gray90,
    borderStyle: 'solid',
    borderTopWidth: 1,
  },
});

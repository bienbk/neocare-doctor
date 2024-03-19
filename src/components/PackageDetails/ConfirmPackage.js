import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, TouchableOpacity, ScrollView} from 'react-native';

import {heightDevice, widthDevice} from 'assets/constans';
import {StyleSheet} from 'react-native';
import Colors from 'theme/Colors';
import {
  TextNormal,
  TextNormalSemiBold,
  TextSemiBold,
} from 'common/Text/TextFont';
import Icons from 'common/Icons/Icons';
import {NAVIGATION_MY_PATIENT} from 'navigation/routes';

import CustomButton from 'common/CustomButton/CustomButton';
import strings from 'localization/Localization';
import ConfirmationModal from 'common/ConfirmationModal/ConfirmationModal';
import {formatMoney} from 'assets/constans';
import {useDispatch, useSelector} from 'react-redux';
import {statusConfirmOrderSelector} from 'store/selectors';
import {confirmOrderAction, resetConfrimOrder} from 'store/actions';
import Status from 'common/Status/Status';

const ConfirmPackage = ({currentPackage, nextStep}) => {
  console.log('CURRENT PACKAGE:::', currentPackage);
  const renderSelector = () =>
    currentPackage?.store.map(item => {
      return (
        <View key={item.id} style={[styles.wrapperCheckbox]}>
          <TextNormalSemiBold style={styles.storeName}>
            {item.name}
          </TextNormalSemiBold>
          <TextNormal style={{paddingVertical: 3}}>{item?.phone}</TextNormal>
          <TextNormal>{item?.address}</TextNormal>
        </View>
      );
    });
  return (
    <ScrollView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.wrapperContentCard}>
          <View style={styles.contentLine}>
            <TextNormal style={{color: Colors.gray.gray60}}>
              Tên bệnh nhân
            </TextNormal>

            <TextNormal style={styles.nameText}>
              {currentPackage?.first_name + ' ' + currentPackage?.last_name}
            </TextNormal>
          </View>
          <View style={styles.contentLine}>
            <TextNormal style={{color: Colors.gray.gray60}}>
              Ngày sinh
            </TextNormal>
            <TextNormal>
              {new Date(currentPackage?.birthday).toLocaleDateString('en-GB') ||
                '13/03/1992'}
            </TextNormal>
          </View>
          {currentPackage?.group.length > 0 && (
            <View style={styles.contentLine}>
              <TextNormal style={{color: Colors.gray.gray60}}>
                Vấn đề đang gặp
              </TextNormal>
              <TextNormal style={{flex: 1, textAlign: 'right'}}>
                {Array.from(currentPackage.group, v => v.name).toString()}
              </TextNormal>
            </View>
          )}
          {currentPackage?.parameters.length > 0 && (
            <View style={styles.contentLine}>
              <TextNormal style={{color: Colors.gray.gray60}}>
                Vấn đề đang gặp
              </TextNormal>
              <TextNormal style={{flex: 1, textAlign: 'right'}}>
                {Array.from(currentPackage.parameters, v => v.name).toString()}
              </TextNormal>
            </View>
          )}
          <View style={styles.line} />
          <View style={styles.contentLine}>
            <TextNormal style={{color: Colors.gray.gray60}}>Tên gói</TextNormal>
            <TextSemiBold>{currentPackage?.package_items?.name}</TextSemiBold>
          </View>
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
            {currentPackage && (
              <TextNormal>{`${
                currentPackage?.package_items?.name.match(/\d+/)[0]
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
            {currentPackage && (
              <TextNormal style={styles.textMoney}>
                {`${formatMoney(currentPackage?.package_items?.price)} đ`}
              </TextNormal>
            )}
          </View>
        </View>
      </View>
      {currentPackage?.store && (
        <View style={styles.wrapperList}>{renderSelector()}</View>
      )}
      <CustomButton
        label={'Hoàn tất'}
        styledButton={styles.buttonConfirm}
        onPress={() => nextStep()}
      />
    </ScrollView>
  );
};

export default ConfirmPackage;

const styles = StyleSheet.create({
  textMoney: {fontWeight: 'bold', fontSize: 17, color: Colors.primary},
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.gray.gray90,
    marginVertical: 5,
  },
  buttonConfirm: {
    width: widthDevice - 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 10,
    backgroundColor: Colors.primary,
  },
  storeName: {
    fontWeight: 'bold',
    fontSize: 17,
    color: Colors.main,
    paddingBottom: 3,
  },
  containerSafeArea: {
    flex: 1,
  },
  wrapperCheckbox: {
    // paddingHorizontal: 10,
    padding: 15,
    borderBottomWidth: 1,
    borderRadius: 16,
    borderColor: 'white',
    borderWidth: 1.5,
    borderStyle: 'solid',
    marginVertical: 5,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  wrapperList: {
    padding: 10,
    marginHorizontal: 10,
    // backgroundColor: 'red',
  },
  container: {
    // height: heightDevice - 150,
    // padding: 15,
    // backgroundColor: Colors.main,
  },
  labelCancelBtn: {
    color: Colors.main,
    fontWeight: 'bold',
    fontSize: 16,
  },
  // buttonConfirm: {
  //   width: widthDevice * 0.44,
  //   borderRadius: 30,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   paddingVertical: 8,
  //   paddingHorizontal: 5,
  //   backgroundColor: Colors.primary,
  // },
  nameText: {
    fontWeight: 'bold',
  },
  wrapperButtonSection: {
    position: 'absolute',
    bottom: 25,
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
    paddingVertical: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    paddingHorizontal: 5,
    borderColor: Colors.primary,
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
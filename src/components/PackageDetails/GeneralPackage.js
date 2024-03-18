import React from 'react';
import {View} from 'react-native';

import {widthDevice} from 'assets/constans';
import {StyleSheet} from 'react-native';
import Colors from 'theme/Colors';
import {
  TextNormal,
  TextNormalSemiBold,
  TextSemiBold,
} from 'common/Text/TextFont';
import CustomButton from 'common/CustomButton/CustomButton';
import {formatMoney} from 'assets/constans';

const GeneralPackage = ({currentPackage, nextStep}) => {
  console.log('CURRENT PACKAGE:::', currentPackage);
  return (
    <View style={styles.container}>
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
      <View style={styles.wrapperButtonSection}>
        <CustomButton
          onPress={() => console.log()}
          label={'Huỷ yêu cầu'}
          styledLabel={styles.labelCancelBtn}
          styledButton={styles.buttonCancel}
        />
        <CustomButton
          onPress={nextStep}
          label={'Tiếp tục'}
          styledLabel={{color: Colors.main}}
          styledButton={styles.buttonConfirm}
        />
      </View>
    </View>
  );
};

export default GeneralPackage;

const styles = StyleSheet.create({
  textMoney: {fontWeight: 'bold', fontSize: 17, color: Colors.primary},
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.gray.gray90,
    marginVertical: 5,
  },
  containerSafeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    // padding: 15,
    // backgroundColor: Colors.main,
  },
  labelCancelBtn: {
    color: Colors.main,
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonConfirm: {
    width: widthDevice * 0.44,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 5,
    backgroundColor: Colors.primary,
  },
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

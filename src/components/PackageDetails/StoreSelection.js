/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import Colors from 'theme/Colors';
import {TextNormalSemiBold, TextNormal} from 'common/Text/TextFont';
import {widthDevice} from 'assets/constans';
import CustomButton from 'common/CustomButton/CustomButton';
import {TextSemiBold} from 'common/Text/TextFont';
const STORES = [
  {
    id: 1,
    checked: false,
    name: 'Bệnh viện Bạch Mai',
    phone: '+84 901234567',
    address: '16 Phạm Ngọc Thạch P.Võ Thị Sáu Q.3 TP.HCM',
  },
  {
    id: 3,
    checked: false,
    name: 'Bệnh viện Việt Đức',
    phone: '+84 901234567',
    address: '123 Điện Biên Phủ P. Đa Kao Q.1 TP.HCM',
  },
  {
    id: 2,
    checked: false,
    name: 'Bệnh viện Chợ Rẫy',
    phone: '+84 901234567',
    address: '16 Phạm Ngọc Thạch P.Võ Thị Sáu Q.3 TP.HCM',
  },
];
const StoreSelection = ({nextStep, data, title, subTitle}) => {
  const [listStore, setListStore] = useState(STORES);
  const cardAnimatedY = new Animated.Value(-widthDevice);
  const handleValueCheckbox = item => {
    const tempList = Array.from(listStore);
    tempList.map(i => {
      if (i.id === item.id) {
        i.checked = !i.checked;
      }
    });
    setListStore(tempList);
  };
  const renderSelector = () =>
    listStore.map(item => {
      return (
        <TouchableOpacity
          onPress={() => handleValueCheckbox(item)}
          key={item.id}
          style={[
            styled.wrapperCheckbox,
            item.checked && {
              borderColor: Colors.primary,
              backgroundColor: 'white',
            },
          ]}>
          <TextNormalSemiBold style={styled.storeName}>
            {item.name}
          </TextNormalSemiBold>
          <TextNormal style={{paddingVertical: 3}}>{item?.phone}</TextNormal>
          <TextNormal>{item?.address}</TextNormal>
          {item.checked && (
            <View style={styled.checkedLabel}>
              <TextNormal style={styled.textLabel}>Đã chọn</TextNormal>
            </View>
          )}
        </TouchableOpacity>
      );
    });
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(cardAnimatedY, {
        duration: 300,
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }, 1000);
  }, []);
  const opacityCard = cardAnimatedY.interpolate({
    inputRange: [-widthDevice, 0],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  return (
    <View style={styled.container}>
      <TextSemiBold style={styled.titleText}>{title}</TextSemiBold>
      <TextNormalSemiBold style={styled.subTitleText}>
        {subTitle}
      </TextNormalSemiBold>
      <Animated.ScrollView
        style={[
          styled.wrapperScrollView,
          {
            transform: [{translateX: cardAnimatedY}],
            opacity: opacityCard,
          },
        ]}>
        <View style={styled.wrapperList}>{renderSelector()}</View>
      </Animated.ScrollView>
      <CustomButton
        label={'Tiếp tục'}
        onPress={() => nextStep(listStore.filter(s => s.checked))}
      />
    </View>
  );
};

export default StoreSelection;
const styled = StyleSheet.create({
  textLabel: {
    color: Colors.gray.gray40,
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkedLabel: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  storeName: {
    fontWeight: 'bold',
    fontSize: 17,
    color: Colors.main,
    paddingBottom: 3,
  },
  titleText: {
    alignSelf: 'center',
    paddingVertical: 10,
    marginTop: 5,
    fontSize: 22,
  },
  subTitleText: {
    paddingVertical: 5,
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.gray.gray50,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  wrapperScrollView: {marginTop: 10},
  wrapperList: {
    padding: 10,
    marginHorizontal: 10,
    // backgroundColor: 'red',
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
  wrapperHeader: {
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  backIcon: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
});

import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import Colors from 'theme/Colors';
import {TextNormalSemiBold} from 'common/Text/TextFont';
import {widthDevice} from 'assets/constans';
import CustomCheckbox from 'common/CustomCheckbox/CustomeCheckbox';
import CustomButton from 'common/CustomButton/CustomButton';
import {TextSemiBold} from 'common/Text/TextFont';

const GroupDiseases = ({nextStep, data, title, subTitle}) => {
  const [listDiseases, setlistDiseases] = useState([]);
  const cardAnimatedY = new Animated.Value(-widthDevice);
  useEffect(() => {
    if (data) {
      console.log(data);
      setlistDiseases(JSON.parse(JSON.stringify(data)));
    }
  }, [data]);
  const handleValueCheckbox = item => {
    const tempList = Array.from(listDiseases);
    tempList.map(i => {
      if (i.id === item.id) {
        i.checked = !i.checked;
        i.symtoms = '';
      }
    });
    setlistDiseases(tempList);
  };
  const renderSelector = () =>
    listDiseases.map((item, index) => {
      return (
        <View
          key={item.id}
          style={[
            styled.wrapperCheckbox,
            index === listDiseases.length - 1 && {borderBottomWidth: 0},
          ]}>
          <TextNormalSemiBold
            style={{
              fontWeight: 'bold',
              color: item.checked ? Colors.main : Colors.gray.gray50,
            }}>
            {item.name}
          </TextNormalSemiBold>
          <CustomCheckbox
            value={item.checked}
            setValue={() => handleValueCheckbox(item)}
          />
        </View>
      );
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
          // {
          //   transform: [{translateX: cardAnimatedY}],
          //   opacity: opacityCard,
          // },
        ]}>
        <View style={styled.wrapperList}>
          {listDiseases.length > 0 ? renderSelector() : []}
        </View>
      </Animated.ScrollView>
      <CustomButton
        label={'Tiếp tục'}
        onPress={() => nextStep(listDiseases.filter(e => e.checked))}
      />
    </View>
  );
};

export default GroupDiseases;
const styled = StyleSheet.create({
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
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 20,
  },
  wrapperCheckbox: {
    flexDirection: 'row',
    // paddingHorizontal: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    // borderRadius: 20,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray.gray95,
    // backgroundColor: 'white',
    alignItems: 'center',
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

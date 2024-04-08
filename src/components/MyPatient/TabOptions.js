import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  TextNormal,
  TextSmallMedium,
  TextSmallEleven,
} from 'common/Text/TextFont';
import Colors from 'theme/Colors';
import {user_example, widthDevice} from 'assets/constans';

const TabOptions = ({isSelected, onPressTab, requesting, number}) => {
  return (
    <View style={styles.wrapperTab}>
      <TouchableOpacity
        onPress={() => onPressTab(1)}
        style={[
          styles.wrapperTabItem,
          isSelected === 1 && styles.wrapperActiveTabItem,
        ]}>
        <TextNormal
          style={[styles.titleTab, isSelected === 1 && styles.titleActivedTab]}>
          Chỉ số sức khoẻ
        </TextNormal>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => onPressTab(2)}
        style={[
          styles.wrapperTabItem,
          isSelected === 2 && styles.wrapperActiveTabItem,
        ]}>
        <TextNormal
          style={[styles.titleTab, isSelected === 2 && styles.titleActivedTab]}>
          Tư vấn
        </TextNormal>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => onPressTab(2)}
        style={[
          styles.wrapperTabItem,
          isSelected === 2 && styles.wrapperActiveTabItem,
        ]}>
        <TextNormal
          style={[styles.titleTab, isSelected === 2 && styles.titleActivedTab]}>
          Lịch sử tư vấn
        </TextNormal>
      </TouchableOpacity>
    </View>
  );
};

export default TabOptions;

const styles = StyleSheet.create({
  badgeText: {color: Colors.whiteColor, fontSize: 10},
  badge: {
    width: 16,
    borderRadius: 20,
    backgroundColor: 'red',
    height: 16,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperFixedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    padding: 15,
    width: widthDevice,
  },
  avatarIcon: {
    height: 45,
    width: 45,
    borderRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 1.3,
    borderStyle: 'solid',
    backgroundColor: 'lightgray',
  },
  badgeIcon: {
    height: 20,
    width: 20,
    padding: 2,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: Colors.red.red50,
    marginLeft: 2,
    color: Colors.whiteColor,
  },
  wrapperTab: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  wrapperTabItem: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    minWidth: widthDevice / 3.9,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperActiveTabItem: {
    backgroundColor: Colors.main,
  },
  titleActivedTab: {
    color: 'white',
    fontWeight: 'bold',
  },
  titleTab: {
    color: Colors.gray.gray60,
    fontWeight: 'bold',
  },
});

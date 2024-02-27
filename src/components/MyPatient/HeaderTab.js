import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {TextNormal} from '../../common/Text/TextFont';
import Colors from '../../theme/Colors';

const HeaderTab = ({isSelected, onPressTab}) => {
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
          Đã mua gói
        </TextNormal>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressTab(2)}
        style={[
          styles.wrapperTabItem,
          isSelected === 2 && styles.wrapperActiveTabItem,
        ]}>
        <TextNormal
          style={[styles.titleTab, isSelected === 2 && styles.titleActivedTab]}>
          Đang theo dõi
        </TextNormal>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressTab(3)}
        style={[
          styles.wrapperTabItem,
          isSelected === 3 && styles.wrapperActiveTabItem,
        ]}>
        <TextNormal
          style={[styles.titleTab, isSelected === 3 && styles.titleActivedTab]}>
          Chờ xác nhận
        </TextNormal>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTab;

const styles = StyleSheet.create({
  wrapperTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,
    marginHorizontal: 0,
    paddingHorizontal: 10,
  },
  wrapperTabItem: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  wrapperActiveTabItem: {
    borderBottomColor: '#2544BD',
    borderBottomWidth: 2.5,
    borderStyle: 'solid',
  },
  titleActivedTab: {
    color: '#2544BD',
    fontWeight: 'bold',
  },
  titleTab: {
    color: 'gray',
    fontWeight: '600',
  },
});

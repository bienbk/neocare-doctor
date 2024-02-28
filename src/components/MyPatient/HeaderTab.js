import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {TextNormal, TextSmallEleven} from '../../common/Text/TextFont';
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
        <TextSmallEleven
          style={{
            height: 20,
            width: 20,
            padding: 2,
            textAlign: 'center',
            borderRadius: 10,
            backgroundColor: Colors.red.red50,
            marginLeft: 2,
            color: Colors.whiteColor,
          }}>
          {'10'}
        </TextSmallEleven>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTab;

const styles = StyleSheet.create({
  wrapperTab: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 5,
    paddingHorizontal: 10,
  },
  wrapperTabItem: {
    paddingHorizontal: 3,
    paddingVertical: 5,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
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
    color: Colors.gray.gray60,
    fontWeight: '600',
  },
});

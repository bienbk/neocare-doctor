import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  TextNormal,
  TextSemiBold,
  TextSmallMedium,
  TextSmallEleven,
} from 'common/Text/TextFont';
import Colors from 'theme/Colors';
import Images from 'common/Images/Images';
import {user_example, widthDevice} from 'assets/constans';
import Icons from 'common/Icons/Icons';
import {decorator_home} from 'assets/constans';

const HeaderTab = ({isSelected, onPressTab, requesting, number}) => {
  return (
    <ImageBackground source={decorator_home} style={{paddingBottom: 1}}>
      <View source={decorator_home} style={styles.wrapperFixedHeader}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Images source={user_example} style={styles.avatarIcon} />
          <View style={{paddingHorizontal: 10}}>
            <TextSemiBold style={{fontWeight: 'light'}}>
              Xin chào
              <TextSemiBold> Tran</TextSemiBold>
            </TextSemiBold>
          </View>
        </View>
        <Icons type={'Feather'} name={'bell'} size={29} color={'black'} />
      </View>
      <View style={styles.wrapperTab}>
        <TouchableOpacity
          onPress={() => onPressTab(0)}
          style={[
            styles.wrapperTabItem,
            isSelected === 0 && styles.wrapperActiveTabItem,
          ]}>
          <TextNormal
            style={[
              styles.titleTab,
              isSelected === 0 && styles.titleActivedTab,
            ]}>
            Khẩn cấp
          </TextNormal>

          {number && number.length && (
            <View style={styles.badge}>
              <TextSmallMedium style={styles.badgeText}>
                {number || ''}
              </TextSmallMedium>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressTab(1)}
          style={[
            styles.wrapperTabItem,
            isSelected === 1 && styles.wrapperActiveTabItem,
          ]}>
          <TextNormal
            style={[
              styles.titleTab,
              isSelected === 1 && styles.titleActivedTab,
            ]}>
            Yêu cầu tư vấn
          </TextNormal>
          {number && number.length && (
            <View style={styles.badge}>
              <TextSmallMedium style={styles.badgeText}>
                {number || ''}
              </TextSmallMedium>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressTab(2)}
          style={[
            styles.wrapperTabItem,
            isSelected === 2 && styles.wrapperActiveTabItem,
          ]}>
          <TextNormal
            style={[
              styles.titleTab,
              isSelected === 2 && styles.titleActivedTab,
            ]}>
            Chờ mua gói
          </TextNormal>
          {/* <TextSmallEleven style={styles.badgeIcon}>{requesting}</TextSmallEleven> */}
          {number && number.length && (
            <View style={styles.badge}>
              <TextSmallEleven style={styles.badgeText}>
                {number || ''}
              </TextSmallEleven>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HeaderTab;

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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  wrapperTabItem: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    minWidth: widthDevice / 3.5,
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

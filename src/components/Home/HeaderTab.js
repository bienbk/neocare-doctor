import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextNormal, TextSemiBold, TextSmallMedium} from 'common/Text/TextFont';
import Colors from 'theme/Colors';
import Images from 'common/Images/Images';
import {widthDevice} from 'assets/constans';
import {asyncStorage} from 'store';
import {home_header} from 'assets/constans';
import Svg from 'common/Svg/Svg';

const HeaderTab = ({
  isSelected,
  onPressTab,
  requested,
  order,
  emergency,
  allPatient,
}) => {
  const currentUser = useRef({first_name: ''});
  let tabs = [
    {id: 3, name: 'Khách hàng của tôi', nums: allPatient},
    {id: 0, name: 'Khẩn cấp', nums: emergency},
    {id: 1, name: 'Yêu cầu tư vấn', nums: requested},
    {id: 2, name: 'Chờ mua gói', nums: order},
  ];
  useEffect(() => {
    initUser();
    console.log(tabs);
  }, []);

  const initUser = async () => {
    const user = await asyncStorage.getUser();
    if (user) {
      currentUser.current = user;
    }
  };
  return (
    <View>
      <ImageBackground
        source={home_header}
        resizeMode={'stretch'}
        style={{height: 90}}>
        <View style={styles.wrapperFixedHeader}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {currentUser.current?.avatar &&
            currentUser.current?.avatar.length > 0 ? (
              <View style={styles.avatarIcon}>
                <Images
                  source={{uri: currentUser.current?.avatar}}
                  style={styles.avatar}
                />
              </View>
            ) : (
              <View style={styles.avatarIcon}>
                <Svg name={'avatar_default'} size={45} />
              </View>
            )}
            <View style={{paddingHorizontal: 10}}>
              <TextSemiBold style={{color: Colors.whiteColor}}>
                {'Xin chào '}
                <TextSemiBold style={{color: Colors.whiteColor}}>
                  {currentUser.current.first_name || 'bạn'}
                </TextSemiBold>
              </TextSemiBold>
            </View>
          </View>
          {/* <Icons type={'Feather'} name={'bell'} size={29} color={'black'} /> */}
        </View>
      </ImageBackground>
      <FlatList
        data={tabs}
        contentContainerStyle={{marginTop: 15, marginBottom: 5}}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, _}) => (
          <TouchableOpacity
            onPress={() => onPressTab(item.id)}
            style={[
              styles.wrapperTabItem,
              isSelected === item.id && styles.wrapperActiveTabItem,
            ]}>
            <TextNormal
              style={[
                styles.titleTab,
                isSelected === item.id && styles.titleActivedTab,
              ]}>
              {item.name}
            </TextNormal>
            {item.nums > 0 && (
              <View style={styles.badge}>
                <TextSmallMedium style={styles.badgeText}>
                  {item.nums || ''}
                </TextSmallMedium>
              </View>
            )}
          </TouchableOpacity>
        )}
        keyExtractor={i => i.id}
      />
    </View>
  );
};

export default HeaderTab;

const styles = StyleSheet.create({
  badgeText: {color: Colors.whiteColor, fontSize: 10},
  badge: {
    width: 16,
    borderRadius: 16,
    backgroundColor: '#EF0000',
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
    height: 47,
    width: 47,
    borderRadius: 30,
    borderColor: Colors.primary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    // backgroundColor: 'lightgray',
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 30,
    // borderStyle: 'dotted',
    // borderColor: Colors.primary,
    // borderWidth: 1,
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
    paddingHorizontal: 10,
    minWidth: widthDevice / 3.9,
    height: 34,
    marginHorizontal: 5,
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

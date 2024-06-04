import React, {useEffect, useState} from 'react';
import {
  FlatList,
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
import {asyncStorage} from '../../store';
import {heightDevice, home_header} from '../../assets/constans';
import Svg from '../../common/Svg/Svg';

const HeaderTab = ({isSelected, onPressTab, requested, order, emergency}) => {
  const [currentUser, setCurrentUser] = useState({last_name: ''});
  const [tabs, setTabs] = useState([]);
  useEffect(() => {
    initUser();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      const TABS = [
        {id: 3, name: 'Tất cả', nums: order + requested + emergency},
        {id: 0, name: 'Khẩn cấp', nums: emergency},
        {id: 1, name: 'Yêu cầu tư vấn', nums: requested},
        {id: 2, name: 'Chờ mua gói', nums: order},
      ];
      setTabs(TABS);
    }, 200);
  }, [requested, order, emergency]);

  const initUser = async () => {
    const user = await asyncStorage.getUser();
    if (user) {
      console.log(user);
      setCurrentUser(user);
    }
  };
  return (
    <View>
      <ImageBackground
        source={home_header}
        imageStyle={{height: 90, marginBottom: 10}}
        resizeMode={'stretch'}
        style={{marginBottom: 15}}>
        <View style={styles.wrapperFixedHeader}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {currentUser?.avatar && currentUser?.avatar.length > 0 ? (
              <Images
                source={{uri: currentUser?.avatar}}
                style={styles.avatarIcon}
              />
            ) : (
              <View style={styles.avatarIcon}>
                <Svg name={'avatar_default'} size={45} />
              </View>
            )}
            <View style={{paddingHorizontal: 10}}>
              <TextSemiBold style={{color: Colors.whiteColor}}>
                {'Xin chào '}
                <TextSemiBold style={{color: Colors.whiteColor}}>
                  {currentUser.first_name || 'bạn'}
                </TextSemiBold>
              </TextSemiBold>
            </View>
          </View>
          {/* <Icons type={'Feather'} name={'bell'} size={29} color={'black'} /> */}
        </View>
      </ImageBackground>
      <FlatList
        data={tabs}
        contentContainerStyle={{marginTop: 15}}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
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
    height: 45,
    width: 45,
    borderRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    // backgroundColor: 'lightgray',
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
    paddingVertical: 6,
    minWidth: widthDevice / 3.9,
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

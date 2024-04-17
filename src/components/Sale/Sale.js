import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Colors from 'theme/Colors';

import {TextNormal, TextNormalSemiBold} from 'common/Text/TextFont';
import Svg from 'common/Svg/Svg';
import {NAVIGATION_ACCOUNT} from 'navigation/routes';
import Header from 'common/Header/Header';

const Sale = ({navigation}) => {
  const onBack = () => {
    navigation && navigation.navigate(NAVIGATION_ACCOUNT);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={onBack} title={'Cộng tác viên'} />
      <ScrollView style={styles.wrapperScrollView}>
        {[...Array(5).keys()].map(i => (
          <View style={styles.wrapperSaleItem}>
            <Svg name={'icon_avatar'} size={50} />
            <View style={styles.wrapperInfo}>
              <TextNormalSemiBold style={styles.nameText}>
                Nguyễn Văn Lực
              </TextNormalSemiBold>
              <TextNormal>0387652545</TextNormal>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sale;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  nameText: {paddingBottom: 5, fontWeight: 'bold'},
  wrapperInfo: {paddingHorizontal: 10},
  wrapperSaleItem: {
    backgroundColor: Colors.whiteColor,
    borderRadius: 12,
    marginVertical: 5,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperScrollView: {
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: Colors.backgroundColor,
  },
  wrapperHeader: {
    // padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: Colors.whiteColor,
  },
  backBtn: {
    position: 'absolute',
    top: 10,
    left: 15,
    padding: 5,
  },
});

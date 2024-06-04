import React from 'react';
import Colors from '../../theme/Colors';
import Svg from '../Svg/Svg';
import {StyleSheet, View} from 'react-native';
import {heightDevice} from 'assets/constans';
import {TextSmallTwelve} from '../Text/TextFont';

const EmptyPage = () => {
  return (
    <View style={styles.container}>
      <Svg name={'icon_empty'} size={120} />
      <TextSmallTwelve style={{color: Colors.gray.gray60}}>
        {'Danh sách trống'}
      </TextSmallTwelve>
    </View>
  );
};

export default EmptyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    height: heightDevice / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

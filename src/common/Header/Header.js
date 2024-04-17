import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Colors from '../../theme/Colors';
import {TextSemiBold} from '../Text/TextFont';
import Icons from '../Icons/Icons';

const Header = ({onBack, title}) => {
  return (
    <View style={styles.wrapperHeader}>
      <TouchableOpacity onPress={onBack} style={styles.backBtn}>
        <Icons
          type={'Ionicons'}
          name={'arrow-back'}
          size={25}
          color={'black'}
        />
      </TouchableOpacity>
      <TextSemiBold>{title}</TextSemiBold>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
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

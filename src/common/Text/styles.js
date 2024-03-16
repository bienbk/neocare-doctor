import {Platform, StyleSheet} from 'react-native';
import Colors from 'theme/Colors';
const isAndroid = Platform.OS === 'android';

const styles = StyleSheet.create({
  small11: {
    fontFamily: 'SVN-Poppins-Regular',
    fontSize: 11,
    color: Colors.gray.gray10,
    fontWeight: '400',
  },
  small12: {
    fontFamily: 'SVN-Poppins-Regular',
    fontSize: 12,
    color: Colors.gray.gray10,
    fontWeight: '400',
  },
  smallMedium12: {
    fontFamily: 'SVN-Poppins-Medium',
    fontSize: 12,
    color: Colors.gray.gray10,
    fontWeight: '500',
  },
  normal13: {
    fontFamily: 'SVN-Poppins-Regular',
    fontSize: 13,
    color: Colors.gray.gray10,
    fontWeight: '400',
  },
  normalSemiBold13: {
    fontFamily: 'SVN-Poppins-SemiBold',
    fontSize: 13,
    color: Colors.gray.gray10,
    fontWeight: '600',
  },
  highLightBold16: {
    fontFamily: 'SVN-Poppins-Bold',
    fontSize: 16,
    color: Colors.gray.gray10,
    // fontWeight: '700',
  },
  semiBold16: {
    fontFamily: 'SVN-Poppins-SemiBold',
    fontSize: 16,
    color: Colors.gray.gray10,
    fontWeight: 'bold',
    // fontStyle: 'bold',
  },
  moneyBold20: {
    fontFamily: 'SVN-Poppins-Bold',
    fontSize: 20,
    color: Colors.gray.gray10,
    fontWeight: isAndroid ? 'bold' : '700',
  },
});

export default styles;

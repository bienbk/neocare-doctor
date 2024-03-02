import {heightDevice, widthDevice} from 'assets/constans';
import {StyleSheet} from 'react-native';
import Colors from 'theme/Colors';

const styles = StyleSheet.create({
  textError: {color: Colors.redColor, marginTop: 10, textAlign: 'center'},
  safeView: {
    flex: 1,
  },
  textConfirm: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    paddingTop: 5,
  },

  container: {
    paddingHorizontal: 15,
    flex: 1,
    paddingVertical: 30,
    backgroundColor: Colors.backgroundColor,
  },
  textHello: {
    fontWeight: 'light',
    fontSize: 14,
    alignSelf: 'center',
    color: 'grey',
  },
  textIntro1: {
    fontSize: 24,
    fontWeight: '700',
    // justifyContent: 'center',
    alignSelf: 'center',
  },
  textIntro: {
    fontSize: 24,
    fontWeight: '700',
    // justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: 20,
  },
  policyWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  checkboxSection: {flexDirection: 'row', paddingVertical: 15},
  linkText1: {
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
    color: '#0A3CA0',
  },
  linkText: {
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
    color: '#0A3CA0',
    marginTop: 20,
  },
  contentPolicySection: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  column: {
    width: 1,
    height: 22,
    backgroundColor: Colors.textGrayColor,
    marginHorizontal: 10,
  },
  separatorLine: {
    marginTop: 40,
  },
  styleCheckbox: {
    height: 18,
    width: 20,
  },
  buttonSkip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
    marginTop: 10,
  },
  textSkip: {
    color: Colors.textGrayColor,
  },
  buttonSubmitPhone: {
    // backgroundColor: Colors.buttonTextColor,
    // height: 60,
    // width: 60,
    // borderRadius: 60,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: widthDevice * 0.9,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#004D40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButtonSubmitPhone: {
    alignItems: 'center',
    paddingTop: 10,
    paddingVertical: 20,
  },
  containerButtonInputPhone: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 0.16 * heightDevice,
    width: widthDevice * 0.88,
    backgroundColor: Colors.whiteColor,
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 50,
  },
  viewImageVietnam: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  codeCountry: {
    fontWeight: '500',
    fontSize: 18,
    marginRight: 10,
    paddingVertical: 5,
    borderRightColor: 'lightgrey',
    borderStyle: 'solid',
    paddingHorizontal: 10,
    borderRightWidth: 1,
    marginBottom: 2,
    alignSelf: 'center',
  },
  styleTextInput: {
    fontSize: 18,
    // alignItems: 'center',
    // backgroundColor: 'red',
    color: 'black',
    // backgroundColor: 'green',
    // fontFamily: 'SVN-Poppins-Medium',
    fontWeight: '500',
  },
  imageVietNam: {},
  iconDown: {
    marginLeft: 3,
  },
});

export default styles;

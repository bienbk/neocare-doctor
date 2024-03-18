import {heightDevice, widthDevice} from 'assets/constans';
import {StyleSheet} from 'react-native';
import Colors from 'theme/Colors';

const styles = StyleSheet.create({
  buttonSkip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
    marginTop: 10,
  },
  textShowTimer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
    paddingHorizontal: 0,
  },
  safeView: {
    flex: 1,
  },
  wrapperTitle: {
    paddingBottom: 10,
    paddingTop: heightDevice * 0.15,
    paddingHorizontal: 10,
  },
  container: {
    paddingHorizontal: 15,
    flex: 1,
    paddingVertical: 30,
    backgroundColor: Colors.backgroundColor,
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
  textSkip: {
    color: Colors.textGrayColor,
  },
  otpInputText: {
    fontSize: 29,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'black',
    fontWeight: '600',
    // backgroundColor: 'red',
  },
  otpInputView: {
    borderColor: 'gray',
    // minWidth: '13%',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 5,
    width: 35,
    height: 55,
  },
  inputContainerPressable: {
    width: widthDevice - 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  hiddenTextInput: {
    // borderColor: '#004D40',
    // borderWidth: 2,
    // borderRadius: 5,
    // padding: 12,
    // marginTop: 15,
    // width: 300,
    // color: 'white',
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
  },
  wrapperInput: {
    // height: heightDevice / 3,
    // backgroundColor: 'red',
    paddingVertical: 20,
  },
  wrapperSubtitle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textError: {
    color: Colors.redColor,
    alignSelf: 'center',
    textAlign: 'center',
    paddingVertical: 10,
  },
  textReceive: {
    textAlign: 'center',
    fontSize: 15,
    paddingHorizontal: 5,
    fontWeight: 'bold',
  },
  textSend: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: Colors.main,
  },
  questionSendback: {
    textAlign: 'center',
    fontSize: 14,
    color: 'gray',
  },
  viewButton: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.09 * heightDevice,
    // backgroundColor: 'red',
    marginBottom: 0.22 * heightDevice,
  },
  buttonConfirm: {
    width: widthDevice / 1.5,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: '#004D40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  imageStyle: {
    width: 80,
    height: 85,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 27,
    letterSpacing: 0,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'SVN-Poppins-Medium',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.textGrayColor,
  },
  separatorLine: {
    width: '70%',
    color: '#004D40',
    marginVertical: 0.04 * heightDevice,
  },
  dot: {
    backgroundColor: '#004D40',
    width: 70,
    height: 30,
    position: 'absolute',
    right: widthDevice / 3.2,
    top: heightDevice / 13,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStar: {
    color: 'white',
  },
  indicator: {
    position: 'absolute',
    top: heightDevice / 2 - 20,
    left: widthDevice / 2 - 20,
  },
});

export default styles;

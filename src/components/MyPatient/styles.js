import {heightDevice, widthDevice} from 'assets/constans';
import {StyleSheet} from 'react-native';
import Colors from 'theme/Colors';

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  wrapperProfileContent: {paddingHorizontal: 10, flex: 1},
  wrapperProfilePatient: {
    flexDirection: 'row',
    paddingVertical: 5,
    flex: 1,
  },
  imageDoctor: {
    width: 60,
    height: 60,
    // borderRadius: 8,
  },
  subtitleText: {
    color: Colors.gray.gray40,
  },
  wrapperListCard: {marginVertical: 5, backgroundColor: Colors.whiteColor},
  groupPatient: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginTop: 2,
    alignItems: 'flex-end',
    backgroundColor: '#B88A00',
    borderRadius: 8,
  },
  wrapperHeader: {
    height: 53,
    backgroundColor: Colors.whiteColor,
    width: widthDevice,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerCard: {
    width: widthDevice - 30,
    alignSelf: 'center',
    height: 130,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  borderRadius16: {borderRadius: 16},
  phoneIcon: {
    backgroundColor: '#B88A00',
    borderRadius: 22,
    alignSelf: 'flex-start',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
  },
  contentLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  },
  wrapperServiceHistory: {
    // marginVertical: 5,
    marginHorizontal: 20,
  },
  linkText1: {
    fontSize: 12,
    color: Colors.main,
    fontWeight: 'bold',
  },
  labelStatus: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  statusText: {
    color: Colors.whiteColor,
    fontWeight: 'bold',
  },
  wrapperGender: {
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalLine: {
    height: 10,
    width: 1,
    marginHorizontal: 10,
    backgroundColor: 'gray',
  },
  wrapperConfirm: {
    position: 'absolute',
    top: 30,
    right: 5,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  // wrapperServiceItem: {
  //   paddingVertical: 5,
  //   marginVertical: 1,
  //   borderBottomColor: 'lightgray',
  //   borderBottomWidth: 1,
  //   borderStyle: 'dashed',
  // },
  wrapperLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    alignItems: 'center',
  },
  wrapperContentCard: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 3,
    // marginHorizontal: 10,
    backgroundColor: Colors.whiteColor,
    elevation: 1,
    borderRadius: 12,
    // width: widthDevice - 20,
  },
  borderTopDashed: {
    borderTopColor: Colors.gray.gray90,
    borderTopWidth: 1,
    borderStyle: 'solid',
  },
});

export default styles;

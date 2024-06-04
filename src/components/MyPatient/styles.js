import {heightDevice, widthDevice} from 'assets/constans';
import {StyleSheet, Platform} from 'react-native';
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
  wrapperPackageName: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%',
  },
  subtitleProgress: {color: Colors.gray.gray50, fontSize: 10},
  wrapperProgresCircle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '32%',
  },
  leftDayText: {fontSize: 14, textAlign: 'center', fontWeight: 'bold'},
  packageNameText: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 5,
    textAlign: 'center',
    width: '85%',
  },
  containerPackageInfo: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomWidth: 4,
    borderStyle: 'solid',
    borderColor: Colors.backgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  imageDoctor: {
    width: 61,
    height: 61,
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
    marginRight: 4,
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
    // height: 130,
    marginVertical: 10,
    marginBottom: 15,
    padding: 15,
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
    bottom: 15,
    right: 15,
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
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowColor: '#a8bed2',
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
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

import {heightDevice, widthDevice} from 'assets/constans';
import {StyleSheet, Platform} from 'react-native';
import Colors from 'theme/Colors';

const styles = StyleSheet.create({
  tagLabel: {
    marginHorizontal: 5,
    paddingHorizontal: 8,
    borderRadius: 4,
    paddingVertical: 4,
    marginVertical: 3,
    backgroundColor: '#FFE699',
  },
  containerSafeArea: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  lineBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStatus: {fontWeight: 'bold', color: 'white'},
  wrapperCholesterol: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  paddingVertical2: {
    paddingVertical: 2,
  },
  priceText: {
    fontWeight: 'bold',
    color: Colors.primary,
  },
  wrapperParameterItem: {
    // borderBottomColor: Colors.gray.gray90,
    // borderStyle: 'dashed',
    paddingVertical: 8,
    // borderBottomWidth: 1,
  },
  alignItemsCenter: {alignItems: 'center'},
  weightBold: {
    fontWeight: 'bold',
  },
  statusPatient: {
    alignSelf: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 3,
    // position: 'absolute',
    // right: 10,
    // zIndex: 2,
    alignItems: 'flex-end',
    // backgroundColor: '#DACB00',
    borderRadius: 8,
  },
  textParameter: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'red',
    // backgroundColor: 'green',
    paddingHorizontal: 3,
    textAlign: 'right',
  },
  textGray: {color: Colors.gray.gray60},
  wrapperParameterList: {
    paddingTop: 5,
    borderTopColor: Colors.gray.gray90,
    borderTopWidth: 0.5,
    borderStyle: 'solid',
  },
  containerListPatient: {
    marginHorizontal: 10,
    paddingVertical: 10,
  },

  wrapperTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthDevice,
    paddingVertical: 10,
  },
  removeModal: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -heightDevice / 2 + 30,
    right: -widthDevice / 2 + 15,
    padding: 10,
    width: widthDevice / 2 + 50,
    shadowColor: '#000',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },
  wrapperIconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  imageDoctor: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  wrapperDoctorItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.whiteColor,
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
    borderRadius: 12,
    marginVertical: 5,
    marginHorizontal: 1,
    elevation: 1,
  },
  titleText: {
    fontSize: 24,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: Colors.blue.blue98,
  },
  wrapperProfileDoctor: {
    flexDirection: 'row',
    paddingVertical: 5,
    flex: 1,
    // backgroundColor: 'green',
    // marginBottom: 5,
  },
  wrapperActiveProfileDoctor: {
    borderBottomColor: Colors.gray.gray95,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingBottom: 10,
  },
  wrapperProfileContent: {paddingHorizontal: 10, flex: 1},
  textPatientName: {marginBottom: 2, fontWeight: 'bold', fontSize: 14},
  diseaseText: {
    marginBottom: 5,
    color: Colors.red.red40,
    paddingVertical: 2,
    paddingHorizontal: 15,
    backgroundColor: Colors.red.red90,
    textAlign: 'center',
    borderRadius: 8,
  },
  subtitleText: {color: Colors.gray.gray60, paddingBottom: 5},

  requestingText: {
    color: Colors.gray.gray60,
    paddingVertical: 2,
  },
  textRequest: {
    marginBottom: 5,
    color: '#002BA4',
    paddingVertical: 2,
    backgroundColor: '#DDE1FF',
    paddingHorizontal: 8,
    textAlign: 'center',
    borderRadius: 8,
  },
  containerEmpty: {
    // flex: 1,
    // height: '100%',
    justifyContent: 'center',
    width: widthDevice * 0.65,
    marginTop: 100,
    alignSelf: 'center',
    alignItems: 'center',
  },
  emptyDoctorText: {
    textAlign: 'center',
    paddingVertical: 15,
    color: Colors.gray.gray50,
    fontWeight: 'bold',
  },
  addDoctorBtn: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  imageEmpty: {
    width: 135,
    height: 135,
  },
  // wrapperAddressDoctor: {flexDirection: 'row', alignItems: 'center'},
});

export default styles;

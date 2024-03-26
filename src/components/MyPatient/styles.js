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
    borderRadius: 8,
  },
  subtitleText: {
    color: Colors.gray.gray40,
  },
  wrapperListCard: {marginVertical: 5},
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
  }
});

export default styles;

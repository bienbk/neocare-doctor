import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import { widthDevice } from '../../assets/constans';
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  wrapperActivePackage: {
    backgroundColor: 'white',
    paddingBottom: 10,
    elevation: 1,
    borderRadius: 12,
    marginVertical: 10,
    width: widthDevice - 30,
    alignSelf: 'center',
    // borderStyle: 'solid',
    // borderWidth: 1.5,
    // borderColor: Colors.primary,
  },
  priceText: {color: Colors.main, paddingVertical: 10},
  descriptionText: {color: Colors.gray.gray50, marginLeft: 4},
  imageBackground: {height: 70, width: '100%', marginBottom: 10},
  descriptionLine: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  packageName: {
    paddingVertical: 5,
    fontWeight: 'bold',
    fontSize: 14,
    width: '80%',
    alignSelf: 'center',
    textAlign: 'center',
    // backgroundColor: 'red',
    color: '#45B4A5',
  },
  wrapperFooterCard: {
    // paddingVertical: 5,
    paddingTop: 5,
    paddingHorizontal: 15,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.gray.gray95,
  },
  wrapperHeaderPackage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageHeader: {borderTopLeftRadius: 12, borderTopRightRadius: 12},
  pathIcon: {position: 'absolute', left: 0, top: 13},
});
export default styles;

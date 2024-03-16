import {widthDevice, heightDevice} from 'assets/constans';
import {StyleSheet} from 'react-native';
import Colors from 'theme/Colors';

const styles = StyleSheet.create({
  buttonClose: {
    position: 'absolute',
    top: 6,
    right: 3,
    paddingRight: 5,
    paddingTop: 5,
  },
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  flatlistContainer: {
    marginTop: -30,
  },
  wrapperPackage: {
    width: widthDevice - 30,
    // alignSelf: 'center',
    marginHorizontal: 15,
    backgroundColor: Colors.whiteColor,
    marginBottom: 20,
    marginTop: -(heightDevice * 0.2) / 2,
    padding: 15,
    flexDirection: 'row',
    borderRadius: 12,
    alignItems: 'center',
    height: heightDevice * 0.2,
    justifyContent: 'space-between',
  },
  imageCode: {
    width: (138 / 358) * widthDevice - 30,
    height: '100%',
  },
  content: {
    // backgroundColor: 'red',
    flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    // //
    // justifyContent: 'center',
  },
  line: {flexDirection: 'row'},
  textHeader: {color: Colors.gray.gray95, alignSelf: 'center'},
  wrapperHeaderTitle: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#05102A',
  },
  labelMyPackage: {
    backgroundColor: Colors.whiteColor,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 20,
  },
  wrapperAnimationHeader: {
    position: 'absolute',
    top: 0,
    zIndex: 100,
    elevation: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#05102A',
    height: 70,
  },
  wrapperHeader: {
    height: heightDevice * 0.336,
    backgroundColor: '#05102A',
  },
  containerContent: {
    flex: 1,
    // backgroundColor: 'white',
  },
  cardFeature: {
    backgroundColor: 'white',
    marginVertical: 10,
    paddingHorizontal: 5,
    // paddingVertical: 5,
    borderRadius: 20,
  },
  containerFlatOption: {
    alignSelf: 'center',
    paddingVertical: 10,
    marginTop: 20,
  },
  textVersion: {
    color: Colors.buttonTextColor,
    marginBottom: 5,
  },
  cardTitleFeature: {marginTop: 10, marginLeft: 10, fontSize: 15},
});

export default styles;

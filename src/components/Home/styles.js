import {heightDevice, widthDevice} from 'assets/constans';
import {StyleSheet} from 'react-native';
import Colors from 'theme/Colors';

const styles = StyleSheet.create({
  fontSize29: {fontSize: 29},
  wrapperHeader: {
    height: heightDevice * 0.4,
    backgroundColor: '#2544BD',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBackground: {
    width: widthDevice * (180 / 390),
    height: heightDevice * (190 / 800),
  },
  wrapperTitle: {
    paddingRight: 12,
    flex: 1,
    // backgroundColor: 'red',
    height: '80%',
  },
  wrapperBellIcon: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 8,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  greetingText: {textAlign: 'right', color: Colors.whiteColor},
  titleText: {
    textAlign: 'right',
    fontSize: 22,
    color: Colors.whiteColor,
    fontWeight: '700',
    lineHeight: 33,
  },
});

export default styles;

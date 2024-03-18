import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icons from '../Icons/Icons';
import {TextNormal, TextSemiBold} from '../Text/TextFont';
import {widthDevice} from '../../assets/constans';
import Colors from '../../theme/Colors';

const CustomButton = ({
  onPress,
  label,
  styledButton,
  isDisabled,
  styledLabel,
}) => {
  // const [value, setValue] = useState(false);
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={styledButton ? styledButton : styles.buttonContinue}>
      <TextSemiBold
        style={styledLabel ? styledLabel : styles.textContinueButton}>
        {label}
      </TextSemiBold>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContinue: {
    width: widthDevice - 40,
    paddingVertical: 13,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 15,
  },
  textContinueButton: {
    color: Colors.main,
    fontWeight: 'bold',
    fontSize: 17,
  },
});

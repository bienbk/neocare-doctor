import React from 'react';
import {
  TextMoneyBold,
  TextNormal,
  TextSemiBold,
} from '../../common/Text/TextFont';
import {View} from 'react-native';
import {MIDDLE_DOT, widthDevice} from '../../assets/constans';
import Icons from '../../common/Icons/Icons';
import styles from './styles';
import Colors from '../../theme/Colors';

const DiseaseCard = ({name, status}) => {
  return (
    <View
      style={{
        width: widthDevice - 30,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 16,
        paddingHorizontal: 15,
        marginBottom: 10,
        paddingVertical: 10,
      }}>
      <TextSemiBold style={{fontWeight: 'bold'}}>{name}</TextSemiBold>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          borderBottomColor: Colors.gray.gray90,
          borderBottomWidth: 1,
        }}>
        <TextNormal style={{color: '#07C558', paddingRight: 10}}>
          {MIDDLE_DOT + ` ${status}`}
        </TextNormal>
        <Icons type={'Feather'} name={'clock'} color={'lightgray'} />
        <TextNormal style={{color: '#898989', paddingLeft: 4}}>
          {'Hôm nay, ' + new Date().getHours() + ':' + new Date().getMinutes()}
        </TextNormal>
      </View>
    </View>
  );
};

export default DiseaseCard;

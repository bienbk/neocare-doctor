import React from 'react';
import {View} from 'react-native';
import Svg from '../../common/Svg/Svg';
import {TextNormalSemiBold, TextSmallEleven} from '../../common/Text/TextFont';
// import CircularProgress from 'react-native-circular-progress-indicator';
import Colors from '../../theme/Colors';
import ProgressCircle from 'react-native-progress-circle';

const PackageInfo = ({currentPackge}) => {
  console.log(currentPackge);
  const percent =
    parseFloat(currentPackge.name.match(/\d+/)[0]) <= 12
      ? ((new Date().getTime() - new Date(currentPackge.created_at).getTime()) /
          60000 /
          (24 * 60) /
          (currentPackge.name.match(/\d+/)[0] * 30)) *
        100
      : ((365 -
          (new Date().getTime() -
            new Date(currentPackge.created_at).getTime()) /
            60000 /
            (24 * 60)) /
          365) *
        100;
  console.log('percent:::', percent);
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderBottomWidth: 4,
        borderStyle: 'solid',
        borderColor: Colors.backgroundColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '65%',
        }}>
        <Svg name={'icon_gift'} size={40} color={'black'} />
        <TextNormalSemiBold
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            paddingHorizontal: 5,
            textAlign: 'center',
            width: '80%',
          }}>
          {currentPackge.name}
        </TextNormalSemiBold>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '35%',
        }}>
        <ProgressCircle
          percent={percent}
          radius={25}
          borderWidth={4}
          color="black"
          shadowColor="#999"
          bgColor="#fff">
          <TextNormalSemiBold style={{fontSize: 12, textAlign: 'center'}}>
            {currentPackge.name.match(/\d+/)[0]}
            <TextSmallEleven style={{color: Colors.gray.gray50, fontSize: 10}}>
              {currentPackge.name.match(/\d+/)[0] <= 12 ? '\ntháng' : '\nngày'}
            </TextSmallEleven>
          </TextNormalSemiBold>
        </ProgressCircle>
        <ProgressCircle
          percent={1}
          radius={25}
          borderWidth={4}
          color="black"
          shadowColor="#999"
          bgColor="#fff">
          <TextNormalSemiBold style={{fontSize: 12, textAlign: 'center'}}>
            {'0'}
            <TextSmallEleven style={{color: Colors.gray.gray50, fontSize: 10}}>
              {'\nlần'}
            </TextSmallEleven>
          </TextNormalSemiBold>
        </ProgressCircle>
      </View>
    </View>
  );
};

export default PackageInfo;

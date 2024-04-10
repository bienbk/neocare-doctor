import React from 'react';
import {View} from 'react-native';
import Svg from '../../common/Svg/Svg';
import {TextNormalSemiBold} from '../../common/Text/TextFont';
import CircularProgress from 'react-native-circular-progress-indicator';
import Colors from '../../theme/Colors';

const PackageInfo = ({currentPackge}) => {
  console.log(currentPackge);
  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Svg name={'icon_gift'} size={25} color={'black'} />
        <TextNormalSemiBold
          style={{paddingHorizontal: 5, fontWeight: 'bold', fontSize: 15}}>
          {currentPackge.name}
        </TextNormalSemiBold>
      </View>
      <CircularProgress
        value={
          parseInt(currentPackge.name.match(/\d+/)[0], 10) * 30 -
            (new Date().getTime() -
              new Date(currentPackge?.created_at).getTime()) /
              60000 /
              (24 * 60) || 50
        }
        radius={28}
        progressValueColor={'black'}
        progressValueFontSize={17}
        activeStrokeWidth={5}
        inActiveStrokeWidth={5}
        progressValueStyle={{position: 'absolute', top: -5, left: -10}}
        maxValue={parseInt(currentPackge.name.match(/\d+/)[0], 10) * 30 || 100}
        activeStrokeColor={'black'}
        // inActiveStrokeColor={Colors.gray.gray90}
        title={'Ngày'}
        titleStyle={{fontSize: 10, marginTop: 15}}
        titleColor={'gray'}
      />
    </View>
  );
};

export default PackageInfo;

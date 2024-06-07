import React from 'react';
import {View} from 'react-native';
import Svg from 'common/Svg/Svg';
import {TextNormalSemiBold, TextSmallEleven} from 'common/Text/TextFont';
import ProgressCircle from 'react-native-progress-circle';
import styles from './styles';
import moment from 'moment';

const PackageInfo = ({currentPackge}) => {
  console.log('current package::::', currentPackge);
  const [percent, setPercent] = React.useState(0);
  const [leftDays, setLeftDays] = React.useState(0);
  React.useEffect(() => {
    if (currentPackge && currentPackge?.name.length > 0) {
      const type =
        parseInt(currentPackge.name.match(/\d+/)[0], 10) < 36 ? 1 : 2;
      const numberTime = parseInt(currentPackge.name.match(/\d+/)[0], 10);

      const tempExpired = moment(new Date(currentPackge.updated_at))
        .add(numberTime, type === 1 ? 'M' : 'days')
        .format('DD-MM-YYYY');
      const start = moment(new Date(currentPackge.updated_at), 'DD-MM-YYYY');

      const end = moment(tempExpired, 'DD-MM-YYYY');
      const now = moment(new Date(), 'DD-MM-YYYY');

      const total = moment.duration(end.diff(start)).asDays();
      const passed = moment.duration(now.diff(start)).asDays();
      const left = parseInt(total, 10) - parseInt(passed, 10);
      setLeftDays(left);
      setPercent((left / parseInt(total, 10)) * 100);
    }
  }, [currentPackge]);
  return (
    <View style={styles.containerPackageInfo}>
      <View style={styles.wrapperPackageName}>
        <Svg name={'icon_gift'} size={40} color={'black'} />
        <TextNormalSemiBold numberOfLines={3} style={styles.packageNameText}>
          {currentPackge.name}
        </TextNormalSemiBold>
      </View>
      <View style={styles.wrapperProgresCircle}>
        <ProgressCircle
          percent={percent}
          radius={25}
          borderWidth={3}
          color="black"
          shadowColor="#999"
          bgColor="#fff">
          <TextNormalSemiBold style={styles.leftDayText}>
            {leftDays}
            <TextSmallEleven style={styles.subtitleProgress}>
              {'\nngày'}
            </TextSmallEleven>
          </TextNormalSemiBold>
        </ProgressCircle>
        <ProgressCircle
          percent={1}
          radius={25}
          borderWidth={3}
          color="black"
          shadowColor="#999"
          bgColor="#fff">
          <TextNormalSemiBold style={styles.leftDayText}>
            {'0'}
            <TextSmallEleven style={styles.subtitleProgress}>
              {'\nlần'}
            </TextSmallEleven>
          </TextNormalSemiBold>
        </ProgressCircle>
      </View>
    </View>
  );
};

export default PackageInfo;

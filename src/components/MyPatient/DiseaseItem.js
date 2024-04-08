import React from 'react';
import {
  TextMoneyBold,
  TextNormal,
  TextSmallTwelve,
  TextSemiBold,
} from 'common/Text/TextFont';
import {StyleSheet, View} from 'react-native';
// import {MIDDLE_DOT,} from 'assets/constans';
import Icons from 'common/Icons/Icons';
// import styles from './styles';
import Colors from 'theme/Colors';
import {STATUS, STATUS_COLORS, widthDevice} from 'assets/constans';
// import Colors from 'theme/Colors';

const DiseaseItem = ({
  name,
  status,
  unit,
  value,
  item,
  subValue,
  created_at,
  index,
}) => {
  return (
    <View style={styles.wrapperCardItem}>
      <View style={styles.wrapperContentCard}>
        <View style={styles.wrapperNameLine}>
          <TextSemiBold>{name}</TextSemiBold>
          <View
            style={[
              styles.statusText,
              {backgroundColor: STATUS_COLORS[status || -1]},
            ]}>
            <TextSmallTwelve style={{color: Colors.whiteColor}}>
              {STATUS[status || 0]}
            </TextSmallTwelve>
          </View>
        </View>
        {item.id === 2 && item?.eating_status && (
          <View style={styles.wrapperTypeTime}>
            <TextNormal style={styles.timeText}>Trạng thái:</TextNormal>
            <TextNormal style={styles.typeTimeText}>
              {item?.eating_status === 1
                ? 'Nhịn ăn'
                : item?.eating_status === 2
                ? 'Sau ăn'
                : 'Truớc ăn'}
            </TextNormal>
          </View>
        )}
        <TextSmallTwelve style={styles.timeText}>
          {new Date(created_at).toLocaleString('en-GB')}
        </TextSmallTwelve>
      </View>
      <View style={styles.wrapperValue}>
        <View style={{flexDirection: 'row'}}>
          <TextMoneyBold style={styles.fontSize24}>{value}</TextMoneyBold>
          {subValue && (
            <View style={styles.wrapperSubvalue}>
              <Icons
                type={'FontAwesome'}
                name={'heartbeat'}
                size={22}
                style={{paddingHorizontal: 3}}
                color={'red'}
              />
              <TextMoneyBold style={styles.fontSize24}>
                {subValue}
              </TextMoneyBold>
            </View>
          )}
          {unit && <TextNormal style={styles.unitText}>{unit}</TextNormal>}
        </View>
      </View>
    </View>
  );
};

export default DiseaseItem;

const styles = StyleSheet.create({
  wrapperCardItem: {
    width: widthDevice - 30,
    alignSelf: 'center',
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 16,
    paddingHorizontal: 15,
    marginBottom: 10,
    paddingVertical: 10,
  },
  wrapperContentCard: {
    paddingVertical: 10,
    borderBottomColor: Colors.gray.gray90,
    borderBottomWidth: 1,
  },
  wrapperNameLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    alignItems: 'center',
  },
  statusText: {
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 5,
    fontSize: 12,
    borderRadius: 8,
    fontWeight: '600',
    backgroundColor: '#07C558',
    textAlign: 'center',
  },
  statusDangerText: {
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: '600',
    backgroundColor: '#FF5449',
    textAlign: 'center',
  },
  wrapperTypeTime: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
  },
  unitText: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'flex-end',
    marginBottom: 3,
    marginLeft: 2,
  },
  timeText: {color: '#898989'},
  fontSize24: {fontSize: 24},
  typeTimeText: {fontWeight: 'bold', paddingHorizontal: 5},
  wrapperValue: {
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  wrapperSubvalue: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
});

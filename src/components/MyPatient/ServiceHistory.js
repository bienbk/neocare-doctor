import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Colors from 'theme/Colors';
import {STATUS_SERVICE} from 'assets/constans';
import styles from './styles';
import {TextNormal} from 'common/Text/TextFont';
import {TextNormalSemiBold} from '../../common/Text/TextFont';
const ServiceHistory = ({currentPackge, listService, confirmService}) => {
  return (
    <View>
      {listService.length > 0 ? (
        listService.map(service => (
          <View key={service.id} style={styles.wrapperContentCard}>
            <TextNormal style={{fontWeight: 'bold'}}>
              {'Mã tư vấn: #' + service.id}
            </TextNormal>
            <TextNormal style={{paddingVertical: 5, color: Colors.gray.gray50}}>
              {'Thời gian gửi: ' +
                new Date(service.created_at)
                  .toLocaleString('en-GB')
                  .replaceAll('/', '-')
                  .substring(0, 17)}
            </TextNormal>
            <TextNormal style={{color: Colors.gray.gray50}}>
              {'Trạng thái: '}
              <TextNormalSemiBold
                style={{
                  color: STATUS_SERVICE[service.status].color,
                  fontWeight: 'bold',
                }}>
                {STATUS_SERVICE[service.status].name}
              </TextNormalSemiBold>
            </TextNormal>
            {service.status === 1 && (
              <TouchableOpacity
                style={styles.wrapperConfirm}
                onPress={() => confirmService(service)}>
                <TextNormal style={styles.linkText1}>Xác nhận ngay</TextNormal>
              </TouchableOpacity>
            )}
          </View>
        ))
      ) : (
        <View />
      )}
    </View>
  );
};

export default ServiceHistory;

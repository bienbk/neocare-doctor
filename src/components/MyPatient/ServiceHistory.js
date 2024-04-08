import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Colors from 'theme/Colors';
import {STATUS_SERVICE} from 'assets/constans';
import styles from './styles';
import {TextNormal} from 'common/Text/TextFont';
const ServiceHistory = ({currentPackge, listService, confirmService}) => {
  return (
    <View style={styles.wrapperServiceHistory}>
      <View style={styles.wrapperContentCard}>
        <View style={styles.contentLine}>
          <TextNormal style={{color: Colors.gray.gray60}}>Tên gói</TextNormal>
          <TextNormal>{currentPackge ? currentPackge?.name : ''}</TextNormal>
        </View>
        <View style={styles.contentLine}>
          <TextNormal style={{color: Colors.gray.gray60}}>
            Hiệu lực từ
          </TextNormal>
          <TextNormal>Ngày yêu cầu được xác nhận</TextNormal>
        </View>
        <View style={styles.contentLine}>
          <TextNormal style={{color: Colors.gray.gray60}}>
            Thời hạn gói
          </TextNormal>
          <TextNormal>{`${parseInt(
            currentPackge?.name.match(/\d+/)[0],
            10,
          )} tháng`}</TextNormal>
        </View>
      </View>
      <View style={[styles.wrapperContentCard, styles.borderTopDashed]}>
        {listService.length > 0 ? (
          listService.map(service => (
            <View key={service.id} style={styles.wrapperServiceItem}>
              <View style={styles.wrapperLine}>
                <TextNormal style={{color: Colors.gray.gray60}}>
                  Thời gian gửi
                </TextNormal>
                <TextNormal>
                  {new Date(service.created_at).toLocaleString('en-GB')}
                </TextNormal>
              </View>
              <View style={styles.wrapperLine}>
                <TextNormal style={{color: Colors.gray.gray60}}>
                  Trạng thái
                </TextNormal>
                <View
                  style={[
                    styles.labelStatus,
                    {backgroundColor: STATUS_SERVICE[service.status].color},
                  ]}>
                  <TextNormal style={styles.statusText}>
                    {STATUS_SERVICE[service.status].name}
                  </TextNormal>
                </View>
              </View>
              {service.status === 7 && (
                <View style={styles.wrapperConfirm}>
                  <TouchableOpacity onPress={() => confirmService(service)}>
                    <TextNormal style={styles.linkText1}>
                      Xác nhận ngay
                    </TextNormal>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))
        ) : (
          <TextNormal>Chưa gửi yêu câu tư vấn đến chuyên gia</TextNormal>
        )}
      </View>
    </View>
  );
};

export default ServiceHistory;

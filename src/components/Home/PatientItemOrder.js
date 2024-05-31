import React from 'react';
import styles from './styles';
import Images from 'common/Images/Images';
import {TouchableOpacity, View} from 'react-native';
import {TextNormal, TextSemiBold} from 'common/Text/TextFont';
import {formatMoney} from 'assets/constans';
import {TextSmallTwelve} from '../../common/Text/TextFont';

const PatientItemOrder = ({selectItem, avatar, currentPatient, timeSince}) => {
  return (
    <TouchableOpacity onPress={selectItem} style={[styles.wrapperDoctorItem]}>
      <View style={[styles.wrapperProfileDoctor]}>
        <Images
          resizeMode="contain"
          style={styles.imageDoctor}
          source={avatar}
        />
        <View style={styles.wrapperProfileContent}>
          <TextSemiBold style={styles.textPatientName}>
            {currentPatient?.last_name + ' ' + currentPatient?.first_name}
          </TextSemiBold>
          {currentPatient && currentPatient?.package_items && (
            <View>
              <TextNormal style={styles.requestingText}>
                {currentPatient?.package_items.product_name}
              </TextNormal>
              <TextNormal style={styles.priceText}>
                {formatMoney(currentPatient?.package_item?.price) + ' vnd'}
              </TextNormal>
            </View>
          )}
        </View>
        <View>
          <TextSmallTwelve style={[styles.subtitleText, {marginTop: 3}]}>
            {timeSince}
          </TextSmallTwelve>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PatientItemOrder;

import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {
  formatMoney,
  header_package,
  heightDevice,
  path_package,
} from '../../assets/constans';
import Icons from '../../common/Icons/Icons';
import {TextNormal, TextSemiBold} from '../../common/Text/TextFont';
import {NAVIGATION_ACCOUNT} from '../../navigation/routes';
import Header from '../../common/Header/Header';
import Images from '../../common/Images/Images';
import Svg from '../../common/Svg/Svg';
import Colors from '../../theme/Colors';
const MyPackage = ({navigation}) => {
  const packageItem = {
    name: 'Gói chăm sóc đặc biệt 180 Ngày',
    price: 2000000,
  };
  const onBack = () => {
    navigation && navigation.navigate(NAVIGATION_ACCOUNT);
  };
  return (
    <SafeAreaView style={styles.containerView}>
      {/*  */}
      <Header title={'Danh sách gói'} onBack={onBack} />
      <ScrollView style={{paddingBottom: 5}}>
        {[...Array(3).keys()].map(i => (
          <View style={styles.wrapperActivePackage}>
            <ImageBackground
              source={header_package}
              imageStyle={styles.imageHeader}
              style={styles.imageBackground}
              resizeMode={'cover'}>
              <Images source={path_package} style={styles.pathIcon} />
              <View style={styles.wrapperHeaderPackage}>
                <View style={{alignItems: 'center'}}>
                  <TextNormal style={styles.packageName}>
                    {`${packageItem.name}`}
                  </TextNormal>
                </View>
                <Svg name={'decorator_package'} size={130} />
              </View>
            </ImageBackground>
            {[...Array(3).keys()].map(_ => (
              <View style={styles.descriptionLine}>
                <Icons
                  type={'Entypo'}
                  name={'check'}
                  size={20}
                  color={'black'}
                />
                <TextNormal style={styles.descriptionText}>
                  {'Kiểm tra sức khoẻ dựa theo chỉ số hằng tuần'}
                </TextNormal>
              </View>
            ))}
            <View style={styles.wrapperFooterCard}>
              <TextSemiBold style={styles.priceText}>
                {formatMoney(packageItem.price) + 'đ'}
              </TextSemiBold>
              <TextNormal>{'Đã bán 900'}</TextNormal>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPackage;

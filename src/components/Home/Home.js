import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {
  MIDDLE_DOT,
  doctor_avatar,
  heightDevice,
  home_img,
  user_example,
  widthDevice,
} from '../../assets/constans';
import {
  TextMoneyBold,
  TextNormal,
  TextSemiBold,
  TextSmallMedium,
} from '../../common/Text/TextFont';
import Images from '../../common/Images/Images';
import Icons from '../../common/Icons/Icons';
import Colors from '../../theme/Colors';
import DiseaseCard from './DiseaseCard';
import CustomeHeader from './CustomeHeader';

const fakeData = [
  {
    id: 1,
    name: 'Khẩn cấp',
    status: '20 người',
    created_at: '27/02/2024, 10:02',
    value: '120/80',
    subVal: '80',
    label: 'Thêm chỉ số đo',
  },
  {
    id: 4,
    name: 'Yêu cầu mua gói',
    status: '16 Yêu cầu',
    created_at: '27/02/2024, 10:02',
    value: '6.2',
    unit: '%',
    label: 'Thêm kết quả',
  },
  {
    id: 2,
    name: 'Yêu cầu tư vấn',
    status: '25 Yêu cầu',
    created_at: '27/02/2024, 10:02',
    value: '120',
    unit: 'mg/dL',
    subVal: '',
    label: 'Thêm chỉ số đo',
  },
];

const Home = ({navigation}) => {
  const getParameterData = () => {
    const query = {
      size: 100,
      page: 1,
      from_at: '2024-02-12T00:00:00Z',
      to_at: '2024-03-14T00:00:00Z',
    };
  };
  const renderCardItem = ({item, index}) => (
    <DiseaseCard
      name={item?.name}
      status={item?.status}
      created_at={item.created_at}
      value={item.value}
      unit={item.unit}
      label={item.label}
      subValue={item.subVal}
      index={index}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <CustomeHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <CustomeHeader /> */}

        <View style={styles.wrapperListCard}>
          <FlatList
            data={fakeData}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={i => i.name}
            renderItem={renderCardItem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

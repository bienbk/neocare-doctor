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
  heightDevice,
  home_img,
  widthDevice,
} from '../../assets/constans';
import {
  TextMoneyBold,
  TextNormal,
  TextSemiBold,
} from '../../common/Text/TextFont';
import Images from '../../common/Images/Images';
import Icons from '../../common/Icons/Icons';
import Colors from '../../theme/Colors';
import DiseaseCard from './DiseaseCard';

const Home = ({navigation}) => {
  const renderCardItem = ({item, index}) => (
    <DiseaseCard item={item} index={index} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            height: heightDevice * 0.4,
            backgroundColor: '#2544BD',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Images
            source={home_img}
            style={{
              width: widthDevice * (180 / 390),
              height: heightDevice * (190 / 800),
            }}
          />
          <View
            style={{
              paddingRight: 5,
              flex: 1,
              // backgroundColor: 'red',
              height: '80%',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderRadius: 30,
                padding: 8,
                alignSelf: 'flex-end',
                marginBottom: 20,
              }}>
              <Icons type={'Feather'} name={'bell'} size={28} color={'black'} />
            </TouchableOpacity>
            <TextSemiBold style={{textAlign: 'right', color: 'white'}}>
              Xin chào,
            </TextSemiBold>
            <TextMoneyBold
              style={{
                textAlign: 'right',
                fontSize: 23,
                color: 'white',
                lineHeight: 33,
              }}>
              {'Sức khoẻ bạn\n hôm nay thế nào?'}
            </TextMoneyBold>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'transparent',
            marginTop: -55,
          }}>
          <FlatList
            data={[1, 2, 3, 4]}
            showsVerticalScrollIndicator={false}
            renderItem={renderCardItem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

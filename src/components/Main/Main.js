import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Screens from 'components';
import {NAVIGATION_HOME} from 'navigation/routes';
import {StyleSheet, View} from 'react-native';
import Colors from 'theme/Colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Svg from 'common/Svg/Svg';
import {TextSmallEleven} from 'common/Text/TextFont';
import strings from 'localization/Localization';
import {
  NAVIGATION_ACCOUNT,
  NAVIGATION_DOCTOR_DETAIL,
  NAVIGATION_MY_PATIENT,
} from 'navigation/routes';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackAccount = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName={NAVIGATION_DOCTOR_DETAIL}
    />
  );
};

// icon_giohang1
const Main = () => {
  const insets = useSafeAreaInsets();
  const screenOption = ({route}) => ({
    tabBarHideOnKeyboard: true,
    tabBarIcon: e => renderItemTab(e, route),
    tabBarActiveTintColor: Colors.buttonBackground,
    tabBarInactiveTintColor: Colors.textGrayColor,
    headerShown: false,
    tabBarStyle: {height: 75 + insets.bottom / 2},
  });
  // const currentUserLanguage = useSelector(state => getCurrentLanguage(state));
  const renderItemTab = ({focused}, route) => {
    const icons = {
      [NAVIGATION_HOME]: 'icon_heart_main',
      [NAVIGATION_MY_PATIENT]: 'icon_mydoctor_main',
      [NAVIGATION_ACCOUNT]: 'icon_account_main',
    };
    const title = router => {
      switch (router) {
        case NAVIGATION_HOME:
          return 'Trang chủ';
        case NAVIGATION_MY_PATIENT:
          return 'Khách hàng';
        // case 'NAVIGATION_PRESCRIPTION':
        //   return 'Chỉ định';
        case NAVIGATION_ACCOUNT:
          return strings.common.user;
        default:
      }
    };
    return (
      <View style={styles.inactiveTab}>
        <Svg
          name={icons[route.name]}
          size={25}
          color={focused ? Colors.buttonBackground : 'black'}
        />
        <TextSmallEleven
          style={{
            color: focused ? Colors.blue.blue20 : Colors.textGrayColor,
            fontWeight: focused ? 'bold' : '600',
          }}>
          {title(route.name)}
        </TextSmallEleven>
      </View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName={NAVIGATION_MY_PATIENT}
      screenOptions={screenOption}>
      <Tab.Screen
        name={NAVIGATION_HOME}
        component={Screens.Home}
        options={{
          title: () => null,
        }}
      />
      <Tab.Screen
        name={NAVIGATION_MY_PATIENT}
        component={Screens.MyPatient}
        options={{title: () => null}}
      />
      <Tab.Screen
        name={NAVIGATION_ACCOUNT}
        component={Screens.Account}
        options={{title: () => null}}
      />
    </Tab.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({
  icon: {
    height: 27,
    width: 27,
  },
  styleContainerIcon: {
    marginTop: 5,
  },
  inactiveTab: {
    alignItems: 'center',
    padding: 10,
  },
  activeTab: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    elevation: 0,
  },
});

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NAVIGATION_LOGIN,
  NAVIGATION_MAIN,
  NAVIGATION_PACKAGE_DETAILS,
  NAVIGATION_MY_PATIENT,
  NAVIGATION_SPLASH,
  NAVIGATION_VERIFY_CODE,
  NAVIGATION_SALE,
} from './routes';
import * as Screens from 'components';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName={NAVIGATION_SPLASH}>
      <Stack.Screen name={NAVIGATION_MAIN} component={Screens.Main} />
      <Stack.Screen name={NAVIGATION_SPLASH} component={Screens.Splash} />
      <Stack.Screen name={NAVIGATION_LOGIN} component={Screens.Login} />
      <Stack.Screen
        name={NAVIGATION_VERIFY_CODE}
        component={Screens.VerifyCode}
      />
      <Stack.Screen
        name={NAVIGATION_MY_PATIENT}
        component={Screens.MyPatient}
      />
      <Stack.Screen
        name={NAVIGATION_PACKAGE_DETAILS}
        component={Screens.PackageDetails}
      />
      <Stack.Screen name={NAVIGATION_SALE} component={Screens.Sale} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

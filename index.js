/**
 * @format
 */

import {AppRegistry} from 'react-native';
import SuperTokens from 'supertokens-react-native';
import App from './src/app';
// import {PATH_DOCTOR_AUTH} from './src/assets/config';
import {name as appName} from './app.json';
const PATH_DOCTOR_AUTH = 'https://dev-api.neocare.vn/';

SuperTokens.init({
  apiDomain: PATH_DOCTOR_AUTH,
  apiBasePath: '/doctors/auth',
});

AppRegistry.registerComponent(appName, () => App);

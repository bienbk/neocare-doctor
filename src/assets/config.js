import Config from 'react-native-config';

const PATH_DOCTOR_AUTH = Config.PATH_DOCTOR_AUTH;
const PATH_NEOCARE_DOCTOR = Config.PATH_NEOCARE_DOCTOR;
const CODE_PUSH_KEY = {
  ios: Config.IOS_CODEPUSH_KEY,
  android: Config.ANDROID_CODEPUSH_KEY,
};

export {PATH_DOCTOR_AUTH, PATH_NEOCARE_DOCTOR, CODE_PUSH_KEY};

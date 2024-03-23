import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {NAVIGATION_LOGIN} from '../navigation/routes';

export const heightDevice = Dimensions.get('window').height;
export const widthDevice = Dimensions.get('window').width;
export const versionSystem = DeviceInfo.getSystemVersion();
export const versionNameApp = DeviceInfo.getVersion();
export const deviceId = DeviceInfo.getUniqueId();
export const isAndroid = Platform.OS === 'ios' ? false : true;
export const KEY_ONE_SIGNAL = '3c25ea78-0436-412a-b4d8-a3309a6bc01d';
export const KEY_GOONG_API = 'VphPkfidhRekSJM2Ff9TPIZSFtwDtgIWoXJ0wHUN';
// export const GOOGLE_MAP_KEY = 'AIzaSyAAO8W-KytYgmE4BzIXP_dLGZ7ABdO2z54';
export const GOOGLE_MAP_KEY = 'AIzaSyDy_5NNS-DwcZkcIYMar-wcspaL9fWJbQ0';

export const doctor_avatar = require('assets/images/doctor.png');
export const doctor_detail = require('assets/images/doctor_detail.png');
export const empty_logo = require('assets/images/empty_logo.png');
export const card_blue = require('assets/images/card_blue.jpg');
export const card_pink = require('assets/images/card_pink.jpg');
export const avatar = require('assets/images/avatar.png');
export const home_img = require('assets/images/home.png');
export const user_example = require('assets/images/user_example.png');
export const qr_code = require('assets/images/qr_code.png');
export const home_image = require('assets/images/home.png');
export const decorator_home = require('assets/images/decorator_home.png');
export const MIDDLE_DOT = '\u25CF';
export function formatMoney(x) {
  return x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const LIST_OPTION = [
  {
    title: 'Chung',
    id: 1,
    items: [
      {
        name: 'Hồ sơ',
        icon: 'icon_user',
        link: '',
      },
      {
        name: 'Tài khoản & dữ liệu',
        icon: 'icon_profile',
        link: '',
      },
    ],
  },
  {
    title: 'Cài đặt & Hỗ trợ',
    id: 3,
    items: [
      {
        name: 'Hotline 0901234567',
        icon: 'icon_hotline',
        link: '',
      },
      {
        name: 'Chính sách và quyền riêng tư',
        icon: 'icon_policy',
        link: '',
      },
      {
        name: 'Đăng xuất',
        icon: 'icon_logout_red',
        link: NAVIGATION_LOGIN,
      },
    ],
  },
];
export const today = new Intl.DateTimeFormat('vi', {
  month: 'long',
  day: 'numeric',
  hour12: false,
  weekday: 'long',
  year: 'numeric',
}).format(new Date());

import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {NAVIGATION_LOGIN, NAVIGATION_MY_PACKAGE, NAVIGATION_SALE} from '../navigation/routes';
import Colors from '../theme/Colors';
export const STATUS = {
  0: 'Bình thuờng',
  1: 'Thấp',
  2: 'Lý tuởng',
  3: 'Hơi Cao',
  4: 'Cao',
  5: 'Rất cao',
  6: 'Cực kỳ cao',
};
export const STATUS_COLORS = {
  0: Colors.normal,
  1: Colors.lowest,
  2: Colors.good,
  3: Colors.litle_high,
  4: Colors.high,
  5: Colors.very_high,
  6: Colors.highest,
};

export const heightDevice = Dimensions.get('window').height;
export const widthDevice = Dimensions.get('window').width;
export const versionSystem = DeviceInfo.getSystemVersion();
export const versionNameApp = DeviceInfo.getVersion();
export const deviceId = DeviceInfo.getUniqueId();
export const isAndroid = Platform.OS === 'ios' ? false : true;
// export const KEY_ONE_SIGNAL =
//   process.env.NODE_ENV === 'development'
//     ? '3c25ea78-0436-412a-b4d8-a3309a6bc01d'
//     : '798c7e0a-2218-42ab-9254-c2927c02a0c1';
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
export const patient_card = require('assets/images/patient_card.png');
export const MIDDLE_DOT = '\u25CF';
export const header_package = require('assets/images/header_package.png');
export const path_package = require('assets/images/path_package.png');
export function formatMoney(x) {
  return x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export const HOME_DATA = [
  {
    id: 1,
    name: 'Huyết áp',
    status: '',
    code: 'Blood Pressure',
    created_at: '27/02/2024, 10:02',
    value: '--/--',
    subVal: '--',
    label: 'Thêm chỉ số đo',
  },
  {
    id: 4,
    name: 'HbA1c',
    status: '',
    created_at: '27/02/2024, 10:02',
    value: '--',
    code: 'HbA1cLabTest',
    unit: '',
    label: 'Thêm kết quả',
  },
  {
    id: 2,
    name: 'Đường huyết',
    code: 'Blood Glucose',
    status: '',
    created_at: '27/02/2024, 10:02',
    value: '---',
    unit: 'mg/dL',
    subVal: '',
    label: 'Thêm chỉ số đo',
  },
  {
    id: 3,
    name: 'Mỡ máu',
    code: 'Cholesterol',
    status: '',
    created_at: '27/02/2024, 10:02',
    value: '---',
    unit: '',
    label: 'Thêm kết quả',
  },
  {
    id: 5,
    name: 'Acid Uric',
    code: 'Acid Uric',
    status: '',
    created_at: '27/02/2024, 10:02',
    value: '---',
    unit: '',
    label: 'Thêm kết quả',
  },
  {
    id: 6,
    name: 'Cân nặng',
    status: '',
    code: 'Weight',
    created_at: '27/02/2024, 10:02',
    value: '78',
    unit: 'kg',
    label: 'Thêm chỉ số đo',
  },
];

export const LIST_OPTION = [
  // {
  //   title: 'Chung',
  //   id: 1,
  //   items: [
  //     {
  //       name: 'Hồ sơ',
  //       icon: 'icon_user',
  //       link: '',
  //     },
  //     {
  //       name: 'Tài khoản & dữ liệu',
  //       icon: 'icon_profile',
  //       link: '',
  //     },
  //   ],
  // },
  {
    title: 'Cài đặt & Hỗ trợ',
    id: 3,
    items: [
      // {
      //   name: 'Danh sách gói',
      //   icon: 'icon_user',
      //   link: NAVIGATION_MY_PACKAGE,
      // },
      // {
      //   name: 'Cộng tác viên',
      //   icon: 'icon_profile',
      //   link: NAVIGATION_SALE,
      // },
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

export const STATUS_SERVICE = {
  1: {name: ' Chờ xác nhận', color: Colors.primary},
  2: {name: 'Chập nhận', color: Colors.greenColor},
  3: {name: 'Từ chối', color: Colors.redColor},
  4: {name: 'Hoàn thành', color: Colors.greenColor},
};

import {PATH_NEOCARE_DOCTOR, PATH_DOCTOR_AUTH, MOCK_API} from 'assets/config';

// const PATH_DOCTOR_AUTH = 'https://dev-api.neocare.vn/';
// const PATH_NEOCARE_DOCTOR = 'https://dev-api.neocare.vn/doctors/v1/';
export const UrlApi = {
  // ---------------------- USER -AUTH  ---------------------------
  baseApi: PATH_DOCTOR_AUTH,
  getUserInfo: PATH_DOCTOR_AUTH + 'userinfo',
  deleteAccount: PATH_NEOCARE_DOCTOR + 'users',
  // getVersion: BASE_PATH_CAFE + 'version',
  sendPhone: PATH_DOCTOR_AUTH + 'doctors/auth/signinup/code',
  resendPhone: PATH_DOCTOR_AUTH + 'doctors/auth/signinup/code/resend',
  confirmPhone: PATH_DOCTOR_AUTH + 'doctors/auth/signinup/code/consume',
  refreshToken: PATH_DOCTOR_AUTH + 'doctors/auth/session/refresh',
  loginPhone: PATH_DOCTOR_AUTH + 'customerloginphone',
  confirmOtpDelete: PATH_DOCTOR_AUTH + 'confirmPhone',
  updateUserInfo: PATH_DOCTOR_AUTH + 'updateCustomerInfo',
  updateLanguageUrl: PATH_DOCTOR_AUTH + 'updatelanguages',
  apiGetUserInfo: PATH_DOCTOR_AUTH + 'doctors/v1/users/info',
  // ------------------ PATIENT ------------------------
  apiListPatient: PATH_NEOCARE_DOCTOR + 'orders/status/1',
  apiListMyPatient: PATH_NEOCARE_DOCTOR + 'list-patient',
  apiListEmergency: PATH_NEOCARE_DOCTOR + 'category/list',
  apiGetPatientDetail: PATH_NEOCARE_DOCTOR + 'parameters/patient/list',
  apiListService: PATH_NEOCARE_DOCTOR + 'suh/patient/list',
  apiConfirmService: PATH_NEOCARE_DOCTOR + 'suh',

  // ------------------- ORDER -----------------------
  apiConfirmOrder: PATH_NEOCARE_DOCTOR + 'orders/healthcare',

  // -------------------- MOCK API -------------------
  mockSetupOrderInfor: MOCK_API + 'package',
  mockGetTags: MOCK_API + 'package',
};

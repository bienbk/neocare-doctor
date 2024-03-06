import {PATH_NEOCARE_DOCTOR, PATH_DOCTOR_AUTH} from 'assets/config';

// const PATH_DOCTOR_AUTH = 'https://dev-api.neocare.vn/';
// const PATH_NEOCARE_DOCTOR = 'https://dev-api.neocare.vn/doctors/v1/';
export const UrlApi = {
  // ---------------------- USER -AUTH  ---------------------------
  baseApi: PATH_DOCTOR_AUTH,
  getUserInfo: PATH_DOCTOR_AUTH + 'userinfo',
  // getVersion: BASE_PATH_CAFE + 'version',
  sendPhone: PATH_DOCTOR_AUTH + 'doctors/auth/signinup/code',
  resendPhone: PATH_DOCTOR_AUTH + 'doctors/auth/signinup/code/resend',
  confirmPhone: PATH_DOCTOR_AUTH + 'doctors/auth/signinup/code/consume',
  refreshToken: PATH_DOCTOR_AUTH + 'doctors/auth/session/refresh',
  loginPhone: PATH_DOCTOR_AUTH + 'customerloginphone',
  deleteAccount: PATH_DOCTOR_AUTH + 'deleteAccount',
  confirmOtpDelete: PATH_DOCTOR_AUTH + 'confirmPhone',
  updateUserInfo: PATH_DOCTOR_AUTH + 'updateCustomerInfo',
  updateLanguageUrl: PATH_DOCTOR_AUTH + 'updatelanguages',
  // ------------------ PATIENT ------------------------
  apiListPatient: PATH_NEOCARE_DOCTOR + 'list-patient',

  // ------------------- ORDER -----------------------
  apiConfirmOrder: PATH_NEOCARE_DOCTOR + 'orders/healthcare',
};

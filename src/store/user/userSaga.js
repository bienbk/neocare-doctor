import {NEOCARE} from 'store/actionsTypes';
import {takeLatest, call, put, select} from 'redux-saga/effects';
import UserController from './userController';
import {asyncStorage} from 'store/index';
import {isTokenConfirm} from '../auth/authSelector';

function* getDeleteAccount() {
  try {
    const result = yield call(UserController.deleteAccount);
    console.log('DELETE SAAAGAAAAAA:', result);
    if (result?.success) {
      yield put({
        type: NEOCARE.GET_DELETE_ACCOUNT_SUCCESS,
      });
    } else {
      yield put({
        type: NEOCARE.GET_DELETE_ACCOUNT_ERROR,
        payload: {
          errorMsg: result?.data?.error,
        },
      });
    }
  } catch (error) {
    yield put({
      type: NEOCARE.GET_DELETE_ACCOUNT_ERROR,
      payload: {
        errorMsg: 'Xảy ra lỗi trong quá trình xóa tài khoản',
      },
    });
  }
}
function* confirmDeleteAccountSaga({payload}) {
  const tokenConfirm = yield select(state => isTokenConfirm(state));
  console.log('tokenConfirm', tokenConfirm);
  const query = {
    otp_token: tokenConfirm,
    otp: payload.otp,
  };
  try {
    console.log('QUERRRRYYYYYYYY:', query);
    const result = yield call(UserController.confirmDeleteAccount, query);
    if (result.success === true) {
      yield put({
        type: NEOCARE.CONFIRM_DELETE_OTP_SUCCESS,
      });
    } else {
      yield put({
        type: NEOCARE.CONFIRM_DELETE_OTP_ERROR,
        payload: result.errorMessage,
      });
    }
  } catch (error) {
    yield put({
      type: NEOCARE.CONFIRM_DELETE_OTP_ERROR,
      payload:
        'Xảy ra lỗi trong quá trình xác thực. Vui lòng liên hệ nhân viên phục vụ!',
    });
  }
}
function* getUserInfoSaga() {
  try {
    const result = yield call(UserController.getUserInfo);
    console.log('userInfoSaga:', result);
    if (result.success === true) {
      asyncStorage.setUser(result.data);
      yield put({
        type: NEOCARE.GET_USER_INFO_SUCCESS,
      });
    } else {
      yield put({
        type: NEOCARE.GET_USER_INFO_ERROR,
        payload: result.message,
      });
    }
  } catch (error) {
    yield put({
      type: NEOCARE.GET_USER_INFO_ERROR,
      payload: error.message,
    });
  }
}
function* updateUserSaga({payload}) {
  try {
    const result = yield call(UserController.updateUserInfo, payload);
    if (result.success === true) {
      yield put({
        type: NEOCARE.UPDATE_USER_INFO_SUCCESS,
        payload: result.user,
      });
    } else {
      yield put({
        type: NEOCARE.UPDATE_USER_INFO_ERROR,
        payload: result.message,
      });
    }
  } catch (error) {
    yield put({
      type: NEOCARE.UPDATE_USER_INFO_ERROR,
      payload: error.message,
    });
  }
}

function* setLanguageSaga({payload}) {
  if (!payload) {
    return;
  }
  console.log('PAYLOAD CHANGE language:::', payload);
  try {
    const result = yield call(UserController.updateLanguage, payload);
    if (result.success) {
      yield put({
        type: NEOCARE.SET_LANGUAGE_SUCCESS,
        payload: payload?.language,
      });
    } else {
      yield put({
        type: NEOCARE.SET_LANGUAGE_ERROR,
        payload: result.message,
      });
    }
  } catch (error) {
    yield put({
      type: NEOCARE.SET_LANGUAGE_ERROR,
      payload: error.message,
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(NEOCARE.GET_DELETE_ACCOUNT_REQUEST, getDeleteAccount);
  yield takeLatest(
    NEOCARE.CONFIRM_DELETE_OTP_REQUEST,
    confirmDeleteAccountSaga,
  );
  yield takeLatest(NEOCARE.GET_USER_INFO_REQUEST, getUserInfoSaga);
  yield takeLatest(NEOCARE.SET_LANGUAGE_REQUEST, setLanguageSaga);
  yield takeLatest(NEOCARE.UPDATE_USER_INFO_REQUEST, updateUserSaga);
}

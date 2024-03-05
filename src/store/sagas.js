import {fork} from 'redux-saga/effects';
import authSaga from './auth/authSaga';

import userSaga from './user/userSaga';
import patientSaga from './patients/patientSaga';
import orderSaga from './orders/orderSaga';
const saga = function* () {
  yield fork(authSaga);
  yield fork(userSaga);
  yield fork(orderSaga);
  yield fork(patientSaga);
};
export default saga;

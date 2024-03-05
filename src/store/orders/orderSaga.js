import {NEOCARE} from 'store/actionsTypes';
import {takeLatest, call, put, select} from 'redux-saga/effects';
import OrderController from './orderController';

function* confirmOrderSaga({payload}) {
  try {
    const result = yield call(OrderController.confirmOrder, payload);
    if (result.success) {
      yield put({
        type: NEOCARE.CONFIRM_ORDER_SUCCESS,
      });
    } else {
      yield put({
        type: NEOCARE.CONFIRM_ORDER_ERROR,
      });
    }
  } catch (error) {
    yield put({
      type: NEOCARE.CONFIRM_ORDER_ERROR,
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(NEOCARE.CONFIRM_ORDER_REQUEST, confirmOrderSaga);
}

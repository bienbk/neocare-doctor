import {NEOCARE} from 'store/actionsTypes';
import {takeLatest, call, put, select} from 'redux-saga/effects';
import PatientController from './patientController';

function* listPatientSaga({payload}) {
  try {
    const result = yield call(PatientController.listPatient, payload);
    if (result.success) {
      yield put({
        type: NEOCARE.LIST_PATIENT_SUCCESS,
        payload: result?.data || [],
      });
    } else {
      yield put({
        type: NEOCARE.LIST_PATIENT_ERROR,
      });
    }
  } catch (error) {
    yield put({
      type: NEOCARE.LIST_PATIENT_ERROR,
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(NEOCARE.LIST_PATIENT_REQUEST, listPatientSaga);
}

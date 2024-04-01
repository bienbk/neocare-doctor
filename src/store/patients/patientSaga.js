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

function* listEmergencySaga({payload}) {
  try {
    const result = yield call(PatientController.listEmergency, payload);
    if (result && result?.success) {
      yield put({
        type: NEOCARE.LIST_EMERGENCY_SUCCESS,
        payload: result?.data || [],
      });
    } else {
      yield put({
        type: NEOCARE.LIST_EMERGENCY_ERROR,
      });
    }
  } catch (error) {
    yield put({
      type: NEOCARE.LIST_EMERGENCY_ERROR,
    });
  }
}
function* listRequestedSaga() {
  try {
    const result = yield call(PatientController.listRequested);
    if (result && result?.success) {
      yield put({
        type: NEOCARE.LIST_REQUESTED_SUCCESS,
        payload: result?.data || [],
      });
    } else {
      yield put({
        type: NEOCARE.LIST_REQUESTED_ERROR,
      });
    }
  } catch (error) {
    yield put({
      type: NEOCARE.LIST_REQUESTED_ERROR,
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(NEOCARE.LIST_PATIENT_REQUEST, listPatientSaga);
  yield takeLatest(NEOCARE.LIST_EMERGENCY_REQUEST, listEmergencySaga);
  yield takeLatest(NEOCARE.LIST_REQUESTED_REQUEST, listRequestedSaga);
}

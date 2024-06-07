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
function* listRequestedSaga({payload}) {
  try {
    const result = yield call(PatientController.listRequested, payload);
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
function* getPatientDetails({payload}) {
  try {
    const result = yield call(PatientController.getPatientDetail, payload);
    if (result && result.success) {
      yield put({
        type: NEOCARE.GET_PATIENT_DETAIL_SUCCESS,
        payload: result.data,
      });
    } else {
      yield put({
        type: NEOCARE.GET_PATIENT_DETAIL_ERROR,
      });
    }
  } catch (error) {
    yield put({
      type: NEOCARE.GET_PATIENT_DETAIL_ERROR,
    });
  }
}
function* confirmPatientService({payload}) {
  try {
    const result = yield call(
      PatientController.confirmPatientServices,
      payload,
    );
    if (result && result.success) {
      yield put({
        type: NEOCARE.CONFIRM_PATIENT_SERVICE_SUCCESS,
      });
    } else {
      yield put({
        type: NEOCARE.CONFIRM_PATIENT_SERVICE_ERROR,
      });
    }
  } catch (error) {
    yield put({
      type: NEOCARE.CONFIRM_PATIENT_SERVICE_ERROR,
    });
  }
}
function* listServiceSaga({payload}) {
  try {
    const result = yield call(PatientController.listService, payload);
    if (result && result.success) {
      yield put({
        type: NEOCARE.LIST_SERVICE_SUCCESS,
        payload: result.data || [],
      });
    } else {
      yield put({
        type: NEOCARE.LIST_SERVICE_ERROR,
      });
    }
  } catch (error) {
    yield put({
      type: NEOCARE.LIST_SERVICE_ERROR,
    });
  }
}
function* getTagSaga() {
  try {
    const result = yield call(PatientController.getTagController);
    if (result && result?.success) {
      yield put({
        type: NEOCARE.GET_TAG_SUCCESS,
        payload: result.data,
      });
    } else {
      yield put({
        type: NEOCARE.GET_TAG_ERROR,
      });
    }
  } catch (error) {
    yield put({
      type: NEOCARE.GET_TAG_ERROR,
    });
  }
}
function* listAllPatientSaga({payload}) {
  try {
    const result = yield call(PatientController.listAllPatient, payload);
    if (result && result?.success) {
      yield put({
        type: NEOCARE.LIST_ALL_PATIENT_SUCCESS,
        payload: result?.data || [],
      });
    } else {
      yield put({
        type: NEOCARE.LIST_ALL_PATIENT_ERROR,
      });
    }
  } catch (error) {
    yield put({
      type: NEOCARE.LIST_ALL_PATIENT_ERROR,
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(NEOCARE.GET_TAG_REQUEST, getTagSaga);
  yield takeLatest(NEOCARE.LIST_ALL_PATIENT_REQUEST, listAllPatientSaga);
  yield takeLatest(NEOCARE.LIST_PATIENT_REQUEST, listPatientSaga);
  yield takeLatest(NEOCARE.LIST_EMERGENCY_REQUEST, listEmergencySaga);
  yield takeLatest(NEOCARE.LIST_REQUESTED_REQUEST, listRequestedSaga);
  yield takeLatest(NEOCARE.GET_PATIENT_DETAIL_REQUEST, getPatientDetails);
  yield takeLatest(
    NEOCARE.CONFIRM_PATIENT_SERVICE_REQUEST,
    confirmPatientService,
  );
  yield takeLatest(NEOCARE.LIST_SERVICE_REQUEST, listServiceSaga);
}

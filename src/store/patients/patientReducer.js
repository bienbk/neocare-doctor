import Status from 'common/Status/Status';
import {NEOCARE} from 'store/actionsTypes';
// import { STATUS } from '../../assets/constans';

const initializeState = {
  listPatient: [],
  statusListPatient: Status.DEFAULT,

  listEmergency: [],
  statusListEmergency: Status.DEFAULT,

  listRequested: [],
  statusListRequested: Status.DEFAULT,

  // PATIENT DETAIL
  currentPatient: {},
  statusGetPatientDetail: Status.DEFAULT,

  // CONFIRM PATIENT SERVICE
  statusConfirmService: Status.DEFAULT,
};

export default (state = initializeState, {type, payload}) => {
  switch (type) {
    // ----------------- CONFIRM SERVICE -----------------------
    case NEOCARE.CONFIRM_PATIENT_SERVICE_REQUEST:
      return {
        ...state,
        statusConfirmService: Status.LOADING,
      };
    case NEOCARE.CONFIRM_PATIENT_SERVICE_SUCCESS:
      return {
        ...state,
        statusConfirmService: Status.SUCCESS,
      };
    case NEOCARE.CONFIRM_PATIENT_SERVICE_ERROR:
      return {
        ...state,
        statusConfirmService: Status.ERROR,
      };
    case NEOCARE.CONFIRM_PATIENT_SERVICE_RESET:
      return {
        ...state,
        statusConfirmService: Status.DEFAULT,
      };
    // ----------------- GET PATIENT DETAIL -----------------------
    case NEOCARE.GET_PATIENT_DETAIL_REQUEST:
      return {
        ...state,
        statusGetPatientDetail: Status.LOADING,
      };
    case NEOCARE.GET_PATIENT_DETAIL_SUCCESS:
      return {
        ...state,
        statusGetPatientDetail: Status.SUCCESS,
        currentPatient: payload,
      };
    case NEOCARE.GET_PATIENT_DETAIL_ERROR:
      return {
        ...state,
        statusGetPatientDetail: Status.ERROR,
      };
    case NEOCARE.GET_PATIENT_DETAIL_RESET:
      return {
        ...state,
        statusGetPatientDetail: Status.DEFAULT,
      };
    // ----------------- LIST EMRGENCY -----------------------
    case NEOCARE.LIST_EMERGENCY_REQUEST:
      return {
        ...state,
        statusListEmergency: Status.LOADING,
      };
    case NEOCARE.LIST_EMERGENCY_SUCCESS:
      return {
        ...state,
        statusListEmergency: Status.SUCCESS,
        listEmergency: payload,
      };
    case NEOCARE.LIST_EMERGENCY_ERROR:
      return {
        ...state,
        statusListEmergency: Status.ERROR,
        listEmergency: [],
      };
    case NEOCARE.LIST_EMERGENCY_RESET:
      return {
        ...state,
        statusListEmergency: Status.DEFAULT,
      };
    // ----------------- LIST REQUESTED PATIENT -----------------------
    case NEOCARE.LIST_REQUESTED_REQUEST:
      return {
        ...state,
        statusListRequested: Status.LOADING,
      };
    case NEOCARE.LIST_REQUESTED_SUCCESS:
      return {
        ...state,
        statusListRequested: Status.SUCCESS,
        listRequested: payload,
      };
    case NEOCARE.LIST_REQUESTED_ERROR:
      return {
        ...state,
        statusListRequested: Status.ERROR,
        listRequested: [],
      };
    case NEOCARE.LIST_REQUESTED_RESET:
      return {
        ...state,
        statusListRequested: Status.DEFAULT,
      };
    // ----------------- LIST PATIENT -----------------------
    case NEOCARE.LIST_PATIENT_REQUEST:
      return {
        ...state,
        statusListPatient: Status.LOADING,
      };
    case NEOCARE.LIST_PATIENT_SUCCESS:
      return {
        ...state,
        statusListPatient: Status.SUCCESS,
        listPatient: payload,
      };
    case NEOCARE.LIST_PATIENT_ERROR:
      return {
        ...state,
        statusListPatient: Status.ERROR,
        listPatient: [],
      };
    case NEOCARE.LIST_PATIENT_RESET:
      return {
        ...state,
        statusListPatient: Status.DEFAULT,
      };
    default:
      return state;
  }
};

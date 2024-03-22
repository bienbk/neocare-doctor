import Status from 'common/Status/Status';
import {NEOCARE} from 'store/actionsTypes';

const initializeState = {
  listPatient: [],
  statusListPatient: Status.DEFAULT,

  listEmergency: [],
  statusListEmergency: Status.DEFAULT,

  listRequested: [],
  statusListRequested: Status.DEFAULT,
};

export default (state = initializeState, {type, payload}) => {
  switch (type) {
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

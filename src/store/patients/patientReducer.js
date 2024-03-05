import Status from 'common/Status/Status';
import {NEOCARE} from 'store/actionsTypes';

const initializeState = {
  listPatient: [],
  statusListPatient: Status.DEFAULT,
};

export default (state = initializeState, {type, payload}) => {
  switch (type) {
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

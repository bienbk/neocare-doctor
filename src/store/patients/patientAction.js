import {NEOCARE} from '../actionsTypes';

export const listPatientAction = () => ({
  type: NEOCARE.LIST_PATIENT_REQUEST,
});
export const resetListPatient = () => ({
  type: NEOCARE.LIST_PATIENT_RESET,
});

export const listEmergencyAction = payload => ({
  type: NEOCARE.LIST_EMERGENCY_REQUEST,
  payload,
});
export const resetListEmergency = () => ({
  type: NEOCARE.LIST_EMERGENCY_RESET,
});

export const listRequestedAction = payload => ({
  type: NEOCARE.LIST_REQUESTED_REQUEST,
  payload,
});
export const resetListRequested = () => ({
  type: NEOCARE.LIST_REQUESTED_RESET,
});

export const getPatientDetailAction = payload => ({
  type: NEOCARE.GET_PATIENT_DETAIL_REQUEST,
  payload,
});
export const resetGetPatientDetail = () => ({
  type: NEOCARE.GET_PATIENT_DETAIL_RESET,
});

export const confirmPatientService = payload => ({
  type: NEOCARE.CONFIRM_PATIENT_SERVICE_REQUEST,
  payload,
});
export const resetConfirmService = () => ({
  type: NEOCARE.CONFIRM_PATIENT_SERVICE_RESET,
});

export const listServiceAction = payload => ({
  type: NEOCARE.LIST_SERVICE_REQUEST,
  payload,
});
export const resetListService = () => ({
  type: NEOCARE.LIST_SERVICE_RESET,
});
export const getTagAction = () => ({
  type: NEOCARE.GET_TAG_REQUEST,
});
export const listAllPatient = payload => ({
  type: NEOCARE.LIST_ALL_PATIENT_REQUEST,
  payload,
});
export const resetListAllPatient = () => ({
  type: NEOCARE.LIST_ALL_PATIENT_RESET,
});

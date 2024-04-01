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

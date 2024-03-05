import {NEOCARE} from '../actionsTypes';

export const listPatientAction = payload => ({
  type: NEOCARE.LIST_PATIENT_REQUEST,
  payload,
});
export const resetListPatient = () => ({
  type: NEOCARE.LIST_PATIENT_RESET,
});

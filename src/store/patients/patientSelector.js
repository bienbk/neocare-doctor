export const listPatientSelector = state => state.patient.listPatient;
export const statusListPatientSelector = state =>
  state.patient.statusListPatient;
export const listEmergencySelector = state => state.patient.listEmergency;
export const statusListEmergency = state => state.patient.statusListEmergency;
export const listRequestedSelector = state => state.patient.listRequested;
export const statusListRequested = state => state.patient.statusListRequested;
export const patientDetailSelector = state => state.patient.currentPatient;
export const statusGetPatientDetail = state =>
  state.patient.statusGetPatientDetail;
export const serviceOfPatientSelector = state =>
  state.patient.listServiceOfPatient;
export const statusListServiceSelector = state =>
  state.patient.statusListService;
export const statusConfirmServiceSelector = state =>
  state.patient.statusConfirmService;
export const statusListTag = state => state.patient.statusListTag;
export const tagSelector = state => state.patient.listTag;

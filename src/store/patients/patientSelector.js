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

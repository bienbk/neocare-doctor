import HttpClient from 'http/HttpClient';
import {UrlApi} from 'http/UrlApi';

class PatientController {
  listPatient = async payload => {
    try {
      const {data} = await HttpClient.get(UrlApi.apiListPatient);
      console.log('DATA FROM LIST PATIENT CONTROLLEr:::', data);
      return {success: true, data: data || []};
    } catch (error) {
      console.log('LIST PATIENT ERROR:::', error);
      return {success: false};
    }
  };

  listEmergency = async payload => {
    try {
      const {data} = await HttpClient.get(UrlApi.apiListEmergency, {
        params: payload,
      });
      if (data?.parameters_of_patients) {
        data.parameters_of_patients.map(item => {
          if (item.items && item.items.length) {
            item.items = Array.from(item.items, i => JSON.parse(i));
          }
        });
      }
      console.log('emergency data::', data?.parameters_of_patients);
      return {success: true, data: data?.parameters_of_patients || []};
    } catch (error) {
      console.log('LIST EMERGENCY ERROR:::', error);
      return {success: false};
    }
  };
  listRequested = async payload => {
    try {
      const {data} = await HttpClient.get(UrlApi.apiListEmergency, {
        params: payload,
      });
      console.log('DATA FROM LIST listRequested CONTROLLEr:::', data);
      return {success: true, data: data?.service_requesting || []};
    } catch (error) {
      console.log('LIST listRequested ERROR:::', error);
      return {success: false};
    }
  };
  getPatientDetail = async params => {
    try {
      const {data} = await HttpClient.get(UrlApi.apiGetPatientDetail, {params});
      // console.log('GET PATIENT SUCCESS:::', data);
      const patient = {
        ...data.parameters_of_patients.patient,
        parameters:
          Array.from(data.parameters_of_patients.items, i => JSON.parse(i)) ||
          [],
      };
      return {success: true, data: patient};
    } catch (error) {
      console.log('GET PATIENT DETAIL ERROR:::', error);
      return {success: false};
    }
  };
  confirmPatientServices = async payload => {
    try {
      const {data} = await HttpClient.put(UrlApi.apiConfirmService, payload);
      console.log('CONFIRM SERVICE SUCCESS:::', data);
      return {success: true};
    } catch (error) {
      console.log('CONFIRM SERVICE ERROR:::', error);
      return {success: false};
    }
  };
}
export default new PatientController();

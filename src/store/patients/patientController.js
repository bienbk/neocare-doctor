import HttpClient from 'http/HttpClient';
import {UrlApi} from 'http/UrlApi';

class PatientController {
  listPatient = async payload => {
    try {
      const {data} = await HttpClient.get(UrlApi.apiListPatient, {
        params: payload,
      });
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
}
export default new PatientController();

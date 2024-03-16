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
}
export default new PatientController();

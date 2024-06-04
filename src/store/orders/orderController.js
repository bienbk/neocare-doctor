import HttpClient from 'http/HttpClient';
import {UrlApi} from 'http/UrlApi';

class OrderController {
  confirmOrder = async payload => {
    console.log('payload controller:::', payload);
    try {
      const {data} = await HttpClient.put(UrlApi.apiConfirmOrder, payload);
      console.log('DATA FROM CONFIRM ORDER CONTROLLEr:::', data);
      return {success: true};
    } catch (error) {
      console.log('LIST PATIENT ERROR:::', error);
      return {success: false};
    }
  };
  setupOrderInfor = async payload => {
    console.log('payload controller setup order infor:::', payload);
    try {
      const {data} = await HttpClient.post(UrlApi.mockSetupOrderInfor, payload);
      if (data) {
        return {success: true};
      }
    } catch (error) {
      console.log('error:::', error);
      return {success: false, message: error};
    }
  };
}
export default new OrderController();

import {combineReducers} from 'redux';
import authReducer from './auth/authReducer';

import userReducer from './user/userReducer';
import patientReducer from './patients/patientReducer';
import orderReducer from './orders/orderReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  patient: patientReducer,
  user: userReducer,
  orders: orderReducer,
});
export default rootReducer;

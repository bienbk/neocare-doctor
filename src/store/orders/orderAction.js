import {NEOCARE} from '../actionsTypes';

export const confirmOrderAction = payload => ({
  type: NEOCARE.CONFIRM_ORDER_REQUEST,
  payload,
});
export const resetConfrimOrder = () => ({
  type: NEOCARE.CONFIRM_ORDER_RESET,
});
export const setupOrderInfo = payload => ({
  type: NEOCARE.SETUP_ORDER_INFOR_REQUEST,
  payload,
});
export const resetOrderInfor = () => ({
  type: NEOCARE.SETUP_ORDER_INFOR_RESET,
});

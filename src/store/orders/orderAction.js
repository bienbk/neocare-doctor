import {NEOCARE} from '../actionsTypes';

export const confirmOrderAction = payload => ({
  type: NEOCARE.CONFIRM_ORDER_REQUEST,
  payload,
});
export const resetConfrimOrder = () => ({
  type: NEOCARE.CONFIRM_ORDER_RESET,
});

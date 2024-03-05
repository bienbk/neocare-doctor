import Status from 'common/Status/Status';
import {NEOCARE} from 'store/actionsTypes';

const initializeState = {
  statusConfirmOrder: Status.DEFAULT,
  messageConfirmOrder: '',
};

export default (state = initializeState, {type, payload}) => {
  switch (type) {
    // ----------------- LIST PATIENT -----------------------
    case NEOCARE.CONFIRM_ORDER_REQUEST:
      return {
        ...state,
        statusConfirmOrder: Status.LOADING,
      };
    case NEOCARE.CONFIRM_ORDER_SUCCESS:
      return {
        ...state,
        statusConfirmOrder: Status.SUCCESS,
      };
    case NEOCARE.CONFIRM_ORDER_ERROR:
      return {
        ...state,
        statusConfirmOrder: Status.ERROR,
        messageConfirmOrder: payload,
      };
    case NEOCARE.CONFIRM_ORDER_RESET:
      return {
        ...state,
        statusConfirmOrder: Status.DEFAULT,
        messageConfirmOrder: '',
      };
    default:
      return state;
  }
};

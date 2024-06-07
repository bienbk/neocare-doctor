import Status from 'common/Status/Status';
import {NEOCARE} from 'store/actionsTypes';

const initializeState = {
  statusConfirmOrder: Status.DEFAULT,
  messageConfirmOrder: '',

  statusSetupInfor: Status.DEFAULT,
  messageSetupInfor: '',
};

export default (state = initializeState, {type, payload}) => {
  switch (type) {
    // ----------------- CONFIRM ORDER  -----------------------
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
    // ----------------- SETUP ORDER INFOR -----------------------
    case NEOCARE.SETUP_ORDER_INFOR_REQUEST:
      return {
        ...state,
        statusSetupInfor: Status.LOADING,
      };
    case NEOCARE.SETUP_ORDER_INFOR_SUCCESS:
      return {
        ...state,
        statusSetupInfor: Status.SUCCESS,
      };
    case NEOCARE.SETUP_ORDER_INFOR_ERROR:
      return {
        ...state,
        statusSetupInfor: Status.ERROR,
        messageSetupInfor: payload,
      };
    case NEOCARE.SETUP_ORDER_INFOR_RESET:
      return {
        ...state,
        statusSetupInfor: Status.DEFAULT,
        messageSetupInfor: '',
      };
    default:
      return state;
  }
};

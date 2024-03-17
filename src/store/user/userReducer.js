import Status from 'common/Status/Status';
import {NEOCARE} from 'store/actionsTypes';

const initializeState = {
  currentUser: {},
  statusSetUser: Status.DEFAULT,

  statusDeleteAccount: Status.DEFAULT,

  statusConfirmDelete: Status.DEFAULT,
  errorDeleteAccount: '',

  statusUpdateUser: Status.DEFAULT,
  updatedUser: {},
  errorUpdateUser: '',
  statusGetUserInfo: Status.DEFAULT,

  statusSetLanguage: Status.DEFAULT,
  currentUserLanguage: '',
};

export default (state = initializeState, {type, payload}) => {
  switch (type) {
    case NEOCARE.SET_LANGUAGE_REQUEST: {
      return {
        ...state,
        statusSetLanguage: Status.LOADING,
      };
    }
    case NEOCARE.SET_LANGUAGE_SUCCESS: {
      return {
        ...state,
        currentUserLanguage: payload,
        statusSetLanguage: Status.SUCCESS,
      };
    }
    case NEOCARE.SET_LANGUAGE_ERROR: {
      return {
        ...state,
        statusSetLanguage: Status.ERROR,
      };
    }
    case NEOCARE.GET_DELETE_ACCOUNT_REQUEST:
      return {
        ...state,
        statusDeleteAccount: Status.LOADING,
      };
    case NEOCARE.GET_DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        statusDeleteAccount: Status.SUCCESS,
      };
    case NEOCARE.GET_DELETE_ACCOUNT_RESET:
      return {
        ...state,
        statusDeleteAccount: Status.DEFAULT,
      };
    case NEOCARE.CONFIRM_DELETE_OTP_REQUEST:
      return {
        ...state,
        statusConfirmDelete: Status.LOADING,
      };
    case NEOCARE.CONFIRM_DELETE_OTP_SUCCESS:
      return {
        ...state,
        statusConfirmDelete: Status.SUCCESS,
      };
    case NEOCARE.CONFIRM_DELETE_OTP_ERROR:
      return {
        ...state,
        statusConfirmDelete: Status.ERROR,
        errorDeleteAccount: payload,
      };
    case NEOCARE.CONFIRM_DELETE_OTP_RESET:
      return {
        ...state,
        statusConfirmDelete: Status.DEFAULT,
        errorDeleteAccount: '',
      };
    case NEOCARE.GET_USER_INFO_REQUEST:
      return {
        ...state,
        statusGetUserInfo: Status.LOADING,
      };
    case NEOCARE.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        statusGetUserInfo: Status.SUCCESS,
      };
    case NEOCARE.GET_USER_INFO_ERROR:
      return {
        ...state,
        statusGetUserInfo: Status.ERROR,
        currentUser: payload,
      };
    case NEOCARE.UPDATE_USER_INFO_REQUEST:
      return {
        ...state,
        statusUpdateUser: Status.LOADING,
      };
    case NEOCARE.UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        updatedUser: payload,
        statusUpdateUser: Status.SUCCESS,
      };
    case NEOCARE.UPDATE_USER_INFO_ERROR:
      return {
        ...state,
        statusUpdateUser: Status.ERROR,
        errorUpdateUser: payload,
      };
    case NEOCARE.UPDATE_USER_INFO_RESET:
      return {
        ...state,
        statusUpdateUser: Status.DEFAULT,
        updatedUser: {},
        errorUpdateUser: '',
      };
    default:
      return state;
  }
};

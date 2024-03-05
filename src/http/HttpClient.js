import axios from 'axios';
import {UrlApi} from 'http/UrlApi';
import {asyncStorage} from 'store/index';
import SuperTokens from 'supertokens-react-native';
// import { API_URL } from 'react-native-dotenv';
/*
  Base client config for your application.
  Here you can define your base url, headers,
  timeouts and middleware used for each request.
*/
// SuperTokens.init({
//   apiDomain: UrlApi.baseApi,
//   apiBasePath: 'doctors/auth',
// });
let defaultLanguage = 'vi';
export const setDefaultLanguage = language => {
  defaultLanguage = language;
};
console.log('default language:::', defaultLanguage);
const HttpClient = axios.create({
  timeout: 12000,
  headers: {
    'Access-Control-Expose-Headers':
      'front-token, st-access-token, st-refresh-token',
    'content-type': 'application/json',
  },
});
const HttpRefresh = axios.create({
  timeout: 12000,
  headers: {
    'Access-Control-Expose-Headers':
      'front-token, st-access-token, st-refresh-token',
    'content-type': 'application/json',
  },
});
// SuperTokens.addAxiosInterceptors(HttpClient);

const refreshToken = async () => {
  console.log('try to refresh token');
  try {
    const result = await HttpRefresh.post(UrlApi.refreshToken);
    let frontToken = result.headers?.get('front-token');
    let stAccessToken = result.headers?.get('st-access-token');
    let stRefreshToken = result.headers?.get('st-refresh-token');
    if (frontToken || stAccessToken || stRefreshToken) {
      await asyncStorage.setToken({frontToken, stAccessToken, stRefreshToken});
    }
  } catch (e) {
    console.log(e);
  }
};

// Custom middleware for requests (this one just logs the error).
HttpClient.interceptors.request.use(
  async config => {
    // config.headers['X-CUPIFY-APP'] = 'NEOCARE';
    // config.headers['Accept-Language'] = defaultLanguage;
    const tokens = await asyncStorage.getToken();
    // console.log('getToken: ', tokens);
    if (tokens && tokens.stAccessToken) {
      config.headers.rid = 'session';
      config.headers.authorization = 'Bearer ' + tokens.stAccessToken || '';
    } else {
      config.headers.rid = 'passwordless';
    }
    return config;
  },
  error => {
    //console.log('Failed to make request with error:', error);
    return Promise.reject(error);
  },
);

// Custom middleware for responses (this one just logs the error).
HttpClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (
      error.response.status === 401 &&
      error.response.data &&
      error.response.data.message == 'try refresh token'
    ) {
      refreshToken();
    }
    return Promise.reject(error);
  },
);

HttpRefresh.interceptors.request.use(
  async config => {
    // config.headers['X-CUPIFY-APP'] = 'NEOCARE';
    // config.headers['Accept-Language'] = defaultLanguage;
    const tokens = await asyncStorage.getToken();
    // console.log('getToken: ', tokens);
    if (tokens && tokens.stRefreshToken) {
      config.headers.rid = 'session';
      config.headers.authorization = 'Bearer ' + tokens.stRefreshToken || '';
    } else {
      config.headers.rid = 'passwordless';
    }
    console.log('REQUEST API REFRESH:', config);
    return config;
  },
  error => {
    //console.log('Failed to make request with error:', error);
    return Promise.reject(error);
  },
);

// Custom middleware for responses (this one just logs the error).
HttpRefresh.interceptors.response.use(
  response => {
    console.log('response Http stRefreshToken Client: ', response);
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default HttpClient;

import AsyncStorage from '@react-native-async-storage/async-storage';

const setUser = async user => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (e) {
    console.log(e);
  }
};

const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem('user');
    if (value !== null) {
      // console.log(value);
      return JSON.parse(value);
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

const setToken = async tokens => {
  try {
    await AsyncStorage.setItem('tokenHeaders', JSON.stringify(tokens));
  } catch (e) {
    console.log(e);
  }
};
const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('tokenHeaders');
    if (value !== null) {
      // console.log(value);
      return JSON.parse(value);
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

const setSkipForceUpdate = async skip => {
  try {
    await AsyncStorage.setItem('skipForceUpdate', skip);
  } catch (e) {
    console.log(e);
  }
};

const getSkipForceUpdate = async () => {
  try {
    const value = await AsyncStorage.getItem('skipForceUpdate');
    if (value == 'true') {
      return 'true';
    } else {
      console.log('SKIP_FORCE_UPDTE:', value);
      return 'false';
    }
  } catch (e) {
    console.log(e);
  }
};

const clearStorage = async () => {
  // AsyncStorage.clear();
  try {
    await AsyncStorage.removeItem('user');
    await AsyncStorage.clear();
    // await AsyncStorage.removeItem('recommendedProducts');
  } catch (e) {
    console.log(e);
  }
};

export default {
  setUser,
  getUser,
  setToken,
  getToken,
  setSkipForceUpdate,
  getSkipForceUpdate,
  clearStorage,
};

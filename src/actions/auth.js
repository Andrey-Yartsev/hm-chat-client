import config from '../core/config';
import socket from './socket';

export default (store, success) => {
  let auth = window.localStorage.getItem('auth' + config.storageSuffix);
  if (!auth) return;
  auth = JSON.parse(auth);
  if (!auth.token) {
    throw new Error('Storage data format error');
  }
  socket(store, auth.token);
  auth.type = 'SET_AUTH';
  if (success) success(auth.token);
  store.dispatch(auth);
};
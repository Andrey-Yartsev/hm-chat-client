import config from '../core/config';

export default (dispatch) => {
  window.localStorage.removeItem('auth' + config.storageSuffix);
  dispatch({
    type: 'LOGOUT'
  });
};

import authRequest from '../../core/utils/authRequest';

export default (success, error) => {
  return (state, lineId, text) => {
    authRequest(state, {
      method: 'put',
      path: 'client/messages',
      data: {
        text
      }
    }).then((r) => {
      success(r);
    }).catch((e) => {
      // error();
    });
  }
};

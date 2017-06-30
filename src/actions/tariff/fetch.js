import authRequest from '../../core/utils/cloud/authRequest';

export default (dispatch, state) => {
  authRequest(state, {
    method: 'get',
    path: 'apps/types/helpme/tariffs'
  }).then((r) => {
    dispatch(Object.assign({type: 'SET_TARIFFS'}, {items:r.data}));
  });
};

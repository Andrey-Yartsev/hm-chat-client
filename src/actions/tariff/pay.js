import authRequest from '../../core/utils/cloud/authRequest';

export default (dispatch, state, tariffId) => {
  authRequest(state, {
    method: 'post',
    path: `apps/types/helpme/price`,
    data: {
      tariffId,
      props: {}
    }
  }).then((r) => {
    dispatch({
      type: 'OPEN_RESULT',
      text: r.data.descr
    });
  });
};

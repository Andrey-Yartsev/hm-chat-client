import tokenRequest from './tokenRequest';

export default (state, data) => {
  if (!state.auth.token) {
    throw new Error('not authorized');
  }
  return tokenRequest(state.auth.token, data);
}
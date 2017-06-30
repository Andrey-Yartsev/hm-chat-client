import tokenRequest from './tokenRequest';

export default (state, data) => {
  if (!state.auth.cloudToken) {
    throw new Error('cloud not authorized');
  }
  return tokenRequest(state.auth.cloudToken, data);
}
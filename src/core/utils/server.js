import config from '../config';

export default {

  chatApiUrl: () => {
    return 'http://' + config.host + ':' + config.httpPort + '/';
  },

  chatWsUrl: () => {
    return 'http://' + config.host + ':' + config.wsPort;
  },

  hmApiUrl: () => {
    return 'http://' + config.hmHost + ':' + config.hmPort + '/api/v1/';
  },

  hmUserToken: () => {
    return config.hmUserToken;
  }


}
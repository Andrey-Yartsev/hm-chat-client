import axios from 'axios';
import server from './server';

export default {

  async makeCall (phoneNumber, token) {
    try {
      let response = await axios({
        method: 'get',
        url: server.hmApiUrl() + '/call',
        params: {clientNum: phoneNumber},
        headers: {'Authorization': 'Bearer ' + token}
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async waitForStatus (connectionId, token, callback) {
    let status = await getStatus(connectionId, token);
    callback(status);
    if (status === 'none' || status === 'mngr_pickup' || status === 'clnt_pickup') {
      console.log(connectionId, token, status);
      setTimeout(this.waitForStatus.bind(this, connectionId, token, callback), 3000);
    }
    console.log(status);
    return status;
  },

  async loadMessages (token, size, lastMessageId) {
    console.log('loadMessages');
    let response;
    try {
      response = await axios({
        method: 'get',
        url: server.chatApiUrl() + 'client/messages',
        headers: {'Authorization': 'Bearer ' + token},
        params: {
          size: size,
          lastMessageId: lastMessageId
        },
        timeout: 5000
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  },

  async sendMessage (token, text) {
    console.log('sendMessage');
    let response;
    try {
      response = await axios({
        method: 'put',
        url: server.chatApiUrl() + 'client/messages',
        headers: {'Authorization': 'Bearer ' + token},
        data: {
          text: text
        },
        timeout: 5000
      });
      return response;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  },

  async authorize (login, password) {
    try {
      let response = await axios({
        method: 'post',
        url: server.chatApiUrl() + 'client/authorize',
        data: {
          login: login,
          password: password
        },
        timeout: 5000
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.message);
      if (error.message === 'Network Error') {
        return error.message;
      } else if (error.response && error.response.status) {
        return error.response.status;
      }
    }
  },

  async deleteFcmToken (fcmToken, token) {
    console.log('fcm token', fcmToken, 'token', token);
    try {
      let response = await axios({
        method: 'delete',
        url: server.chatApiUrl() + 'client/fcmToken',
        headers: {'Authorization': 'Bearer ' + token},
        data: {
          token: fcmToken
        }
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  async setFcmToken (fcmToken, token) {
    console.log('fcm token', fcmToken, 'token', token);
    try {
      let response = await axios({
        method: 'post',
        url: server.chatApiUrl() + 'client/fcmToken',
        headers: {'Authorization': 'Bearer ' + token},
        data: {
          token: fcmToken
        }
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
};

async function getStatus(connectionId, token) {
  let response;
  try {
    response = await axios({
      method: 'get',
      url: server.hmApiUrl() + 'action/get',
      params: {connectionId: connectionId},
      headers: {'Authorization': 'Bearer ' + token}
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }

  return response ? response.data.action : null;

}

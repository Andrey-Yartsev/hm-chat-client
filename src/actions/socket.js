import server from '../core/utils/server';
import newMessage from './message/newMessage';

export default (store, userToken) => {
  const socket = require('socket.io-client')(server.chatWsUrl());
  socket.on('connect', function () {
    socket.emit('clientConnect', {
      token: userToken
    });
  });
  socket.on('newMessage', function (message) {
    console.log('newMessage', message);
    newMessage(userToken, store.getState(), store.dispatch, message);
  });
};
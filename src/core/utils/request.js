import axios from 'axios';
import server from './server';

export default (data) => {
  data.url = server.chatApiUrl() + data.path;
  console.log('Requesting ' + data.url);
  return axios(data);
}
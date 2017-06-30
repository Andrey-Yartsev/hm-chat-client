import axios from 'axios';
import server from '../server';

export default (token, data) => {
  data.headers = {'Authorization': 'Bearer ' + token};
  data.url = server.tariffApiUrl() + data.path;
  return axios(data);
}
import {combineReducers} from 'redux';
import auth from './auth';
import chat from './chat';
import messages from './messages';
import navigation from './navigation';
import phone from './phone';
import call from './call';

export default combineReducers({
  auth,
  chat,
  messages,
  navigation,
  phone,
  call
})
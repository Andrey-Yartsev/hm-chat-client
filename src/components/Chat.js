import ChatHoc from '../core/hoc/ChatHoc';
import ChatWeb from './web/ChatWeb';
import reduxConnect from '../core/utils/reduxConnect';

export default reduxConnect(ChatHoc(ChatWeb));

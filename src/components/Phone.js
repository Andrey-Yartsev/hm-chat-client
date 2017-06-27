import PhoneHoc from '../core/hoc/PhoneHoc';
import PhoneWeb from './web/PhoneWeb';
import Request from '../core/utils/ApiRequest';
import reduxConnect from '../core/utils/reduxConnect';

export default reduxConnect(PhoneHoc(PhoneWeb, Request));

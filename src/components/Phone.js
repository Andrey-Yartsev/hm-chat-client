import PhoneHoc from '../core/hoc/PhoneHoc';
import PhoneWeb from './web/PhoneWeb';
import reduxConnect from '../core/utils/reduxConnect';

import Request from '../core/utils/ApiRequest';

export default reduxConnect(PhoneHoc(PhoneWeb, Request));

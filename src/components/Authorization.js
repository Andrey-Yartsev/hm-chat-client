import AuthorizationHoc from '../core/hoc/AuthorizationHoc';
import AuthorizationWeb from './web/AuthorizationWeb';
import reduxConnect from '../core/utils/reduxConnect';

let Authorization = reduxConnect(AuthorizationHoc(AuthorizationWeb));
export default Authorization;
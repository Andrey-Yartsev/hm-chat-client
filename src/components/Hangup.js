import GotoPhoneHoc from '../core/hoc/GotoPhoneHoc';
import HangupWeb from './web/HangupWeb';
import reduxConnect from '../core/utils/reduxConnect';

export default reduxConnect(GotoPhoneHoc(HangupWeb));

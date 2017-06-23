import GotoPhoneHoc from '../core/hoc/GotoPhoneHoc';
import TalkingWeb from './web/TalkingWeb';
import reduxConnect from '../core/utils/reduxConnect';

export default reduxConnect(GotoPhoneHoc(TalkingWeb));

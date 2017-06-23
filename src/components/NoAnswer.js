import GotoPhoneHoc from '../core/hoc/GotoPhoneHoc';
import NoAnswerWeb from './web/NoAnswerWeb';
import reduxConnect from '../core/utils/reduxConnect';

export default reduxConnect(GotoPhoneHoc(NoAnswerWeb));

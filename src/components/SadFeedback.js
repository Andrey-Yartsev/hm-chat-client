import SadFeedback from '../core/hoc/SadFeedbackHoc';
import SadFeedbackWeb from './web/SadFeedbackWeb';
import Request from '../core/utils/ApiRequest';
import reduxConnect from '../core/utils/reduxConnect';

export default reduxConnect(SadFeedback(SadFeedbackWeb, Request));

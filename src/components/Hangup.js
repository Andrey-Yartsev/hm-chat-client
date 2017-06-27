import FeedbackHoc from '../core/hoc/FeedbackHoc';
import HangupWeb from './web/HangupWeb';
import Request from '../core/utils/ApiRequest';
import reduxConnect from '../core/utils/reduxConnect';

export default reduxConnect(FeedbackHoc(HangupWeb, Request));

import DummyHoc from '../core/hoc/DummyHoc';
import SadFeedbackCompleteWeb from './web/SadFeedbackCompleteWeb';
import reduxConnect from '../core/utils/reduxConnect';

export default reduxConnect(DummyHoc(SadFeedbackCompleteWeb));

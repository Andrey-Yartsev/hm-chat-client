import DummyHoc from '../core/hoc/DummyHoc';
import HappyFeedbackWeb from './web/HappyFeedbackWeb';
import reduxConnect from '../core/utils/reduxConnect';

export default reduxConnect(DummyHoc(HappyFeedbackWeb));

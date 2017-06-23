import DummyHoc from '../core/hoc/DummyHoc';
import CallingWeb from './web/CallingWeb';
import reduxConnect from '../core/utils/reduxConnect';

export default reduxConnect(DummyHoc(CallingWeb));

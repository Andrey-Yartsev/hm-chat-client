import DummyHoc from '../core/hoc/DummyHoc';
import ErrorWeb from './web/ErrorWeb';
import reduxConnect from '../core/utils/reduxConnect';

export default reduxConnect(DummyHoc(ErrorWeb));

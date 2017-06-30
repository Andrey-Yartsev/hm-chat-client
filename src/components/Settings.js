import SettingsHoc from '../core/hoc/SettingsHoc';
import SettingsWeb from './web/SettingsWeb';
import reduxConnect from '../core/utils/reduxConnect';

export default reduxConnect(SettingsHoc(SettingsWeb));

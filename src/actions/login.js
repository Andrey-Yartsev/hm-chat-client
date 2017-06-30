import request from '../core/utils/request';
import config from '../core/config';

export default (success, error) => {
    return (dispatch, data) => {
        request({
            method: 'post',
            path: 'client/authorize' + (data.token ? '/token' : ''),
            data
        }).then((r) => {
            if (!r.data.token) {
                error('NO_TOKEN');
                return;
            }
            window.localStorage.setItem('auth' + config.storageSuffix, JSON.stringify(r.data));
            dispatch(Object.assign({type: 'SET_AUTH'}, r.data));
            if (success) success(r.data.token);
        }).catch((e) => {
            if (e.response && e.response.status === 404) {
                error('Не верный логин или пароль');
            } else {
                error('Проблемы подключения к серверу');
            }
        });
    }
}
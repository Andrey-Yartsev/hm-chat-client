import javascriptTimeAgo from 'javascript-time-ago';
import dtf from 'dtf';

javascriptTimeAgo.locale(require('javascript-time-ago/locales/ru'));
const timeAgo = new javascriptTimeAgo('ru-RU');
dtf.locale('ru');

export default (date) => {
    const _date = new Date(date);
    if ((new Date() - _date) / 1000 < 86400) {
        // Выводим относительное время, если меньше одного дня
        return timeAgo.format(_date);
    } else {
        return dtf.format(_date, 'D MM Y h:mm');
    }
};
import React from 'react';
import axios from 'axios';
import server from './server';

export default (store) => {

  return class {

    constructor(data, options) {
      data.url = server.hmApiUrl() + data.path;
      data.headers = {
        // здесь должен быть параметр token из коллекции users БД helpme
        'Authorization': 'Bearer ' + server.hmUserToken()
      },
      this.options = Object.assign({
        onSuccess: null,
        onNoConnection: null,
        onRetry: null,
        onError: null
      }, options);
      this.data = data;
    }

    error(err) {
      if (this.options.onError) this.options.onError(err);
      console.log(err);
      store.dispatch(Object.assign({
        type: 'SCREEN_CHANGE',
        screen: 'Error',
      }, err));
      console.error(JSON.stringify(err));
    }

    noConnection() {
      if (!this.options.onSuccess) {
        // Если некуда переходить по завершению, то не отображаем экран повтора
        return;
      }
      if (this.options.onNoConnection) this.options.onNoConnection();
      this.error({
        text: 'Нет соединения с интернетом',
        subText: <div className="form">
          <button className="blue" onClick={this.retry.bind(this)}>Повторить попытку</button>
        </div>
      });
    }

    retry() {
      if (this.options.onRetry) this.options.onRetry();
      this.send();
    }

    send() {
      //try {
      axios(this.data).then((response) => {
        if (!response) {
          this.noConnection();
          return;
        }
        //response = JSON.parse(response);
        if (response.status.toString().charAt(0) === '4') {
          const codes = {
            400: 'Bad Request',
            401: 'Пользователь не найден',
            403: 'Forbidden',
            404: 'Not Found'
          };
          let subText;
          if (codes[response.status]) {
            subText = response.status + ' ' + codes[response.status];
          } else {
            subText = 'Код ошибки: ' + response.status;
          }
          this.error({
            text: 'Возникла техническая ошибка',
            subText: subText
          });
          return;
        }
        if (response.data && response.data.error) {
          this.error({
            text: 'Возникла техническая ошибка',
            subText: response.data.error
          });
          return;
        }
        if (this.options.onSuccess) {
          this.options.onSuccess(response.data);
        }
      }).catch((e) => {
        console.log(e);
        let text, subText;
        if (e.code === 19) {
          this.noConnection();
          return;
        } else {
          text = 'Возникла техническая ошибка';
          subText = e.message;
        }
        this.error({
          text: text,
          subText: subText
        });
      });
    }

  };

};


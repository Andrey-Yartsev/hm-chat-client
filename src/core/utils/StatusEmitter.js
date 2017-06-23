import EventEmitter from 'events';

export default class extends EventEmitter {

  constructor(Request) {
    super();
    this.Request = Request;
  }

  start(connectionId) {
    if (connectionId) {
      this.connectionId = connectionId;
    }
    this.intervalId = setInterval(() => {
      this.request();
    }, 3000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  request() {
    new this.Request({
      method: 'GET',
      path: 'action/get?connectionId=' + this.connectionId
    }, {
      onSuccess: (data) => {
        if (!data.action || data.action === undefined) {
          this.stop();
          console.info(data);
          throw new Error('wrong request: action/get?connectionId=' + this.connectionId);
        }
        this.emit('event', data.action);
      },
      onRetry: () => {
        this.store.dispatch({
          type: 'SCREEN_CHANGE',
          screen: 'Calling'
        });
        this.start();
      },
      onNoConnection: () => {
        this.stop();
      },
      onError: () => {
        this.stop();
      },
    }).send();
  }

}

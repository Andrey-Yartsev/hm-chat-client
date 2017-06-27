import React from 'react';

export default (PhoneView, Request) =>
  class extends React.Component {

    componentDidMount() {
      this.Request = Request(this.context.store);
    }

    validate() {
      if (this.props.phone.phone && this.props.phone.phone.match(/^\+[1-9]{1}[0-9]{10}$/)) {
        return true;
      }
      return false;
    }

    call() {
      new this.Request({
        method: 'GET',
        path: 'call?clientNum=' + this.props.phone.phone.replace(/^\+7(\d+)/, '8$1')
      }, {
        onSuccess: (data) => {
          // data.action = 'callResult';
          this.context.store.dispatch({
            type: 'WAIT_FOR_STATUS',
            connectionId: data.connectionId,
            waitForStatus: true
          });
        }
      }).send();
    }

    callAndGoToScreenCalling() {
      if (!this.validate()) return;
      this.goToScreenCalling();
      setTimeout(() => {
        this.call();
      }, 500);
    }

    goToScreenCalling() {
      this.context.store.dispatch({
        type: 'SCREEN_CHANGE',
        screen: 'Calling'
      });
    }

    phoneChanged(value) {

      this.context.store.dispatch({
        type: 'PHONE_CHANGE',
        phone: value
      });
    }

    render() {
      return <PhoneView
        {...this.props}
        validate={this.validate.bind(this)}
        phoneChanged={this.phoneChanged.bind(this)}
        callAndGoToScreenCalling={this.callAndGoToScreenCalling.bind(this)}
      />;
    }

  }

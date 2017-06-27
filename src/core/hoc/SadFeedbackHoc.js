import React from 'react';

export default (View, Request) =>
  class extends React.Component {

    componentDidMount() {
      this.Request = Request(this.context.store);
    }

    changeDecision() {
      this.context.store.dispatch({
        type: 'SCREEN_CHANGE',
        screen: 'Hangup'
      });
    }

    sendFeedback() {
      new this.Request({
        method: 'GET',
        path: 'feedbackMessage?message=test&connectionId=' + this.props.call.connectionId
      }).send();
      this.context.store.dispatch({
        type: 'SCREEN_CHANGE',
        screen: 'SadFeedbackComplete'
      });
    }

    render() {
      return <View
        {...this.props}
        changeDecision={this.changeDecision.bind(this)}
        sendFeedback={this.sendFeedback.bind(this)}
      />;
    }

  }
import React from 'react';

export default (View, Request) =>
  class extends React.Component {

    componentDidMount() {
      this.Request = Request(this.context.store);
    }

    like() {
      this.context.store.dispatch({
        type: 'SCREEN_CHANGE',
        screen: 'HappyFeedback'
      });
      this.request(true);
    }

    dislike() {
      this.context.store.dispatch({
        type: 'SCREEN_CHANGE',
        screen: 'SadFeedback'
      });
      this.request(false);
    }

    render() {
      return <View
        {...this.props}
        like={this.like.bind(this)}
        dislike={this.dislike.bind(this)}
      />;
    }

    request(positive) {
      new this.Request({
        method: 'GET',
        path: 'feedback?positive=' + parseInt(positive) + '&connectionId=' + this.props.call.connectionId
      }).send();
    }

  }


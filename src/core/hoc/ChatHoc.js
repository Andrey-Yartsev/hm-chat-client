import React from 'react';
import fetchMessages from '../../actions/message/fetch';
import send from '../../actions/message/send';
import markViewed from '../../actions/message/markViewed';
import logout from '../../actions/logout';

export default ChatView =>
  class extends React.Component {
    state = {
      loading: true,
      text: ''
    };

    componentDidMount() {
      this.updateChat();
    }

    // componentDidUpdate() {
    //     if (!this.props.chat.lineId) return;
    //     if (this.lineId() === this.props.chat.lineId) return;
    //     this.updateChat();
    // }

    // componentWillMount() {
    //     this.fetchOperators();
    // }

    updateChat() {
      this.fetchMessages();
    }

    fetchMessages() {
      fetchMessages(() => {
      }, (error) => {
        alert(error);
      })(
        this.context.store.dispatch,
        this.context.store.getState()
      );
    }

    lineId() {
      return 1;
    }

    send() {
      send((r) => {
        this.setState({
          text: ''
        });
        markViewed(
          this.context.store.dispatch,
          this.lineId()
        );
      }, (error) => {
      })(
        this.context.store.getState(),
        this.lineId(),
        this.state.text
      );
    }

    logout() {
      logout(this.context.store.dispatch);
    }

    textChanged(text) {
      this.setState({text});
    }

    getMessages() {
      return this.props.messages.messages || [];
    }

    renderLoader() {
      return <div className="cssload-thecube">
        <div className="cssload-cube cssload-c1"></div>
        <div className="cssload-cube cssload-c2"></div>
        <div className="cssload-cube cssload-c4"></div>
        <div className="cssload-cube cssload-c3"></div>
      </div>;
    }

    render() {
      if (this.props.chat.loading) return this.renderLoader()
      return <ChatView
        {...this.props}
        state={this.state}
        send={this.send.bind(this)}
        logout={this.logout.bind(this)}
        messages={this.getMessages()}
        textChanged={this.textChanged.bind(this)}
      />

    }
  }

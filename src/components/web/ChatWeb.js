import React from 'react';
import ChatMessage from './ChatMessageWeb';

import '../../static/css/chat.css';

class ChatWeb extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter' && e.ctrlKey) this.send();
  }

  textChanged(event) {
    this.props.textChanged(event.target.value);
  }

  send(event) {
    event.preventDefault();
    this.props.send();
  }

  logout(event) {
    event.preventDefault();
    this.props.logout();
  }

  renderMessages() {
    const rows = [];
    for (let message of this.props.messages) {
      rows.push(<ChatMessage
        mine={this.props.auth.profileId === message.author._id}
        key={message._id}
        {...message}
      />);
    }
    return rows;
  }

  renderTextarea() {
    return <div className="form">
      {this.props.state.text ?
        <div className="send"
             onClick={this.send.bind(this)}
        >Отправить</div> : ''}
      <textarea
        onChange={this.textChanged.bind(this)}
        placeholder="Введите текст сообщения..."
        value={this.props.state.text}
      ></textarea>
    </div>;
  }

  componentDidUpdate() {
    setTimeout(() => {
      const objDiv = document.getElementById('chatMessages');
      if (objDiv) objDiv.scrollTop = objDiv.scrollHeight;
    }, 100);
  }

  render() {
    return <div className="chat">
      {/*<div className="chatHeader">*/}
        {/*<div className="title">*/}
          {/*Вы вошли как <b>{this.props.auth.login}</b>*/}
        {/*</div>*/}
        {/*<div className="chatMenu">*/}
          {/*<a*/}
          {/*onClick={this.logout.bind(this)}*/}
          {/*className="button blue">Выход</a>*/}
        {/*</div>*/}
      {/*</div>*/}
      <ul id="chatMessages" className="chatMessages list">
        {this.renderMessages()}
      </ul>
      {this.renderTextarea()}
    </div>
  }
}

export default ChatWeb;
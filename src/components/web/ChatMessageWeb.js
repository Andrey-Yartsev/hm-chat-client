import React from 'react';
import formatDate from '../../core/utils/date';

class ChatMessageWeb extends React.Component {

  render() {
    let avatar = '';
    let login = '';
    if (!this.props.mine) {
      //avatar = <div className="avatar"></div>;
    }
    return <li className={this.props.mine ? 'mine' : ''}>
      {avatar}
      <div className="triangle"></div>
      {this.props.viewed ? '' : <div className="unread"></div>}
      <div className="message">{this.props.text}</div>
      <div className="date">{formatDate(this.props.dt)}</div>
    </li>
  }
}

export default ChatMessageWeb;
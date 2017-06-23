import React from 'react';

import '../../static/css/call.css';

export default class extends React.Component {

  renderButton() {
    return this.props.validate() ?
      <button
        onClick={this.props.callAndGoToScreenCalling}>
        🡢
      </button>
      : <button
        disabled
        onClick={this.props.callAndGoToScreenCalling}>
        🡢
      </button>;
  }

  render() {
    return <div className="body">
      <div className="woman"></div>
      <div className="text">
        <span>Оставьте номер и мы перезвоним вам в близжайшее время</span>
      </div>
      <div className="input">
        {this.renderButton()}
        <input
          value={this.props.phone.phone}
          type="text"
          placeholder="+7"
          onChange={this.props.handleChange}
          onKeyUp={this.props.handleKeyup}
        />
      </div>
      <div className="appBar">
        <div className="appText">
          <span>Мобильное приложение HelpMe уже доступно на вашем устройстве</span>
        </div>
        <div className="getApp">
          <div className="qr"></div>
          <div className="appStore"></div>
          <div className="googlePlay"></div>
        </div>
      </div>
    </div>
  }

}

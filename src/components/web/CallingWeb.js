import React from 'react';

import '../../static/css/calling.css';
import '../../static/css/calling-phone.css';

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
      <div className="phone-container">
        <div className="circle-phone" style={{'transformOrigin': 'center'}}></div>
        <div className="circle-fill" style={{'transformOrigin': 'center'}}></div>
        <div className="img-circle" style={{'transformOrigin': 'center'}}>
          <div className="img-circle-block" style={{'transformOrigin': 'center'}}></div>
        </div>
      </div>
      <div className="text">
        <span>Звоним на номер {this.props.phone.phone}</span>
      </div>
    </div>
  }

}

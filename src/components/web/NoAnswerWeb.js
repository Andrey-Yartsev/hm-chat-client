import React from 'react';

import '../../static/css/calling.css';
import '../../static/css/calling-phone.css';

export default class extends React.Component {

  render() {
    return <div className="body text">
      <div className="cont">
        <div className="middle-text">
          <p>Сожалеем, в процессе соединения произошел сбой :(</p>
          <p>Повторите попытку позднее</p>
        </div>
      </div>
      <button
        className="bottomBtn"
        onClick={this.props.goToScreenPhone}
      >Назад</button>
    </div>
  }

}

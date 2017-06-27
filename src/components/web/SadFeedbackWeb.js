import React from 'react';

import '../../static/css/form.css';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.clickChangeDecision = this.clickChangeDecision.bind(this);
    this.clickSendFeedback = this.clickSendFeedback.bind(this);
  }

  render() {
    return <div className="body text">
      <p>Расскажите пожалуйста, что пошло не так</p>
      <div className="form">
        <p>
          <textarea placeholder="..."></textarea>
        </p>
        <div className="two-cols-btns">
          <button
            className="blue"
            onClick={this.clickChangeDecision}>Изменить решение</button>
          <button
            className="active"
            onClick={this.clickSendFeedback}>Отправить</button>
        </div>
      </div>
    </div>
  }

  clickChangeDecision(e) {
    e.preventDefault();
    this.props.changeDecision();
  }

  clickSendFeedback(e) {
    e.preventDefault();
    this.props.sendFeedback();
  }

}

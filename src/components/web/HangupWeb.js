import React from 'react';

import '../../static/css/feedback.css';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.clickLike = this.clickLike.bind(this);
    this.clickDislike = this.clickDislike.bind(this);
  }

  clickLike(e) {
    e.preventDefault();
    this.props.like();
  }

  clickDislike(e) {
    e.preventDefault();
    this.props.dislike();
  }

  render() {
    return <div className="body text">
      <p className="middle-text">Пожалуйста, оцените работу специалиста</p>
      <div className="feedbackButtons">
        <div className="like" onClick={this.props.like}></div>
        <div className="dislike" onClick={this.props.dislike}></div>
      </div>
    </div>
  }

}

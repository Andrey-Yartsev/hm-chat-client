import React from 'react';

export default class extends React.Component {

  render() {
    console.log(this.props);
    return <div className="body">
      <p>{this.props.navigation.text}</p>
      {(this.props.navigation.subText ?
          <div>
            <p className="gray">
              {this.props.navigation.subText}
            </p>
          </div>
          : ''
      )}
    </div>
  }

}

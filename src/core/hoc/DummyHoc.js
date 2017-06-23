import React from 'react';

export default View =>
  class extends React.Component {
    render() {
      return <View
        {...this.props}
      />;
    }
  }
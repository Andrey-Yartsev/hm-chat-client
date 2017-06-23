import React from 'react';

export default (View) =>
  class extends React.Component {
    goToScreenPhone() {
      this.context.store.dispatch({
        type: 'SCREEN_CHANGE',
        screen: 'Phone'
      });
    }
    render() {
      return <View
        {...this.props}
        goToScreenPhone={this.goToScreenPhone.bind(this)}
      />;
    }
  }

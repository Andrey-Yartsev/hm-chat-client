import React from 'react';
import fetchTariffs from '../../actions/tariff/fetch';
import payTariff from '../../actions/tariff/pay';

export default (View, Request) =>
  class extends React.Component {
    componentDidMount() {
      fetchTariffs(
        this.context.store.dispatch,
        this.context.store.getState()
      );
    }
    openTariff(id) {
      this.context.store.dispatch({type:'OPEN_TARIFF', id});
    }
    payTariff(id) {
      payTariff(
        this.context.store.dispatch,
        this.context.store.getState(),
        id
      );
    }
    render() {
      return <View
        {...this.props}
        openTariff={this.openTariff.bind(this)}
        payTariff={this.payTariff.bind(this)}
      />;
    }
  }

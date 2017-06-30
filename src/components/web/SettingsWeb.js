import React from 'react';

import '../../static/css/settings.css';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.clickTariff = this.clickTariff.bind(this);
  }

  clickTariff(id) {
    this.props.openTariff(id);
  }

  clickPay(id) {
    this.props.payTariff(id);
  }

  renderTariffs() {
    let caption;
    const items = [];
    const openedTariff = this.props.settings.openedTariff;
    if (this.props.tariff.items) {
      for (let v of this.props.tariff.items) {
        let openedClass = v.id === openedTariff ? ' opened' : '';
        if (v.id === openedTariff) {
          caption = <div className="caption activate"onClick={() => {
            this.clickPay(v.id);
          }}>Активировать →</div>;
        } else {
          caption = <div className="caption">{v.price}</div>
        }
        items.push(
          <div className={'item' + openedClass} key={v.id}>
            <div className="title" onClick={() => {
              this.clickTariff(v.id);
            }}><span>{v.name}</span></div>
            {caption}
            <div className="description">
              text text text text
            </div>
          </div>
        );

      }
    }
    return <div className="items">{items}</div>;
  }

  renderBody() {
    if (this.props.settings.openedResult) {
      return <div
        className="content"
        dangerouslySetInnerHTML={{__html: this.props.settings.openedResult}}>
      </div>
    } else {
      return this.renderTariffs();
    }
  }

  render() {
    return <div className="body text">
      {this.renderBody()}
    </div>
  }

}

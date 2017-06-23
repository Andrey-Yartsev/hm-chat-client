import React, {Component} from 'react';
import Authorization from './Authorization';
import reduxConnect from '../core/utils/reduxConnect';
import auth from '../actions/auth';
import ucfirst from 'ucfirst';

import initStatusEmitter from '../actions/status/initEmitter';
import StatusEmitter from '../core/utils/StatusEmitter';
import Request from '../core/utils/ApiRequest';

import Chat from './Chat';
import Phone from './Phone';
import Calling from './Calling';
import NoAnswer from './NoAnswer';
import Talking from './Talking';
import Hangup from './Hangup';
import Error from './Error';

// const callRoot = '/home/user/www/helpme-client';
// const ScreenPhone = require(callRoot + '/ScreenPhone');
// import ScreenTalking from callRoot + '/ScreenTalking';
// import ScreenCalling from callRoot + '/ScreenCalling';
// import ScreenHangup from callRoot + '/ScreenHangup';
// import ScreenNoAnswer from callRoot + '/ScreenNoAnswer';
// import ScreenNotAvailable from callRoot + '/ScreenNotAvailable';
// import ScreenHappyFeedback from callRoot + '/ScreenHappyFeedback';
// import ScreenSadFeedback from callRoot + '/ScreenSadFeedback';
// import ScreenSadFeedbackComplete from callRoot + '/ScreenSadFeedbackComplete';
// import ScreenError from callRoot + '/ScreenError';

import '../static/css/main.css';
import '../static/css/popup.css';
import '../static/css/list.css';
import '../static/css/button.css';

import logout from '../actions/logout';
import login from '../actions/login';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  componentDidUpdate() {
    if (window.location.hash === '#logout') {
      logout(this.context.store.dispatch);
      window.location.hash = '';
      return;
    }
    //http://localhost:3000/#tokeneyJhbGciOiJIUzI1NiJ9.NTk0OGM4MmU0ZmRjNWUwMDAxYzMzNzMw.n13HsjftJtxPCSEHA6s7JGs-MNqE57v9AMqQaL9x_xc
    if (window.location.hash.match(/#token.*/)) {
      let token = window.location.hash.replace(/#token(.*)/, '$1');
      console.log(token);
      login(null, (error) => {})(
        this.context.store.dispatch,
        {token}
      );

      window.location.hash = '';
      return;
    }

    if (this.props.call.waitForStatus) {
      this.emitter.start(this.props.call.connectionId);
    } else {
      this.emitter.stop();
    }
  }

  componentDidMount() {
    auth(this.context.store);
    this.context.store.dispatch({type: 'SCREEN_INIT'});
    this.context.store.dispatch({type: 'SECTION_INIT'});
    this.context.store.dispatch({
      type: 'PHONE_CHANGE',
      phone: '+79202560776'
    });
    this.emitter = new StatusEmitter(
      Request(this.context.store)
    );
    initStatusEmitter(
      this.context.store.dispatch,
      this.emitter
    );
  }

  clickMenu(section) {
    let screen;
    if (section === 'call') {
      screen = 'Phone';
    } else {
      screen = ucfirst(section);
    }
    this.context.store.dispatch({
      type: 'SCREEN_CHANGE',
      screen
    });
    this.context.store.dispatch({
      type: 'SECTION_CHANGE',
      section
    });
  }

  renderMenu() {
    let links = [];
    let curSection = this.context.store.getState().navigation.section;
    const sections = ['chat', 'call'];
    for (let section of sections) {
      let active = curSection === section ? ' active' : '';
      links.push(<a
        key={section}
        href="#"
        className={'m-' + section + active}
        onClick={(e) => {
          e.preventDefault();
          this.clickMenu(section);
        }}></a>);
    }
    return <div className="menu">
      {links}
    </div>
  }

  renderScreen() {
    const screen = this.context.store.getState().navigation.screen;
    switch (screen) {
      // case 'Phone':
      //   return <ScreenPhone/>;
      // case 'Calling':
      //   return <ScreenCalling/>;
      // case 'Talking':
      //   return <ScreenTalking/>;
      // case 'Hangup':
      //   return <ScreenHangup/>;
      // case 'NoAnswer':
      //   return <ScreenNoAnswer/>;
      // case 'NotAvailable':
      //   return <ScreenNotAvailable/>;
      // case 'HappyFeedback':
      //   return <ScreenHappyFeedback/>;
      // case 'SadFeedback':
      //   return <ScreenSadFeedback/>;
      // case 'SadFeedbackComplete':
      //   return <ScreenSadFeedbackComplete/>;
      // case 'Error':
      //   return <ScreenError/>;
      // default:
      //   throw new Error('ScreenComponent for "' + name + '" is not defined');

      case 'Chat':
        return <Chat/>;
      case 'Phone':
        return <Phone/>;
      case 'Calling':
        return <Calling/>;
      case 'NoAnswer':
        return <NoAnswer/>;
      case 'Talking':
        return <Talking/>;
      case 'Hangup':
        return <Hangup/>;
      case 'Error':
        return <Error/>;
      default:
        console.trace(screen);
        throw new Error('ScreenComponent for "' + screen + '" is not defined');
    }
  }

  render() {
    const section = this.context.store.getState().navigation.section;
    const screen = this.context.store.getState().navigation.screen;
    if (!this.props.auth.token) {
      return <div className="pageWrapper loginPage">
        <div className="block">
          &nbsp;
          <Authorization />
        </div>
      </div>;
    } else {
      return <div className={'section-' + section + ' screen screen' + screen}>
        {this.renderMenu()}
        {this.renderScreen()}
      </div>;
    }
  }
}

export default reduxConnect(App);

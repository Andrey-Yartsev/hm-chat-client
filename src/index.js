import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

import logout from './actions/logout';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// if (window.location.hash === '#logout') {
//   logout(store.dispatch);
//   window.location.href = '/';
// } else {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  //registerServiceWorker();
// }

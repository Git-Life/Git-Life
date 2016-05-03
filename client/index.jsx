import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
/* browserHistory specifies which part of the URL react cares about */
import {Router, browserHistory} from 'react-router';

import configureStore from './store/configureStore';
import routes from './routes';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);

/* App is now imported and rendered in routes.js*/

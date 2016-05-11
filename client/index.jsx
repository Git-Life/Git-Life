import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import routes from './routes'
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';
const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}/>
  </Provider>,
    document.getElementById('app')
);

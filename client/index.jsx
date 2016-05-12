import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes'
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';
const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
    document.getElementById('app')
);

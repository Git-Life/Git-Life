import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import routes from './routes'
const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
<<<<<<< HEAD
    <App2/>
=======
    <Router history={hashHistory} routes={routes}/>
>>>>>>> 7f54c390a80146ca898eb1aadc242225da712914
  </Provider>,
    document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './containers/app2';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <App2/>
  </Provider>,
    document.getElementById('app')
);

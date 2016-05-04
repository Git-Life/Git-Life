import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import App2 from './containers/app2';
import RepoSecondPage from './containers/repo_secondpage';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';


const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
    document.getElementById('app')
);

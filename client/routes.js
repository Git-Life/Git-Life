import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './containers/app';
import Splash from './containers/splash';

/* imported by index.js, so it knows about our routes */

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Splash} />
  </Route>
);
  /* add new paths below"<IndexRoute.. /> using following format:" */
  /* <Route path="newPath" component={newPath} /> */

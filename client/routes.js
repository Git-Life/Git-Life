import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './containers/app';
import AppSearch from './containers/app_search';
import AppSplash from './containers/app_splash';
import AppAbout from './containers/app_about';

export default(
  <Route path="/" component={App}>

        <IndexRoute component={AppSearch} />
        <Route path="/trends" component={AppSplash}/>
        <Route path="/search" component={AppSearch}/>
        <Route path="/about" component={AppAbout}/>
</Route>
);

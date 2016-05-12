import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './containers/app';
import AppSearch from './containers/app_search';
import AppSplash from './containers/app_splash';

export default(
  <Route path="/" component={App}>

        <IndexRoute component={AppSearch} />
        <Route path="/trends" component={AppSplash}/>
        <Route path="/search" component={AppSearch}/>
</Route>
);

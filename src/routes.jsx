import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import HomePage from './components/home/HomePage.jsx';
import TabsPage from './components/tabs/TabsPage.jsx';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='tabs' component={TabsPage} />
  </Route>
);

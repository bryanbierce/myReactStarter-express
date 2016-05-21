import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './Home';

const AppRouter = () => (
  <Router history={ browserHistory } >
    <Route path="/" component={ Home } />
  </Router>
);

export default AppRouter;

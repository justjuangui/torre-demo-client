import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import ExplorePage from './pages/ExplorePage';
import DashboardPage from './pages/DashboardPage';
import { createBrowserHistory } from 'history'
import App from './App';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

ReactDOM.render(
  <Router>
    <App>
      <Route key="index" exact path="/" component={DashboardPage} />
      <Route key="explore" path="/explore" component={ExplorePage} />
    </App>
  </Router>, // eslint-disable-next-line no-undef
  document.getElementById('root')
);

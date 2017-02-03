import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import Base from './Base';
import Home from './Home';
import Blog from './Blog';
import ErrorPage from './ErrorPage';

class App extends Component {
    render() {
        return (
          <div>
              <Router history={browserHistory}>
                  <Route path="/" component={Base}>
                      <Route path="/home" component={Home}/>
                      <Route path="/blog" component={Blog}/>
                  </Route>
                  <Route path="*" component={ErrorPage}/>
              </Router>
          </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

var Base = require('./Base.jsx');
var Home = require('./Home.jsx');
var ErrorPage = require('./ErrorPage.jsx');

class App extends Component {
  render() {
      return (
          <div>
              <Router history={browserHistory}>
                  {/* <Route path="/" component={Base}/> */}
                  <Route path="/" component={Base}>
                      <Route path="/home" component={Home}/>
                  </Route>
                  <Route path="*" component={ErrorPage}/>
              </Router>
          </div>
      );
  }
}

export default App;

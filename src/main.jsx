var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;

// var Routes = require('./Routes.jsx');
// ReactDOM.render(<Routes />, document.getElementById('main'));

var Base = require('./components/Base.jsx');
var Home = require('./components/Home.jsx');
var Blog = require('./components/Blog.jsx');
var Footer = require('./components/Footer.jsx');
var Page = require('./components/Page.jsx');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Base}/>
    <Route path="/home" component={Home}/>
  </Router>
), document.getElementById('main'))

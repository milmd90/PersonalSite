var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

var Base = require('./components/Base.jsx');
var Home = require('./components/Home.jsx');
var Blog = require('./components/Blog.jsx');
var Footer = require('./components/Footer.jsx');

var Routes = React.createClass({
    render: function() {
        return (
            <div>
                <Router history={browserHistory}>
                    <Route path="/" component={Base}>
                    <div>sdfsdf</div>
                        {/* <Route path="/welcome" component={Home}/>
                        <Route path="/blog" component={Blog}/>
                        <Route path="*" component={Footer}/> */}
                    </Route>
                    <Route path="/about" component={Home}/>
                </Router>
            </div>
        );
    }
});

module.exports = Routes;

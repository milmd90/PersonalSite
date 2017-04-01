import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Base from './Base';
import Home from './Home';
import Software from './Software';
import Sammies from './Sammies';
import Music from './Music';
import ErrorPage from './ErrorPage';
import WebsitePost from '../posts/WebsitePost';
import GCPSlackPost from '../posts/GCPSlackPost';

class App extends Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <Route component={Base}>
                        <Route path="/" component={Home}/>
                    </Route>
                    <Route path="/software/website" component={WebsitePost}/>
                    <Route path="/software/gcp_slack" component={GCPSlackPost}/>
                    <Route component={Base}>
                        <Route path="/home" component={Home}/>
                        <Route path="/software" component={Software}>
                        </Route>
                        <Route path="/sammies" component={Sammies}/>
                        <Route path="/music" component={Music}/>
                    </Route>
                    <Route path="*" component={ErrorPage}/>
                </Router>
            </div>
        );
    }
}

export default App;

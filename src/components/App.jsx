import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Base from './Base';
import Home from './Home';
import Resume from './Resume';
import Software from './Software';
import DataScience from './DataScience';
import Personal from './Personal';
import ErrorPage from './ErrorPage';
import WebsitePost from '../posts/WebsitePost';
import GCPSlackPost from '../posts/GCPSlackPost';

class App extends Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <Route path="/" component={Base}>
                        <IndexRoute component={Home}/>
                        <Route path="resume" component={Resume}/>
                        <Route path="software" component={Software}/>
                        <Route path="datascience" component={DataScience}/>
                        <Route path="personal" component={Personal}/>
                    </Route>
                    <Route path="/software/website" component={WebsitePost}/>
                    <Route path="/software/gcp_slack" component={GCPSlackPost}/>
                    <Route path="*" component={ErrorPage}/>
                </Router>
            </div>
        );
    }
}

export default App;

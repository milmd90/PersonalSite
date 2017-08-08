import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//Basic Pages
import Base from './Base';
import ErrorPage from './ErrorPage';

//Sections
import Home from './Home';
import Resume from './Resume';
import Software from './Software';
import DataScience from './DataScience';
import Personal from './Personal';

//Posts
import WebsitePost from '../posts/WebsitePost';
import Presentation from '../posts/Presentation';
import PingHeroku from '../posts/PingHeroku';

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
                    <Route path="/posts/pingheroku" component={PingHeroku}/>
                    <Route path="/posts/website" component={WebsitePost}/>
                    <Route path="/posts/presentation" component={Presentation}/>
                    <Route path="*" component={ErrorPage}/>
                </Router>
            </div>
        );
    }
}

export default App;

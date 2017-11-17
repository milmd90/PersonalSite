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
import Imposter from '../posts/Imposter';

class App extends Component {
    scroll(page) {
        return () => {
            // TODO clean up magic number 206
            // 206 comes from inital header height 290 - final header height 84
            var y = page === "top" ? 0 : 206;
            // setTimeout used bc browser has not loaded the full page before action finishes
            setTimeout(function() {window.scrollTo(0, y);},1);
        }
    }

    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <Route path="/" component={Base}>
                        <IndexRoute onEnter={this.scroll("top")} component={Home}/>
                        <Route onEnter={this.scroll()} path="resume" component={Resume}/>
                        <Route onEnter={this.scroll()} path="software" component={Software}/>
                        <Route onEnter={this.scroll()} path="datascience" component={DataScience}/>
                        <Route onEnter={this.scroll()} path="personal" component={Personal}/>
                    </Route>
                    <Route path="/posts/pingheroku" component={PingHeroku}/>
                    <Route path="/posts/imposter" component={Imposter}/>
                    <Route path="/posts/website" component={WebsitePost}/>
                    <Route path="/posts/presentation" component={Presentation}/>
                    <Route path="*" component={ErrorPage}/>
                </Router>
            </div>
        );
    }
}

export default App;

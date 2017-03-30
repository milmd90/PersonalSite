import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import HomePost from '../posts/HomePost';

class Home extends Component {
    render() {
        return (
            <div className="page">
                <HomePost/>
            </div>
        );
    }
};

export default Home;

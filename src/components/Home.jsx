import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import Section from './Section';

class Home extends Component {
    render() {
        return (
            <div>
                <div>Home</div>
                <Section className="bkg-blue"/>
                <Section className="bkg-orange"/>
                <Section className="bkg-green"/>
            </div>
        );
    }
};

export default Home;

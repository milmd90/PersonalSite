import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import Section from './Section';

class Page extends Component {
    render() {
        return (
            <div>
                <div>{this.props.type}</div>
                <Section className="bkg-blue"/>
                <Section className="bkg-orange"/>
                <Section className="bkg-green"/>
            </div>
        );
    }
};

export default Page;

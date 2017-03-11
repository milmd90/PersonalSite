import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import Section from './Section';

class Software extends Component {
    render() {
        return (
            <div className="page">
                <div className="page-title">
                    SOFTWARE
                </div>
                <Section className="bkg-blue"/>
                <Section className="bkg-orange"/>
                <Section className="bkg-green"/>
            </div>
        );
    }
};

export default Software;

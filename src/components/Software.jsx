import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import GCPSlackPost from './../posts/GCPSlackPost';

class Software extends Component {
    render() {
        return (
            <div className="page">
                <div className="page-title">
                    SOFTWARE
                </div>
                <GCPSlackPost />
            </div>
        );
    }
};

export default Software;

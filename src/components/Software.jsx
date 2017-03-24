import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import gcp_slack from '../../public/posts/gcp_slack';

class Software extends Component {
    render() {
        return (
            <div className="page">
                <div className="page-title">
                    SOFTWARE
                </div>
                <gcp_slack/>
            </div>
        );
    }
};

export default Software;

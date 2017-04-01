import React, { Component } from 'react';
import GCPSlackPost from './../posts/GCPSlackPost';
import WebsitePost from './../posts/WebsitePost';

class Software extends Component {
    render() {
        return (
            <div className="page">
                <GCPSlackPost theme="bkg-blue"
                              link="/software/gcp_slack"
                />
                <WebsitePost theme="bkg-green"
                              link="/software/website"
                />
            </div>
        );
    }
};

export default Software;

import React, { Component } from 'react';
import GCPSlackPost from './../posts/GCPSlackPost';
import WebsitePost from './../posts/WebsitePost';

class Software extends Component {
    render() {
        return (
            <div className="page">
                <GCPSlackPost theme="bkg-blue"/>
                {/* <WebsitePost theme="bkg-blue"/> */}
            </div>
        );
    }
};

export default Software;

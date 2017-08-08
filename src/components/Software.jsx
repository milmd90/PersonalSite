import React, { Component } from 'react';
import WebsitePost from './../posts/WebsitePost';
import PingHeroku from './../posts/PingHeroku';

class Software extends Component {
    render() {
        return (
            <div className="page">
                <PingHeroku
                    theme="bkg-green"
                    link="/posts/pingheroku"
                />
                <WebsitePost
                    theme="bkg-blue"
                    link="/posts/website"
                />
            </div>
        );
    }
};

export default Software;

import React, { Component } from 'react';
import WebsitePost from './../posts/WebsitePost';
import PingHeroku from './../posts/PingHeroku';

class Software extends Component {
    render() {
        return (
            <div className="page">
                <PingHeroku
                    link="/posts/pingheroku"
                />
                <WebsitePost
                    link="/posts/website"
                />
            </div>
        );
    }
};

export default Software;

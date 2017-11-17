import React, { Component } from 'react';
import WebsitePost from './../posts/WebsitePost';
import PingHeroku from './../posts/PingHeroku';
import Imposter from './../posts/Imposter';

class Software extends Component {
    render() {
        return (
            <div className="page">
                <Imposter
                    link="/posts/imposter"
                />
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

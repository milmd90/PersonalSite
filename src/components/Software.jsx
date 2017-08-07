import React, { Component } from 'react';
import WebsitePost from './../posts/WebsitePost';

class Software extends Component {
    render() {
        return (
            <div className="page">
                <WebsitePost
                    theme="bkg-blue"
                    link="/posts/website"
                />
            </div>
        );
    }
};

export default Software;

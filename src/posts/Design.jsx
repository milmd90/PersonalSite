import React, { Component } from 'react';
import PostHeader from '../components/PostHeader';

class Design extends Component {
    render() {
        return (
            <div className={this.props.theme +' post'}>
                <PostHeader title="Design"
                            link={this.props.link}
                            created="10 April 2017"
                />
                <div className="post-body">
                    <img src="/img/logo/logo_black.png" alt="matt"/>
                    <img src="/img/logo/tanner.png" alt="tanner"/>
                    <img src="/img/logo/rikeen.png" alt="rikeen"/>
                </div>
            </div>
        )
    }
};

export default Design;

import React, { Component } from 'react';
import PostHeader from '../components/PostHeader';

class WebsitePost extends Component {
    render() {
        return (
            <div className={this.props.theme +' post'}>
                <PostHeader title="Creating a Website"
                            created="24 April 2017"
                />
                <div className="post-body">
                    Eventually, I will write a post about how I made my site. But first, I need to finish it...
                </div>
            </div>
        )
    }
};

export default WebsitePost;

import React, { Component } from 'react';
import Section from '../components/Section';

class PostHeader extends Component {
    render() {
        return (
            <div className="post-header">
                <div className="post-created">{this.props.created}</div>
                <div className="post-title">{this.props.title}</div>
            </div>
        );
    }
};

export default PostHeader;

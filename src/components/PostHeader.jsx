import React, { Component } from 'react';
import Section from '../components/Section';

class PostHeader extends Component {
    constructor(props) {
        super(props);

        var title = this.props.title;
        this.title = this.props.link ? <a href={this.props.link}>{title}</a> : title;
    }

    render() {
        return (
            <div className="post-header">
                <div className="post-created">{this.props.created}</div>
                <div className="post-title">{this.title}</div>
            </div>
        );
    }
};

export default PostHeader;

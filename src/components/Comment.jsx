import React, { Component } from 'react';

class Comment extends Component {

    render() {
        if (!(this.props.text && this.props.text.length)) {
            return null;
        }

        return (
            <div className="comment">
                <div className="comment-header">
                    <span className="comment-author">
                        {this.props.author}
                    </span>
                    <span className="comment-time">
                        {this.props.time}
                    </span>
                </div>
                <div className="comment-text">
                    {this.props.text}
                </div>
            </div>
        );
    }
};

export default Comment;

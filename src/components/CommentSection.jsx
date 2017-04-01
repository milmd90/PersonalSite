import React, { Component } from 'react';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.getComments();
        this.formatComments();
    }

    getComments() {
        this.comments = [
            {
                author: "Guy Person",
                comment: "This is a test comment",
                time: "1 April 2017"
            },{
                author: "Dude McMan",
                comment: "This is another test comment",
                time: "10 April 2017"
            }
        ];
    }

    formatComments() {
        if (!this.comments) {
            return;
        }

        this.commentsHtml = this.comments.map((comment) => {
            return (
                <div className="comment">
                    <div className="comment-header">
                        <span className="comment-author">
                            {comment.author}
                        </span>
                        <span className="comment-time">
                            {comment.time}
                        </span>
                    </div>
                    <div className="comment-text">
                        {comment.comment}
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div id={this.props.post} className="comment-section">
                <div><h4>Comments</h4></div>
                <div className="new-comment">
                    <textarea />
                </div>
                <div className="comments">
                    {this.commentsHtml}
                </div>
            </div>
        );
    }
};

export default CommentSection;

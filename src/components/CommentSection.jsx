import React, { Component } from 'react';
import $ from 'jquery';
import Comment from './Comment';
import DBConnection from '../utilities/DBConnection';

class CommentSection extends Component {
    componentWillMount() {
        var db = new DBConnection();
        console.log(db.getConnection());

        this.setState({
            comments: [
                {
                    author: "Guy Person",
                    text: "This is a test comment",
                    time: "1 April 2017"
                },{
                    author: "Dude McMan",
                    text: "This is another test comment",
                    time: "10 April 2017"
                },
            ]
        });
    }

    onSubmit(e) {
        e.preventDefault();

        var d = new Date();
        var comment = {
            'author': "author",
            'time':   d.toLocaleDateString(),
            'text':   $('.new-comment textarea').val(),
        }
        this.setState({
            comments: [comment].concat(this.state.comments)
        });
    }

    render() {
        if (!this.state.comments) {
            return null;
        }

        return (
            <div id={this.props.post} className="comment-section">
                <div><h4>Comments</h4></div>
                <div className="new-comment">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <textarea />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="comments">
                    {this.state.comments.map((comment) => {
                        return (
                            <Comment author={comment.author}
                                     time={comment.time}
                                     text={comment.text}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default CommentSection;

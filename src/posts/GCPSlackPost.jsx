import React, { Component } from 'react';
import PostHeader from '../components/PostHeader';

class GCPSlackPost extends Component {
    render() {
        return (
            <div className={this.props.theme +' post'}>
                <PostHeader title="GCP Logging Slack Integration"
                            link={this.props.link}
                            created="15 April 2017"
                />
                <div className="post-body">
                    <div>
                        <h4>Overview</h4>
                        <p></p>
                    </div>
                    <div>
                        <h4>Assumptions</h4>
                        <p></p>
                    </div>
                    <div>
                        <h4>Steps:</h4>
                        <ul>
                            <li><a href='#cloud-pub-sub'>Cloud Pub/Sub</a></li>
                            <li><a href='#sink-filter'>Sink Filter</a></li>
                            <li><a href='#node-subscriber'>Node Subscriber</a></li>
                            <li><a href='#slack-app'>Slack App</a></li>
                            <li><a href='#slack-integration'>Slack Integration</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 id='cloud-pub-sub'>Cloud Pub/Sub</h4>
                        <p></p>
                    </div>
                    <div>
                        <h4 id='sink-filter'>Sink Filter</h4>
                        <p></p>
                    </div>
                    <div>
                        <h4 id='node-subscriber'>Node Subscriber</h4>
                        <p></p>
                    </div>
                    <div>
                        <h4 id='slack-app'>Slack App</h4>
                        <p></p>
                    </div>
                    <div>
                        <h4 id='slack-integration'>Slack Integration</h4>
                        <p></p>
                    </div>

                </div>
            </div>
        )
    }
};

export default GCPSlackPost;

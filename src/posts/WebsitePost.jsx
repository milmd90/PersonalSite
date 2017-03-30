import React, { Component } from 'react';
import PostHeader from '../components/PostHeader';

class WebsitePost extends Component {
    render() {
        return (
            <div className={this.props.theme +' post'}>
                <PostHeader title="Creating a Website"
                            created="10 April 2017"
                />
                <div className="post-body">
                    <div>
                        <h4>Overview</h4>
                        <p>
                            This post is intended to describe how I made this website. The main purpose is to serve as a holistic overview
                            for beginners interested in building their own website from the ground up. I discuss each step only in minimal detail.
                            There are considerably more detailed references for each step, but hopefully, this gives a high level picture of the
                            necessary steps to build a functioning site.
                        </p>
                        <p>
                            This site is a Node.js application, using React, and hosted in Google Cloud Platform. I use Git for my version control
                            and the code is open to view on
                            <a className='hover-bold' href='https://github.com/milmd90/PersonalSite'> my GitHub page</a>.
                        </p>
                    </div>
                    <div>
                        <h4>Steps:</h4>
                        <ul>
                            <li><a href='#node'>Create a Node project</a></li>
                            <li><a href='#react'>React</a></li>
                            <li><a href='#gcp'>Deploy to Google Cloud Platform</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 id='node'>Create a Node project</h4>
                        <p>
                            Node.js
                        </p>
                    </div>
                    <div>
                        <h4 id='react'>React</h4>
                        <p>
                            React
                        </p>
                    </div>
                    <div>
                        <h4 id='gcp'>Deploy to Google Cloud Platform</h4>
                        <p>
                            GCP
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};

export default WebsitePost;

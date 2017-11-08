import React, { Component } from 'react';
import PostHeader from '../components/PostHeader';

class PingHeroku extends Component {
    render() {
        return (
            <div className='post post-color'>
                <PostHeader title="Pinging Heroku"
                            link={this.props.link}
                            created="8 August 2017"
                />
                <div className="div-nest">
                    <p>
                        I realized after creating this site that sometimes the initial page load took a very long time.
                        At first I thought that was because loading the JavaScript bundle was taking a long time.
                        That explained why subsequent page loads would be fast.
                        However, I then realized the site loaded quickly the second time even on a second browser.
                        This meant it must have something to do with how the site was hosted.
                    </p>
                    <p>
                        A quick search got me to
                        <a className="show-link" target="_blank"
                            href="https://stackoverflow.com/questions/2606190/why-are-my-basic-heroku-apps-taking-two-seconds-to-load"> this </a>
                        StackOverflow post which explained the problem.
                        To trick Heroku into keeping my app in memory, I dusted off my old Raspberry Pi and wrote a script to ping my site URL.
                        This has brought the inital load time back to sub-second.
                        Hopefully this will help anyone who is experiencing the same issue with Heroku.
                    </p>
                </div>
            </div>
        )
    }
};

export default PingHeroku;

import React, { Component } from 'react';
import PostHeader from '../components/PostHeader';

class Design extends Component {
    render() {
        return (
            <div className='post post-color'>
                <PostHeader title="Graphic Design"
                            link={this.props.link}
                            created="23 April 2017"
                />
                <div className="grid-wrapper div-nest">
                    <div className="grid-6">
                        <p>
                            I've started practicing graphic design by making personal logos for my friends.
                            Here are a few designs I created using Acorn.
                        </p>
                    </div>
                    <div className="grid-wrapper grid-6">
                        <img className="grid-4" src="/img/logo/tanner.png" alt="tanner"/>
                        <img className="grid-4" src="/img/logo/rikeen.png" alt="rikeen"/>
                        <img className="grid-4" src="/img/logo/TPG.png" alt="Texas Plays Guitar"/>
                    </div>
                </div>
            </div>
        )
    }
};

export default Design;

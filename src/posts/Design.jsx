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
                <div className="div-nest">
                    <div className="ib ib-6">
                        <p>
                            I've started practicing graphic design by making personal logos for my friends.
                            Here are a few designs I created using Acorn.
                        </p>
                    </div>
                    <div className="ib ib-6">
                        <img className="ib ib-4" src="/img/logo/tanner.png" alt="tanner"/>
                        <img className="ib ib-4" src="/img/logo/rikeen.png" alt="rikeen"/>
                        <img className="ib ib-4" src="/img/logo/TPG.png" alt="Texas Plays Guitar"/>
                    </div>
                </div>
            </div>
        )
    }
};

export default Design;

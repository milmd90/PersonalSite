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
                <div className="post-body">
                    <div className="ib ib-6">
                        <p>
                            I've started learning graphic design by making a personal logos for my friends.
                        </p>
                    </div>
                    <div className="ib ib-6">
                        <img className="ib ib-4" src="/img/logo/logo_black.png" alt="matt"/>
                        <img className="ib ib-4" src="/img/logo/tanner.png" alt="tanner"/>
                        <img className="ib ib-4" src="/img/logo/rikeen.png" alt="rikeen"/>
                    </div>
                </div>
            </div>
        )
    }
};

export default Design;

import React, { Component } from 'react';
import PostHeader from '../components/PostHeader';

class UncleUbers extends Component {
    render() {
        return (
            <div className={this.props.theme +' post'}>
                <PostHeader title="Uncle Ubers"
                            link={this.props.link}
                            created="10 April 2017"
                />
                <div className="post-body">
                    <img src="/img/uncleuber/cuban.jpg" alt="cuban"/>
                    <img src="/img/uncleuber/crispychicken.jpg" alt="cuban"/>
                </div>
            </div>
        )
    }
};

export default UncleUbers;

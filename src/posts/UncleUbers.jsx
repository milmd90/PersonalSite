import React, { Component } from 'react';
import PostHeader from '../components/PostHeader';

class UncleUbers extends Component {
    render() {
        return (
            <div className={this.props.theme +' post'}>
                <PostHeader title="Uncle Uber's"
                            link={this.props.link}
                            created="24 April 2017"
                />
                <div className="post-body">
                    <div className="ib ib-4">
                        <p>
                            Uncle Uber's in Deep Ellum has great sandwhiches. I ate both of these.
                        </p>
                    </div>
                    <div className="ib ib-4">
                        <img src="/img/uncleuber/cuban.jpg" alt="cuban"/>
                    </div>
                    <div className="ib ib-4">
                        <img src="/img/uncleuber/crispychicken.jpg" alt="crispychicken"/>
                    </div>
                </div>
            </div>
        )
    }
};

export default UncleUbers;

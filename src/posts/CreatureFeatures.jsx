import React, { Component } from 'react';
import PostHeader from '../components/PostHeader';

class CreatureFeatures extends Component {
    render() {
        return (
            <div className={this.props.theme +' post'}>
                <PostHeader title="Creature Features"
                            link={this.props.link}
                            created="22 April 2017"
                />
                <div className="post-body">
                    <div className="ib ib-3">
                        <img src="/img/music/creaturefeatures.jpg" alt="creature features"/>
                    </div>
                    <div className="ib ib-9">
                        <a href="https://soundcloud.com/creature-features-448133117" target="_blank">Here </a>
                        are three tracks I recorded with my friend, David Bergen, under the name Creature Features.
                    </div>
                </div>
            </div>
        )
    }
};

export default CreatureFeatures;
